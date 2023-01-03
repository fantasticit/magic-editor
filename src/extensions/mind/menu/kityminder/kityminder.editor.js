/*!
 * ====================================================
 * kityminder-editor - v1.0.67 - 2020-03-04
 * https://github.com/fex-team/kityminder-editor
 * GitHub: https://github.com/fex-team/kityminder-editor
 * Copyright (c) 2020 ; Licensed
 * ====================================================
 */
/* eslint-disable */
(function() {
  var _p = {
    r: function(index) {
      if (_p[index].inited) {
        return _p[index].value;
      }
      if (typeof _p[index].value === "function") {
        var module = {
            exports: {}
          },
          returnValue = _p[index].value(null, module.exports, module);
        _p[index].inited = true;
        _p[index].value = returnValue;
        if (returnValue !== undefined) {
          return returnValue;
        } else {
          for (var key in module.exports) {
            if (module.exports.hasOwnProperty(key)) {
              _p[index].inited = true;
              _p[index].value = module.exports;
              return module.exports;
            }
          }
        }
      } else {
        _p[index].inited = true;
        return _p[index].value;
      }
    }
  };

  //src/editor.js
  _p[0] = {
    value: function(require, exports, module) {
      /**
       * 运行时
       */
      var runtimes = [];
      function assemble(runtime) {
        runtimes.push(runtime);
      }
      function KMEditor(selector) {
        this.selector = selector;
        for (var i = 0; i < runtimes.length; i++) {
          if (typeof runtimes[i] == "function") {
            runtimes[i].call(this, this);
          }
        }
      }
      KMEditor.assemble = assemble;
      assemble(_p.r(7));
      assemble(_p.r(9));
      assemble(_p.r(14));
      assemble(_p.r(18));
      assemble(_p.r(11));
      assemble(_p.r(12));
      assemble(_p.r(5));
      assemble(_p.r(6));
      assemble(_p.r(8));
      assemble(_p.r(15));
      assemble(_p.r(10));
      assemble(_p.r(13));
      assemble(_p.r(16));
      assemble(_p.r(17));
      return (module.exports = KMEditor);
    }
  };

  //src/expose-editor.js
  /**
   * @fileOverview
   *
   * 打包暴露
   *
   * @author: techird
   * @copyright: Baidu FEX, 2014
   */
  _p[1] = {
    value: function(require, exports, module) {
      return (module.exports = kityminder.Editor = _p.r(0));
    }
  };

  //src/hotbox.js
  _p[2] = {
    value: function(require, exports, module) {
      return (module.exports = window.HotBox);
    }
  };

  //src/lang.js
  _p[3] = {
    value: function(require, exports, module) {}
  };

  //src/minder.js
  _p[4] = {
    value: function(require, exports, module) {
      return (module.exports = window.kityminder.Minder);
    }
  };

  //src/runtime/clipboard-mimetype.js
  /**
   * @Desc: 新增一个用于处理系统ctrl+c ctrl+v等方式导入导出节点的MIMETYPE处理，如系统不支持clipboardEvent或者是FF则不初始化改class
   * @Editor: Naixor
   * @Date: 2015.9.21
   */
  _p[5] = {
    value: function(require, exports, module) {
      function MimeType() {
        /**
         * 私有变量
         */
        var SPLITOR = "\ufeff";
        var MIMETYPE = {
          "application/km": "￿"
        };
        var SIGN = {
          "\ufeff": "SPLITOR",
          "￿": "application/km"
        };
        /**
         * 用于将一段纯文本封装成符合其数据格式的文本
         * @method process 			private
         * @param  {MIMETYPE} mimetype 数据格式
         * @param  {String} text     原始文本
         * @return {String}          符合该数据格式下的文本
         * @example
         * 			var str = "123";
         * 			str = process('application/km', str); // 返回的内容再经过MimeType判断会读取出其数据格式为application/km
         * 			process('text/plain', str); // 若接受到一个非纯文本信息，则会将其转换为新的数据格式
         */
        function process(mimetype, text) {
          if (!this.isPureText(text)) {
            var _mimetype = this.whichMimeType(text);
            if (!_mimetype) {
              throw new Error("unknow mimetype!");
            }
            text = this.getPureText(text);
          }
          if (mimetype === false) {
            return text;
          }
          return mimetype + SPLITOR + text;
        }
        /**
         * 注册数据类型的标识
         * @method registMimeTypeProtocol  	public
         * @param  {String} type 数据类型
         * @param  {String} sign 标识
         */
        this.registMimeTypeProtocol = function(type, sign) {
          if (sign && SIGN[sign]) {
            throw new Error("sing has registed!");
          }
          if (type && !!MIMETYPE[type]) {
            throw new Error("mimetype has registed!");
          }
          SIGN[sign] = type;
          MIMETYPE[type] = sign;
        };
        /**
         * 获取已注册数据类型的协议
         * @method getMimeTypeProtocol  	public
         * @param  {String} type 数据类型
         * @param  {String} text|undefiend  文本内容或不传入
         * @return {String|Function}
         * @example
         * 			text若不传入则直接返回对应数据格式的处理(process)方法
         * 			若传入文本则直接调用对应的process方法进行处理，此时返回处理后的内容
         * 			var m = new MimeType();
         * 			var kmprocess = m.getMimeTypeProtocol('application/km');
         * 			kmprocess("123") === m.getMimeTypeProtocol('application/km', "123");
         *
         */
        this.getMimeTypeProtocol = function(type, text) {
          var mimetype = MIMETYPE[type] || false;
          if (text === undefined) {
            return process.bind(this, mimetype);
          }
          return process(mimetype, text);
        };
        this.getSpitor = function() {
          return SPLITOR;
        };
        this.getMimeType = function(sign) {
          if (sign !== undefined) {
            return SIGN[sign] || null;
          }
          return MIMETYPE;
        };
      }
      MimeType.prototype.isPureText = function(text) {
        return !~text.indexOf(this.getSpitor());
      };
      MimeType.prototype.getPureText = function(text) {
        if (this.isPureText(text)) {
          return text;
        }
        return text.split(this.getSpitor())[1];
      };
      MimeType.prototype.whichMimeType = function(text) {
        if (this.isPureText(text)) {
          return null;
        }
        return this.getMimeType(text.split(this.getSpitor())[0]);
      };
      function MimeTypeRuntime() {
        if (this.minder.supportClipboardEvent && !kity.Browser.gecko) {
          this.MimeType = new MimeType();
        }
      }
      return (module.exports = MimeTypeRuntime);
    }
  };

  //src/runtime/clipboard.js
  /**
   * @Desc: 处理editor的clipboard事件，只在支持ClipboardEvent并且不是FF的情况下工作
   * @Editor: Naixor
   * @Date: 2015.9.21
   */
  _p[6] = {
    value: function(require, exports, module) {
      function ClipboardRuntime() {
        var minder = this.minder;
        var Data = window.kityminder.data;
        if (!minder.supportClipboardEvent || kity.Browser.gecko) {
          return;
        }
        var fsm = this.fsm;
        var receiver = this.receiver;
        var MimeType = this.MimeType;
        var kmencode = MimeType.getMimeTypeProtocol("application/km"),
          decode = Data.getRegisterProtocol("json").decode;
        var _selectedNodes = [];
        /*
         * 增加对多节点赋值粘贴的处理
         */
        function encode(nodes) {
          var _nodes = [];
          for (var i = 0, l = nodes.length; i < l; i++) {
            _nodes.push(minder.exportNode(nodes[i]));
          }
          return kmencode(Data.getRegisterProtocol("json").encode(_nodes));
        }
        var beforeCopy = function(e) {
          if (document.activeElement == receiver.element) {
            var clipBoardEvent = e;
            var state = fsm.state();
            switch (state) {
              case "input": {
                break;
              }

              case "normal": {
                var nodes = [].concat(minder.getSelectedNodes());
                if (nodes.length) {
                  // 这里由于被粘贴复制的节点的id信息也都一样，故做此算法
                  // 这里有个疑问，使用node.getParent()或者node.parent会离奇导致出现非选中节点被渲染成选中节点，因此使用isAncestorOf，而没有使用自行回溯的方式
                  if (nodes.length > 1) {
                    var targetLevel;
                    nodes.sort(function(a, b) {
                      return a.getLevel() - b.getLevel();
                    });
                    targetLevel = nodes[0].getLevel();
                    if (targetLevel !== nodes[nodes.length - 1].getLevel()) {
                      var plevel,
                        pnode,
                        idx = 0,
                        l = nodes.length,
                        pidx = l - 1;
                      pnode = nodes[pidx];
                      while (pnode.getLevel() !== targetLevel) {
                        idx = 0;
                        while (
                          idx < l &&
                          nodes[idx].getLevel() === targetLevel
                        ) {
                          if (nodes[idx].isAncestorOf(pnode)) {
                            nodes.splice(pidx, 1);
                            break;
                          }
                          idx++;
                        }
                        pidx--;
                        pnode = nodes[pidx];
                      }
                    }
                  }
                  var str = encode(nodes);
                  clipBoardEvent.clipboardData.setData("text/plain", str);
                }
                e.preventDefault();
                break;
              }
            }
          }
        };
        var beforeCut = function(e) {
          if (document.activeElement == receiver.element) {
            if (minder.getStatus() !== "normal") {
              e.preventDefault();
              return;
            }
            var clipBoardEvent = e;
            var state = fsm.state();
            switch (state) {
              case "input": {
                break;
              }

              case "normal": {
                var nodes = minder.getSelectedNodes();
                if (nodes.length) {
                  clipBoardEvent.clipboardData.setData(
                    "text/plain",
                    encode(nodes)
                  );
                  minder.execCommand("removenode");
                }
                e.preventDefault();
                break;
              }
            }
          }
        };
        var beforePaste = function(e) {
          if (document.activeElement == receiver.element) {
            if (minder.getStatus() !== "normal") {
              e.preventDefault();
              return;
            }
            var clipBoardEvent = e;
            var state = fsm.state();
            var textData = clipBoardEvent.clipboardData.getData("text/plain");
            switch (state) {
              case "input": {
                // input状态下如果格式为application/km则不进行paste操作
                if (!MimeType.isPureText(textData)) {
                  e.preventDefault();
                  return;
                }
                break;
              }

              case "normal": {
                /*
                 * 针对normal状态下通过对选中节点粘贴导入子节点文本进行单独处理
                 */
                var sNodes = minder.getSelectedNodes();
                if (MimeType.whichMimeType(textData) === "application/km") {
                  var nodes = decode(MimeType.getPureText(textData));
                  var _node;
                  sNodes.forEach(function(node) {
                    // 由于粘贴逻辑中为了排除子节点重新排序导致逆序，因此复制的时候倒过来
                    for (var i = nodes.length - 1; i >= 0; i--) {
                      _node = minder.createNode(null, node);
                      minder.importNode(_node, nodes[i]);
                      _selectedNodes.push(_node);
                      node.appendChild(_node);
                    }
                  });
                  minder.select(_selectedNodes, true);
                  _selectedNodes = [];
                  minder.refresh();
                } else if (
                  clipBoardEvent.clipboardData &&
                  clipBoardEvent.clipboardData.items[0].type.indexOf("image") >
                    -1
                ) {
                  var imageFile = clipBoardEvent.clipboardData.items[0].getAsFile();
                  var serverService = angular
                    .element(document.body)
                    .injector()
                    .get("server");
                  return serverService
                    .uploadImage(imageFile)
                    .then(function(json) {
                      var resp = json.data;
                      if (resp.errno === 0) {
                        minder.execCommand("image", resp.data.url);
                      }
                    });
                } else {
                  sNodes.forEach(function(node) {
                    minder.Text2Children(node, textData);
                  });
                }
                e.preventDefault();
                break;
              }
            }
          }
        };
        /**
         * 由editor的receiver统一处理全部事件，包括clipboard事件
         * @Editor: Naixor
         * @Date: 2015.9.24
         */
        document.addEventListener("copy", beforeCopy);
        document.addEventListener("cut", beforeCut);
        document.addEventListener("paste", beforePaste);
      }
      return (module.exports = ClipboardRuntime);
    }
  };

  //src/runtime/container.js
  /**
   * @fileOverview
   *
   * 初始化编辑器的容器
   *
   * @author: techird
   * @copyright: Baidu FEX, 2014
   */
  _p[7] = {
    value: function(require, exports, module) {
      /**
       * 最先执行的 Runtime，初始化编辑器容器
       */
      function ContainerRuntime() {
        var container;
        if (typeof this.selector == "string") {
          container = document.querySelector(this.selector);
        } else {
          container = this.selector;
        }
        if (!container) throw new Error("Invalid selector: " + this.selector);
        // 这个类名用于给编辑器添加样式
        container.classList.add("km-editor");
        // 暴露容器给其他运行时使用
        this.container = container;
      }
      return (module.exports = ContainerRuntime);
    }
  };

  //src/runtime/drag.js
  /**
   * @fileOverview
   *
   * 用于拖拽节点时屏蔽键盘事件
   *
   * @author: techird
   * @copyright: Baidu FEX, 2014
   */
  _p[8] = {
    value: function(require, exports, module) {
      var Hotbox = _p.r(2);
      var Debug = _p.r(19);
      var debug = new Debug("drag");
      function DragRuntime() {
        var fsm = this.fsm;
        var minder = this.minder;
        var hotbox = this.hotbox;
        var receiver = this.receiver;
        var receiverElement = receiver.element;
        // setup everything to go
        setupFsm();
        // listen the fsm changes, make action.
        function setupFsm() {
          // when jumped to drag mode, enter
          fsm.when("* -> drag", function() {});
          fsm.when("drag -> *", function(exit, enter, reason) {
            if (reason == "drag-finish") {
            }
          });
        }
        var downX, downY;
        var MOUSE_HAS_DOWN = 0;
        var MOUSE_HAS_UP = 1;
        var BOUND_CHECK = 20;
        var flag = MOUSE_HAS_UP;
        var maxX, maxY, osx, osy, containerY;
        var freeHorizen = false,
          freeVirtical = false;
        var frame;
        function move(direction, speed) {
          if (!direction) {
            freeHorizen = freeVirtical = false;
            frame && kity.releaseFrame(frame);
            frame = null;
            return;
          }
          if (!frame) {
            frame = kity.requestFrame(
              (function(direction, speed, minder) {
                return function(frame) {
                  switch (direction) {
                    case "left":
                      minder._viewDragger.move(
                        {
                          x: -speed,
                          y: 0
                        },
                        0
                      );
                      break;

                    case "top":
                      minder._viewDragger.move(
                        {
                          x: 0,
                          y: -speed
                        },
                        0
                      );
                      break;

                    case "right":
                      minder._viewDragger.move(
                        {
                          x: speed,
                          y: 0
                        },
                        0
                      );
                      break;

                    case "bottom":
                      minder._viewDragger.move(
                        {
                          x: 0,
                          y: speed
                        },
                        0
                      );
                      break;

                    default:
                      return;
                  }
                  frame.next();
                };
              })(direction, speed, minder)
            );
          }
        }
        minder.on("mousedown", function(e) {
          flag = MOUSE_HAS_DOWN;
          var rect = minder.getPaper().container.getBoundingClientRect();
          downX = e.originEvent.clientX;
          downY = e.originEvent.clientY;
          containerY = rect.top;
          maxX = rect.width;
          maxY = rect.height;
        });
        minder.on("mousemove", function(e) {
          if (
            fsm.state() === "drag" &&
            flag == MOUSE_HAS_DOWN &&
            minder.getSelectedNode() &&
            (Math.abs(downX - e.originEvent.clientX) > BOUND_CHECK ||
              Math.abs(downY - e.originEvent.clientY) > BOUND_CHECK)
          ) {
            osx = e.originEvent.clientX;
            osy = e.originEvent.clientY - containerY;
            if (osx < BOUND_CHECK) {
              move("right", BOUND_CHECK - osx);
            } else if (osx > maxX - BOUND_CHECK) {
              move("left", BOUND_CHECK + osx - maxX);
            } else {
              freeHorizen = true;
            }
            if (osy < BOUND_CHECK) {
              move("bottom", osy);
            } else if (osy > maxY - BOUND_CHECK) {
              move("top", BOUND_CHECK + osy - maxY);
            } else {
              freeVirtical = true;
            }
            if (freeHorizen && freeVirtical) {
              move(false);
            }
          }
          if (
            fsm.state() !== "drag" &&
            flag === MOUSE_HAS_DOWN &&
            minder.getSelectedNode() &&
            (Math.abs(downX - e.originEvent.clientX) > BOUND_CHECK ||
              Math.abs(downY - e.originEvent.clientY) > BOUND_CHECK)
          ) {
            if (fsm.state() === "hotbox") {
              hotbox.active(Hotbox.STATE_IDLE);
            }
            return fsm.jump("drag", "user-drag");
          }
        });
        window.addEventListener(
          "mouseup",
          function() {
            flag = MOUSE_HAS_UP;
            if (fsm.state() === "drag") {
              move(false);
              return fsm.jump("normal", "drag-finish");
            }
          },
          false
        );
      }
      return (module.exports = DragRuntime);
    }
  };

  //src/runtime/fsm.js
  /**
   * @fileOverview
   *
   * 编辑器状态机
   *
   * @author: techird
   * @copyright: Baidu FEX, 2014
   */
  _p[9] = {
    value: function(require, exports, module) {
      var Debug = _p.r(19);
      var debug = new Debug("fsm");
      function handlerConditionMatch(condition, when, exit, enter) {
        if (condition.when != when) return false;
        if (condition.enter != "*" && condition.enter != enter) return false;
        if (condition.exit != "*" && condition.exit != exit) return;
        return true;
      }
      function FSM(defaultState) {
        var currentState = defaultState;
        var BEFORE_ARROW = " - ";
        var AFTER_ARROW = " -> ";
        var handlers = [];
        /**
         * 状态跳转
         *
         * 会通知所有的状态跳转监视器
         *
         * @param  {string} newState  新状态名称
         * @param  {any} reason 跳转的原因，可以作为参数传递给跳转监视器
         */
        this.jump = function(newState, reason) {
          if (!reason) throw new Error("Please tell fsm the reason to jump");
          var oldState = currentState;
          var notify = [oldState, newState].concat([].slice.call(arguments, 1));
          var i, handler;
          // 跳转前
          for (i = 0; i < handlers.length; i++) {
            handler = handlers[i];
            if (
              handlerConditionMatch(
                handler.condition,
                "before",
                oldState,
                newState
              )
            ) {
              if (handler.apply(null, notify)) return;
            }
          }
          currentState = newState;
          debug.log("[{0}] {1} -> {2}", reason, oldState, newState);
          // 跳转后
          for (i = 0; i < handlers.length; i++) {
            handler = handlers[i];
            if (
              handlerConditionMatch(
                handler.condition,
                "after",
                oldState,
                newState
              )
            ) {
              handler.apply(null, notify);
            }
          }
          return currentState;
        };
        /**
         * 返回当前状态
         * @return {string}
         */
        this.state = function() {
          return currentState;
        };
        /**
         * 添加状态跳转监视器
         *
         * @param {string} condition
         *     监视的时机
         *         "* => *" （默认）
         *
         * @param  {Function} handler
         *     监视函数，当状态跳转的时候，会接收三个参数
         *         * from - 跳转前的状态
         *         * to - 跳转后的状态
         *         * reason - 跳转的原因
         */
        this.when = function(condition, handler) {
          if (arguments.length == 1) {
            handler = condition;
            condition = "* -> *";
          }
          var when, resolved, exit, enter;
          resolved = condition.split(BEFORE_ARROW);
          if (resolved.length == 2) {
            when = "before";
          } else {
            resolved = condition.split(AFTER_ARROW);
            if (resolved.length == 2) {
              when = "after";
            }
          }
          if (!when) throw new Error("Illegal fsm condition: " + condition);
          exit = resolved[0];
          enter = resolved[1];
          handler.condition = {
            when: when,
            exit: exit,
            enter: enter
          };
          handlers.push(handler);
        };
      }
      function FSMRumtime() {
        this.fsm = new FSM("normal");
      }
      return (module.exports = FSMRumtime);
    }
  };

  //src/runtime/history.js
  /**
   * @fileOverview
   *
   * 历史管理
   *
   * @author: techird
   * @copyright: Baidu FEX, 2014
   */
  _p[10] = {
    value: function(require, exports, module) {
      var jsonDiff = _p.r(22);
      function HistoryRuntime() {
        var minder = this.minder;
        var hotbox = this.hotbox;
        var MAX_HISTORY = 100;
        var lastSnap;
        var patchLock;
        var undoDiffs;
        var redoDiffs;
        function reset() {
          undoDiffs = [];
          redoDiffs = [];
          lastSnap = minder.exportJson();
        }
        function makeUndoDiff() {
          var headSnap = minder.exportJson();
          var diff = jsonDiff(headSnap, lastSnap);
          if (diff.length) {
            undoDiffs.push(diff);
            while (undoDiffs.length > MAX_HISTORY) {
              undoDiffs.shift();
            }
            lastSnap = headSnap;
            return true;
          }
        }
        function makeRedoDiff() {
          var revertSnap = minder.exportJson();
          redoDiffs.push(jsonDiff(revertSnap, lastSnap));
          lastSnap = revertSnap;
        }
        function undo() {
          patchLock = true;
          var undoDiff = undoDiffs.pop();
          if (undoDiff) {
            minder.applyPatches(undoDiff);
            makeRedoDiff();
          }
          patchLock = false;
        }
        function redo() {
          patchLock = true;
          var redoDiff = redoDiffs.pop();
          if (redoDiff) {
            minder.applyPatches(redoDiff);
            makeUndoDiff();
          }
          patchLock = false;
        }
        function changed() {
          if (patchLock) return;
          if (makeUndoDiff()) redoDiffs = [];
        }
        function hasUndo() {
          return !!undoDiffs.length;
        }
        function hasRedo() {
          return !!redoDiffs.length;
        }
        function updateSelection(e) {
          if (!patchLock) return;
          var patch = e.patch;
          switch (patch.express) {
            case "node.add":
              minder.select(patch.node.getChild(patch.index), true);
              break;

            case "node.remove":
            case "data.replace":
            case "data.remove":
            case "data.add":
              minder.select(patch.node, true);
              break;
          }
        }
        this.history = {
          reset: reset,
          undo: undo,
          redo: redo,
          hasUndo: hasUndo,
          hasRedo: hasRedo
        };
        reset();
        minder.on("contentchange", changed);
        minder.on("import", reset);
        minder.on("patch", updateSelection);
        var main = hotbox.state("main");
        main.button({
          position: "top",
          label: "撤销",
          key: "Ctrl + Z",
          enable: hasUndo,
          action: undo,
          next: "idle"
        });
        main.button({
          position: "top",
          label: "重做",
          key: "Ctrl + Y",
          enable: hasRedo,
          action: redo,
          next: "idle"
        });
      }
      window.diff = jsonDiff;
      return (module.exports = HistoryRuntime);
    }
  };

  //src/runtime/hotbox.js
  /**
   * @fileOverview
   *
   * 热盒 Runtime
   *
   * @author: techird
   * @copyright: Baidu FEX, 2014
   */
  _p[11] = {
    value: function(require, exports, module) {
      var Hotbox = _p.r(2);
      function HotboxRuntime() {
        var fsm = this.fsm;
        var minder = this.minder;
        var receiver = this.receiver;
        var container = this.container;
        var hotbox = new Hotbox(container);
        hotbox.setParentFSM(fsm);
        fsm.when("normal -> hotbox", function(exit, enter, reason) {
          var node = minder.getSelectedNode();
          var position;
          if (node) {
            var box = node.getRenderBox();
            position = {
              x: box.cx,
              y: box.cy
            };
          }
          hotbox.active("main", position);
        });
        fsm.when("normal -> normal", function(exit, enter, reason, e) {
          if (reason == "shortcut-handle") {
            var handleResult = hotbox.dispatch(e);
            if (handleResult) {
              e.preventDefault();
            } else {
              minder.dispatchKeyEvent(e);
            }
          }
        });
        fsm.when("modal -> normal", function(exit, enter, reason, e) {
          if (reason == "import-text-finish") {
            receiver.element.focus();
          }
        });
        this.hotbox = hotbox;
      }
      return (module.exports = HotboxRuntime);
    }
  };

  //src/runtime/input.js
  /**
   * @fileOverview
   *
   * 文本输入支持
   *
   * @author: techird
   * @copyright: Baidu FEX, 2014
   */
  _p[12] = {
    value: function(require, exports, module) {
      _p.r(21);
      var Debug = _p.r(19);
      var debug = new Debug("input");
      function InputRuntime() {
        var fsm = this.fsm;
        var minder = this.minder;
        var hotbox = this.hotbox;
        var receiver = this.receiver;
        var receiverElement = receiver.element;
        var isGecko = window.kity.Browser.gecko;
        // setup everything to go
        setupReciverElement();
        setupFsm();
        setupHotbox();
        // expose editText()
        this.editText = editText;
        // listen the fsm changes, make action.
        function setupFsm() {
          // when jumped to input mode, enter
          fsm.when("* -> input", enterInputMode);
          // when exited, commit or exit depends on the exit reason
          fsm.when("input -> *", function(exit, enter, reason) {
            switch (reason) {
              case "input-cancel":
                return exitInputMode();

              case "input-commit":
              default:
                return commitInputResult();
            }
          });
          // lost focus to commit
          receiver.onblur(function(e) {
            if (fsm.state() == "input") {
              fsm.jump("normal", "input-commit");
            }
          });
          minder.on("beforemousedown", function() {
            if (fsm.state() == "input") {
              fsm.jump("normal", "input-commit");
            }
          });
          minder.on("dblclick", function() {
            if (minder.getSelectedNode() && minder._status !== "readonly") {
              editText();
            }
          });
        }
        // let the receiver follow the current selected node position
        function setupReciverElement() {
          if (debug.flaged) {
            receiverElement.classList.add("debug");
          }
          receiverElement.onmousedown = function(e) {
            e.stopPropagation();
          };
          minder.on(
            "layoutallfinish viewchange viewchanged selectionchange",
            function(e) {
              // viewchange event is too frequenced, lazy it
              if (e.type == "viewchange" && fsm.state() != "input") return;
              updatePosition();
            }
          );
          updatePosition();
        }
        // edit entrance in hotbox
        function setupHotbox() {
          hotbox.state("main").button({
            position: "center",
            label: "编辑",
            key: "F2",
            enable: function() {
              return minder.queryCommandState("text") != -1;
            },
            action: editText
          });
        }
        /**
         * 增加对字体的鉴别，以保证用户在编辑状态ctrl/cmd + b/i所触发的加粗斜体与显示一致
         * @editor Naixor
         * @Date 2015-12-2
         */
        // edit for the selected node
        function editText() {
          var node = minder.getSelectedNode();
          if (!node) {
            return;
          }
          var textContainer = receiverElement;
          receiverElement.innerText = "";
          if (node.getData("font-weight") === "bold") {
            var b = document.createElement("b");
            textContainer.appendChild(b);
            textContainer = b;
          }
          if (node.getData("font-style") === "italic") {
            var i = document.createElement("i");
            textContainer.appendChild(i);
            textContainer = i;
          }
          textContainer.innerText = minder.queryCommandValue("text");
          if (isGecko) {
            receiver.fixFFCaretDisappeared();
          }
          fsm.jump("input", "input-request");
          receiver.selectAll();
        }
        /**
         * 增加对字体的鉴别，以保证用户在编辑状态ctrl/cmd + b/i所触发的加粗斜体与显示一致
         * @editor Naixor
         * @Date 2015-12-2
         */
        function enterInputMode() {
          var node = minder.getSelectedNode();
          if (node) {
            var fontSize =
              node.getData("font-size") || node.getStyle("font-size");
            receiverElement.style.fontSize = fontSize + "px";
            receiverElement.style.minWidth = 0;
            receiverElement.style.minWidth = receiverElement.clientWidth + "px";
            receiverElement.style.fontWeight =
              node.getData("font-weight") || "";
            receiverElement.style.fontStyle = node.getData("font-style") || "";
            receiverElement.classList.add("input");
            receiverElement.focus();
          }
        }
        /**
         * 按照文本提交操作处理
         * @Desc: 从其他节点复制文字到另一个节点时部分浏览器(chrome)会自动包裹一个span标签，这样试用一下逻辑出来的就不是text节点二是span节点因此导致undefined的情况发生
         * @Warning: 下方代码使用[].slice.call来将HTMLDomCollection处理成为Array，ie8及以下会有问题
         * @Editor: Naixor
         * @Date: 2015.9.16
         */
        function commitInputText(textNodes) {
          var text = "";
          var TAB_CHAR = "\t",
            ENTER_CHAR = "\n",
            STR_CHECK = /\S/,
            SPACE_CHAR = " ", // 针对FF,SG,BD,LB,IE等浏览器下SPACE的charCode存在为32和160的情况做处理
            SPACE_CHAR_REGEXP = new RegExp(
              "( |" + String.fromCharCode(160) + ")"
            ),
            BR = document.createElement("br");
          var isBold = false,
            isItalic = false;
          for (
            var str,
              _divChildNodes,
              space_l,
              space_num,
              tab_num,
              i = 0,
              l = textNodes.length;
            i < l;
            i++
          ) {
            str = textNodes[i];
            switch (Object.prototype.toString.call(str)) {
              // 正常情况处理
              case "[object HTMLBRElement]": {
                text += ENTER_CHAR;
                break;
              }

              case "[object Text]": {
                // SG下会莫名其妙的加上&nbsp;影响后续判断，干掉！
                /**
                 * FF下的wholeText会导致如下问题：
                 *     |123| -> 在一个节点中输入一段字符，此时TextNode为[#Text 123]
                 *     提交并重新编辑，在后面追加几个字符
                 *     |123abc| -> 此时123为一个TextNode为[#Text 123, #Text abc]，但是对这两个任意取值wholeText均为全部内容123abc
                 * 上述BUG仅存在在FF中，故将wholeText更改为textContent
                 */
                str = str.textContent.replace("&nbsp;", " ");
                if (!STR_CHECK.test(str)) {
                  space_l = str.length;
                  while (space_l--) {
                    if (SPACE_CHAR_REGEXP.test(str[space_l])) {
                      text += SPACE_CHAR;
                    } else if (str[space_l] === TAB_CHAR) {
                      text += TAB_CHAR;
                    }
                  }
                } else {
                  text += str;
                }
                break;
              }

              // ctrl + b/i 会给字体加上<b>/<i>标签来实现黑体和斜体
              case "[object HTMLElement]": {
                switch (str.nodeName) {
                  case "B": {
                    isBold = true;
                    break;
                  }

                  case "I": {
                    isItalic = true;
                    break;
                  }

                  default: {
                  }
                }
                [].splice.apply(
                  textNodes,
                  [i, 1].concat([].slice.call(str.childNodes))
                );
                l = textNodes.length;
                i--;
                break;
              }

              // 被增加span标签的情况会被处理成正常情况并会推交给上面处理
              case "[object HTMLSpanElement]": {
                [].splice.apply(
                  textNodes,
                  [i, 1].concat([].slice.call(str.childNodes))
                );
                l = textNodes.length;
                i--;
                break;
              }

              // 若标签为image标签，则判断是否为合法url，是将其加载进来
              case "[object HTMLImageElement]": {
                if (str.src) {
                  if (/http(|s):\/\//.test(str.src)) {
                    minder.execCommand("Image", str.src, str.alt);
                  } else {
                  }
                }
                break;
              }

              // 被增加div标签的情况会被处理成正常情况并会推交给上面处理
              case "[object HTMLDivElement]": {
                _divChildNodes = [];
                for (var di = 0, l = str.childNodes.length; di < l; di++) {
                  _divChildNodes.push(str.childNodes[di]);
                }
                _divChildNodes.push(BR);
                [].splice.apply(textNodes, [i, 1].concat(_divChildNodes));
                l = textNodes.length;
                i--;
                break;
              }

              default: {
                if (str && str.childNodes.length) {
                  _divChildNodes = [];
                  for (var di = 0, l = str.childNodes.length; di < l; di++) {
                    _divChildNodes.push(str.childNodes[di]);
                  }
                  _divChildNodes.push(BR);
                  [].splice.apply(textNodes, [i, 1].concat(_divChildNodes));
                  l = textNodes.length;
                  i--;
                } else {
                  if (str && str.textContent !== undefined) {
                    text += str.textContent;
                  } else {
                    text += "";
                  }
                }
              }
            }
          }
          text = text.replace(/^\n*|\n*$/g, "");
          text = text.replace(
            new RegExp(
              "(\n|\r|\n\r)( |" + String.fromCharCode(160) + "){4}",
              "g"
            ),
            "$1\t"
          );
          minder.getSelectedNode().setText(text);
          if (isBold) {
            minder.queryCommandState("bold") || minder.execCommand("bold");
          } else {
            minder.queryCommandState("bold") && minder.execCommand("bold");
          }
          if (isItalic) {
            minder.queryCommandState("italic") || minder.execCommand("italic");
          } else {
            minder.queryCommandState("italic") && minder.execCommand("italic");
          }
          exitInputMode();
          return text;
        }
        /**
         * 判断节点的文本信息是否是
         * @Desc: 从其他节点复制文字到另一个节点时部分浏览器(chrome)会自动包裹一个span标签，这样使用以下逻辑出来的就不是text节点二是span节点因此导致undefined的情况发生
         * @Notice: 此处逻辑应该拆分到 kityminder-core/core/data中去，单独增加一个对某个节点importJson的事件
         * @Editor: Naixor
         * @Date: 2015.9.16
         */
        function commitInputNode(node, text) {
          try {
            minder.decodeData("text", text).then(function(json) {
              function importText(node, json, minder) {
                var data = json.data;
                node.setText(data.text || "");
                var childrenTreeData = json.children || [];
                for (var i = 0; i < childrenTreeData.length; i++) {
                  var childNode = minder.createNode(null, node);
                  importText(childNode, childrenTreeData[i], minder);
                }
                return node;
              }
              importText(node, json, minder);
              minder.fire("contentchange");
              minder.getRoot().renderTree();
              minder.layout(300);
            });
          } catch (e) {
            minder.fire("contentchange");
            minder.getRoot().renderTree();
            // 无法被转换成脑图节点则不处理
            if (e.toString() !== "Error: Invalid local format") {
              throw e;
            }
          }
        }
        function commitInputResult() {
          /**
           * @Desc: 进行如下处理：
           *             根据用户的输入判断是否生成新的节点
           *        fix #83 https://github.com/fex-team/kityminder-editor/issues/83
           * @Editor: Naixor
           * @Date: 2015.9.16
           */
          var textNodes = [].slice.call(receiverElement.childNodes);
          /**
           * @Desc: 增加setTimeout的原因：ie下receiverElement.innerHTML=""会导致后
           * 		  面commitInputText中使用textContent报错，不要问我什么原因！
           * @Editor: Naixor
           * @Date: 2015.12.14
           */
          setTimeout(function() {
            // 解决过大内容导致SVG窜位问题
            receiverElement.innerHTML = "";
          }, 0);
          var node = minder.getSelectedNode();
          textNodes = commitInputText(textNodes);
          commitInputNode(node, textNodes);
          if (node.type == "root") {
            var rootText = minder.getRoot().getText();
            minder.fire("initChangeRoot", {
              text: rootText
            });
          }
        }
        function exitInputMode() {
          receiverElement.classList.remove("input");
          receiver.selectAll();
        }
        function updatePosition() {
          var planed = updatePosition;
          var focusNode = minder.getSelectedNode();
          if (!focusNode) return;
          if (!planed.timer) {
            planed.timer = setTimeout(function() {
              var box = focusNode.getRenderBox("TextRenderer");
              receiverElement.style.left = Math.round(box.x) + "px";
              receiverElement.style.top =
                (debug.flaged
                  ? Math.round(box.bottom + 30)
                  : Math.round(box.y)) + "px";
              //receiverElement.focus();
              planed.timer = 0;
            });
          }
        }
      }
      return (module.exports = InputRuntime);
    }
  };

  //src/runtime/jumping.js
  /**
   * @fileOverview
   *
   * 根据按键控制状态机的跳转
   *
   * @author: techird
   * @copyright: Baidu FEX, 2014
   */
  _p[13] = {
    value: function(require, exports, module) {
      var Hotbox = _p.r(2);
      // Nice: http://unixpapa.com/js/key.html
      function isIntendToInput(e) {
        if (e.ctrlKey || e.metaKey || e.altKey) return false;
        // a-zA-Z
        if (e.keyCode >= 65 && e.keyCode <= 90) return true;
        // 0-9 以及其上面的符号
        if (e.keyCode >= 48 && e.keyCode <= 57) return true;
        // 小键盘区域 (除回车外)
        if (e.keyCode != 108 && e.keyCode >= 96 && e.keyCode <= 111)
          return true;
        // 小键盘区域 (除回车外)
        // @yinheli from pull request
        if (e.keyCode != 108 && e.keyCode >= 96 && e.keyCode <= 111)
          return true;
        // 输入法
        if (e.keyCode == 229 || e.keyCode === 0) return true;
        return false;
      }
      /**
       * @Desc: 下方使用receiver.enable()和receiver.disable()通过
       *        修改div contenteditable属性的hack来解决开启热核后依然无法屏蔽浏览器输入的bug;
       *        特别: win下FF对于此种情况必须要先blur在focus才能解决，但是由于这样做会导致用户
       *             输入法状态丢失，因此对FF暂不做处理
       * @Editor: Naixor
       * @Date: 2015.09.14
       */
      function JumpingRuntime() {
        var fsm = this.fsm;
        var minder = this.minder;
        var receiver = this.receiver;
        var container = this.container;
        var receiverElement = receiver.element;
        var hotbox = this.hotbox;
        var compositionLock = false;
        // normal -> *
        receiver.listen("normal", function(e) {
          // 为了防止处理进入edit模式而丢失处理的首字母,此时receiver必须为enable
          receiver.enable();
          // normal -> hotbox
          if (e.is("Space")) {
            e.preventDefault();
            // safari下Space触发hotbox,然而这时Space已在receiver上留下作案痕迹,因此抹掉
            if (kity.Browser.safari) {
              receiverElement.innerHTML = "";
            }
            return fsm.jump("hotbox", "space-trigger");
          }
          /**
           * check
           * @editor Naixor
           * @Date 2015-12-2
           */
          switch (e.type) {
            case "keydown": {
              if (minder.getSelectedNode()) {
                if (isIntendToInput(e)) {
                  return fsm.jump("input", "user-input");
                }
              } else {
                receiverElement.innerHTML = "";
              }
              // normal -> normal shortcut
              fsm.jump("normal", "shortcut-handle", e);
              break;
            }

            case "keyup": {
              break;
            }

            default: {
            }
          }
        });
        // hotbox -> normal
        receiver.listen("hotbox", function(e) {
          receiver.disable();
          e.preventDefault();
          var handleResult = hotbox.dispatch(e);
          if (hotbox.state() == Hotbox.STATE_IDLE && fsm.state() == "hotbox") {
            return fsm.jump("normal", "hotbox-idle");
          }
        });
        // input => normal
        receiver.listen("input", function(e) {
          receiver.enable();
          if (e.type == "keydown") {
            if (e.is("Enter")) {
              e.preventDefault();
              return fsm.jump("normal", "input-commit");
            }
            if (e.is("Esc")) {
              e.preventDefault();
              return fsm.jump("normal", "input-cancel");
            }
            if (e.is("Tab") || e.is("Shift + Tab")) {
              e.preventDefault();
            }
          } else if (e.type == "keyup" && e.is("Esc")) {
            e.preventDefault();
            if (!compositionLock) {
              return fsm.jump("normal", "input-cancel");
            }
          } else if (e.type == "compositionstart") {
            compositionLock = true;
          } else if (e.type == "compositionend") {
            setTimeout(function() {
              compositionLock = false;
            });
          }
        });
        //////////////////////////////////////////////
        /// 右键呼出热盒
        /// 判断的标准是：按下的位置和结束的位置一致
        //////////////////////////////////////////////
        var downX, downY;
        var MOUSE_RB = 2;
        // 右键
        container.addEventListener(
          "mousedown",
          function(e) {
            if (e.button == MOUSE_RB) {
              e.preventDefault();
            }
            if (fsm.state() == "hotbox") {
              hotbox.active(Hotbox.STATE_IDLE);
              fsm.jump("normal", "blur");
            } else if (fsm.state() == "normal" && e.button == MOUSE_RB) {
              downX = e.clientX;
              downY = e.clientY;
            }
          },
          false
        );
        container.addEventListener(
          "mousewheel",
          function(e) {
            if (fsm.state() == "hotbox") {
              hotbox.active(Hotbox.STATE_IDLE);
              fsm.jump("normal", "mousemove-blur");
            }
          },
          false
        );
        container.addEventListener("contextmenu", function(e) {
          e.preventDefault();
        });
        container.addEventListener(
          "mouseup",
          function(e) {
            if (fsm.state() != "normal") {
              return;
            }
            if (
              e.button != MOUSE_RB ||
              e.clientX != downX ||
              e.clientY != downY
            ) {
              return;
            }
            if (!minder.getSelectedNode()) {
              return;
            }
            fsm.jump("hotbox", "content-menu");
          },
          false
        );
        // 阻止热盒事件冒泡，在热盒正确执行前导致热盒关闭
        hotbox.$element.addEventListener("mousedown", function(e) {
          e.stopPropagation();
        });
      }
      return (module.exports = JumpingRuntime);
    }
  };

  //src/runtime/minder.js
  /**
   * @fileOverview
   *
   * 脑图示例运行时
   *
   * @author: techird
   * @copyright: Baidu FEX, 2014
   */
  _p[14] = {
    value: function(require, exports, module) {
      var Minder = _p.r(4);
      function MinderRuntime() {
        // 不使用 kityminder 的按键处理，由 ReceiverRuntime 统一处理
        var minder = new Minder({
          enableKeyReceiver: false,
          enableAnimation: true
        });
        // 渲染，初始化
        minder.renderTo(this.selector);
        minder.setTheme(null);
        minder.select(minder.getRoot(), true);
        minder.execCommand("text", "中心主题");
        // 导出给其它 Runtime 使用
        this.minder = minder;
      }
      return (module.exports = MinderRuntime);
    }
  };

  //src/runtime/node.js
  _p[15] = {
    value: function(require, exports, module) {
      function NodeRuntime() {
        var runtime = this;
        var minder = this.minder;
        var hotbox = this.hotbox;
        var fsm = this.fsm;
        var main = hotbox.state("main");
        var buttons = [
          "前移:Alt+Up:ArrangeUp",
          "下级:Tab|Insert:AppendChildNode",
          "同级:Enter:AppendSiblingNode",
          "后移:Alt+Down:ArrangeDown",
          "删除:Delete|Backspace:RemoveNode",
          "上级:Shift+Tab|Shift+Insert:AppendParentNode"
        ];
        var AppendLock = 0;
        buttons.forEach(function(button) {
          var parts = button.split(":");
          var label = parts.shift();
          var key = parts.shift();
          var command = parts.shift();
          main.button({
            position: "ring",
            label: label,
            key: key,
            action: function() {
              if (command.indexOf("Append") === 0) {
                AppendLock++;
                minder.execCommand(command, window.__me_i18n('mind', 'subNode'));
                // provide in input runtime
                function afterAppend() {
                  if (!--AppendLock) {
                    runtime.editText();
                  }
                  minder.off("layoutallfinish", afterAppend);
                }
                minder.on("layoutallfinish", afterAppend);
              } else {
                minder.execCommand(command);
                fsm.jump("normal", "command-executed");
              }
            },
            enable: function() {
              return minder.queryCommandState(command) != -1;
            }
          });
        });
        main.button({
          position: "bottom",
          label: "导入节点",
          key: "Alt + V",
          enable: function() {
            var selectedNodes = minder.getSelectedNodes();
            return selectedNodes.length == 1;
          },
          action: importNodeData,
          next: "idle"
        });
        main.button({
          position: "bottom",
          label: "导出节点",
          key: "Alt + C",
          enable: function() {
            var selectedNodes = minder.getSelectedNodes();
            return selectedNodes.length == 1;
          },
          action: exportNodeData,
          next: "idle"
        });
        function importNodeData() {
          minder.fire("importNodeData");
        }
        function exportNodeData() {
          minder.fire("exportNodeData");
        }
      }
      return (module.exports = NodeRuntime);
    }
  };

  //src/runtime/priority.js
  _p[16] = {
    value: function(require, exports, module) {
      function PriorityRuntime() {
        var minder = this.minder;
        var hotbox = this.hotbox;
        var main = hotbox.state("main");
        main.button({
          position: "top",
          label: "优先级",
          key: "P",
          next: "priority",
          enable: function() {
            return minder.queryCommandState("priority") != -1;
          }
        });
        var priority = hotbox.state("priority");
        "123456789".replace(/./g, function(p) {
          priority.button({
            position: "ring",
            label: "P" + p,
            key: p,
            action: function() {
              minder.execCommand("Priority", p);
            }
          });
        });
        priority.button({
          position: "center",
          label: "移除",
          key: "Del",
          action: function() {
            minder.execCommand("Priority", 0);
          }
        });
        priority.button({
          position: "top",
          label: "返回",
          key: "esc",
          next: "back"
        });
      }
      return (module.exports = PriorityRuntime);
    }
  };

  //src/runtime/progress.js
  _p[17] = {
    value: function(require, exports, module) {
      function ProgressRuntime() {
        var minder = this.minder;
        var hotbox = this.hotbox;
        var main = hotbox.state("main");
        main.button({
          position: "top",
          label: "进度",
          key: "G",
          next: "progress",
          enable: function() {
            return minder.queryCommandState("progress") != -1;
          }
        });
        var progress = hotbox.state("progress");
        "012345678".replace(/./g, function(p) {
          progress.button({
            position: "ring",
            label: "G" + p,
            key: p,
            action: function() {
              minder.execCommand("Progress", parseInt(p) + 1);
            }
          });
        });
        progress.button({
          position: "center",
          label: "移除",
          key: "Del",
          action: function() {
            minder.execCommand("Progress", 0);
          }
        });
        progress.button({
          position: "top",
          label: "返回",
          key: "esc",
          next: "back"
        });
      }
      return (module.exports = ProgressRuntime);
    }
  };

  //src/runtime/receiver.js
  /**
   * @fileOverview
   *
   * 键盘事件接收/分发器
   *
   * @author: techird
   * @copyright: Baidu FEX, 2014
   */
  _p[18] = {
    value: function(require, exports, module) {
      var key = _p.r(23);
      var hotbox = _p.r(2);
      function ReceiverRuntime() {
        var fsm = this.fsm;
        var minder = this.minder;
        var me = this;
        // 接收事件的 div
        var element = document.createElement("div");
        element.contentEditable = true;
        /**
         * @Desc: 增加tabindex属性使得element的contenteditable不管是trur还是false都能有focus和blur事件
         * @Editor: Naixor
         * @Date: 2015.09.14
         */
        element.setAttribute("tabindex", -1);
        element.classList.add("receiver");
        element.onkeydown = element.onkeypress = element.onkeyup = dispatchKeyEvent;
        element.addEventListener("compositionstart", dispatchKeyEvent);
        // element.addEventListener('compositionend', dispatchKeyEvent);
        this.container.appendChild(element);
        // receiver 对象
        var receiver = {
          element: element,
          selectAll: function() {
            // 保证有被选中的
            if (!element.innerHTML) element.innerHTML = "&nbsp;";
            var range = document.createRange();
            var selection = window.getSelection();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
            element.focus();
          },
          /**
           * @Desc: 增加enable和disable方法用于解决热核态的输入法屏蔽问题
           * @Editor: Naixor
           * @Date: 2015.09.14
           */
          enable: function() {
            element.setAttribute("contenteditable", true);
          },
          disable: function() {
            element.setAttribute("contenteditable", false);
          },
          /**
           * @Desc: hack FF下div contenteditable的光标丢失BUG
           * @Editor: Naixor
           * @Date: 2015.10.15
           */
          fixFFCaretDisappeared: function() {
            element.removeAttribute("contenteditable");
            element.setAttribute("contenteditable", "true");
            element.blur();
            element.focus();
          },
          /**
           * 以此事件代替通过mouse事件来判断receiver丢失焦点的事件
           * @editor Naixor
           * @Date 2015-12-2
           */
          onblur: function(handler) {
            element.onblur = handler;
          }
        };
        receiver.selectAll();
        minder.on("beforemousedown", receiver.selectAll);
        minder.on("receiverfocus", receiver.selectAll);
        minder.on("readonly", function() {
          // 屏蔽minder的事件接受，删除receiver和hotbox
          minder.disable();
          editor.receiver.element.parentElement.removeChild(
            editor.receiver.element
          );
          editor.hotbox.$container.removeChild(editor.hotbox.$element);
        });
        // 侦听器，接收到的事件会派发给所有侦听器
        var listeners = [];
        // 侦听指定状态下的事件，如果不传 state，侦听所有状态
        receiver.listen = function(state, listener) {
          if (arguments.length == 1) {
            listener = state;
            state = "*";
          }
          listener.notifyState = state;
          listeners.push(listener);
        };
        function dispatchKeyEvent(e) {
          e.is = function(keyExpression) {
            var subs = keyExpression.split("|");
            for (var i = 0; i < subs.length; i++) {
              if (key.is(this, subs[i])) return true;
            }
            return false;
          };
          var listener, jumpState;
          for (var i = 0; i < listeners.length; i++) {
            listener = listeners[i];
            // 忽略不在侦听状态的侦听器
            if (
              listener.notifyState != "*" &&
              listener.notifyState != fsm.state()
            ) {
              continue;
            }
            /**
             *
             * 对于所有的侦听器，只允许一种处理方式：跳转状态。
             * 如果侦听器确定要跳转，则返回要跳转的状态。
             * 每个事件只允许一个侦听器进行状态跳转
             * 跳转动作由侦听器自行完成（因为可能需要在跳转时传递 reason），返回跳转结果即可。
             * 比如：
             *
             * ```js
             *  receiver.listen('normal', function(e) {
             *      if (isSomeReasonForJumpState(e)) {
             *          return fsm.jump('newstate', e);
             *      }
             *  });
             * ```
             */
            if (listener.call(null, e)) {
              return;
            }
          }
        }
        this.receiver = receiver;
      }
      return (module.exports = ReceiverRuntime);
    }
  };

  //src/tool/debug.js
  /**
   * @fileOverview
   *
   * 支持各种调试后门
   *
   * @author: techird
   * @copyright: Baidu FEX, 2014
   */
  _p[19] = {
    value: function(require, exports, module) {
      var format = _p.r(20);
      function noop() {}
      function stringHash(str) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
          hash += str.charCodeAt(i);
        }
        return hash;
      }
      /* global console */
      function Debug(flag) {
        var debugMode = (this.flaged =
          window.location.search.indexOf(flag) != -1);
        if (debugMode) {
          var h = stringHash(flag) % 360;
          var flagStyle = format(
            "background: hsl({0}, 50%, 80%); " +
              "color: hsl({0}, 100%, 30%); " +
              "padding: 2px 3px; " +
              "margin: 1px 3px 0 0;" +
              "border-radius: 2px;",
            h
          );
          var textStyle = "background: none; color: black;";
          this.log = function() {
            var output = format.apply(null, arguments);
            console.log(
              format("%c{0}%c{1}", flag, output),
              flagStyle,
              textStyle
            );
          };
        } else {
          this.log = noop;
        }
      }
      return (module.exports = Debug);
    }
  };

  //src/tool/format.js
  _p[20] = {
    value: function(require, exports, module) {
      function format(template, args) {
        if (typeof args != "object") {
          args = [].slice.call(arguments, 1);
        }
        return String(template).replace(/\{(\w+)\}/gi, function(match, $key) {
          return args[$key] || $key;
        });
      }
      return (module.exports = format);
    }
  };

  //src/tool/innertext.js
  /**
   * @fileOverview
   *
   * innerText polyfill
   *
   * @author: techird
   * @copyright: Baidu FEX, 2014
   */
  _p[21] = {
    value: function(require, exports, module) {
      if (
        !("innerText" in document.createElement("a")) &&
        "getSelection" in window
      ) {
        HTMLElement.prototype.__defineGetter__("innerText", function() {
          var selection = window.getSelection(),
            ranges = [],
            str,
            i;
          // Save existing selections.
          for (i = 0; i < selection.rangeCount; i++) {
            ranges[i] = selection.getRangeAt(i);
          }
          // Deselect everything.
          selection.removeAllRanges();
          // Select `el` and all child nodes.
          // 'this' is the element .innerText got called on
          selection.selectAllChildren(this);
          // Get the string representation of the selected nodes.
          str = selection.toString();
          // Deselect everything. Again.
          selection.removeAllRanges();
          // Restore all formerly existing selections.
          for (i = 0; i < ranges.length; i++) {
            selection.addRange(ranges[i]);
          }
          // Oh look, this is what we wanted.
          // String representation of the element, close to as rendered.
          return str;
        });
        HTMLElement.prototype.__defineSetter__("innerText", function(text) {
          /**
           * @Desc: 解决FireFox节点内容删除后text为null，出现报错的问题
           * @Editor: Naixor
           * @Date: 2015.9.16
           */
          this.innerHTML = (text || "")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\n/g, "<br>");
        });
      }
    }
  };

  //src/tool/jsondiff.js
  /**
   * @fileOverview
   *
   *
   *
   * @author: techird
   * @copyright: Baidu FEX, 2014
   */
  _p[22] = {
    value: function(require, exports, module) {
      /*!
       * https://github.com/Starcounter-Jack/Fast-JSON-Patch
       * json-patch-duplex.js 0.5.0
       * (c) 2013 Joachim Wester
       * MIT license
       */
      var _objectKeys = (function() {
        if (Object.keys) return Object.keys;
        return function(o) {
          var keys = [];
          for (var i in o) {
            if (o.hasOwnProperty(i)) {
              keys.push(i);
            }
          }
          return keys;
        };
      })();
      function escapePathComponent(str) {
        if (str.indexOf("/") === -1 && str.indexOf("~") === -1) return str;
        return str.replace(/~/g, "~0").replace(/\//g, "~1");
      }
      function deepClone(obj) {
        if (typeof obj === "object") {
          return JSON.parse(JSON.stringify(obj));
        } else {
          return obj;
        }
      }
      // Dirty check if obj is different from mirror, generate patches and update mirror
      function _generate(mirror, obj, patches, path) {
        var newKeys = _objectKeys(obj);
        var oldKeys = _objectKeys(mirror);
        var changed = false;
        var deleted = false;
        for (var t = oldKeys.length - 1; t >= 0; t--) {
          var key = oldKeys[t];
          var oldVal = mirror[key];
          if (obj.hasOwnProperty(key)) {
            var newVal = obj[key];
            if (
              typeof oldVal == "object" &&
              oldVal != null &&
              typeof newVal == "object" &&
              newVal != null
            ) {
              _generate(
                oldVal,
                newVal,
                patches,
                path + "/" + escapePathComponent(key)
              );
            } else {
              if (oldVal != newVal) {
                changed = true;
                patches.push({
                  op: "replace",
                  path: path + "/" + escapePathComponent(key),
                  value: deepClone(newVal)
                });
              }
            }
          } else {
            patches.push({
              op: "remove",
              path: path + "/" + escapePathComponent(key)
            });
            deleted = true;
          }
        }
        if (!deleted && newKeys.length == oldKeys.length) {
          return;
        }
        for (var t = 0; t < newKeys.length; t++) {
          var key = newKeys[t];
          if (!mirror.hasOwnProperty(key)) {
            patches.push({
              op: "add",
              path: path + "/" + escapePathComponent(key),
              value: deepClone(obj[key])
            });
          }
        }
      }
      function compare(tree1, tree2) {
        var patches = [];
        _generate(tree1, tree2, patches, "");
        return patches;
      }
      return (module.exports = compare);
    }
  };

  //src/tool/key.js
  _p[23] = {
    value: function(require, exports, module) {
      var keymap = _p.r(24);
      var CTRL_MASK = 4096;
      var ALT_MASK = 8192;
      var SHIFT_MASK = 16384;
      function hash(unknown) {
        if (typeof unknown == "string") {
          return hashKeyExpression(unknown);
        }
        return hashKeyEvent(unknown);
      }
      function is(a, b) {
        return a && b && hash(a) == hash(b);
      }
      exports.hash = hash;
      exports.is = is;
      function hashKeyEvent(keyEvent) {
        var hashCode = 0;
        if (keyEvent.ctrlKey || keyEvent.metaKey) {
          hashCode |= CTRL_MASK;
        }
        if (keyEvent.altKey) {
          hashCode |= ALT_MASK;
        }
        if (keyEvent.shiftKey) {
          hashCode |= SHIFT_MASK;
        }
        // Shift, Control, Alt KeyCode ignored.
        if ([16, 17, 18, 91].indexOf(keyEvent.keyCode) === -1) {
          /**
           * 解决浏览器输入法状态下对keyDown的keyCode判断不准确的问题,使用keyIdentifier,
           * 可以解决chrome和safari下的各种问题,其他浏览器依旧有问题,然而那并不影响我们对特
           * 需判断的按键进行判断(比如Space在safari输入法态下就是229,其他的就不是)
           * @editor Naixor
           * @Date 2015-12-2
           */
          if (keyEvent.keyCode === 229 && keyEvent.keyIdentifier) {
            return (hashCode |= parseInt(keyEvent.keyIdentifier.substr(2), 16));
          }
          hashCode |= keyEvent.keyCode;
        }
        return hashCode;
      }
      function hashKeyExpression(keyExpression) {
        var hashCode = 0;
        keyExpression
          .toLowerCase()
          .split(/\s*\+\s*/)
          .forEach(function(name) {
            switch (name) {
              case "ctrl":
              case "cmd":
                hashCode |= CTRL_MASK;
                break;

              case "alt":
                hashCode |= ALT_MASK;
                break;

              case "shift":
                hashCode |= SHIFT_MASK;
                break;

              default:
                hashCode |= keymap[name];
            }
          });
        return hashCode;
      }
    }
  };

  //src/tool/keymap.js
  _p[24] = {
    value: function(require, exports, module) {
      var keymap = {
        Shift: 16,
        Control: 17,
        Alt: 18,
        CapsLock: 20,
        BackSpace: 8,
        Tab: 9,
        Enter: 13,
        Esc: 27,
        Space: 32,
        PageUp: 33,
        PageDown: 34,
        End: 35,
        Home: 36,
        Insert: 45,
        Left: 37,
        Up: 38,
        Right: 39,
        Down: 40,
        Direction: {
          37: 1,
          38: 1,
          39: 1,
          40: 1
        },
        Del: 46,
        NumLock: 144,
        Cmd: 91,
        CmdFF: 224,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "`": 192,
        "=": 187,
        "-": 189,
        "/": 191,
        ".": 190
      };
      // 小写适配
      for (var key in keymap) {
        if (keymap.hasOwnProperty(key)) {
          keymap[key.toLowerCase()] = keymap[key];
        }
      }
      var aKeyCode = 65;
      var aCharCode = "a".charCodeAt(0);
      // letters
      "abcdefghijklmnopqrstuvwxyz".split("").forEach(function(letter) {
        keymap[letter] = aKeyCode + (letter.charCodeAt(0) - aCharCode);
      });
      // numbers
      var n = 9;
      do {
        keymap[n.toString()] = n + 48;
      } while (--n);
      module.exports = keymap;
    }
  };

  var moduleMapping = {
    "expose-editor": 1
  };

  function use(name) {
    _p.r([moduleMapping[name]]);
  }
  use("expose-editor");
})();
