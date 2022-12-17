let hasRequiredPerformanceAPIs: boolean | undefined;

export function isPerformanceAPIAvailable(): boolean {
  if (hasRequiredPerformanceAPIs === undefined) {
    hasRequiredPerformanceAPIs =
      typeof window !== "undefined" &&
      "performance" in window &&
      [
        "measure",
        "clearMeasures",
        "clearMarks",
        "getEntriesByName",
        "getEntriesByType",
        "now"
      ].every(api => !!(performance as any)[api]);
  }

  return hasRequiredPerformanceAPIs;
}

export function isPerformanceObserverAvailable(): boolean {
  return !!(typeof window !== "undefined" && "PerformanceObserver" in window);
}

export function isPerformanceObserverLongTaskAvailable(): boolean {
  return (
    isPerformanceObserverAvailable() &&
    PerformanceObserver.supportedEntryTypes &&
    PerformanceObserver.supportedEntryTypes.includes("longtask")
  );
}

/**
 * Measures time it takes to render a frame including -> style, paint, layout and composition.
 *
 * How does it work:
 * 1. We mark the beginning of a render with the `startMark`
 * 2. We schedule `requestAnimationFrame` callback for the next frame
 * 3. Framework (e.g. prosemirror) does its magic and mounts dom nodes "synchronously"
 * 4. When the main thread is unblocked our callback gets executed and onMeasureComplete is being called
 *
 * Why does it work:
 * | javascript (framework)           | style | layout | paint | composite | javascript  | ...
 *  | startMark + scheduling rAF |                                                       | rAF callback, endMark
 */
export function measureRender(
  measureName: string,
  onMeasureComplete: (duration: number, startTime: number) => void
) {
  if (!isPerformanceAPIAvailable()) {
    return;
  }

  const startMark = `[START]: ${measureName}`;
  const endMark = `[END]: ${measureName}`;
  const startTime = performance.now();

  performance.mark(startMark);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      performance.mark(endMark);
      const duration = performance.now() - startTime;

      try {
        performance.measure(measureName, startMark, endMark);
        const entry = performance.getEntriesByName(measureName).pop();

        if (!entry) {
          onMeasureComplete(duration, startTime);
        } else {
          onMeasureComplete(entry.duration, entry.startTime);
        }
      } catch (e) {
        onMeasureComplete(duration, startTime);
      }

      performance.clearMeasures(measureName);
      performance.clearMarks(startMark);
      performance.clearMarks(endMark);
    });
  });
}

const measureMap = new Map<string, number>();

export function startMeasure(measureName: string) {
  if (!isPerformanceAPIAvailable()) {
    return;
  }
  performance.mark(`${measureName}::start`);
  measureMap.set(measureName, performance.now());
}

export function stopMeasure(
  measureName: string,
  onMeasureComplete?: (duration: number, startTime: number) => void
) {
  if (!isPerformanceAPIAvailable()) {
    return;
  }
  performance.mark(`${measureName}::end`);
  const start = onMeasureComplete ? measureMap.get(measureName) : undefined;
  try {
    performance.measure(
      measureName,
      `${measureName}::start`,
      `${measureName}::end`
    );
  } catch (error) {
  } finally {
    if (onMeasureComplete) {
      const entry = performance.getEntriesByName(measureName).pop();
      if (entry) {
        onMeasureComplete(entry.duration, entry.startTime);
      } else if (start) {
        onMeasureComplete(performance.now() - start, start);
      }
    }
    clearMeasure(measureName);
  }
}

export function clearMeasure(measureName: string) {
  if (!isPerformanceAPIAvailable()) {
    return;
  }

  measureMap.delete(measureName);
  performance.clearMarks(`${measureName}::start`);
  performance.clearMarks(`${measureName}::end`);
  performance.clearMeasures(measureName);
}
