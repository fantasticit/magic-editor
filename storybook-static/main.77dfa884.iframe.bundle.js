(self.webpackChunkthink_single_editor=self.webpackChunkthink_single_editor||[]).push([[179],{"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:()=>__namedExportsOrder,parameters:()=>parameters});var ClientApi=__webpack_require__("./node_modules/.pnpm/@storybook+client-api@6.5.12_sfoxds7t5ydpegc3knd667wn6m/node_modules/@storybook/client-api/dist/esm/ClientApi.js");const parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/stories/collaboration.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Collaboration:()=>Collaboration,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.tsx"),_extensions_bold__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/extensions/bold/index.ts"),_extensions_italic__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/extensions/italic/index.ts"),_extensions_underline__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/extensions/underline/index.ts"),_extensions_strike__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/extensions/strike/index.ts"),_extensions_subscript__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/extensions/subscript/index.ts"),_extensions_superscript__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/extensions/superscript/index.ts"),_extensions_blockquote__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/extensions/blockquote/index.ts"),_extensions_code__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/extensions/code/index.ts"),_extensions_code_block__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/extensions/code-block/index.ts"),_extensions_heading__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/extensions/heading/index.ts"),_extensions_link__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/extensions/link/index.ts"),_extensions_iframe__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/extensions/iframe/index.ts"),_extensions_image__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/extensions/image/index.ts"),_extensions_status__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/extensions/status/index.ts"),_extensions_table__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/extensions/table/index.ts"),_extensions_mind__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/extensions/mind/index.ts"),_extensions_flow__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./src/extensions/flow/index.ts"),_extensions_excalidraw__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./src/extensions/excalidraw/index.ts"),_extensions_text_align__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./src/extensions/text-align/index.ts"),_extensions_horizontal_rule__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./src/extensions/horizontal-rule/index.ts"),_extensions_list_item__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./src/extensions/list-item/index.ts"),_extensions_ordered_list__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("./src/extensions/ordered-list/index.ts"),_extensions_bullet_list__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("./src/extensions/bullet-list/index.ts"),_extensions_dropcursor__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("./src/extensions/dropcursor/index.ts"),_extensions_gapcursor__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("./src/extensions/gapcursor/index.ts"),_extensions_hard_break__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("./src/extensions/hard-break/index.ts"),_extensions_unique_id__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("./src/extensions/unique-id/index.ts"),_extensions_dragable__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("./src/extensions/dragable/index.ts"),_extensions_mention__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./src/extensions/mention/index.ts"),_extensions_slash__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./src/extensions/slash/index.ts"),_icons__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__("./src/icons/index.tsx"),_extensions_placeholder__WEBPACK_IMPORTED_MODULE_33__=__webpack_require__("./src/extensions/placeholder/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Editor"};const currentUser={id:"yourself"+Math.random(),name:"yourself"+~~(100*Math.random()),avatar:""},userProvider={getCurrentUser:()=>currentUser,getUsers:()=>new Promise((resolve=>{setTimeout((()=>{resolve(Array.from({length:20},((_,index)=>({id:index++,name:`用户编号-${index+1}`,avatar:"https://avatars.githubusercontent.com/u/26452939?s=40&v=4"}))))}),3e3*Math.random())}))},fileProvider={uploadFile:file=>function readImage(file){return new Promise(((resolve,reject)=>{if(file.type&&!file.type.startsWith("image/"))return console.log("File is not an image.",file.type,file),void reject();const reader=new FileReader;reader.addEventListener("load",(event=>{resolve(event.target?.result)})),reader.readAsDataURL(file)}))}(file)},Commands=[{divider:!0,title:"标题"},{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons__WEBPACK_IMPORTED_MODULE_32__.vh,null),text:"标题一",slash:"/h1",action:editor=>editor.chain().focus().toggleHeading({level:1}).run()},{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons__WEBPACK_IMPORTED_MODULE_32__.X0,null),text:"标题二",slash:"/h2",action:editor=>editor.chain().focus().toggleHeading({level:2}).run()},{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons__WEBPACK_IMPORTED_MODULE_32__.wD,null),text:"标题三",slash:"/h3",action:editor=>editor.chain().focus().toggleHeading({level:3}).run()},{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons__WEBPACK_IMPORTED_MODULE_32__.Ry,null),text:"标题四",slash:"/h4",action:editor=>editor.chain().focus().toggleHeading({level:4}).run()},{divider:!0,title:"插入"},{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons__WEBPACK_IMPORTED_MODULE_32__.Zw,null),text:"代码块",slash:"/codeBlock",action:editor=>editor.chain().focus().toggleCodeBlock().run()},{icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons__WEBPACK_IMPORTED_MODULE_32__.fq,null),text:"表格",slash:"/table",action:editor=>editor.chain().insertTable({rows:3,cols:4,withHeaderRow:!0}).focus().run()}],FullExtensions=[_extensions_unique_id__WEBPACK_IMPORTED_MODULE_28__.H,_extensions_dragable__WEBPACK_IMPORTED_MODULE_29__.O,_extensions_bold__WEBPACK_IMPORTED_MODULE_2__.d,_extensions_italic__WEBPACK_IMPORTED_MODULE_3__.T,_extensions_underline__WEBPACK_IMPORTED_MODULE_4__.v,_extensions_strike__WEBPACK_IMPORTED_MODULE_5__.R,_extensions_subscript__WEBPACK_IMPORTED_MODULE_6__.a,_extensions_superscript__WEBPACK_IMPORTED_MODULE_7__.$,_extensions_blockquote__WEBPACK_IMPORTED_MODULE_8__.V,_extensions_code__WEBPACK_IMPORTED_MODULE_9__.Qj,_extensions_code_block__WEBPACK_IMPORTED_MODULE_10__.d,_extensions_heading__WEBPACK_IMPORTED_MODULE_11__.X,_extensions_horizontal_rule__WEBPACK_IMPORTED_MODULE_21__.b,_extensions_link__WEBPACK_IMPORTED_MODULE_12__.rU,_extensions_iframe__WEBPACK_IMPORTED_MODULE_13__.hv,_extensions_image__WEBPACK_IMPORTED_MODULE_14__.Ee,_extensions_status__WEBPACK_IMPORTED_MODULE_15__.q,_extensions_table__WEBPACK_IMPORTED_MODULE_16__.Jg,_extensions_text_align__WEBPACK_IMPORTED_MODULE_20__.P,_extensions_list_item__WEBPACK_IMPORTED_MODULE_22__.H,_extensions_ordered_list__WEBPACK_IMPORTED_MODULE_23__.G,_extensions_bullet_list__WEBPACK_IMPORTED_MODULE_24__.D,_extensions_dropcursor__WEBPACK_IMPORTED_MODULE_25__.T,_extensions_gapcursor__WEBPACK_IMPORTED_MODULE_26__.Q,_extensions_hard_break__WEBPACK_IMPORTED_MODULE_27__.U,_extensions_excalidraw__WEBPACK_IMPORTED_MODULE_19__.Eb,_extensions_mind__WEBPACK_IMPORTED_MODULE_17__.CH,_extensions_flow__WEBPACK_IMPORTED_MODULE_18__.Zw,_extensions_slash__WEBPACK_IMPORTED_MODULE_31__.T.configure({pluginKey:"slash-/",items:Commands}),_extensions_slash__WEBPACK_IMPORTED_MODULE_31__.T.configure({char:"、",pluginKey:"slash-、",items:Commands}),_extensions_slash__WEBPACK_IMPORTED_MODULE_31__.T.configure({char:"\\",pluginKey:"slash-\\",items:Commands}),_extensions_placeholder__WEBPACK_IMPORTED_MODULE_33__.V.configure({placeholder:"输入 、 唤起菜单",showOnlyCurrent:!1,showOnlyWhenEditable:!1}),_extensions_mention__WEBPACK_IMPORTED_MODULE_30__.p],Collaboration=()=>{(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);const[editor,setEditor]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.mU,{id:"test",token:"token",url:"ws://localhost:1234",ref:setEditor,schema:"block+",extensions:FullExtensions,userProvider,fileProvider},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,editor&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_heading__WEBPACK_IMPORTED_MODULE_11__.S,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_bold__WEBPACK_IMPORTED_MODULE_2__.f,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_italic__WEBPACK_IMPORTED_MODULE_3__.H,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_underline__WEBPACK_IMPORTED_MODULE_4__.n,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_strike__WEBPACK_IMPORTED_MODULE_5__.x,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_blockquote__WEBPACK_IMPORTED_MODULE_8__._,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_code__WEBPACK_IMPORTED_MODULE_9__.EE,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_code_block__WEBPACK_IMPORTED_MODULE_10__.s,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_subscript__WEBPACK_IMPORTED_MODULE_6__.Z,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_superscript__WEBPACK_IMPORTED_MODULE_7__.n,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_text_align__WEBPACK_IMPORTED_MODULE_20__.h,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_link__WEBPACK_IMPORTED_MODULE_12__.h0,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_link__WEBPACK_IMPORTED_MODULE_12__.dC,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_iframe__WEBPACK_IMPORTED_MODULE_13__.YB,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_iframe__WEBPACK_IMPORTED_MODULE_13__.Jx,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_mind__WEBPACK_IMPORTED_MODULE_17__.aH,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_mind__WEBPACK_IMPORTED_MODULE_17__.Ge,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_flow__WEBPACK_IMPORTED_MODULE_18__.Ck,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_flow__WEBPACK_IMPORTED_MODULE_18__.Ru,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_excalidraw__WEBPACK_IMPORTED_MODULE_19__.Vr,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_excalidraw__WEBPACK_IMPORTED_MODULE_19__.oi,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_horizontal_rule__WEBPACK_IMPORTED_MODULE_21__.U,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_image__WEBPACK_IMPORTED_MODULE_14__.a$,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_image__WEBPACK_IMPORTED_MODULE_14__.El,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_status__WEBPACK_IMPORTED_MODULE_15__.F,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_table__WEBPACK_IMPORTED_MODULE_16__.PS,{editor}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_extensions_table__WEBPACK_IMPORTED_MODULE_16__.ze,{editor})))))};Collaboration.parameters={storySource:{source:'() => {\n  const hasRun = useRef(false);\n  const [editor, setEditor] = useState<Editor | null>(null);\n\n  return (\n    <div>\n      <CollaborationEditor\n        id={"test"}\n        token="token"\n        url="ws://localhost:1234"\n        ref={setEditor}\n        schema="block+"\n        extensions={FullExtensions}\n        userProvider={userProvider}\n        fileProvider={fileProvider}>\n        <div>\n          {editor && (\n            <>\n              <HeadingStaticMenu editor={editor} />\n              <BoldStaticMenu editor={editor} />\n              <ItalicStaticMenu editor={editor} />\n              <UnderlineStaticMenu editor={editor} />\n              <StrikeStaticMenu editor={editor} />\n              <BlockquoteStaticMenu editor={editor} />\n              <CodeStaticMenu editor={editor} />\n              <CodeBlockStaticMenu editor={editor} />\n              <SubscriptStaticMenu editor={editor} />\n              <SuperscriptStaticMenu editor={editor} />\n\n              <TextAlignStaticMenu editor={editor} />\n\n              <LinkStaticMenu editor={editor} />\n              <LinkBubbleMenu editor={editor} />\n\n              <IframeStaticMenu editor={editor} />\n              <IframeBubbleMenu editor={editor} />\n\n              <MindStaticMenu editor={editor} />\n              <MindBubbleMenu editor={editor} />\n\n              <FlowStaticMenu editor={editor} />\n              <FlowBubbleMenu editor={editor} />\n\n              <ExcalidrawStaticMenu editor={editor} />\n              <ExcalidrawBubbleMenu editor={editor} />\n\n              <HorizontalRuleStaticMenu editor={editor} />\n\n              <ImageStaticMenu editor={editor} />\n              <ImageBubbleMenu editor={editor} />\n\n              <StatusStaticMenu editor={editor} />\n\n              <TableStaticMenu editor={editor} />\n              <TableBubbleMenu editor={editor} />\n            </>\n          )}\n        </div>\n      </CollaborationEditor>\n    </div>\n  );\n}'},...Collaboration.parameters};const __namedExportsOrder=["Collaboration"]},"./src/stories/editor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Full:()=>Full,__namedExportsOrder:()=>__namedExportsOrder,default:()=>editor_stories});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),src=__webpack_require__("./src/index.tsx"),bold=__webpack_require__("./src/extensions/bold/index.ts"),italic=__webpack_require__("./src/extensions/italic/index.ts"),underline=__webpack_require__("./src/extensions/underline/index.ts"),strike=__webpack_require__("./src/extensions/strike/index.ts"),subscript=__webpack_require__("./src/extensions/subscript/index.ts"),superscript=__webpack_require__("./src/extensions/superscript/index.ts"),blockquote=__webpack_require__("./src/extensions/blockquote/index.ts"),code=__webpack_require__("./src/extensions/code/index.ts"),code_block=__webpack_require__("./src/extensions/code-block/index.ts"),heading=__webpack_require__("./src/extensions/heading/index.ts"),extensions_link=__webpack_require__("./src/extensions/link/index.ts"),iframe=__webpack_require__("./src/extensions/iframe/index.ts"),extensions_image=__webpack_require__("./src/extensions/image/index.ts"),extensions_status=__webpack_require__("./src/extensions/status/index.ts"),table=__webpack_require__("./src/extensions/table/index.ts"),mind=__webpack_require__("./src/extensions/mind/index.ts"),flow=__webpack_require__("./src/extensions/flow/index.ts"),excalidraw=__webpack_require__("./src/extensions/excalidraw/index.ts"),text_align=__webpack_require__("./src/extensions/text-align/index.ts"),horizontal_rule=__webpack_require__("./src/extensions/horizontal-rule/index.ts"),list_item=__webpack_require__("./src/extensions/list-item/index.ts"),ordered_list=__webpack_require__("./src/extensions/ordered-list/index.ts"),bullet_list=__webpack_require__("./src/extensions/bullet-list/index.ts"),dropcursor=__webpack_require__("./src/extensions/dropcursor/index.ts"),gapcursor=__webpack_require__("./src/extensions/gapcursor/index.ts"),hard_break=__webpack_require__("./src/extensions/hard-break/index.ts"),unique_id=__webpack_require__("./src/extensions/unique-id/index.ts"),dragable=__webpack_require__("./src/extensions/dragable/index.ts"),mention=__webpack_require__("./src/extensions/mention/index.ts"),slash=__webpack_require__("./src/extensions/slash/index.ts"),tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),dist=__webpack_require__("./node_modules/.pnpm/prosemirror-state@1.4.1/node_modules/prosemirror-state/dist/index.js");function createColumn(colType,colContent=null){return colContent?colType.createChecked(null,colContent):colType.createAndFill()}const Columns=tiptap_core_esm.NB.create({name:"columns",group:"block",defining:!0,isolating:!0,allowGapCursor:!1,content:"column+",addOptions:()=>({HTMLAttributes:{class:"columns"}}),addAttributes:()=>({type:{default:"responsive",parseHTML:element=>element.getAttribute("type")},cols:{default:2,parseHTML:element=>element.getAttribute("cols")}}),parseHTML:()=>[{tag:"div[class=grid]"}],renderHTML({HTMLAttributes}){return["div",(0,tiptap_core_esm.P1)(this.options.HTMLAttributes,HTMLAttributes),0]},addCommands:()=>({insertColumns:attrs=>({tr,dispatch,editor})=>{const node=function createColumns(schema,colsCount,colContent=null){const types=function getColumnsNodeTypes(schema){if(schema.cached.columnsNodeTypes)return schema.cached.columnsNodeTypes;const roles={columns:schema.nodes.columns,column:schema.nodes.column};return schema.cached.columnsNodeTypes=roles,roles}(schema),cols=[];for(let index=0;index<colsCount;index+=1){const col=createColumn(types.column,colContent);col&&cols.push(col)}return types.columns.createChecked({cols:colsCount},cols)}(editor.schema,attrs&&attrs.cols||3);if(dispatch){const offset=tr.selection.anchor+1;tr.replaceSelectionWith(node).scrollIntoView().setSelection(dist.Bs.near(tr.doc.resolve(offset)))}return!0}}),addKeyboardShortcuts(){return{"Mod-Alt-G":()=>this.editor.commands.insertColumns()}}}),Column=tiptap_core_esm.NB.create({name:"column",content:"block+",isolating:!0,addOptions:()=>({HTMLAttributes:{class:"column"}}),parseHTML:()=>[{tag:"div[class=column]"}],renderHTML({HTMLAttributes}){return["div",(0,tiptap_core_esm.P1)(this.options.HTMLAttributes,HTMLAttributes),0]}});var components=__webpack_require__("./src/components/index.tsx"),icons=__webpack_require__("./src/icons/index.tsx"),use_active=__webpack_require__("./src/hooks/use-active.tsx");const ColumnsStaticMenu=({editor})=>{const isColumnsActive=(0,use_active.t)(editor,Columns.name),insertColumns=(0,react.useCallback)((()=>editor.chain().focus().insertColumns().run()),[editor]);return react.createElement(components.u,{title:"分栏",editor},react.createElement(components.zx,{icon:react.createElement(icons.eY,null),onClick:insertColumns,active:isColumnsActive}))},ColumnsExtensions=[Columns,Column];var placeholder=__webpack_require__("./src/extensions/placeholder/index.ts");const editor_stories={title:"Editor"};const currentUser={id:"mock-user",name:"mock",avatar:""},userProvider={getCurrentUser:()=>currentUser,getUsers:()=>new Promise((resolve=>{setTimeout((()=>{resolve(Array.from({length:20},((_,index)=>({id:index++,name:`用户编号-${index+1}`,avatar:"https://avatars.githubusercontent.com/u/26452939?s=40&v=4"}))))}),3e3*Math.random())}))},fileProvider={uploadFile:file=>function readImage(file){return new Promise(((resolve,reject)=>{if(file.type&&!file.type.startsWith("image/"))return console.log("File is not an image.",file.type,file),void reject();const reader=new FileReader;reader.addEventListener("load",(event=>{resolve(event.target?.result)})),reader.readAsDataURL(file)}))}(file)},Commands=[{divider:!0,title:"标题"},{icon:react.createElement(icons.vh,null),text:"标题一",slash:"/h1",action:editor=>editor.chain().focus().toggleHeading({level:1}).run()},{icon:react.createElement(icons.X0,null),text:"标题二",slash:"/h2",action:editor=>editor.chain().focus().toggleHeading({level:2}).run()},{icon:react.createElement(icons.wD,null),text:"标题三",slash:"/h3",action:editor=>editor.chain().focus().toggleHeading({level:3}).run()},{icon:react.createElement(icons.Ry,null),text:"标题四",slash:"/h4",action:editor=>editor.chain().focus().toggleHeading({level:4}).run()},{divider:!0,title:"插入"},{icon:react.createElement(icons.Zw,null),text:"代码块",slash:"/codeBlock",action:editor=>editor.chain().focus().toggleCodeBlock().run()},{icon:react.createElement(icons.fq,null),text:"表格",slash:"/table",action:editor=>editor.chain().insertTable({rows:3,cols:4,withHeaderRow:!0}).focus().run()}],FullExtensions=[unique_id.H,dragable.O,bold.d,italic.T,underline.v,strike.R,subscript.a,superscript.$,blockquote.V,code.Qj,code_block.d,heading.X,horizontal_rule.b,extensions_link.rU,iframe.hv,extensions_image.Ee,extensions_status.q,table.Jg,text_align.P,list_item.H,ordered_list.G,bullet_list.D,dropcursor.T,gapcursor.Q,hard_break.U,excalidraw.Eb,mind.CH,flow.Zw,slash.T.configure({pluginKey:"slash-/",items:Commands}),slash.T.configure({char:"、",pluginKey:"slash-、",items:Commands}),slash.T.configure({char:"\\",pluginKey:"slash-\\",items:Commands}),placeholder.V.configure({placeholder:"输入 、 唤起菜单",showOnlyCurrent:!1,showOnlyWhenEditable:!1}),mention.p,ColumnsExtensions],Full=()=>{const[editor,setEditor]=(0,react.useState)(null);return react.createElement("div",null,react.createElement(src.c4,{ref:setEditor,schema:"block+",content:'\n<h1 data-blockid="cb8c3cc1-cc37-4407-a5a7-34d7f6d30c32"><span contenteditable="false" class="heading-actions "><button type="button" class="heading-fold "><svg fill="currentColor" width="12" height="24" viewBox="6 0 12 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.23823905,10.6097108 L11.207376,14.4695888 L11.207376,14.4695888 C11.54411,14.907343 12.1719566,14.989236 12.6097108,14.652502 C12.6783439,14.5997073 12.7398293,14.538222 12.792624,14.4695888 L15.761761,10.6097108 L15.761761,10.6097108 C16.0984949,10.1719566 16.0166019,9.54410997 15.5788477,9.20737601 C15.4040391,9.07290785 15.1896811,9 14.969137,9 L9.03086304,9 L9.03086304,9 C8.47857829,9 8.03086304,9.44771525 8.03086304,10 C8.03086304,10.2205442 8.10377089,10.4349022 8.23823905,10.6097108 Z"></path></svg></button></span><span class="heading-content">标题1</span></h1><div class="flow" data-blockid="8a34c127-ab76-4def-8b79-c4541d666e85" width="100%" height="240" svg="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMjFweCIgaGVpZ2h0PSI4MXB4IiB2aWV3Qm94PSItMC41IC0wLjUgMTIxIDgxIj48ZGVmcy8+PGc+PGVsbGlwc2UgY3g9IjYwIiBjeT0iNDAiIHJ4PSI2MCIgcnk9IjQwIiBmaWxsPSIjZmZmMmNjIiBzdHJva2U9IiNkNmI2NTYiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48L2c+PC9zdmc+" xml="<mxfile host=&quot;embed.diagrams.net&quot; modified=&quot;2022-10-23T11:48:14.021Z&quot; agent=&quot;5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36&quot; version=&quot;20.5.1&quot; etag=&quot;9fpq5_4ecPRwerqV-3WC&quot; type=&quot;embed&quot;><diagram id=&quot;lCcOjOEXR9O5_LBVFz-6&quot; name=&quot;第 1 页&quot;>jZJNU4QwDIZ/DXegingVd/XiiYPnSgPtWAhTugL+esO25WN2dsYLkzxJSPMmESva6c3wXn6gAB2lsZgi9hqlKUty+i5gdiCLHxxojBIOJRso1S94GHt6UQKGQ6JF1Fb1R1hh10FlD4wbg+MxrUZ97NrzBm5AWXF9Sz+VsNLRPH3a+DuoRobOSfbsIi0PyX6SQXKB4w6xU8QKg2id1U4F6EW7oIurO9+Jrg8z0Nn/FKSu4Ifri5/Nv8vOYVgqIF3JeRmlslD2vFoiI22WmLStJi8hs1ZaF6jRXOtYXddpVREfrMFv2EVE9pU9ZhTxzcFYmO4OkKyy0DkBtmDNTCmhIPNK+lNalR23xSSByd1Scs+4v4Vm/fUmFxleseBum7nGdufNTn8=</diagram></mxfile>"></div><div class="mind" data-blockid="234cad54-5a99-4a0f-ab2c-fdd80eef853b" defaultshowpicker="false" width="100%" height="240" data="{&quot;root&quot;:{&quot;data&quot;:{&quot;text&quot;:&quot;中心节点&quot;},&quot;children&quot;:[{&quot;data&quot;:{&quot;id&quot;:&quot;cnt71y7zk3c0&quot;,&quot;created&quot;:1666517229599,&quot;text&quot;:&quot;1&quot;},&quot;children&quot;:[]}]},&quot;template&quot;:&quot;default&quot;,&quot;theme&quot;:&quot;fresh-purple&quot;,&quot;version&quot;:&quot;1.4.43&quot;}" svg="<svg id=&quot;kity_svg_86&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; version=&quot;1.1&quot; width=&quot;320&quot; height=&quot;80&quot; style=&quot;background: rgb(251, 251, 251); visibility: visible;&quot; viewBox=&quot;0 0 320 80&quot;><defs id=&quot;kity_defs_87&quot;><linearGradient id=&quot;kity_linearGradient_97&quot; x1=&quot;0&quot; y1=&quot;0&quot; x2=&quot;0&quot; y2=&quot;1&quot;><stop id=&quot;kity_stop_98&quot; offset=&quot;0&quot; stop-color=&quot;rgb(255, 255, 255)&quot;></stop><stop id=&quot;kity_stop_99&quot; offset=&quot;1&quot; stop-color=&quot;rgb(204, 204, 204)&quot;></stop></linearGradient><marker id=&quot;kity_marker_2&quot; orient=&quot;auto&quot; refX=&quot;6&quot; refY=&quot;0&quot; viewBox=&quot;-7 -7 14 14&quot; markerWidth=&quot;7&quot; markerHeight=&quot;7&quot; markerUnits=&quot;userSpaceOnUse&quot;><path id=&quot;kity_path_3&quot; fill=&quot;rgb(123, 115, 191)&quot; stroke=&quot;none&quot; d=&quot;M6,0A6,6,0,1,1,-6,0A6,6,0,1,1,6,0&quot;></path></marker></defs><g id=&quot;kity_g_88&quot;><g id=&quot;minder5&quot; text-rendering=&quot;optimize-speed&quot;><g id=&quot;minder_connect_group5&quot;><path id=&quot;kity_path_105&quot; fill=&quot;none&quot; stroke=&quot;rgb(123, 115, 191)&quot; stroke-width=&quot;1&quot; d=&quot;M76.5,40.5A174,0,0,0,1,250.5,40.5&quot;></path></g><g id=&quot;minder_node6&quot;><path id=&quot;node_outline6&quot; fill=&quot;rgb(123, 115, 191)&quot; stroke=&quot;rgb(61, 57, 96)&quot; d=&quot;M25.5,20.5h102a5,5,0,0,1,5,5v30a5,5,0,0,1,-5,5h-102a5,5,0,0,1,-5,-5v-30a5,5,0,0,1,5,-5z&quot; stroke-width=&quot;3&quot;></path><g id=&quot;node_text6&quot; fill=&quot;white&quot;><text id=&quot;kity_text_102&quot; text-rendering=&quot;inherit&quot; font-size=&quot;16&quot; dy=&quot;.8em&quot; y=&quot;32.5&quot; x=&quot;44.5&quot;>中心节点</text></g></g><g id=&quot;kity_g_92&quot;><path id=&quot;kity_path_93&quot; fill=&quot;none&quot; stroke=&quot;none&quot; d=&quot;M44.5,40.5h0v0h0z&quot;></path></g><g id=&quot;kity_g_94&quot;><path id=&quot;kity_path_95&quot; fill=&quot;none&quot; stroke=&quot;none&quot; d=&quot;M44.5,40.5h0v0h0z&quot;></path><path id=&quot;kity_path_96&quot; fill=&quot;none&quot; stroke=&quot;none&quot;></path></g><g id=&quot;minder_node7&quot;><g id=&quot;node_expander2&quot; display=&quot;none&quot; style=&quot;cursor: pointer;&quot;><path id=&quot;kity_path_110&quot; fill=&quot;white&quot; stroke=&quot;gray&quot; d=&quot;M251.5,40.5A6,6,0,1,1,239.5,40.5A6,6,0,1,1,251.5,40.5&quot;></path><path id=&quot;kity_path_111&quot; fill=&quot;none&quot; stroke=&quot;gray&quot;></path></g><path id=&quot;node_outline7&quot; fill=&quot;rgb(239, 238, 246)&quot; stroke=&quot;rgb(123, 115, 191)&quot; d=&quot;M255.5,27.5h42a3,3,0,0,1,3,3v20a3,3,0,0,1,-3,3h-42a3,3,0,0,1,-3,-3v-20a3,3,0,0,1,3,-3z&quot; stroke-width=&quot;1&quot;></path><g id=&quot;node_text7&quot; fill=&quot;black&quot;><text id=&quot;kity_text_107&quot; text-rendering=&quot;inherit&quot; font-size=&quot;14&quot; dy=&quot;.8em&quot; y=&quot;33.5&quot; x=&quot;272.5&quot;>1</text></g></g></g></g></svg>"></div><div class="excalidraw" showpickeroncreate="false" width="100%" height="240" data="{&quot;elements&quot;:[{&quot;id&quot;:&quot;wLExlpfUIRmBY5FY6DLmk&quot;,&quot;type&quot;:&quot;ellipse&quot;,&quot;x&quot;:285.6328125,&quot;y&quot;:186.6171875,&quot;width&quot;:56.73828125,&quot;height&quot;:41.15625,&quot;angle&quot;:0,&quot;strokeColor&quot;:&quot;#000000&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fillStyle&quot;:&quot;hachure&quot;,&quot;strokeWidth&quot;:1,&quot;strokeStyle&quot;:&quot;solid&quot;,&quot;roughness&quot;:1,&quot;opacity&quot;:100,&quot;groupIds&quot;:[],&quot;strokeSharpness&quot;:&quot;sharp&quot;,&quot;seed&quot;:386122769,&quot;version&quot;:23,&quot;versionNonce&quot;:611750065,&quot;isDeleted&quot;:false,&quot;boundElements&quot;:null,&quot;updated&quot;:1666503631811,&quot;link&quot;:null,&quot;locked&quot;:false},{&quot;id&quot;:&quot;o0Yd7FHhGvIvihpV9rKwC&quot;,&quot;type&quot;:&quot;text&quot;,&quot;x&quot;:464.51171875,&quot;y&quot;:209.28515625,&quot;width&quot;:105,&quot;height&quot;:25,&quot;angle&quot;:0,&quot;strokeColor&quot;:&quot;#000000&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fillStyle&quot;:&quot;hachure&quot;,&quot;strokeWidth&quot;:1,&quot;strokeStyle&quot;:&quot;solid&quot;,&quot;roughness&quot;:1,&quot;opacity&quot;:100,&quot;groupIds&quot;:[],&quot;strokeSharpness&quot;:&quot;sharp&quot;,&quot;seed&quot;:1887227615,&quot;version&quot;:13,&quot;versionNonce&quot;:1398922143,&quot;isDeleted&quot;:false,&quot;boundElements&quot;:null,&quot;updated&quot;:1666503638202,&quot;link&quot;:null,&quot;locked&quot;:false,&quot;text&quot;:&quot;hello Wrold&quot;,&quot;fontSize&quot;:20,&quot;fontFamily&quot;:1,&quot;textAlign&quot;:&quot;left&quot;,&quot;verticalAlign&quot;:&quot;top&quot;,&quot;baseline&quot;:18,&quot;containerId&quot;:null,&quot;originalText&quot;:&quot;hello Wrold&quot;}],&quot;appState&quot;:{&quot;isLoading&quot;:false},&quot;files&quot;:{}}"></div><p data-blockid="8e1f49e6-0b96-4f3e-821c-4cad4e2dc87d">我是段落</p><iframe class="iframe" data-blockid="1926fa5a-1fe5-4cd3-a595-a43a3306f057" width="837" height="418" url="https://player.bilibili.com/player.html?aid=901027901&amp;bvid=BV1YN4y1P7Vq&amp;cid=848652357&amp;page=1"></iframe><img src="https://wipi.oss-cn-shanghai.aliyuncs.com/2022-07-20/photo-1629461461750-ef5b81781bc2.avif" alt="文章封面" width="440" height="293" aspectratio="1.5" align="left"><blockquote data-blockid="61bf2c49-e7fd-4865-a438-d92d9cbf7ecf"><p data-blockid="e87daaf5-a75a-4318-bc34-f17caa592a13">引用</p></blockquote><ul data-blockid="c2bb80ab-8648-4f8c-8ac3-1bd33e26dba1"><li><p data-blockid="09db80c2-c93b-4309-b716-94a6a0efda0d">列表1</p></li><li><p data-blockid="796a0de6-4993-4680-83fa-a3ae108dd5f1">列表2</p></li></ul><ol data-blockid="87a7dc0f-4159-4c7d-9e11-90f202ead17e"><li><p data-blockid="4008f16f-c65d-4e4b-9881-50dce902c7c6">列表1</p></li><li><p data-blockid="a57a11ce-435c-46e7-be8b-6d0a67b1f403">列表2</p></li></ol><p data-blockid="f02b760b-7aa7-40d7-a204-5cb931e0dd4d"><strong>加粗</strong> <em>斜体 </em><u>下划线 </u><s>删除线 </s>X<sub>2 </sub>X<sup>2 </sup><code>行内代码</code></p><pre data-blockid="f3e03c37-bf9d-4481-b674-a13a5228ae79"><code>echo hello world!</code></pre><p data-blockid="95386564-c0e3-498d-96a5-e5d99017b611"><span class="status" data-blockid="68e11277-95a1-45de-958c-9324a2a9d272" createuserid="mock-user" showpickeroncreate="false" color="#42526E" bgcolor="#DFE1E6" bordercolor="rgb(80, 95, 121)" text="状态良好"></span></p><table data-blockid="01d4d454-593c-46aa-9b63-f3f214c1a153"><tbody><tr><th colspan="1" rowspan="1" colwidth="200"><p data-blockid="25ebb69f-3343-4237-bffd-f983fff4ed54">表头1</p></th><th colspan="1" rowspan="1" colwidth="200"><p data-blockid="5607a0d9-8493-4924-b7b5-a23fe5bdef9d">表头2</p></th><th colspan="1" rowspan="1" colwidth="200"><p data-blockid="5bc05abc-c17c-4734-8cb4-179f2f05312a">表头3</p></th><th colspan="1" rowspan="1" colwidth="200"><p data-blockid="7c9fdff7-cba0-44d9-9c84-23c1e1843195">表头4</p></th></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p data-blockid="9c1ae2ea-a13a-46c3-b964-8610ea416e19"></p></td><td colspan="1" rowspan="1" colwidth="200"><p data-blockid="b2c075e5-76bc-4f89-bbe8-9bb22c79038b"></p></td><td colspan="1" rowspan="1" colwidth="200"><p data-blockid="c50ec158-1ab7-46b8-a49a-6164035533ca"></p></td><td colspan="1" rowspan="1" colwidth="200"><p data-blockid="3d017e01-f993-4279-a098-5cab356a8398"></p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p data-blockid="ff9f28d8-eabd-46ff-b5a4-778c4367d79c"></p></td><td colspan="1" rowspan="1" colwidth="200"><p data-blockid="70160d49-9e08-4b4d-a566-84fc526c8ef4"></p></td><td colspan="1" rowspan="1" colwidth="200"><p data-blockid="09e0d23f-851c-4f74-b14a-8d6f6ab1d938"></p></td><td colspan="1" rowspan="1" colwidth="200"><p data-blockid="a3bb0dd9-9627-4d5f-ae0a-61591cac78c0"></p></td></tr></tbody></table><p data-blockid="da994f44-790f-440d-88ac-95fc48712e08"><a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/fantasticit">https://github.com/fantasticit</a></p><p data-blockid="59020428-44f8-495d-99ef-4a85008928ea"><a target="_blank" rel="noopener noreferrer nofollow" href="https://player.bilibili.com/player.html?aid=346741856&amp;bvid=BV1FR4y1976H&amp;cid=864641522&amp;page=1">https://player.bilibili.com/player.html?aid=346741856&amp;bvid=BV1FR4y1976H&amp;cid=864641522&amp;page=1</a></p><iframe class="iframe" data-blockid="53ad3bee-7149-468e-aa3f-c3d630d1b0d2" width="100%" height="66"></iframe><p data-blockid="3deefd92-2714-40f5-94d4-7cbb26a5190b"></p>\n',extensions:FullExtensions,userProvider,fileProvider},react.createElement("div",null,editor&&react.createElement(react.Fragment,null,react.createElement(heading.S,{editor}),react.createElement(bold.f,{editor}),react.createElement(italic.H,{editor}),react.createElement(underline.n,{editor}),react.createElement(strike.x,{editor}),react.createElement(blockquote._,{editor}),react.createElement(code.EE,{editor}),react.createElement(code_block.s,{editor}),react.createElement(subscript.Z,{editor}),react.createElement(superscript.n,{editor}),react.createElement(text_align.h,{editor}),react.createElement(extensions_link.h0,{editor}),react.createElement(extensions_link.dC,{editor}),react.createElement(iframe.YB,{editor}),react.createElement(iframe.Jx,{editor}),react.createElement(mind.aH,{editor}),react.createElement(mind.Ge,{editor}),react.createElement(flow.Ck,{editor}),react.createElement(flow.Ru,{editor}),react.createElement(excalidraw.Vr,{editor}),react.createElement(excalidraw.oi,{editor}),react.createElement(horizontal_rule.U,{editor}),react.createElement(extensions_image.a$,{editor}),react.createElement(extensions_image.El,{editor}),react.createElement(extensions_status.F,{editor}),react.createElement(table.PS,{editor}),react.createElement(table.ze,{editor}),react.createElement(ColumnsStaticMenu,{editor})))))};Full.parameters={storySource:{source:'() => {\n  const [editor, setEditor] = useState<Editor | null>(null);\n\n  return (\n    <div>\n      <EditorRender\n        ref={setEditor}\n        schema="block+"\n        content={FullContent}\n        extensions={FullExtensions}\n        userProvider={userProvider}\n        fileProvider={fileProvider}>\n        <div>\n          {editor && (\n            <>\n              <HeadingStaticMenu editor={editor} />\n              <BoldStaticMenu editor={editor} />\n              <ItalicStaticMenu editor={editor} />\n              <UnderlineStaticMenu editor={editor} />\n              <StrikeStaticMenu editor={editor} />\n              <BlockquoteStaticMenu editor={editor} />\n              <CodeStaticMenu editor={editor} />\n              <CodeBlockStaticMenu editor={editor} />\n              <SubscriptStaticMenu editor={editor} />\n              <SuperscriptStaticMenu editor={editor} />\n\n              <TextAlignStaticMenu editor={editor} />\n\n              <LinkStaticMenu editor={editor} />\n              <LinkBubbleMenu editor={editor} />\n\n              <IframeStaticMenu editor={editor} />\n              <IframeBubbleMenu editor={editor} />\n\n              <MindStaticMenu editor={editor} />\n              <MindBubbleMenu editor={editor} />\n\n              <FlowStaticMenu editor={editor} />\n              <FlowBubbleMenu editor={editor} />\n\n              <ExcalidrawStaticMenu editor={editor} />\n              <ExcalidrawBubbleMenu editor={editor} />\n\n              <HorizontalRuleStaticMenu editor={editor} />\n\n              <ImageStaticMenu editor={editor} />\n              <ImageBubbleMenu editor={editor} />\n\n              <StatusStaticMenu editor={editor} />\n\n              <TableStaticMenu editor={editor} />\n              <TableBubbleMenu editor={editor} />\n\n              <ColumnsStaticMenu editor={editor} />\n            </>\n          )}\n        </div>\n      </EditorRender>\n    </div>\n  );\n}'},...Full.parameters};const __namedExportsOrder=["Full"]},"./src/components/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.6_v5ja746gkdtknuc6tj46sve3be/node_modules/styled-components/dist/styled-components.browser.esm.js");const SizeMap={small:4,normal:6,large:10},StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.button`
  margin: 0;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: ${props=>props.size?SizeMap[props.size]:6}px;
  background: ${props=>"normal"!==props.buttonType?props.theme[props.buttonType]:"transparent"};
  border: 0 solid transparent;
  border-radius: 2px;

  box-shadow: none;
  outline: none;

  user-select: none;
  cursor: pointer;

  color: ${props=>"normal"===props.buttonType?"hsl(214deg 11% 12% / 80%)":"#fff"};
  font-size: 14px;
  font-weight: 600;

  vertical-align: middle;
  white-space: nowrap;

  &:hover {
    background-color: ${props=>"normal"===props.buttonType?"rgb(46 50 56 / 15%)":props.theme[props.buttonType]};
  }

  ${props=>props.active&&"color: rgb(51 112 255);\n      background: rgb(51 112 255 / 10%);\n      "}
`,Button=({active,disabled,icon,size="normal",type="normal",onClick,style,children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledButton,{size,active,buttonType:type,style,disabled,onClick},icon||children)},"./src/components/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NM:()=>components_bubble_menu_BubbleMenu,zx:()=>components_button.z,JX:()=>es.JX,zH:()=>ColorPicker,iz:()=>Divider,Lt:()=>es.Lt,II:()=>es.II,gb:()=>Loading,u_:()=>es.u_,J2:()=>es.J2,ez:()=>Resizable,X2:()=>es.X2,Ph:()=>select_Select,T:()=>es.T,Vp:()=>es.Vp,FN:()=>es.FN,u:()=>tooltip.u,gq:()=>Upload});var es=__webpack_require__("./node_modules/.pnpm/@douyinfe+semi-ui@2.21.2_sfoxds7t5ydpegc3knd667wn6m/node_modules/@douyinfe/semi-ui/lib/es/index.js"),tiptap_react_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+react@2.0.0-beta.115_qcznkxrdrnvwbgjhf5yu5evfae/node_modules/@tiptap/react/dist/tiptap-react.esm.js"),tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),dist=__webpack_require__("./node_modules/.pnpm/prosemirror-state@1.4.1/node_modules/prosemirror-state/dist/index.js"),tippy_esm=__webpack_require__("./node_modules/.pnpm/tippy.js@6.3.7/node_modules/tippy.js/dist/tippy.esm.js");class BubbleMenuView{preventHide=!1;shouldShow=({view,state,from,to})=>{const{doc,selection}=state,{empty}=selection,isEmptyTextBlock=!doc.textBetween(from,to).length&&(0,tiptap_core_esm.hT)(state.selection);return!(!view.hasFocus()||empty||isEmptyTextBlock)};constructor({editor,element,view,tippyOptions={},shouldShow}){this.editor=editor,this.element=element,this.view=view,shouldShow&&(this.shouldShow=shouldShow),this.element.addEventListener("mousedown",this.mousedownHandler,{capture:!0}),this.view.dom.addEventListener("dragstart",this.dragstartHandler),this.editor.on("focus",this.focusHandler),this.editor.on("blur",this.blurHandler),this.tippyOptions=tippyOptions,this.element.remove(),this.element.style.visibility="visible"}mousedownHandler=()=>{this.preventHide=!0};dragstartHandler=()=>{this.hide()};focusHandler=()=>{setTimeout((()=>this.update(this.editor.view)))};blurHandler=({event})=>{this.preventHide?this.preventHide=!1:event?.relatedTarget&&this.element.parentNode?.contains(event.relatedTarget)||this.hide()};updateHandler=(view,oldState)=>{const{state,composing}=view,{selection}=state;if(composing)return;this.createTooltip();const{ranges}=selection,from=Math.min(...ranges.map((range=>range.$from.pos))),to=Math.max(...ranges.map((range=>range.$to.pos))),shouldShow=this.shouldShow?.({editor:this.editor,view,state,oldState,from,to});shouldShow?(this.tippy?.setProps({getReferenceClientRect:this.tippyOptions?.getReferenceClientRect||(()=>{if((0,tiptap_core_esm.EG)(state.selection)){const node=view.nodeDOM(from);if(node)return node.getBoundingClientRect()}return(0,tiptap_core_esm.pr)(view,from,to)})}),this.show()):this.hide()};createTooltip(){const{element:editorElement}=this.editor.options,editorIsAttached=!!editorElement.parentElement;!this.tippy&&editorIsAttached&&(this.tippy=(0,tippy_esm.ZP)(editorElement,{duration:0,getReferenceClientRect:null,content:this.element,interactive:!0,trigger:"manual",hideOnClick:"toggle",...this.tippyOptions}),this.tippy.popper.firstChild&&this.tippy.popper.firstChild.addEventListener("blur",(event=>{this.blurHandler({event})})))}update(view,oldState){setTimeout((()=>{this.updateHandler(view,oldState)}),0)}show(){this.tippy?.show()}hide(){this.tippy?.hide()}destroy(){this.tippy?.destroy(),this.element.removeEventListener("mousedown",this.mousedownHandler,{capture:!0}),this.view.dom.removeEventListener("dragstart",this.dragstartHandler),this.editor.off("focus",this.focusHandler),this.editor.off("blur",this.blurHandler)}}const BubbleMenuPlugin=options=>new dist.Sy({key:"string"==typeof options.pluginKey?new dist.H$(options.pluginKey):options.pluginKey,view:view=>new BubbleMenuView({view,...options})});tiptap_core_esm.hj.create({name:"bubbleMenu",addOptions:()=>({element:null,tippyOptions:{},pluginKey:"bubbleMenu",shouldShow:null}),addProseMirrorPlugins(){return this.options.element?[BubbleMenuPlugin({pluginKey:this.options.pluginKey,editor:this.editor,element:this.options.element,tippyOptions:this.options.tippyOptions,shouldShow:this.options.shouldShow})]:[]}});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");const react_bubble_menu_BubbleMenu=props=>{const[element,setElement]=(0,react.useState)(null);return(0,react.useEffect)((()=>{if(!element)return;if(props.editor.isDestroyed)return;const{pluginKey="bubbleMenu",editor,tippyOptions={},shouldShow=null}=props,plugin=BubbleMenuPlugin({pluginKey,editor,element,tippyOptions,shouldShow});return editor.registerPlugin(plugin),()=>editor.unregisterPlugin(pluginKey)}),[props.editor,element]),react.createElement("div",{ref:setElement,className:props.className,style:{visibility:"hidden"}},props.children)};try{react_bubble_menu_BubbleMenu.displayName="BubbleMenu",react_bubble_menu_BubbleMenu.__docgenInfo={description:"",displayName:"BubbleMenu",props:{editor:{defaultValue:null,description:"",name:"editor",required:!0,type:{name:"Editor"}},pluginKey:{defaultValue:null,description:"",name:"pluginKey",required:!1,type:{name:"string | PluginKey<any>"}},tippyOptions:{defaultValue:null,description:"",name:"tippyOptions",required:!1,type:{name:"Partial<Props>"}},shouldShow:{defaultValue:null,description:"",name:"shouldShow",required:!1,type:{name:"(props: { editor: Editor; view: EditorView; state: EditorState; oldState?: EditorState; from: number; to: number; }) => boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/react-bubble-menu/index.tsx#BubbleMenu"]={docgenInfo:react_bubble_menu_BubbleMenu.__docgenInfo,name:"BubbleMenu",path:"src/components/react-bubble-menu/index.tsx#BubbleMenu"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const defaultTippyOptions={maxWidth:450,duration:200,animation:"shift-toward-subtle",moveTransition:"transform 0.2s ease-in-out",zIndex:__webpack_require__("./src/constants.ts").l1,arrow:!1,theme:"bubble-menu",showOnCreate:!1,placement:"top"},components_bubble_menu_BubbleMenu=({editor,tippyOptions,forNode,children,...rest})=>{const wrapTippyOptions=(0,react.useMemo)((()=>"object"==typeof tippyOptions?{...defaultTippyOptions,...tippyOptions,theme:`bubble-menu ${tippyOptions.theme}`,appendTo:()=>editor.options.element}:{...defaultTippyOptions,appendTo:()=>editor.options.element}),[editor,tippyOptions]);return forNode?react.createElement(react_bubble_menu_BubbleMenu,_extends({editor,tippyOptions:wrapTippyOptions},rest),children):react.createElement(react.Fragment,null,react.createElement(tiptap_react_esm.NM,_extends({editor,tippyOptions:wrapTippyOptions},rest),children))};var styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.6_v5ja746gkdtknuc6tj46sve3be/node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledEmptyWrap=styled_components_browser_esm.ZP.div`
  display: flex;
  cursor: pointer;
  border: 1px solid transparent;
  flex-wrap: nowrap;

  &:hover {
    background-color: var(--semi-color-fill-1);
  }

  > span:first-child {
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
    margin: 0 8px 0 1px;
    border: 1px solid #e8e8e8;
    border-radius: 2px;

    &::after {
      position: absolute;
      top: 8px;
      left: 0;
      display: block;
      width: 17px;
      height: 0;
      content: "";
      transform: rotate(45deg);
      border-bottom: 2px solid #ff5151;
    }
  }
`,StyledColorWrap=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`,StyledColorItemWrap=styled_components_browser_esm.ZP.div`
  display: flex;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  justify-content: center;
  align-items: center;

  &:nth-of-type(n + 11) {
    margin-top: 4px;
  }

  &:hover {
    border-color: rgb(193 199 208);
  }

  > span {
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid var(--semi-color-border);
    border-radius: 2px;
  }
`;try{StyledEmptyWrap.displayName="StyledEmptyWrap",StyledEmptyWrap.__docgenInfo={description:"",displayName:"StyledEmptyWrap",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement) => void) | RefObject<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/color-picker/style.tsx#StyledEmptyWrap"]={docgenInfo:StyledEmptyWrap.__docgenInfo,name:"StyledEmptyWrap",path:"src/components/color-picker/style.tsx#StyledEmptyWrap"})}catch(__react_docgen_typescript_loader_error){}try{StyledColorWrap.displayName="StyledColorWrap",StyledColorWrap.__docgenInfo={description:"",displayName:"StyledColorWrap",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement) => void) | RefObject<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/color-picker/style.tsx#StyledColorWrap"]={docgenInfo:StyledColorWrap.__docgenInfo,name:"StyledColorWrap",path:"src/components/color-picker/style.tsx#StyledColorWrap"})}catch(__react_docgen_typescript_loader_error){}try{StyledColorItemWrap.displayName="StyledColorItemWrap",StyledColorItemWrap.__docgenInfo={description:"",displayName:"StyledColorItemWrap",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement) => void) | RefObject<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/color-picker/style.tsx#StyledColorItemWrap"]={docgenInfo:StyledColorItemWrap.__docgenInfo,name:"StyledColorItemWrap",path:"src/components/color-picker/style.tsx#StyledColorItemWrap"})}catch(__react_docgen_typescript_loader_error){}const colors=["#000000","#262626","#595959","#8C8C8C","#BFBFBF","#D9D9D9","#E9E9E9","#F5F5F5","#FAFAFA","#FFFFFF","#F5222D","#FA541C","#FA8C16","#FADB14","#52C41A","#13C2C2","#1890FF","#2F54EB","#722ED1","#EB2F96","#FFE8E6","#FFECE0","#FFEFD1","#FCFCCA","#E4F7D2","#D3F5F0","#D4EEFC","#DEE8FC","#EFE1FA","#FAE1EB","#FFA39E","#FFBB96","#FFD591","#FFFB8F","#B7EB8F","#87E8DE","#91D5FF","#ADC6FF","#D3ADF7","#FFADD2","#FF4D4F","#FF7A45","#FFA940","#FFEC3D","#73D13D","#36CFC9","#40A9FF","#597EF7","#9254DE","#F759AB","#CF1322","#D4380D","#D46B08","#D4B106","#389E0D","#08979C","#096DD9","#1D39C4","#531DAB","#C41D7F","#820014","#871400","#873800","#614700","#135200","#00474F","#003A8C","#061178","#22075E","#780650"],ColorPicker=({children,title="颜色管理",onSetColor,disabled=!1})=>{const[visible,toggleVisible]=(0,react.useState)(!1),content=(0,react.useMemo)((()=>visible?react.createElement("div",{style:{padding:"12px 16px",width:272}},react.createElement(StyledEmptyWrap,{onClick:()=>onSetColor(null)},react.createElement("span",null),react.createElement("span",null,"无颜色")),react.createElement(StyledColorWrap,null,colors.map((color=>react.createElement(StyledColorItemWrap,{key:color,onClick:()=>onSetColor(color)},react.createElement("span",{style:{backgroundColor:color}})))))):null),[onSetColor,visible]);return disabled?react.createElement("span",{style:{display:"inline-block"}},children):react.createElement("span",null,react.createElement(es.Lt,{visible,onVisibleChange:toggleVisible,zIndex:1e4,trigger:"click",position:"bottomLeft",render:content},react.createElement("span",{style:{display:"inline-block"}},children)))};var tooltip=__webpack_require__("./src/components/tooltip.tsx");__webpack_require__("./node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js");var components_button=__webpack_require__("./src/components/button.tsx");const StyledDiv=styled_components_browser_esm.ZP.div`
  display: inline-block;
  width: 1px;
  height: 18px;
  background: #dee0e3;
`,divider_Divider=({vertical=!1,margin=2})=>react.createElement(StyledDiv,{style:{margin:`0 ${margin}px`,transform:`rotate(${vertical?90:0}deg)`}}),Divider=react.memo(divider_Divider,((prevProps,nextProps)=>prevProps.vertical===nextProps.vertical));try{divider_Divider.displayName="_Divider",divider_Divider.__docgenInfo={description:"",displayName:"_Divider",props:{vertical:{defaultValue:{value:"false"},description:"",name:"vertical",required:!1,type:{name:"boolean"}},margin:{defaultValue:{value:"2"},description:"",name:"margin",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/divider.tsx#_Divider"]={docgenInfo:divider_Divider.__docgenInfo,name:"_Divider",path:"src/components/divider.tsx#_Divider"})}catch(__react_docgen_typescript_loader_error){}function select_extends(){return select_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},select_extends.apply(this,arguments)}function select_Select(props){const{editor,value,options,onChange,...rest}=props,getPopupContainer=(0,react.useCallback)((()=>editor.options.element),[editor]);return react.createElement(es.Ph,select_extends({getPopupContainer,value,onChange,size:"small"},rest),options.map((option=>react.createElement(es.Ph.Option,{key:option.value,value:option.value},option.label))))}try{select_Select.displayName="Select",select_Select.__docgenInfo={description:"",displayName:"Select",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/select.tsx#Select"]={docgenInfo:select_Select.__docgenInfo,name:"Select",path:"src/components/select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}var lib=__webpack_require__("./node_modules/.pnpm/re-resizable@6.9.9_sfoxds7t5ydpegc3knd667wn6m/node_modules/re-resizable/lib/index.js"),utilities=__webpack_require__("./src/utilities/index.ts");function resizable_extends(){return resizable_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},resizable_extends.apply(this,arguments)}const Resizable=({editor,width,height,aspectRatio,minWidth,getPos,onResizeStop,children})=>{const onResize=(0,react.useMemo)((()=>(0,utilities.P2)((()=>{const{view,state}=editor,tr=editor.state.tr,$pos=state.doc.resolve(getPos());tr.setSelection(dist.qv.near($pos)),tr.setMeta("addToHistory",!1),view.dispatch(tr)}),200)),[editor,getPos]),resizeStop=(0,react.useCallback)(((event,direction,element)=>{const width=parseInt(element.style.width),height=parseInt(element.style.height);onResizeStop({width,height})}),[onResizeStop]);return react.createElement(lib.e,resizable_extends({className:"resizable",size:{width,height},onResize,onResizeStop:resizeStop},aspectRatio?{lockAspectRatio:aspectRatio}:{},minWidth?{minWidth}:{}),children)};var provider=__webpack_require__("./src/editor/provider.ts"),index_modern=__webpack_require__("./node_modules/.pnpm/browser-fs-access@0.31.1/node_modules/browser-fs-access/dist/index.modern.js");const Upload=({editor,mimeTypes,onOK})=>{const getFile=(0,react.useCallback)((async()=>{const blob=await(0,index_modern.I$)({mimeTypes}),editorProvider=(0,provider.z)(editor),url=await editorProvider.fileProvider.uploadFile(blob);onOK(url)}),[editor,mimeTypes,onOK]);return react.createElement("div",null,react.createElement(es.II,{placeholder:"请输入图片地址",onChange:onOK}),react.createElement(components_button.z,{type:"primary",onClick:getFile,style:{marginTop:12}},"上传本地图片"))},LoadingWrapStyle={height:32,display:"flex",alignItems:"center",justifyContent:"center"},Loading=()=>react.createElement("div",{style:LoadingWrapStyle},react.createElement(es.yC,null));try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/index.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"src/components/index.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}try{Space.displayName="Space",Space.__docgenInfo={description:"",displayName:"Space",props:{wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:"boolean"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"baseline"'}]}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:'number | "loose" | "medium" | "tight" | Spacing[]'}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/index.tsx#Space"]={docgenInfo:Space.__docgenInfo,name:"Space",path:"src/components/index.tsx#Space"})}catch(__react_docgen_typescript_loader_error){}try{components.displayName="components",components.__docgenInfo={description:"",displayName:"components",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/index.tsx#components"]={docgenInfo:components.__docgenInfo,name:"components",path:"src/components/index.tsx#components"})}catch(__react_docgen_typescript_loader_error){}try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/index.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/index.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}try{_Divider.displayName="_Divider",_Divider.__docgenInfo={description:"",displayName:"_Divider",props:{vertical:{defaultValue:{value:"false"},description:"",name:"vertical",required:!1,type:{name:"boolean"}},margin:{defaultValue:{value:"2"},description:"",name:"margin",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/index.tsx#_Divider"]={docgenInfo:_Divider.__docgenInfo,name:"_Divider",path:"src/components/index.tsx#_Divider"})}catch(__react_docgen_typescript_loader_error){}try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/index.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/index.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),tippy_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/tippy.js@6.3.7/node_modules/tippy.js/dist/tippy.esm.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants.ts");const Tooltip=({editor,title,zLevel="middle",placement="top",children})=>{const[element,setElement]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),zIndex=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{switch(zLevel){case"highest":return _constants__WEBPACK_IMPORTED_MODULE_1__.DA;case"middle":return _constants__WEBPACK_IMPORTED_MODULE_1__.t_;default:return _constants__WEBPACK_IMPORTED_MODULE_1__.l1}}),[zLevel]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!element)return;const popup=(0,tippy_js__WEBPACK_IMPORTED_MODULE_2__.ZP)(element,{appendTo:()=>editor.options.element,theme:"tooltip",content:title,zIndex,placement});return()=>{popup.destroy()}}),[editor,element,title,zIndex,placement]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{ref:setElement},children))}},"./src/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{DA:()=>ZINDEX_HIGHEST,V4:()=>ZOOM_STEP,Zj:()=>MIN_ZOOM,l1:()=>ZINDEX_DEFAULT,sZ:()=>MAX_ZOOM,t_:()=>ZINDEX_MIDDLE,tc:()=>EXTENSION_PRIORITY_HIGHEST});const EXTENSION_PRIORITY_HIGHEST=200,ZINDEX_DEFAULT=10,ZINDEX_MIDDLE=1500,ZINDEX_HIGHEST=1e4,MIN_ZOOM=.1,MAX_ZOOM=2,ZOOM_STEP=.15},"./src/editor/provider.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>getEditorProvider});const getEditorProvider=editor=>editor.options.editorProps.editorProvider},"./src/editor/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>getEditorTheme});const getEditorTheme=editor=>editor.options.editorProps.theme},"./src/extensions/blockquote/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>Blockquote,_:()=>BlockquoteStaticMenu});var tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),tiptap_extension_blockquote_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-blockquote@2.0.0-beta.29_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-blockquote/dist/tiptap-extension-blockquote.esm.js");const multilineInputRegex=/^\s*>>>\s$/gm,Blockquote=tiptap_extension_blockquote_esm.V6.extend({addInputRules(){return[...this.parent?.(),(0,tiptap_core_esm.S0)({find:multilineInputRegex,type:this.type,getAttributes:()=>({multiline:!0})})]}});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),tooltip=__webpack_require__("./src/components/tooltip.tsx"),components_button=__webpack_require__("./src/components/button.tsx"),icons=__webpack_require__("./src/icons/index.tsx"),use_active=__webpack_require__("./src/hooks/use-active.tsx");const BlockquoteStaticMenu=({editor})=>{const isBlockquoteActive=(0,use_active.t)(editor,Blockquote.name),toggleBlockquote=(0,react.useCallback)((()=>editor.chain().focus().toggleBlockquote().run()),[editor]);return react.createElement(tooltip.u,{title:"引用",editor},react.createElement(components_button.z,{active:isBlockquoteActive,icon:react.createElement(icons.K9,null),onClick:toggleBlockquote}))}},"./src/extensions/bold/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>tiptap_extension_bold_esm.d8,f:()=>BoldStaticMenu});var tiptap_extension_bold_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-bold@2.0.0-beta.28_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-bold/dist/tiptap-extension-bold.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),components=__webpack_require__("./src/components/index.tsx"),icons=__webpack_require__("./src/icons/index.tsx"),use_active=__webpack_require__("./src/hooks/use-active.tsx");const BoldStaticMenu=({editor})=>{const isBoldActive=(0,use_active.t)(editor,tiptap_extension_bold_esm.d8.name),toggleBold=(0,react.useCallback)((()=>editor.chain().focus().toggleBold().run()),[editor]);return react.createElement(components.u,{title:"粗体",editor},react.createElement(components.zx,{icon:react.createElement(icons.lM,null),onClick:toggleBold,active:isBoldActive}))}},"./src/extensions/bullet-list/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>tiptap_extension_bullet_list_esm.DY});var tiptap_extension_bullet_list_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-bullet-list@2.0.0-beta.29_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-bullet-list/dist/tiptap-extension-bullet-list.esm.js")},"./src/extensions/code-block/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>CodeBlock,s:()=>CodeBlockStaticMenu});var tiptap_extension_code_block_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-code-block@2.0.0-beta.42_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-code-block/dist/tiptap-extension-code-block.esm.js"),tiptap_react_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+react@2.0.0-beta.115_qcznkxrdrnvwbgjhf5yu5evfae/node_modules/@tiptap/react/dist/tiptap-react.esm.js"),lib_all=__webpack_require__("./node_modules/.pnpm/lowlight@2.7.0/node_modules/lowlight/lib/all.js"),selection=__webpack_require__("./src/prosemirror/prosemirror-utils/selection.js"),constants=__webpack_require__("./src/constants.ts"),tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),dist=__webpack_require__("./node_modules/.pnpm/prosemirror-state@1.4.1/node_modules/prosemirror-state/dist/index.js"),prosemirror_view_dist=__webpack_require__("./node_modules/.pnpm/prosemirror-view@1.26.2/node_modules/prosemirror-view/dist/index.js");function parseNodes(nodes,className=[]){return nodes.map((node=>{const classes=[...className,...node.properties?node.properties.className:[]];return node.children?parseNodes(node.children,classes):{text:node.value,classes}})).flat()}function getHighlightNodes(result){return result.value||result.children||[]}function getDecorations({doc,name,lowlight,defaultLanguage}){const decorations=[];return(0,tiptap_core_esm.N2)(doc,(node=>node.type.name===name)).forEach((block=>{let from=block.pos+1;const language=block.node.attrs.language||defaultLanguage,languages=lowlight.listLanguages();parseNodes(language&&languages.includes(language)?getHighlightNodes(lowlight.highlight(language,block.node.textContent)):getHighlightNodes(lowlight.highlightAuto(block.node.textContent))).forEach((node=>{const to=from+node.text.length;if(node.classes.length){const decoration=prosemirror_view_dist.p.inline(from,to,{class:node.classes.join(" ")});decorations.push(decoration)}from=to}))})),prosemirror_view_dist.EH.create(doc,decorations)}function LowlightPlugin({name,lowlight,defaultLanguage}){if(!["highlight","highlightAuto","listLanguages"].every((api=>function isFunction(param){return"function"==typeof param}(lowlight[api]))))throw Error("You should provide an instance of lowlight to use the code-block-lowlight extension");const lowlightPlugin=new dist.Sy({key:new dist.H$("lowlight"),state:{init:(_,{doc})=>getDecorations({doc,name,lowlight,defaultLanguage}),apply:(transaction,decorationSet,oldState,newState)=>{const oldNodeName=oldState.selection.$head.parent.type.name,newNodeName=newState.selection.$head.parent.type.name,oldNodes=(0,tiptap_core_esm.N2)(oldState.doc,(node=>node.type.name===name)),newNodes=(0,tiptap_core_esm.N2)(newState.doc,(node=>node.type.name===name));return transaction.docChanged&&([oldNodeName,newNodeName].includes(name)||newNodes.length!==oldNodes.length||transaction.steps.some((step=>void 0!==step.from&&void 0!==step.to&&oldNodes.some((node=>node.pos>=step.from&&node.pos+node.node.nodeSize<=step.to)))))?getDecorations({doc:transaction.doc,name,lowlight,defaultLanguage}):decorationSet.map(transaction.mapping,transaction.doc)}},props:{decorations:state=>lowlightPlugin.getState(state)}});return lowlightPlugin}var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.6_v5ja746gkdtknuc6tj46sve3be/node_modules/styled-components/dist/styled-components.browser.esm.js"),icons=__webpack_require__("./src/icons/index.tsx"),components=__webpack_require__("./src/components/index.tsx"),utilities=__webpack_require__("./src/utilities/index.ts");const StyledToolbar=styled_components_browser_esm.ZP.div`
  display: flex;
  justify-content: space-between;

  font-size: 0;
  padding: 6px 12px;
  border: 1px solid ${props=>props.theme.codeBlockBorderColor};
  border-bottom: 0;
`,StyledContent=styled_components_browser_esm.ZP.div`
  border: 1px solid ${props=>props.theme.codeBlockBorderColor};
`,CodeBlockView=({editor,node:{attrs},updateAttributes,extension})=>{const isEditable=editor.isEditable,{language:defaultLanguage}=attrs,$container=(0,react.useRef)(null),languages=(0,react.useMemo)((()=>[{label:"auto",value:"auto"},...extension.options.lowlight.listLanguages().map((lang=>({label:lang,value:lang})))]),[extension]),getPopupContainer=(0,react.useCallback)((()=>editor?editor.options.element:document.body),[editor]);return react.createElement(tiptap_react_esm.T5,{style:{position:"relative"}},react.createElement(StyledToolbar,null,react.createElement(components.Ph,{editor,value:defaultLanguage||"auto",options:languages,onChange:value=>updateAttributes({language:value}),disabled:!isEditable,getPopupContainer}),react.createElement(components.u,{title:"复制",editor},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.vU,null),onClick:()=>(0,utilities.JG)($container?.current?.innerText)}))),react.createElement(StyledContent,null,react.createElement("pre",{ref:$container},react.createElement(tiptap_react_esm.ms,{as:"code"}))))},CodeBlock=tiptap_extension_code_block_esm.ZP.extend({draggable:!0,priority:constants.tc,addOptions(){return{...this.parent?.(),lowlight:{},defaultLanguage:null}},addNodeView:()=>(0,tiptap_react_esm.fW)(CodeBlockView),addProseMirrorPlugins(){return[...this.parent?.()||[],LowlightPlugin({name:this.name,lowlight:this.options.lowlight,defaultLanguage:this.options.defaultLanguage})]},addKeyboardShortcuts(){return{...this?.parent?.(),Enter:({editor})=>{if(!(0,selection.Kk)((node=>node.type===editor.view.state.schema.nodes.codeBlock))(editor.state.selection))return!1;const{$from}=editor.state.selection,isAtEnd=$from.parentOffset===$from.parent.nodeSize-2,endsWithDoubleNewline=$from.parent.textContent.endsWith("\n\n");return isAtEnd&&endsWithDoubleNewline?editor.chain().command((({tr})=>(tr.delete($from.pos-2,$from.pos),!0))).exitCode().run():editor.commands.newlineInCode()}}}}).configure({lowlight:lib_all.$,defaultLanguage:"auto"});var use_active=__webpack_require__("./src/hooks/use-active.tsx");const CodeBlockStaticMenu=({editor})=>{const isCodeBlockActive=(0,use_active.t)(editor,CodeBlock.name),toggleCodeBlock=(0,react.useCallback)((()=>editor.chain().focus().toggleCodeBlock().run()),[editor]);return react.createElement(components.u,{title:"代码块",editor},react.createElement(components.zx,{icon:react.createElement(icons.Zw,null),onClick:toggleCodeBlock,active:isCodeBlockActive}))}},"./src/extensions/code/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Qj:()=>CodeExtensions,EE:()=>CodeStaticMenu});var tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),tiptap_extension_code_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-code@2.0.0-beta.29_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-code/dist/tiptap-extension-code.esm.js"),esm=__webpack_require__("./node_modules/.pnpm/prosemirror-codemark@0.4.1_bu4iig4iw2h57l7q3urmp4jkce/node_modules/prosemirror-codemark/dist/esm/index.js");const Code=tiptap_extension_code_esm.ZP.extend({}),CodeMarkPlugin=tiptap_core_esm.hj.create({name:"codemarkPlugin",addProseMirrorPlugins(){return(0,esm.Z)({markType:this.editor.schema.marks.code})}}),CodeExtensions=[Code,CodeMarkPlugin];var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),components=__webpack_require__("./src/components/index.tsx"),icons=__webpack_require__("./src/icons/index.tsx"),use_active=__webpack_require__("./src/hooks/use-active.tsx");const CodeStaticMenu=({editor})=>{const isCodeActive=(0,use_active.t)(editor,Code.name),toggleCode=(0,react.useCallback)((()=>editor.chain().focus().toggleCode().run()),[editor]);return react.createElement(components.u,{title:"行内代码",editor},react.createElement(components.zx,{icon:react.createElement(icons.se,null),onClick:toggleCode,active:isCodeActive}))}},"./src/extensions/dragable/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>Dragable});var tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),dist=__webpack_require__("./node_modules/.pnpm/prosemirror-state@1.4.1/node_modules/prosemirror-state/dist/index.js"),prosemirror_view_dist=__webpack_require__("./node_modules/.pnpm/prosemirror-view@1.26.2/node_modules/prosemirror-view/dist/index.js"),utilities=__webpack_require__("./src/utilities/index.ts");function dropPoint(doc,pos,slice){const $pos=doc.resolve(pos);if(!slice.content.size)return pos;let content=slice.content;for(let i=0;i<slice.openStart;i++)content=content.firstChild.content;for(let pass=1;pass<=(0==slice.openStart&&slice.size?2:1);pass++)for(let d=$pos.depth;d>=0;d--){const bias=d==$pos.depth?0:$pos.pos<=($pos.start(d+1)+$pos.end(d+1))/2?-1:1,insertPos=$pos.index(d)+(bias>0?1:0),parent=$pos.node(d);let fits=!1;if(1==pass)fits=parent.canReplace(insertPos,insertPos,content);else{const wrapping=parent.contentMatchAt(insertPos).findWrapping(content.firstChild.type);fits=wrapping&&parent.canReplaceWith(insertPos,insertPos,wrapping[0])}if(fits)return 0==bias?$pos.pos:bias<0?$pos.before(d+1):$pos.after(d+1)}return null}const nodeIsNotBlock=node=>!node.type.isBlock,nodeIsFirstChild=pos=>{let parent=pos.parent;const node=pos.node();return parent===node&&(parent=pos.node(pos.depth-1)),!(!parent||"doc"===parent.type.name)&&parent.firstChild===node},DragablePluginKey=new dist.H$("dragable"),Dragable=tiptap_core_esm.hj.create({name:"dragable",addProseMirrorPlugins(){let editorView,dragHandleDOM,activeNode,activeSelection,dragging=!1;const hideDragHandleDOM=()=>{dragHandleDOM.classList.remove("show"),dragHandleDOM.classList.add("hide")},renderDragHandleDOM=(view,el)=>{const root=view.dom.parentElement;if(!root)return;for(;el&&el.parentElement&&!el.parentElement.classList.contains("ProseMirror");)el=el.parentElement;const targetNodeRect=el.getBoundingClientRect(),rootRect=root.getBoundingClientRect(),handleRect=dragHandleDOM.getBoundingClientRect(),left=targetNodeRect.left-rootRect.left-handleRect.width-handleRect.width/2,top=targetNodeRect.top-rootRect.top+handleRect.height/2+root.scrollTop;dragHandleDOM.style.left=left-2+"px",dragHandleDOM.style.top=top-2+"px",dragHandleDOM.classList.add("show"),dragHandleDOM.classList.remove("hide")},handleMouseDown=()=>{if(!activeNode)return null;if(dist.qv.isSelectable(activeNode.node)){const nodeSelection=dist.qv.create(editorView.state.doc,activeNode.$pos.pos-activeNode.offset);return editorView.dispatch(editorView.state.tr.setSelection(nodeSelection)),editorView.focus(),activeSelection=nodeSelection,nodeSelection}return null},handleMouseUp=()=>{dragging&&(dragging=!1,activeSelection=null)},handleDragStart=event=>{if(dragging=!0,event.dataTransfer&&activeSelection){const slice=activeSelection.content();event.dataTransfer.effectAllowed="copyMove";const{dom,text}=(0,prosemirror_view_dist.aV)(editorView,slice);event.dataTransfer.clearData(),event.dataTransfer.setData("text/html",dom.innerHTML),event.dataTransfer.setData("text/plain",text),editorView.dragging={slice,move:!0}}};return[new dist.Sy({key:DragablePluginKey,view:view=>(view.editable&&(dragHandleDOM=(()=>{const dom=document.createElement("div");return dom.draggable=!0,dom.setAttribute("data-drag-handle","true"),dom})(),dragHandleDOM.addEventListener("mousedown",handleMouseDown),dragHandleDOM.addEventListener("mouseup",handleMouseUp),dragHandleDOM.addEventListener("dragstart",handleDragStart),view.dom.parentNode?.appendChild(dragHandleDOM)),{update(view){editorView=view},destroy:()=>{dragHandleDOM&&(dragHandleDOM.removeEventListener("mousedown",handleMouseDown),dragHandleDOM.removeEventListener("mouseup",handleMouseUp),dragHandleDOM.removeEventListener("dragstart",handleDragStart),dragHandleDOM.remove())}}),props:{handleDOMEvents:{drop:(view,event)=>{if(!view.editable||!dragHandleDOM)return!1;const eventPos=view.posAtCoords({left:event.clientX,top:event.clientY});if(!eventPos)return!0;if("title"===view.state.doc.resolve(eventPos.pos)?.parent?.type?.name)return!0;if(dragging){const tr=((view,event)=>{const{state}=view,$pos=state.selection.$anchor;for(let d=$pos.depth;d>0;d--)if("table"==$pos.node(d).type.spec.tableRole){const eventPos=view.posAtCoords({left:event.clientX,top:event.clientY});if(!eventPos)return null;const slice=view.dragging?.slice;if(!slice)return null;const $mouse=view.state.doc.resolve(eventPos.pos),insertPos=dropPoint(view.state.doc,$mouse.pos,slice);if(!insertPos)return null;let tr=state.tr;tr=tr.delete($pos.before(d),$pos.after(d));const pos=tr.mapping.map(insertPos);return tr=tr.replaceRange(pos,pos,slice).scrollIntoView(),tr}return null})(view,event);if(dragging=!1,tr)return view.dispatch(tr),event.preventDefault(),!0}return!1},mousemove:(view,event)=>{if(!view.editable||!dragHandleDOM)return!1;const dom=event.target;if(!(dom instanceof Element))return dragging||hideDragHandleDOM(),!1;const result=((dom,view)=>{const root=view.dom.parentElement;if(!root)return null;let pos=view.posAtDOM(dom,0);if("IMG"===dom.tagName&&(pos-=1),0===pos)return null;let $pos=view.state.doc.resolve(pos),node=$pos.node();if("doc"===node.type.name){const nodeAtPos=view.state.doc.nodeAt(pos);if(nodeAtPos&&"doc"!==nodeAtPos.type.name&&"text"!==nodeAtPos.type.name)return node=nodeAtPos,$pos=view.state.doc.resolve(pos),{node,$pos,el:view.nodeDOM(pos),offset:0}}for(;node&&(nodeIsNotBlock(node)||nodeIsFirstChild($pos));)$pos=view.state.doc.resolve($pos.before()),node=$pos.node();if(node.type.name.includes("table"))for(;"table"!==node.type.name;)$pos=view.state.doc.resolve($pos.before()),node=$pos.node();$pos=view.state.doc.resolve($pos.pos-$pos.parentOffset);const el=((view,root,$pos)=>{const{node}=view.domAtPos($pos.pos);let el=node,parent=el.parentElement;for(;parent&&parent!==root&&$pos.pos===view.posAtDOM(parent,0);)el=parent,parent=parent.parentElement;return el})(view,root,$pos);return{node,$pos,el,offset:1}})(dom,view);if(!result||"doc"===result.node.type.name||"title"===result.node.type.name||"tableOfContents"===result.node.type.name||"column"===result.node.type.name||"paragraph"===result.node.type.name&&2===result.node.nodeSize)return dragging||hideDragHandleDOM(),!1;if("paragraph"===result.node.type.name){const{$from,to}=view.state.selection,same=$from.sharedDepth(to);if(0!=same){const pos=$from.before(same),parent=(0,utilities.zT)(view.state,pos);if(parent&&"paragraph"!==parent.type.name)return dragging||hideDragHandleDOM(),!1}}return activeNode=result,renderDragHandleDOM(view,result.el),!1},keydown:()=>!(!editorView.editable||!dragHandleDOM)&&(hideDragHandleDOM(),!1)}}})]}})},"./src/extensions/dropcursor/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>DropCursor});var tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),dist=__webpack_require__("./node_modules/.pnpm/prosemirror-state@1.4.1/node_modules/prosemirror-state/dist/index.js"),prosemirror_transform_dist=__webpack_require__("./node_modules/.pnpm/prosemirror-transform@1.6.0/node_modules/prosemirror-transform/dist/index.js");function dropCursor(options={}){return new dist.Sy({view:editorView=>new DropCursorView(editorView,options)})}class DropCursorView{cursorPos=null;element=null;timeout=setTimeout((()=>""),0);constructor(editorView,options){this.editorView=editorView,this.width=options.width||1,this.color=options.color||"black",this.class=options.class,this.handlers=["dragover","dragend","drop","dragleave"].map((name=>{let handler=e=>{this[name](e)};return editorView.dom.addEventListener(name,handler),{name,handler}}))}destroy(){this.handlers.forEach((({name,handler})=>this.editorView.dom.removeEventListener(name,handler)))}update(editorView,prevState){null!=this.cursorPos&&prevState.doc!=editorView.state.doc&&(this.cursorPos>editorView.state.doc.content.size?this.setCursor(null):this.updateOverlay())}setCursor(pos){pos!=this.cursorPos&&(this.cursorPos=pos,null==pos?(this.element.parentNode.removeChild(this.element),this.element=null):this.updateOverlay())}updateOverlay(){let rect,$pos=this.editorView.state.doc.resolve(this.cursorPos);if(!$pos.parent.inlineContent){let before=$pos.nodeBefore,after=$pos.nodeAfter;if(before||after){let dom$1=this.editorView.nodeDOM(this.cursorPos-(before?before.nodeSize:0));if(dom$1){for(;dom$1&&3===dom$1.nodeType&&dom$1.parentElement;)dom$1=dom$1.parentElement;let nodeRect=dom$1.getBoundingClientRect(),top=before?nodeRect.bottom:nodeRect.top;if(before&&after){let dom=this.editorView.nodeDOM(this.cursorPos);if(dom){for(;dom&&3===dom.nodeType&&dom.parentElement;)dom=dom.parentElement;dom&&(top=(top+this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top)/2)}}rect={left:nodeRect.left,right:nodeRect.right,top:top-this.width/2,bottom:top+this.width/2}}}}if(!rect){let coords=this.editorView.coordsAtPos(this.cursorPos);rect={left:coords.left-this.width/2,right:coords.left+this.width/2,top:coords.top,bottom:coords.bottom}}let parentLeft,parentTop,parent=this.editorView.dom.offsetParent;if(this.element||(this.element=parent.appendChild(document.createElement("div")),this.class&&(this.element.className=this.class),this.element.style.cssText="position: absolute; z-index: 50; pointer-events: none; background-color: "+this.color),!parent||parent==document.body&&"static"==getComputedStyle(parent).position)parentLeft=-pageXOffset,parentTop=-pageYOffset;else{let rect=parent.getBoundingClientRect();parentLeft=rect.left-parent.scrollLeft,parentTop=rect.top-parent.scrollTop}this.element.style.left=rect.left-parentLeft+"px",this.element.style.top=rect.top-parentTop+"px",this.element.style.width=rect.right-rect.left+"px",this.element.style.height=rect.bottom-rect.top+"px"}scheduleRemoval(timeout){clearTimeout(this.timeout),this.timeout=setTimeout((()=>this.setCursor(null)),timeout)}dragover(event){if(!this.editorView.editable)return;let pos=this.editorView.posAtCoords({left:event.clientX,top:event.clientY}),node=pos&&pos.inside>=0&&this.editorView.state.doc.nodeAt(pos.inside),disableDropCursor=node&&node.type.spec.disableDropCursor,disabled="function"==typeof disableDropCursor?disableDropCursor(this.editorView,pos):disableDropCursor;if(pos&&!disabled){let target=pos.pos;if(this.editorView.dragging&&this.editorView.dragging.slice&&(target=(0,prosemirror_transform_dist.nj)(this.editorView.state.doc,target,this.editorView.dragging.slice),null==target))return this.setCursor(null);this.setCursor(target),this.scheduleRemoval(5e3)}}dragend(){this.scheduleRemoval(20)}drop(){this.scheduleRemoval(20)}dragleave(event){event.target!=this.editorView.dom&&this.editorView.dom.contains(event.relatedTarget)||this.setCursor(null)}}const DropCursor=tiptap_core_esm.hj.create({name:"dropCursor",addOptions:()=>({color:"currentColor",width:1,class:void 0}),addProseMirrorPlugins(){return[dropCursor(this.options)]}}).configure({width:2,class:"dropcursor",color:"skyblue"})},"./src/extensions/excalidraw/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Eb:()=>Excalidraw,oi:()=>ExcalidrawBubbleMenu,Vr:()=>ExcalidrawStaticMenu});var tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),tiptap_react_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+react@2.0.0-beta.115_qcznkxrdrnvwbgjhf5yu5evfae/node_modules/@tiptap/react/dist/tiptap-react.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),visibility_sensor=__webpack_require__("./node_modules/.pnpm/react-visibility-sensor@5.1.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/react-visibility-sensor/dist/visibility-sensor.js"),visibility_sensor_default=__webpack_require__.n(visibility_sensor),deep_equal=__webpack_require__("./node_modules/.pnpm/deep-equal@2.0.5/node_modules/deep-equal/index.js"),deep_equal_default=__webpack_require__.n(deep_equal),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.6_v5ja746gkdtknuc6tj46sve3be/node_modules/styled-components/dist/styled-components.browser.esm.js"),icons=__webpack_require__("./src/icons/index.tsx"),components=__webpack_require__("./src/components/index.tsx"),constants=__webpack_require__("./src/constants.ts"),utilities=__webpack_require__("./src/utilities/index.ts");const StyledContainer=styled_components_browser_esm.ZP.div`
  position: relative;
  max-width: 100%;
  width: 100%;
  height: 100%;
  overflow: visible;
  line-height: 0;

  border: 1px solid ${props=>props.theme.borderColor};
  border-radius: ${props=>props.theme.borderRadius};

  overflow: hidden;
`,StyledTitleContainer=styled_components_browser_esm.ZP.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
`,StyledIconContainer=styled_components_browser_esm.ZP.span`
  display: flex;
  width: 18px;
  height: 18px;
  color: #fff;
  background-color: #f80;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
`,StyledToolbarContainer=styled_components_browser_esm.ZP.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 2;
  padding: 2px 4px;
  border: 1px solid ${props=>props.theme.borderColor};
  border-radius: ${props=>props.theme.borderRadius};
  box-shadow: ${props=>props.theme.boxShadow};
`,_ExcalidrawView=({editor,getPos,node,updateAttributes})=>{const exportToSvgRef=(0,react.useRef)(null),{data,width,height}=node.attrs,[svg,setSvg]=(0,react.useState)(null),[loading,toggleLoading]=(0,react.useState)(!0),[error,setError]=(0,react.useState)(null),[visible,toggleVisible]=(0,react.useState)(!1),[zoom,setZoom]=(0,react.useState)(.85),changeZoom=(0,react.useCallback)((type=>()=>{setZoom((currentZoom=>(0,utilities.uZ)("out"===type?currentZoom-constants.V4:currentZoom+constants.V4,constants.Zj,constants.sZ)))}),[]),onResize=(0,react.useCallback)((size=>{updateAttributes({width:size.width,height:size.height})}),[updateAttributes]),onViewportChange=(0,react.useCallback)((visible=>{visible&&toggleVisible(!0)}),[toggleVisible]);return(0,react.useEffect)((()=>{__webpack_require__.e(938).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/.pnpm/@excalidraw+excalidraw@0.12.0_sfoxds7t5ydpegc3knd667wn6m/node_modules/@excalidraw/excalidraw/main.js",23)).then((res=>{console.log(res),exportToSvgRef.current=res.exportToSvg})).catch(setError).finally((()=>toggleLoading(!1)))}),[toggleLoading,data]),(0,react.useEffect)((()=>{(async()=>{if(loading||error||!visible||!data)return;const svg=await exportToSvgRef.current(JSON.parse(data));svg.setAttribute("width","100%"),svg.setAttribute("height","100%"),svg.setAttribute("display","block"),setSvg((0,utilities.oD)(svg?.outerHTML))})()}),[data,loading,error,visible]),react.createElement(tiptap_react_esm.T5,null,react.createElement(visibility_sensor_default(),{onChange:onViewportChange},react.createElement(components.ez,{editor,getPos,width,height,minWidth:"100%",onResizeStop:onResize},react.createElement(StyledContainer,null,error&&react.createElement("div",{style:{height:"100%",maxHeight:"100%",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center"}},react.createElement("span",null,error.message||error)),loading&&react.createElement(components.gb,null),!loading&&!error&&visible&&react.createElement("div",{style:{height:"100%",maxHeight:"100%",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center",transform:`scale(${zoom})`,transition:"transform ease-in-out .2s"}},svg?react.createElement("img",{src:svg}):null),react.createElement(StyledTitleContainer,null,react.createElement(components.T,null,react.createElement(StyledIconContainer,null,react.createElement(icons.F6,null)),"绘图")),react.createElement(StyledToolbarContainer,null,react.createElement(components.T,{spacing:4},react.createElement(components.u,{editor,title:"放大"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.WM,null),onClick:changeZoom("in")})),react.createElement(components.u,{editor,title:"缩小"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.DS,null),onClick:changeZoom("out")}))))))))},ExcalidrawView=react.memo(_ExcalidrawView,((prevProps,nextProps)=>!!deep_equal_default()(prevProps.node.attrs.svg,nextProps.node.attrs))),DEFAULT_MIND_DATA=JSON.stringify({elements:[]}),Excalidraw=tiptap_core_esm.NB.create({name:"excalidraw",group:"block",selectable:!0,atom:!0,draggable:!0,inline:!1,addAttributes:()=>({createUserId:{default:null},showPickerOnCreate:{default:!1},width:{default:"100%"},height:{default:240},data:{default:DEFAULT_MIND_DATA}}),addOptions:()=>({HTMLAttributes:{class:"excalidraw"}}),parseHTML:()=>[{tag:"div[class=excalidraw]"}],renderHTML({HTMLAttributes,node}){return["div",(0,tiptap_core_esm.P1)(this.options.HTMLAttributes,HTMLAttributes)]},addCommands(){return{setExcalidraw:attrs=>({tr,commands,chain,state})=>{if((attrs=attrs||{}).data=attrs.data||DEFAULT_MIND_DATA,tr.selection?.node?.type?.name==this.name)return commands.updateAttributes(this.name,attrs);const{selection}=state,{empty}=selection,head=selection.$head;if(empty)return chain().insertContent({type:this.name,attrs}).run();return head.node(head.depth).type.name===state.schema.topNodeType.name?chain().command((({tr,dispatch,state})=>(dispatch&&tr.replaceSelectionWith(state.schema.nodes[this.name].create(attrs)).scrollIntoView(),!0))).run():chain().insertContentAt(head.after(),[{type:this.name,attrs}]).run()}}},addNodeView:()=>(0,tiptap_react_esm.fW)(ExcalidrawView),addInputRules(){return[(0,tiptap_core_esm.x2)({find:/^\$excalidraw\$$/,type:this.type,getAttributes:()=>({width:"100%"})})]}});var use_active=__webpack_require__("./src/hooks/use-active.tsx"),react_dom=__webpack_require__("./node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js");const StyledHeader=styled_components_browser_esm.ZP.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -24px;
  padding: 8px 12px;
`,modal_StyledIconContainer=styled_components_browser_esm.ZP.span`
  display: flex;
  width: 18px;
  height: 18px;
  color: #fff;
  background-color: #f80;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
`,StyledRenderContainer=styled_components_browser_esm.ZP.div`
  height: 100%;
  margin: 0 -24px;
  border-top: 1px solid ${props=>props.theme.borderColor};
`,ExcalidrawSettingModal=({editor,data:outInData,onClose})=>{const[Excalidraw,setExcalidraw]=(0,react.useState)(null),[data,setData]=(0,react.useState)({}),[initialData,setInitialData]=(0,react.useState)({elements:[],appState:{isLoading:!1},files:null}),[visible,toggleVisible]=(0,react.useState)(!0),[loading,toggleLoading]=(0,react.useState)(!0),[error,setError]=(0,react.useState)(null),renderEditor=(0,react.useCallback)((div=>{div&&__webpack_require__.e(938).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/.pnpm/@excalidraw+excalidraw@0.12.0_sfoxds7t5ydpegc3knd667wn6m/node_modules/@excalidraw/excalidraw/main.js",23)).then((res=>{setExcalidraw(res.Excalidraw)})).catch(setError).finally((()=>toggleLoading(!1)))}),[toggleLoading]),renderExcalidraw=(0,react.useCallback)((app=>{setTimeout((()=>{app.refresh()}))}),[]),onChange=(0,react.useCallback)(((elements,appState,files)=>{setData({elements,appState:{isLoading:!1},files})}),[]),save=(0,react.useCallback)((()=>{if(!Excalidraw)return toggleVisible(!1),void onClose();editor.chain().focus().setExcalidraw({data:JSON.stringify(data)}).run()}),[Excalidraw,editor,data,toggleVisible,onClose]),saveAndExit=(0,react.useCallback)((()=>{save(),toggleVisible(!1),onClose()}),[save]);return(0,react.useEffect)((()=>{outInData&&setInitialData(outInData)}),[outInData]),react.createElement(components.u_,{centered:!0,title:"绘图",fullScreen:!0,visible,okText:"保存",cancelText:"退出",motion:!1,header:react.createElement(StyledHeader,null,react.createElement(components.T,null,react.createElement(modal_StyledIconContainer,null,react.createElement(icons.F6,null)),react.createElement("strong",null,"绘图")),react.createElement(components.T,null,react.createElement(components.zx,{type:"primary",onClick:save},"保存"),react.createElement(components.zx,{onClick:saveAndExit},"保存并退出"))),footer:null},react.createElement(StyledRenderContainer,null,loading&&react.createElement(components.gb,null),error&&react.createElement("span",null,error&&error.message||"未知错误"),react.createElement("div",{style:{width:"100%",height:"100%"},ref:renderEditor},loading||error||!Excalidraw?null:react.createElement(Excalidraw,{ref:renderExcalidraw,onChange,langCode:"zh-CN",initialData}))))};var theme=__webpack_require__("./src/editor/theme.ts");const showExcalidrawEditor=(editor,dom)=>{const{view,state}=editor;let start,end,data=null;if((0,utilities.Ig)(editor,Excalidraw.name)){const attrs=editor.getAttributes(Excalidraw.name);data=JSON.parse(attrs.data)}else{const{from,to}=state.selection;start=from,end=to}const div=document.createElement("div");editor.options.element.appendChild(div),react_dom.render(react.createElement(styled_components_browser_esm.f6,{theme:(0,theme.w)(editor)},react.createElement(ExcalidrawSettingModal,{editor,data,onClose:()=>{react_dom.unmountComponentAtNode(div),div.remove()}})),div)},ExcalidrawStaticMenu=({editor})=>{const isActive=(0,use_active.t)(editor,Excalidraw.name),toggleLink=(0,react.useCallback)((()=>{showExcalidrawEditor(editor)}),[editor]);return react.createElement(components.u,{title:"绘图",editor},react.createElement(components.zx,{icon:react.createElement(icons.F6,null),onClick:toggleLink,active:isActive}))},ExcalidrawBubbleMenu=({editor})=>{const shouldShow=(0,react.useCallback)((()=>editor.isActive(Excalidraw.name)),[editor]),openEditModal=(0,react.useCallback)((()=>{showExcalidrawEditor(editor)}),[editor]);return react.createElement(components.NM,{editor,shouldShow,forNode:!0},react.createElement(components.T,{spacing:4},react.createElement(components.u,{editor,title:"编辑绘图"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.yl,null),onClick:openEditModal}))))}},"./src/extensions/flow/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Zw:()=>Flow,Ru:()=>bubble_FlowBubbleMenu,Ck:()=>FlowStaticMenu});var tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),tiptap_react_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+react@2.0.0-beta.115_qcznkxrdrnvwbgjhf5yu5evfae/node_modules/@tiptap/react/dist/tiptap-react.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),visibility_sensor=__webpack_require__("./node_modules/.pnpm/react-visibility-sensor@5.1.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/react-visibility-sensor/dist/visibility-sensor.js"),visibility_sensor_default=__webpack_require__.n(visibility_sensor),deep_equal=__webpack_require__("./node_modules/.pnpm/deep-equal@2.0.5/node_modules/deep-equal/index.js"),deep_equal_default=__webpack_require__.n(deep_equal),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.6_v5ja746gkdtknuc6tj46sve3be/node_modules/styled-components/dist/styled-components.browser.esm.js"),icons=__webpack_require__("./src/icons/index.tsx"),components=__webpack_require__("./src/components/index.tsx"),constants=__webpack_require__("./src/constants.ts"),utilities=__webpack_require__("./src/utilities/index.ts");const StyledContainer=styled_components_browser_esm.ZP.div`
  position: absolute;
  top: 0;
  left: 0;

  max-width: 100%;
  width: 100%;
  height: 100%;
  line-height: 0;

  border: 1px solid ${props=>props.theme.borderColor};
  border-radius: ${props=>props.theme.borderRadius};

  overflow: auto;
`,StyledTitleContainer=styled_components_browser_esm.ZP.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
`,StyledIconContainer=styled_components_browser_esm.ZP.span`
  display: flex;
  width: 18px;
  height: 18px;
  color: #fff;
  background-color: #f80;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
`,StyledToolbarContainer=styled_components_browser_esm.ZP.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 2;
  padding: 2px 4px;
  border: 1px solid ${props=>props.theme.borderColor};
  border-radius: ${props=>props.theme.borderRadius};
  box-shadow: ${props=>props.theme.boxShadow};
`,_FlowView=({editor,getPos,node,updateAttributes})=>{const{width,height,svg}=node.attrs,[visible,toggleVisible]=(0,react.useState)(!1),[zoom,setZoom]=(0,react.useState)(.85),changeZoom=(0,react.useCallback)((type=>()=>{setZoom((currentZoom=>(0,utilities.uZ)("out"===type?currentZoom-constants.V4:currentZoom+constants.V4,constants.Zj,constants.sZ)))}),[]),onResize=(0,react.useCallback)((size=>{updateAttributes({width:size.width,height:size.height})}),[updateAttributes]),onViewportChange=(0,react.useCallback)((visible=>{visible&&toggleVisible(!0)}),[toggleVisible]);return react.createElement(tiptap_react_esm.T5,null,react.createElement(visibility_sensor_default(),{onChange:onViewportChange},react.createElement(components.ez,{editor,getPos,width,height,minWidth:"100%",onResizeStop:onResize},react.createElement(StyledTitleContainer,null,react.createElement(components.T,null,react.createElement(StyledIconContainer,null,react.createElement(icons.uG,null)),"流程图")),react.createElement(StyledToolbarContainer,null,react.createElement(components.T,{spacing:4},react.createElement(components.u,{editor,title:"放大"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.WM,null),onClick:changeZoom("in")})),react.createElement(components.u,{editor,title:"缩小"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.DS,null),onClick:changeZoom("out")})))),react.createElement(StyledContainer,null,react.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",minHeight:"100%"}},visible&&react.createElement("div",{style:{transform:`scale(${zoom})`,transition:"transform ease-in-out .2s"}},react.createElement("img",{src:svg})))))))},FlowView=react.memo(_FlowView,((prevProps,nextProps)=>!!deep_equal_default()(prevProps.node.attrs,nextProps.node.attrs))),Flow=tiptap_core_esm.NB.create({name:"flow",group:"block",selectable:!0,atom:!0,draggable:!0,inline:!1,addAttributes:()=>({width:{default:"100%"},height:{default:240},svg:{default:""},xml:{default:""}}),addOptions:()=>({HTMLAttributes:{class:"flow"},getCreateUserId:()=>null}),parseHTML:()=>[{tag:"div[class=flow]"}],renderHTML({HTMLAttributes,node}){return["div",(0,tiptap_core_esm.P1)(this.options.HTMLAttributes,HTMLAttributes)]},addCommands(){return{setFlow:attrs=>({tr,commands,chain,state})=>{if(attrs=attrs||{},tr.selection?.node?.type?.name==this.name)return commands.updateAttributes(this.name,attrs);const{selection}=state,{empty}=selection,head=selection.$head;if(empty)return chain().insertContent({type:this.name,attrs}).run();return head.node(head.depth).type.name===state.schema.topNodeType.name?chain().command((({tr,dispatch,state})=>(dispatch&&tr.replaceSelectionWith(state.schema.nodes[this.name].create(attrs)).scrollIntoView(),!0))).run():chain().insertContentAt(head.after(),[{type:this.name,attrs}]).run()}}},addNodeView:()=>(0,tiptap_react_esm.fW)(FlowView),addInputRules(){return[(0,tiptap_core_esm.x2)({find:/^\$flow\$$/,type:this.type,getAttributes:()=>({width:"100%"})})]}});var use_active=__webpack_require__("./src/hooks/use-active.tsx"),react_dom=__webpack_require__("./node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js");const StyledHeader=styled_components_browser_esm.ZP.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -24px;
  padding: 8px 12px;
`,modal_StyledIconContainer=styled_components_browser_esm.ZP.span`
  display: flex;
  width: 18px;
  height: 18px;
  color: #fff;
  background-color: #f80;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
`,StyledRenderContainer=styled_components_browser_esm.ZP.div`
  height: 100%;
  margin: 0 -24px;
  border-top: 1px solid ${props=>props.theme.borderColor};

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`,FlowSettingModal=({editor,data:outInXml,onClose})=>{const iframeRef=(0,react.useRef)(null),exitRef=(0,react.useRef)(!1),xmlRef=(0,react.useRef)(""),[visible,toggleVisible]=(0,react.useState)(!0),postMessage=(0,react.useCallback)((msg=>{iframeRef.current&&iframeRef.current?.contentWindow?.postMessage(JSON.stringify(msg),"*")}),[]),save=(0,react.useCallback)((()=>{exitRef.current=!1,postMessage({action:"export",format:"svg",xml:xmlRef.current,spinKey:"export"})}),[]),saveAndExit=(0,react.useCallback)((()=>{exitRef.current=!0,postMessage({action:"export",format:"svg",xml:xmlRef.current,spinKey:"export"})}),[]);return(0,react.useEffect)((()=>{const handleMessage=msg=>{const data=JSON.parse(msg.data);"init"==data.event?postMessage({action:"load",autosave:1,modified:"unsavedChanges",xml:outInXml}):"autosave"==data.event?xmlRef.current=data.xml:"export"==data.event&&(editor.chain().focus().setFlow({svg:data.data,xml:xmlRef.current}).run(),exitRef.current&&(toggleVisible(!1),onClose()))};return window.addEventListener("message",handleMessage),()=>{window.removeEventListener("message",handleMessage)}}),[outInXml]),react.createElement(components.u_,{centered:!0,title:"流程图",fullScreen:!0,visible,okText:"保存",cancelText:"退出",motion:!1,header:react.createElement(StyledHeader,null,react.createElement(components.T,null,react.createElement(modal_StyledIconContainer,null,react.createElement(icons.Ts,null)),react.createElement("strong",null,"流程图")),react.createElement(components.T,null,react.createElement(components.zx,{type:"primary",onClick:save},"保存"),react.createElement(components.zx,{onClick:saveAndExit},"保存并退出"))),footer:null},react.createElement(StyledRenderContainer,null,react.createElement("iframe",{ref:iframeRef,src:"https://embed.diagrams.net/?proto=json&spin=1&ui=atalas&libraries=1&noSaveBtn=1&saveAndExit=0&noExitBtn=1"})))};var theme=__webpack_require__("./src/editor/theme.ts");const showFlowEditor=editor=>{const{state}=editor;let start,end,data;if((0,utilities.Ig)(editor,Flow.name)){data=editor.getAttributes(Flow.name).xml}else{const{from,to}=state.selection;start=from,end=to,data=""}const div=document.createElement("div");editor.options.element.appendChild(div),console.log(data),react_dom.render(react.createElement(styled_components_browser_esm.f6,{theme:(0,theme.w)(editor)},react.createElement(FlowSettingModal,{editor,data,onClose:()=>{react_dom.unmountComponentAtNode(div),div.remove()}})),div)};try{showFlowEditor.displayName="showFlowEditor",showFlowEditor.__docgenInfo={description:"",displayName:"showFlowEditor",props:{commandManager:{defaultValue:null,description:"",name:"commandManager",required:!0,type:{name:"any"}},extensionManager:{defaultValue:null,description:"",name:"extensionManager",required:!0,type:{name:"ExtensionManager"}},css:{defaultValue:null,description:"",name:"css",required:!0,type:{name:"any"}},schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"Schema<any, any>"}},view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"EditorView"}},isFocused:{defaultValue:null,description:"",name:"isFocused",required:!0,type:{name:"boolean"}},extensionStorage:{defaultValue:null,description:"",name:"extensionStorage",required:!0,type:{name:"Record<string, any>"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"EditorOptions"}},storage:{defaultValue:null,description:"Returns the editor storage.",name:"storage",required:!0,type:{name:"Record<string, any>"}},commands:{defaultValue:null,description:"An object of all registered commands.",name:"commands",required:!0,type:{name:"SingleCommands"}},chain:{defaultValue:null,description:"Create a command chain to call multiple commands at once.",name:"chain",required:!0,type:{name:"() => ChainedCommands"}},can:{defaultValue:null,description:"Check if a command or a command chain can be executed. Without executing it.",name:"can",required:!0,type:{name:"() => CanCommands"}},injectCSS:{defaultValue:null,description:"Inject CSS styles.",name:"injectCSS",required:!0,type:{name:"any"}},setOptions:{defaultValue:null,description:"Update editor options.\n@param",name:"setOptions",required:!0,type:{name:"(options?: Partial<EditorOptions>) => void"}},setEditable:{defaultValue:null,description:"Update editable state of the editor.",name:"setEditable",required:!0,type:{name:"(editable: boolean) => void"}},isEditable:{defaultValue:null,description:"Returns whether the editor is editable.",name:"isEditable",required:!0,type:{name:"boolean"}},state:{defaultValue:null,description:"Returns the editor state.",name:"state",required:!0,type:{name:"EditorState"}},registerPlugin:{defaultValue:null,description:"Register a ProseMirror plugin.\n@param \n@param",name:"registerPlugin",required:!0,type:{name:"(plugin: Plugin<any>, handlePlugins?: (newPlugin: Plugin<any>, plugins: Plugin<any>[]) => Plugin<any>[]) => void"}},unregisterPlugin:{defaultValue:null,description:"Unregister a ProseMirror plugin.\n@param",name:"unregisterPlugin",required:!0,type:{name:"(nameOrPluginKey: string | PluginKey<any>) => void"}},createExtensionManager:{defaultValue:null,description:"Creates an extension manager.",name:"createExtensionManager",required:!0,type:{name:"any"}},createCommandManager:{defaultValue:null,description:"Creates an command manager.",name:"createCommandManager",required:!0,type:{name:"any"}},createSchema:{defaultValue:null,description:"Creates a ProseMirror schema.",name:"createSchema",required:!0,type:{name:"any"}},createView:{defaultValue:null,description:"Creates a ProseMirror view.",name:"createView",required:!0,type:{name:"any"}},createNodeViews:{defaultValue:null,description:"Creates all node views.",name:"createNodeViews",required:!0,type:{name:"() => void"}},isCapturingTransaction:{defaultValue:null,description:"",name:"isCapturingTransaction",required:!0,type:{name:"boolean"}},capturedTransaction:{defaultValue:null,description:"",name:"capturedTransaction",required:!0,type:{name:"any"}},captureTransaction:{defaultValue:null,description:"",name:"captureTransaction",required:!0,type:{name:"(fn: Function) => Transaction"}},dispatchTransaction:{defaultValue:null,description:"The callback over which to send transactions (state updates) produced by the view.\n@param",name:"dispatchTransaction",required:!0,type:{name:"any"}},getAttributes:{defaultValue:null,description:"Get attributes of the currently selected node or mark.",name:"getAttributes",required:!0,type:{name:"(nameOrType: string | MarkType | NodeType) => Record<string, any>"}},isActive:{defaultValue:null,description:"Returns if the currently selected node or mark is active.\n@param \n@param",name:"isActive",required:!0,type:{name:"{ (name: string, attributes?: {}): boolean; (attributes: {}): boolean; }"}},getJSON:{defaultValue:null,description:"Get the document as JSON.",name:"getJSON",required:!0,type:{name:"() => JSONContent"}},getHTML:{defaultValue:null,description:"Get the document as HTML.",name:"getHTML",required:!0,type:{name:"() => string"}},getText:{defaultValue:null,description:"Get the document as text.",name:"getText",required:!0,type:{name:"(options?: { blockSeparator?: string; textSerializers?: Record<string, TextSerializer>; }) => string"}},isEmpty:{defaultValue:null,description:"Check if there is no content.",name:"isEmpty",required:!0,type:{name:"boolean"}},getCharacterCount:{defaultValue:null,description:"Get the number of characters for the current document.\n@deprecated",name:"getCharacterCount",required:!0,type:{name:"() => number"}},destroy:{defaultValue:null,description:"Destroy the editor.",name:"destroy",required:!0,type:{name:"() => void"}},isDestroyed:{defaultValue:null,description:"Check if the editor is already destroyed.",name:"isDestroyed",required:!0,type:{name:"boolean"}},callbacks:{defaultValue:null,description:"",name:"callbacks",required:!0,type:{name:"any"}},on:{defaultValue:null,description:"",name:"on",required:!0,type:{name:'<EventName extends "blur" | "focus" | "beforeCreate" | "create" | "update" | "selectionUpdate" | "transaction" | "destroy">(event: EventName, fn: CallbackFunction<EditorEvents, EventName>) => Editor'}},emit:{defaultValue:null,description:"",name:"emit",required:!0,type:{name:'<EventName extends "blur" | "focus" | "beforeCreate" | "create" | "update" | "selectionUpdate" | "transaction" | "destroy">(event: EventName, ...args: CallbackType<EditorEvents, EventName>) => Editor'}},off:{defaultValue:null,description:"",name:"off",required:!0,type:{name:'<EventName extends "blur" | "focus" | "beforeCreate" | "create" | "update" | "selectionUpdate" | "transaction" | "destroy">(event: EventName, fn?: CallbackFunction<EditorEvents, EventName>) => Editor'}},removeAllListeners:{defaultValue:null,description:"",name:"removeAllListeners",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/extensions/flow/menu/edit.tsx#showFlowEditor"]={docgenInfo:showFlowEditor.__docgenInfo,name:"showFlowEditor",path:"src/extensions/flow/menu/edit.tsx#showFlowEditor"})}catch(__react_docgen_typescript_loader_error){}const FlowStaticMenu=({editor})=>{const isActive=(0,use_active.t)(editor,Flow.name),showEditor=(0,react.useCallback)((()=>{showFlowEditor(editor)}),[editor]);return react.createElement(components.u,{title:"流程图",editor},react.createElement(components.zx,{icon:react.createElement(icons.uG,null),onClick:showEditor,active:isActive}))};var hooks=__webpack_require__("./src/hooks/index.tsx");const bubble_FlowBubbleMenu=({editor})=>{(0,hooks.C)(editor,Flow.name,{width:0,height:0,svg:""});const shouldShow=(0,react.useCallback)((()=>editor.isActive(Flow.name)),[editor]),copyMe=(0,react.useCallback)((()=>(0,utilities.Bc)(editor,Flow.name)),[editor]),deleteMe=(0,react.useCallback)((()=>(0,utilities.IK)(editor,Flow.name)),[editor]),openEditModal=(0,react.useCallback)((()=>{showFlowEditor(editor)}),[editor]);return react.createElement(components.NM,{className:"bubble-menu",editor,pluginKey:"mind-bubble-menu",shouldShow,forNode:!0},react.createElement(components.T,{spacing:4},react.createElement(components.u,{editor,title:"复制"},react.createElement(components.zx,{onClick:copyMe,icon:react.createElement(icons.vU,null),size:"small"})),react.createElement(components.u,{editor,title:"编辑"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.yl,null),onClick:openEditModal})),react.createElement(components.iz,null),react.createElement(components.u,{editor,title:"删除"},react.createElement(components.zx,{onClick:deleteMe,icon:react.createElement(icons.Fz,null),size:"small"}))))};try{bubble_FlowBubbleMenu.displayName="FlowBubbleMenu",bubble_FlowBubbleMenu.__docgenInfo={description:"",displayName:"FlowBubbleMenu",props:{editor:{defaultValue:null,description:"",name:"editor",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/extensions/flow/menu/bubble.tsx#FlowBubbleMenu"]={docgenInfo:bubble_FlowBubbleMenu.__docgenInfo,name:"FlowBubbleMenu",path:"src/extensions/flow/menu/bubble.tsx#FlowBubbleMenu"})}catch(__react_docgen_typescript_loader_error){}try{FlowBubbleMenu.displayName="FlowBubbleMenu",FlowBubbleMenu.__docgenInfo={description:"",displayName:"FlowBubbleMenu",props:{editor:{defaultValue:null,description:"",name:"editor",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/extensions/flow/menu/index.tsx#FlowBubbleMenu"]={docgenInfo:FlowBubbleMenu.__docgenInfo,name:"FlowBubbleMenu",path:"src/extensions/flow/menu/index.tsx#FlowBubbleMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/extensions/gapcursor/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>tiptap_extension_gapcursor_esm.Z});var tiptap_extension_gapcursor_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-gapcursor@2.0.0-beta.39_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-gapcursor/dist/tiptap-extension-gapcursor.esm.js")},"./src/extensions/hard-break/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>tiptap_extension_hard_break_esm.Z});var tiptap_extension_hard_break_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-hard-break@2.0.0-beta.33_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-hard-break/dist/tiptap-extension-hard-break.esm.js")},"./src/extensions/heading/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>Heading,S:()=>HeadingStaticMenu});var tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),tiptap_extension_heading_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-heading@2.0.0-beta.29_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-heading/dist/tiptap-extension-heading.esm.js");const findChildren=(node,predicate,descend)=>{if(!node)throw new Error('Invalid "node" parameter');if(!predicate)throw new Error('Invalid "predicate" parameter');return((node,descend=!0)=>{if(!node)throw new Error('Invalid "node" parameter');const result=[];return node.descendants(((child,pos)=>{if(result.push({node:child,pos}),!descend)return!1})),result})(node,descend).filter((child=>predicate(child.node)))},findBlockNodes=(node,descend)=>findChildren(node,(child=>child.isBlock),descend);var dist=__webpack_require__("./node_modules/.pnpm/prosemirror-state@1.4.1/node_modules/prosemirror-state/dist/index.js"),prosemirror_view_dist=__webpack_require__("./node_modules/.pnpm/prosemirror-view@1.26.2/node_modules/prosemirror-view/dist/index.js");var lodash_escape=__webpack_require__("./node_modules/.pnpm/lodash.escape@4.0.1/node_modules/lodash.escape/index.js"),lodash_escape_default=__webpack_require__.n(lodash_escape),slugify=__webpack_require__("./node_modules/.pnpm/slugify@1.6.5/node_modules/slugify/slugify.js"),slugify_default=__webpack_require__.n(slugify);function headingToSlug(node,index=0){const slugified=function safeSlugify(text){return`h-${lodash_escape_default()(slugify_default()(text,{remove:/[!"#$%&'\.()*+,\/:;<=>?@\[\]\\^_`{|}~]/g,lower:!0}))}`}(node.textContent);return 0===index?slugified:`${slugified}-${index}`}function headingToPersistenceKey(node,id){const slug=headingToSlug(node);return`rme-${id||window?.location.pathname}–${slug}`}function findCollapsedNodes(doc){const blocks=findBlockNodes(doc),nodes=[];let withinCollapsedHeading;for(const block of blocks)"heading"!==block.node.type.name||withinCollapsedHeading&&!(block.node.attrs.level<=withinCollapsedHeading)?withinCollapsedHeading&&nodes.push(block):block.node.attrs.collapsed?withinCollapsedHeading||(withinCollapsedHeading=block.node.attrs.level):withinCollapsedHeading=void 0;return nodes}const Heading=tiptap_extension_heading_esm.X.extend({addOptions:()=>({levels:[1,2,3,4,5,6],HTMLAttributes:{},offset:0}),addAttributes:()=>({level:{default:1,rendered:!1},collapsed:{default:void 0}}),addStorage:()=>({editor:null}),onCreate(){this.storage.editor=this.editor},renderHTML({HTMLAttributes,node}){const level=this.options.levels.includes(node.attrs.level)?node.attrs.level:this.options.levels[0],fold=document.createElement("button");return fold.innerText="",fold.innerHTML='<svg fill="currentColor" width="12" height="24" viewBox="6 0 12 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.23823905,10.6097108 L11.207376,14.4695888 L11.207376,14.4695888 C11.54411,14.907343 12.1719566,14.989236 12.6097108,14.652502 C12.6783439,14.5997073 12.7398293,14.538222 12.792624,14.4695888 L15.761761,10.6097108 L15.761761,10.6097108 C16.0984949,10.1719566 16.0166019,9.54410997 15.5788477,9.20737601 C15.4040391,9.07290785 15.1896811,9 14.969137,9 L9.03086304,9 L9.03086304,9 C8.47857829,9 8.03086304,9.44771525 8.03086304,10 C8.03086304,10.2205442 8.10377089,10.4349022 8.23823905,10.6097108 Z" /></svg>',fold.type="button",fold.className="heading-fold "+(node.attrs.collapsed?"collapsed":""),fold.addEventListener("mousedown",(event=>((event,extension)=>{event.preventDefault();const{view}=extension.storage.editor,hadFocus=view.hasFocus(),{tr}=view.state,{top,left}=event.target.getBoundingClientRect(),result=view.posAtCoords({top,left});if(result){const node=view.state.doc.nodeAt(result.inside);if(node){const endOfHeadingPos=result.inside+node.nodeSize,$pos=view.state.doc.resolve(endOfHeadingPos),collapsed=!node.attrs.collapsed;collapsed&&view.state.selection.to>endOfHeadingPos&&tr.setSelection(dist.Y1.near($pos,-1));const transaction=tr.setNodeMarkup(result.inside,void 0,{...node.attrs,collapsed}),persistKey=headingToPersistenceKey(node,extension.storage.editor.options.editorProps.id);collapsed?localStorage?.setItem(persistKey,"collapsed"):localStorage?.removeItem(persistKey),view.dispatch(transaction),hadFocus&&view.focus()}}})(event,this))),[`h${level}`,(0,tiptap_core_esm.P1)(this.options.HTMLAttributes,HTMLAttributes),["span",{contentEditable:!1,class:"heading-actions "+(node.attrs.collapsed?"collapsed":"")},fold],["span",{class:"heading-content"},0]]},addKeyboardShortcuts(){return this.options.levels.reduce(((items,level)=>({...items,[`Mod-Alt-${level}`]:()=>this.editor.commands.toggleHeading({level})})),{Backspace:({editor})=>{const{state,view}=editor,{$from,from,to,empty}=state.selection;if(!empty)return!1;if($from.parent.type.name!==this.name)return!1;return state.doc.resolve(from-1).parent!==$from.parent&&(view.dispatch(state.tr.setBlockType(from,to,state.schema.nodes.paragraph).scrollIntoView()),!0)},Enter:({editor})=>{const{state,view}=editor,{$from,from,$to,to}=state.selection;if($from.parent.type.name!==this.name)return!1;if($to.after()-1!==to)return!1;if(!$from.parent.attrs.collapsed)return!1;const allBlocks=findBlockNodes(state.doc),collapsedBlocks=findCollapsedNodes(state.doc),nextVisibleBlock=allBlocks.filter((a=>!collapsedBlocks.find((b=>b.pos===a.pos)))).find((a=>a.pos>from)),pos=nextVisibleBlock?nextVisibleBlock.pos:state.doc.content.size,transaction=state.tr.insert(pos,state.schema.nodes[this.name].create({...$from.parent.attrs,collapsed:!1}));return view.dispatch(transaction.setSelection(dist.Bs.near(transaction.doc.resolve(Math.min(pos+1,transaction.doc.content.size)))).scrollIntoView()),!0}})},addProseMirrorPlugins(){let loaded=!1;return[new dist.Sy({key:new dist.H$("folding"),view:view=>(loaded=!1,view.dispatch(view.state.tr.setMeta("folding",{loaded:!0})),{}),appendTransaction:(transactions,oldState,newState)=>{if(loaded)return;if(!transactions.some((transaction=>transaction.getMeta("folding"))))return;let modified=!1;const tr=newState.tr,blocks=findBlockNodes(newState.doc);for(const block of blocks)if("heading"===block.node.type.name){const persistKey=headingToPersistenceKey(block.node,this.editor.options.editorProps.id),persistedState=localStorage?.getItem(persistKey);"collapsed"===persistedState&&(tr.setNodeMarkup(block.pos,void 0,{...block.node.attrs,collapsed:!0}),modified=!0)}return loaded=!0,modified?tr:null},props:{decorations:state=>{const{doc}=state,decorations=findCollapsedNodes(doc).map((block=>prosemirror_view_dist.p.node(block.pos,block.pos+block.node.nodeSize,{class:"folded-content"})));return prosemirror_view_dist.EH.create(doc,decorations)}}})]}});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),components=__webpack_require__("./src/components/index.tsx"),use_active=__webpack_require__("./src/hooks/use-active.tsx");const options=[{label:"正文",value:"paragraph"},{label:react.createElement("h1",{style:{margin:0,fontSize:"1.3em"}},"标题1"),value:1},{label:react.createElement("h2",{style:{margin:0,fontSize:"1.1em"}},"标题2"),value:2},{label:react.createElement("h3",{style:{margin:0,fontSize:"1.0em"}},"标题3"),value:3},{label:react.createElement("h4",{style:{margin:0,fontSize:"0.9em"}},"标题4"),value:4},{label:react.createElement("h5",{style:{margin:0,fontSize:"0.8em"}},"标题5"),value:5},{label:react.createElement("h6",{style:{margin:0,fontSize:"0.8em"}},"标题6"),value:6}],HeadingStaticMenu=({editor})=>{const isH1=(0,use_active.t)(editor,Heading.name,{level:1}),isH2=(0,use_active.t)(editor,Heading.name,{level:2}),isH3=(0,use_active.t)(editor,Heading.name,{level:3}),isH4=(0,use_active.t)(editor,Heading.name,{level:4}),isH5=(0,use_active.t)(editor,Heading.name,{level:5}),isH6=(0,use_active.t)(editor,Heading.name,{level:6}),current=(0,react.useMemo)((()=>isH1?1:isH2?2:isH3?3:isH4?4:isH5?5:isH6?6:"paragraph"),[isH1,isH2,isH3,isH4,isH5,isH6]),toggle=(0,react.useCallback)((level=>{"paragraph"===level?editor.chain().focus().setParagraph().run():editor.chain().focus().toggleHeading({level}).run()}),[editor]);return react.createElement(components.Ph,{editor,value:current,onChange:toggle,options})}},"./src/extensions/horizontal-rule/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>HorizontalRule,U:()=>HorizontalRuleStaticMenu});var tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),dist=__webpack_require__("./node_modules/.pnpm/prosemirror-state@1.4.1/node_modules/prosemirror-state/dist/index.js");const HorizontalRule=tiptap_core_esm.NB.create({name:"horizontalRule",group:"block",selectable:!0,addOptions:()=>({HTMLAttributes:{}}),parseHTML:()=>[{tag:"hr"}],renderHTML({HTMLAttributes}){return["hr",(0,tiptap_core_esm.P1)(this.options.HTMLAttributes,HTMLAttributes)]},addCommands(){return{setHorizontalRule:()=>({chain})=>chain().insertContent({type:this.name}).command((({tr,dispatch})=>{if(dispatch){const{$to}=tr.selection,posAfter=$to.end();if($to.nodeAfter)tr.setSelection(dist.Bs.create(tr.doc,$to.pos));else{const node=$to.parent.type.contentMatch.defaultType?.create();node&&(tr.insert(posAfter,node),tr.setSelection(dist.Bs.create(tr.doc,posAfter)))}tr.scrollIntoView()}return!0})).run()}},addInputRules(){return[(0,tiptap_core_esm.x2)({find:/^(?:---|—-|___\s|\*\*\*\s)$/,type:this.type})]}});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),components=__webpack_require__("./src/components/index.tsx"),icons=__webpack_require__("./src/icons/index.tsx"),use_active=__webpack_require__("./src/hooks/use-active.tsx");const HorizontalRuleStaticMenu=({editor})=>{const isHorizontalRuleActive=(0,use_active.t)(editor,HorizontalRule.name),setHorizontalRule=(0,react.useCallback)((()=>editor.chain().focus().setHorizontalRule().run()),[editor]);return react.createElement(components.u,{title:"分割线",editor},react.createElement(components.zx,{active:isHorizontalRuleActive,icon:react.createElement(icons.zW,null),onClick:setHorizontalRule}))}},"./src/extensions/iframe/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{hv:()=>Iframe,Jx:()=>IframeBubbleMenu,YB:()=>IframeStaticMenu});var tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),tiptap_react_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+react@2.0.0-beta.115_qcznkxrdrnvwbgjhf5yu5evfae/node_modules/@tiptap/react/dist/tiptap-react.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.6_v5ja746gkdtknuc6tj46sve3be/node_modules/styled-components/dist/styled-components.browser.esm.js"),components=__webpack_require__("./src/components/index.tsx"),dist=__webpack_require__("./node_modules/.pnpm/prosemirror-state@1.4.1/node_modules/prosemirror-state/dist/index.js");const StyledContainer=styled_components_browser_esm.ZP.div`
  display: flex;
  height: 100%;
  max-width: 100%;
  overflow: hidden;
  line-height: 0;
  border: 1px solid ${props=>props.theme.borderColor};
  border-radius: ${props=>props.theme.borderRadius};
  flex-direction: column;
`,StyledEmptyContainer=styled_components_browser_esm.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${props=>props.theme.greyDark};
`,IframeView=({editor,node,updateAttributes,getPos})=>{const timerRef=(0,react.useRef)(-1),iframeRef=(0,react.useRef)(null),{url,width,height}=node.attrs,onResize=(0,react.useCallback)((size=>{updateAttributes({width:size.width,height:size.height})}),[updateAttributes]);return(0,react.useEffect)((()=>{const handler=()=>{document.activeElement===iframeRef.current&&editor.view.dispatch(editor.state.tr.setSelection(dist.qv.create(editor.state.doc,getPos()))),timerRef.current=requestIdleCallback(handler)};return timerRef.current=requestIdleCallback(handler),()=>{cancelIdleCallback(timerRef.current)}}),[editor,getPos]),react.createElement(tiptap_react_esm.T5,null,react.createElement(components.ez,{width,height,onResizeStop:onResize,editor,getPos,minWidth:"100%"},react.createElement(StyledContainer,null,url?react.createElement("iframe",{ref:iframeRef,src:url}):react.createElement(StyledEmptyContainer,null,react.createElement("span",null,"请设置外链地址")))))},Iframe=tiptap_core_esm.NB.create({name:"iframe",content:"",marks:"",group:"block",selectable:!0,atom:!0,draggable:!0,addOptions:()=>({HTMLAttributes:{class:"iframe"}}),addAttributes:()=>({width:{default:"100%"},height:{default:66},url:{default:null}}),parseHTML:()=>[{tag:"iframe"}],renderHTML({HTMLAttributes}){return["iframe",(0,tiptap_core_esm.P1)(this.options.HTMLAttributes,HTMLAttributes)]},addCommands(){return{setIframe:options=>({tr,commands,chain,state})=>{if(tr.selection?.node?.type?.name==this.name)return commands.updateAttributes(this.name,options);const attrs=options||{url:""},{selection}=state,{empty}=selection,head=selection.$head;if(empty)return chain().insertContent({type:this.name,attrs}).run();return head.node(head.depth).type.name===state.schema.topNodeType.name?chain().command((({tr,dispatch,state})=>(dispatch&&tr.replaceSelectionWith(state.schema.nodes[this.name].create(attrs)).scrollIntoView(),!0))).run():chain().insertContentAt(head.after(),[{type:this.name,attrs}]).run()}}},addInputRules(){return[(0,tiptap_core_esm.x2)({find:/^\$iframe\$$/,type:this.type,getAttributes:()=>({width:"100%"})})]},addNodeView:()=>(0,tiptap_react_esm.fW)(IframeView)});var icons=__webpack_require__("./src/icons/index.tsx"),use_active=__webpack_require__("./src/hooks/use-active.tsx"),react_dom=__webpack_require__("./node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js"),tippy_esm=__webpack_require__("./node_modules/.pnpm/tippy.js@6.3.7/node_modules/tippy.js/dist/tippy.esm.js"),utilities=__webpack_require__("./src/utilities/index.ts"),theme=__webpack_require__("./src/editor/theme.ts");const URLEditor=({url:defaultHref,onOk,onCancel})=>{const linkInputRef=(0,react.useRef)(null),[url,setUrl]=(0,react.useState)(defaultHref),ok=(0,react.useCallback)((()=>{onOk&&onOk({url})}),[onOk,url]);return(0,react.useEffect)((()=>{const timer=setTimeout((()=>{linkInputRef.current?.focus()}),200);return()=>{clearTimeout(timer)}}),[]),react.createElement("div",{style:{width:280}},react.createElement(components.X2,{style:{marginTop:8}},react.createElement(components.JX,{span:4,style:{paddingTop:"4px"}},"链接"),react.createElement(components.JX,{span:20},react.createElement(components.II,{ref:linkInputRef,value:url,onChange:value=>setUrl(value)}))),react.createElement(components.X2,{style:{marginTop:8}},react.createElement(components.zx,{onClick:ok,disabled:!url,type:"primary"},"确定"),react.createElement(components.zx,{style:{marginLeft:8},onClick:onCancel},"取消")))},showURLEditor=(editor,dom)=>{const{view,state}=editor,isInIframe=(0,utilities.Ig)(editor,Iframe.name);let start,end,url;if(isInIframe){url=editor.getAttributes(Iframe.name).url}else{const{from,to}=state.selection;start=from,end=to,url=""}const div=document.createElement("div");let popup;div.className="bubble-menu",react_dom.render(react.createElement(styled_components_browser_esm.f6,{theme:(0,theme.w)(editor)},react.createElement(URLEditor,{url,onOk:values=>{isInIframe?editor.chain().updateAttributes(Iframe.name,{url:values.url}).focus().run():editor.chain().setIframe({url:values.url}).focus().run(),popup?.[0]?.hide(),editor.chain().focus().run()},onCancel:()=>{popup?.[0]?.hide(),editor.chain().focus().run()}})),div),popup=(0,tippy_esm.ZP)("body",{getReferenceClientRect:()=>dom?dom.getBoundingClientRect():(0,tiptap_core_esm.pr)(editor.view,start,end),appendTo:()=>editor.options.element,content:div,showOnCreate:!0,interactive:!0,trigger:"manual",placement:"bottom-start",theme:"bubble-menu padding-8",arrow:!1,onHide(){react_dom.unmountComponentAtNode(div)}})},IframeStaticMenu=({editor})=>{const isActive=(0,use_active.t)(editor,Iframe.name),toggleLink=(0,react.useCallback)((()=>{showURLEditor(editor)}),[editor]);return react.createElement(components.u,{title:"外链",editor},react.createElement(components.zx,{icon:react.createElement(icons.hd,null),onClick:toggleLink,active:isActive}))};var use_attributes=__webpack_require__("./src/hooks/use-attributes.tsx");const IframeBubbleMenu=({editor})=>{const containerRef=(0,react.useRef)(null),{url}=(0,use_attributes.C)(editor,Iframe.name,{url:""}),shouldShow=(0,react.useCallback)((()=>editor.isActive(Iframe.name)),[editor]),visitLink=(0,react.useCallback)((()=>{const tab=window.open();tab&&(tab.opener=null,tab.location=url)}),[url]),openEditLinkModal=(0,react.useCallback)((()=>{showURLEditor(editor,containerRef.current)}),[editor]);return react.createElement(components.NM,{editor,shouldShow,forNode:!0},react.createElement("div",{ref:containerRef},react.createElement(components.T,{spacing:4},react.createElement(components.u,{editor,title:"访问链接"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.hd,null),onClick:visitLink})),react.createElement(components.u,{editor,title:"编辑链接"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.yl,null),onClick:openEditLinkModal})))))}},"./src/extensions/image/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ee:()=>Image,El:()=>ImageBubbleMenu,a$:()=>ImageStaticMenu});var tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),tiptap_react_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+react@2.0.0-beta.115_qcznkxrdrnvwbgjhf5yu5evfae/node_modules/@tiptap/react/dist/tiptap-react.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),components=__webpack_require__("./src/components/index.tsx");const ImageView=({editor,node:{attrs},updateAttributes,getPos})=>{const{src,width,height,align,aspectRatio}=attrs,flexJustifyContent=(0,react.useMemo)((()=>"center"===align?"center":"right"===align?"flex-end":"flex-start"),[align]),onResize=(0,react.useCallback)((size=>{updateAttributes({width:size.width,height:size.height})}),[updateAttributes]);return react.createElement(tiptap_react_esm.T5,{style:{position:"relative",display:"flex",justifyContent:flexJustifyContent}},react.createElement(components.ez,{width,height,editor,getPos,aspectRatio,onResizeStop:onResize},react.createElement("img",{src,width:"100%",height:"100%"})))},inputRegex=/(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/,Image=tiptap_core_esm.NB.create({name:"image",inline:!1,content:"",marks:"",group:"block",selectable:!0,draggable:!1,atom:!0,addOptions:()=>({inline:!1,allowBase64:!1,HTMLAttributes:{}}),addAttributes:()=>({src:{default:null},alt:{default:null},title:{default:null},width:{default:"100%"},height:{default:"auto"},aspectRatio:{default:1},align:{default:"left"}}),parseHTML:()=>[{tag:"img[src]"}],renderHTML({HTMLAttributes}){return["img",(0,tiptap_core_esm.P1)(this.options.HTMLAttributes,HTMLAttributes)]},addCommands(){return{setImage:options=>({commands})=>commands.insertContent({type:this.name,attrs:options})}},addInputRules(){return[(0,tiptap_core_esm.x2)({find:inputRegex,type:this.type,getAttributes:match=>{const[,,alt,src,title]=match;return{src,alt,title}}})]},addNodeView:()=>(0,tiptap_react_esm.fW)(ImageView)});var icons=__webpack_require__("./src/icons/index.tsx"),use_attributes=__webpack_require__("./src/hooks/use-attributes.tsx"),utilities=__webpack_require__("./src/utilities/index.ts");const _ImageBubbleMenu=({editor})=>{const{width:currentWidth,height:currentHeight,align}=(0,use_attributes.C)(editor,Image.name,{width:0,height:0,align:"left"}),shouldShow=(0,react.useCallback)((({editor})=>(0,utilities.Ig)(editor,Image.name)),[editor]),getReferenceClientRect=(0,react.useCallback)((()=>{const{view,state}=editor,{from,to}=state.selection;if((0,tiptap_core_esm.EG)(state.selection)){const node=view.nodeDOM(from);if(node){return(node.querySelector("img")||node).getBoundingClientRect()}}return(0,tiptap_core_esm.pr)(view,from,to)}),[editor]),setAlign=(0,react.useCallback)((align=>()=>{editor.chain().updateAttributes(Image.name,{align}).setNodeSelection(editor.state.selection.from).focus().run()}),[editor]),setAlignLeft=(0,react.useMemo)((()=>setAlign("left")),[setAlign]),setAlignCenter=(0,react.useMemo)((()=>setAlign("center")),[setAlign]),setAlignRight=(0,react.useMemo)((()=>setAlign("right")),[setAlign]);return react.createElement(components.NM,{key:"image-bubble-menu",editor,pluginKey:"image-bubble-menu",shouldShow,tippyOptions:{getReferenceClientRect},forNode:!0},react.createElement(components.T,null,react.createElement(components.u,{editor,title:"靠左"},react.createElement(components.zx,{active:"left"===align,icon:react.createElement(icons.B2,null),onClick:setAlignLeft})),react.createElement(components.u,{editor,title:"居中"},react.createElement(components.zx,{active:"center"===align,icon:react.createElement(icons.O0,null),onClick:setAlignCenter})),react.createElement(components.u,{editor,title:"靠右"},react.createElement(components.zx,{active:"right"===align,icon:react.createElement(icons.zn,null),onClick:setAlignRight})),react.createElement(components.iz,null),react.createElement(components.u,{editor,title:"删除"},react.createElement(components.zx,{icon:react.createElement(icons.Fz,null),onClick:setAlignRight}))))},ImageBubbleMenu=react.memo(_ImageBubbleMenu,((prevProps,nextProps)=>prevProps.editor===nextProps.editor));var use_active=__webpack_require__("./src/hooks/use-active.tsx");const ImageStaticMenu=({editor})=>{const isCodeActive=(0,use_active.t)(editor,Image.name),setImage=(0,react.useCallback)((()=>{(0,utilities.Ix)(editor).then((res=>{editor.chain().focus().setImage({...res,src:res.url}).run()}))}),[editor]);return react.createElement(components.u,{title:"上传图片",editor},react.createElement(components.zx,{icon:react.createElement(icons.Z,null),onClick:setImage,active:isCodeActive}))}},"./src/extensions/italic/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>tiptap_extension_italic_esm.Tx,H:()=>ItalicStaticMenu});var tiptap_extension_italic_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-italic@2.0.0-beta.28_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-italic/dist/tiptap-extension-italic.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),components=__webpack_require__("./src/components/index.tsx"),icons=__webpack_require__("./src/icons/index.tsx"),use_active=__webpack_require__("./src/hooks/use-active.tsx");const ItalicStaticMenu=({editor})=>{const isItalicActive=(0,use_active.t)(editor,tiptap_extension_italic_esm.Tx.name),toggleItalic=(0,react.useCallback)((()=>editor.chain().focus().toggleItalic().run()),[editor]);return react.createElement(components.u,{title:"斜体",editor},react.createElement(components.zx,{icon:react.createElement(icons.C9,null),onClick:toggleItalic,active:isItalicActive}))}},"./src/extensions/link/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{rU:()=>Link,dC:()=>LinkBubbleMenu,h0:()=>LinkStaticMenu});var tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),tiptap_extension_link_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-link@2.0.0-beta.43_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-link/dist/tiptap-extension-link.esm.js");const extractHrefFromMatch=match=>({href:match?.groups?.href}),extractHrefFromMarkdownLink=match=>(match.pop(),extractHrefFromMatch(match)),Link=tiptap_extension_link_esm.r.extend({addOptions(){return{...this.parent?.(),openOnClick:!1}},addInputRules(){return[(0,tiptap_core_esm.Cf)({find:/(?:^|\s)\[([\w|\s|-|\u4e00-\u9fa5]+)\]\((?<href>.+?)\)$/gm,type:this.type,getAttributes:extractHrefFromMarkdownLink}),(0,tiptap_core_esm.Cf)({find:/(?:^|\s)(?<href>(?:https?:\/\/|www\.)[\S]+)(?:\s|\n)$/gim,type:this.type,getAttributes:extractHrefFromMatch})]},addAttributes(){return{...this.parent?.(),href:{default:null,parseHTML:element=>element.getAttribute("href")},title:{title:null,parseHTML:element=>element.getAttribute("title")}}}}).configure({openOnClick:!1,linkOnPaste:!0,autolink:!1});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),components=__webpack_require__("./src/components/index.tsx"),icons=__webpack_require__("./src/icons/index.tsx"),use_active=__webpack_require__("./src/hooks/use-active.tsx"),react_dom=__webpack_require__("./node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js"),tippy_esm=__webpack_require__("./node_modules/.pnpm/tippy.js@6.3.7/node_modules/tippy.js/dist/tippy.esm.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.6_v5ja746gkdtknuc6tj46sve3be/node_modules/styled-components/dist/styled-components.browser.esm.js");var theme=__webpack_require__("./src/editor/theme.ts");const LinkEdit=({text:defaultText,href:defaultHref,onOk,onCancel})=>{const linkInputRef=(0,react.useRef)(null),[text,setText]=(0,react.useState)(defaultText),[href,setHref]=(0,react.useState)(defaultHref),ok=(0,react.useCallback)((()=>{onOk&&onOk({text:text||href,href})}),[onOk,text,href]);return(0,react.useEffect)((()=>{const timer=setTimeout((()=>{linkInputRef.current?.focus()}),200);return()=>{clearTimeout(timer)}}),[]),react.createElement("div",{style:{width:280}},react.createElement(components.X2,null,react.createElement(components.JX,{span:4,style:{paddingTop:"4px"}},"文本"),react.createElement(components.JX,{span:20},react.createElement(components.II,{value:text,onChange:value=>setText(value)}))),react.createElement(components.X2,{style:{marginTop:8}},react.createElement(components.JX,{span:4,style:{paddingTop:"4px"}},"链接"),react.createElement(components.JX,{span:20},react.createElement(components.II,{ref:linkInputRef,value:href,onChange:value=>setHref(value)}))),react.createElement(components.X2,{style:{marginTop:8}},react.createElement(components.zx,{onClick:ok,disabled:!href,type:"primary"},"确定"),react.createElement(components.zx,{style:{marginLeft:8},onClick:onCancel},"取消")))},showLinkEditor=(editor,dom)=>{const{view,state}=editor,isInLink=(type=state.schema.marks.link,state=>{if(!type)return!1;const{from,$from,to,empty}=state.selection;return!!(empty?type.isInSet(state.storedMarks||$from.marks()):state.doc.rangeHasMark(from,to,type))})(state);var type;const selection=state.selection;let start,end,text,href;if(isInLink){const{from}=editor.state.selection,range=(0,tiptap_core_esm.IH)(editor.state.doc.resolve(from),editor.state.schema.marks.link);if(!range)return;start=range.from,end=range.to;const attrs=editor.getAttributes(Link.name);text=state.doc.textBetween(start,end),href=attrs.href}else{const{from,to}=selection;start=from,end=to,text=state.doc.textBetween(start,end),href=""}const div=document.createElement("div");let popup;div.className="bubble-menu",react_dom.render(react.createElement(styled_components_browser_esm.f6,{theme:(0,theme.w)(editor)},react.createElement(LinkEdit,{text,href,onOk:values=>{const{view}=editor,schema=view.state.schema,node=schema.text(values.text,[schema.marks.link.create({href:values.href})]);view.dispatch(view.state.tr.deleteRange(start,end)),view.dispatch(view.state.tr.insert(start,node)),view.dispatch(view.state.tr.scrollIntoView()),popup?.[0]?.hide(),editor.chain().focus().run()},onCancel:()=>{popup?.[0]?.hide(),editor.chain().focus().run()}})),div),popup=(0,tippy_esm.ZP)("body",{getReferenceClientRect:()=>dom?dom.getBoundingClientRect():(0,tiptap_core_esm.pr)(editor.view,start,end),appendTo:()=>editor.options.element,content:div,showOnCreate:!0,interactive:!0,trigger:"manual",placement:"bottom-start",theme:"bubble-menu padding-8",arrow:!1,onHide(){react_dom.unmountComponentAtNode(div)}})},LinkStaticMenu=({editor})=>{const isLinkActive=(0,use_active.t)(editor,Link.name),toggleLink=(0,react.useCallback)((()=>{showLinkEditor(editor)}),[editor]);return react.createElement(components.u,{title:"链接",editor},react.createElement(components.zx,{icon:react.createElement(icons.JH,null),onClick:toggleLink,active:isLinkActive}))};var use_attributes=__webpack_require__("./src/hooks/use-attributes.tsx");const LinkBubbleMenu=({editor})=>{const containerRef=(0,react.useRef)(null),{href,target}=(0,use_attributes.C)(editor,Link.name,{href:"",target:""}),shouldShow=(0,react.useCallback)((()=>editor.isActive(Link.name)),[editor]),visitLink=(0,react.useCallback)((()=>{const tab=window.open();tab&&(tab.opener=null,tab.location=href)}),[href,target]),openEditLinkModal=(0,react.useCallback)((()=>{showLinkEditor(editor,containerRef.current)}),[editor]),unsetLink=(0,react.useCallback)((()=>editor.chain().extendMarkRange(Link.name).unsetLink().run()),[editor]);return react.createElement(components.NM,{editor,shouldShow},react.createElement("div",{ref:containerRef},react.createElement(components.T,{spacing:4},react.createElement(components.u,{editor,title:"访问链接"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.hd,null),onClick:visitLink})),react.createElement(components.u,{editor,title:"编辑链接"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.yl,null),onClick:openEditLinkModal})),react.createElement(components.iz,null),react.createElement(components.u,{editor,title:"去除链接"},react.createElement(components.zx,{onClick:unsetLink,icon:react.createElement(icons.K2,null),size:"small"})))))}},"./src/extensions/list-item/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>tiptap_extension_list_item_esm.H});var tiptap_extension_list_item_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-list-item@2.0.0-beta.23_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-list-item/dist/tiptap-extension-list-item.esm.js")},"./src/extensions/mention/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>Mention});var tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),tiptap_react_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+react@2.0.0-beta.115_qcznkxrdrnvwbgjhf5yu5evfae/node_modules/@tiptap/react/dist/tiptap-react.esm.js"),tiptap_suggestion_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+suggestion@2.0.0-beta.98_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/suggestion/dist/tiptap-suggestion.esm.js"),tippy_esm=__webpack_require__("./node_modules/.pnpm/tippy.js@6.3.7/node_modules/tippy.js/dist/tippy.esm.js"),dist=__webpack_require__("./node_modules/.pnpm/prosemirror-state@1.4.1/node_modules/prosemirror-state/dist/index.js"),provider=__webpack_require__("./src/editor/provider.ts"),react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),es=__webpack_require__("./node_modules/.pnpm/scroll-into-view-if-needed@2.2.29/node_modules/scroll-into-view-if-needed/es/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.6_v5ja746gkdtknuc6tj46sve3be/node_modules/styled-components/dist/styled-components.browser.esm.js"),components=__webpack_require__("./src/components/index.tsx");const StyledContainer=styled_components_browser_esm.ZP.div`
  width: 254px;
  max-height: 240px;
  overflow: auto;

  box-shadow: ${props=>props.theme.slashMenuBoxshadow};
  background-color: ${props=>props.theme.background};
  border-radius: ${props=>props.theme.borderRadius};
`,StyledTitle=styled_components_browser_esm.ZP.div`
  padding: 8px 16px;

  color: ${props=>props.theme.slashMenuTitleColor};
`,StyledItem=styled_components_browser_esm.ZP.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  height: 32px;
  color: ${props=>props.theme.slashMenuColor};

  background-color: ${props=>props.active?props.theme.slashMenuHoverBgColor:"transparent"};

  cursor: pointer;

  &:hover {
    background-color: ${props=>props.theme.slashMenuHoverBgColor};
  }

  > div {
    display: flex;
    align-items: center;
  }
`,StyledText=styled_components_browser_esm.ZP.div`
  margin-left: 8px;
`,StyledImg=styled_components_browser_esm.ZP.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`,MentionMenuView=(0,react.forwardRef)(((props,ref)=>{const $container=(0,react.useRef)(null),[selectedIndex,setSelectedIndex]=(0,react.useState)(0),selectItem=index=>{const command=props.items[index];command&&props.command(command)};return(0,react.useEffect)((()=>setSelectedIndex(0)),[props.items]),(0,react.useEffect)((()=>{if(Number.isNaN(selectedIndex+1))return;const el=$container?.current?.querySelector(`.mention-menu-item:nth-of-type(${selectedIndex+1})`);el&&(0,es.Z)(el,{behavior:"smooth",scrollMode:"if-needed"})}),[selectedIndex]),(0,react.useImperativeHandle)(ref,(()=>({onKeyDown:({event})=>"ArrowUp"===event.key?(setSelectedIndex((selectedIndex+props.items.length-1)%props.items.length),!0):"ArrowDown"===event.key?(setSelectedIndex((selectedIndex+1)%props.items.length),!0):"Enter"===event.key&&(selectItem(selectedIndex),!0)}))),react.createElement(StyledContainer,{ref:$container},props.items.length?props.items.map(((item,index)=>react.createElement(StyledItem,{className:"mention-menu-item",active:selectedIndex===index,onClick:()=>selectItem(index)},react.createElement(StyledImg,{src:item.avatar}),react.createElement(StyledText,null,item.name)))):react.createElement(StyledTitle,null,"没有找到结果"))}));MentionMenuView.displayName="MentionMenuView";const MentionLoading=()=>react.createElement(StyledContainer,null,react.createElement("div",{style:{height:32,display:"flex",alignItems:"center",justifyContent:"center"}},react.createElement(components.gb,null))),Mention=tiptap_core_esm.NB.create({name:"mention",addOptions:()=>({HTMLAttributes:{},renderLabel:({options,node})=>`${options.char}${node.attrs.name??node.attrs.id}`,char:"@"}),group:"inline",inline:!0,selectable:!1,atom:!0,addAttributes:()=>({id:{default:null,parseHTML:element=>element.getAttribute("data-id"),renderHTML:attributes=>attributes.id?{"data-id":attributes.id}:{}},name:{default:null,parseHTML:element=>element.getAttribute("data-name"),renderHTML:attributes=>attributes.name?{"data-name":attributes.name}:{}}}),parseHTML(){return[{tag:`span[data-type="${this.name}"]`}]},renderHTML({node,HTMLAttributes}){return["span",(0,tiptap_core_esm.P1)({"data-type":this.name},this.options.HTMLAttributes,HTMLAttributes),this.options.renderLabel({options:this.options,node})]},renderText({node}){return this.options.renderLabel({options:this.options,node})},addKeyboardShortcuts(){return{Backspace:()=>this.editor.commands.command((({tr,state})=>{let isMention=!1;const{selection}=state,{empty,anchor}=selection;return!!empty&&(state.doc.nodesBetween(anchor-1,anchor,((node,pos)=>{if(node.type.name===this.name)return isMention=!0,tr.insertText(this.options.char||"",pos,pos+node.nodeSize),!1})),isMention)}))}},addStorage:()=>({timer:null,onDestroy:()=>{}}),onDestroy(){this.storage.onDestroy()},addProseMirrorPlugins(){let component,popup,loadingPopup,loadingComponent,isEditable=this.editor.isEditable;const getReferenceClientRect=()=>{const{ranges}=this.editor.state.selection,from=Math.min(...ranges.map((range=>range.$from.pos))),to=Math.max(...ranges.map((range=>range.$to.pos)));return(0,tiptap_core_esm.pr)(this.editor.view,from,to)};return[(0,tiptap_suggestion_esm.ZP)({editor:this.editor,char:this.options.char,pluginKey:new dist.H$(this.name),items:({query})=>{const getUsers=(0,provider.z)(this.editor)?.userProvider?.getUsers;if(!getUsers)return[];const maybePromise=getUsers(query);if("then"in maybePromise){loadingPopup||(loadingComponent=new tiptap_react_esm.M_(MentionLoading,{editor:this.editor}),loadingPopup=(0,tippy_esm.ZP)("body",{getReferenceClientRect,appendTo:()=>document.body,content:loadingComponent.element,showOnCreate:!0,interactive:!0,trigger:"manual",placement:"bottom-start"})[0],this.storage.onDestroy=()=>{loadingPopup?.destroy(),loadingComponent?.destroy()});let shouldShow=!0;return clearTimeout(this.storage.timer),this.storage.timer=setTimeout((()=>{shouldShow&&loadingPopup?.show()}),300),maybePromise.then((res=>(shouldShow=!1,clearTimeout(this.storage.timer),res)))}return maybePromise},command:({editor,range,props})=>{const overrideSpace=editor.view.state.selection.$to.nodeAfter?.text?.startsWith(" ");overrideSpace&&(range.to+=1),editor.chain().focus().insertContentAt(range,[{type:this.name,attrs:props},{type:"text",text:" "}]).run()},allow:({state,range})=>{const $from=state.doc.resolve(range.from),type=state.schema.nodes[this.name];return!!$from.parent.type.contentMatch.matchType(type)},render:()=>({onStart:props=>{isEditable=props.editor.isEditable,isEditable&&(component=new tiptap_react_esm.M_(MentionMenuView,{props,editor:props.editor}),popup=(0,tippy_esm.ZP)("body",{getReferenceClientRect,appendTo:()=>document.body,content:component.element,showOnCreate:!0,interactive:!0,trigger:"manual",placement:"bottom-start",onShow(){loadingPopup?.hide()}}))},onUpdate(props){isEditable&&(component.updateProps(props),popup[0].setProps({getReferenceClientRect:props.clientRect}))},onKeyDown(props){if(isEditable)return"Escape"===props.event.key?(popup[0].hide(),!0):component.ref?.onKeyDown(props)},onExit(){isEditable&&(popup[0].destroy(),component.destroy())}})})]}})},"./src/extensions/mind/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{CH:()=>Mind,Ge:()=>bubble_MindBubbleMenu,aH:()=>MindStaticMenu});var tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),tiptap_react_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+react@2.0.0-beta.115_qcznkxrdrnvwbgjhf5yu5evfae/node_modules/@tiptap/react/dist/tiptap-react.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),visibility_sensor=__webpack_require__("./node_modules/.pnpm/react-visibility-sensor@5.1.1_sfoxds7t5ydpegc3knd667wn6m/node_modules/react-visibility-sensor/dist/visibility-sensor.js"),visibility_sensor_default=__webpack_require__.n(visibility_sensor),deep_equal=__webpack_require__("./node_modules/.pnpm/deep-equal@2.0.5/node_modules/deep-equal/index.js"),deep_equal_default=__webpack_require__.n(deep_equal),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.6_v5ja746gkdtknuc6tj46sve3be/node_modules/styled-components/dist/styled-components.browser.esm.js"),icons=__webpack_require__("./src/icons/index.tsx"),components=__webpack_require__("./src/components/index.tsx"),constants=__webpack_require__("./src/constants.ts"),utilities=__webpack_require__("./src/utilities/index.ts");const StyledContainer=styled_components_browser_esm.ZP.div`
  position: relative;
  max-width: 100%;
  width: 100%;
  height: 100%;
  overflow: visible;
  line-height: 0;

  border: 1px solid ${props=>props.theme.borderColor};
  border-radius: ${props=>props.theme.borderRadius};

  overflow: hidden;
`,StyledTitleContainer=styled_components_browser_esm.ZP.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
`,StyledIconContainer=styled_components_browser_esm.ZP.span`
  display: flex;
  width: 18px;
  height: 18px;
  color: #fff;
  background-color: #f80;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
`,StyledToolbarContainer=styled_components_browser_esm.ZP.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 2;
  padding: 2px 4px;
  border: 1px solid ${props=>props.theme.borderColor};
  border-radius: ${props=>props.theme.borderRadius};
  box-shadow: ${props=>props.theme.boxShadow};
`,_MindView=({editor,getPos,node,updateAttributes})=>{const{width,height,svg}=node.attrs,[visible,toggleVisible]=(0,react.useState)(!1),[zoom,setZoom]=(0,react.useState)(1),svgToImgSrc=(0,react.useMemo)((()=>(0,utilities.oD)(svg)),[svg]),changeZoom=(0,react.useCallback)((type=>()=>{setZoom((currentZoom=>(0,utilities.uZ)("out"===type?currentZoom-constants.V4:currentZoom+constants.V4,constants.Zj,constants.sZ)))}),[]),onResize=(0,react.useCallback)((size=>{updateAttributes({width:size.width,height:size.height})}),[updateAttributes]),onViewportChange=(0,react.useCallback)((visible=>{visible&&toggleVisible(!0)}),[toggleVisible]);return react.createElement(tiptap_react_esm.T5,null,react.createElement(visibility_sensor_default(),{onChange:onViewportChange},react.createElement(components.ez,{editor,getPos,width,height,minWidth:"100%",onResizeStop:onResize},react.createElement(StyledContainer,null,visible&&(svgToImgSrc?react.createElement("div",{style:{width:"100%",height:"100%",transition:"transform ease-in-out .2s",transform:`scale(${zoom})`}},react.createElement("img",{src:svgToImgSrc,style:{width:"100%",height:"100%"}})):null),react.createElement(StyledTitleContainer,null,react.createElement(components.T,null,react.createElement(StyledIconContainer,null,react.createElement(icons.Ts,null)),"思维导图")),react.createElement(StyledToolbarContainer,null,react.createElement(components.T,{spacing:4},react.createElement(components.u,{editor,title:"放大"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.WM,null),onClick:changeZoom("in")})),react.createElement(components.u,{editor,title:"缩小"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.DS,null),onClick:changeZoom("out")}))))))))},MindView=react.memo(_MindView,((prevProps,nextProps)=>!!deep_equal_default()(prevProps.node.attrs,nextProps.node.attrs))),DEFAULT_MIND_DATA=JSON.stringify({root:{data:{text:"中心节点"},children:[]},template:"default",theme:"fresh-purple",version:"1.4.43"}),Mind=tiptap_core_esm.NB.create({name:"mind",group:"block",selectable:!0,atom:!0,draggable:!0,inline:!1,addAttributes:()=>({defaultShowPicker:{default:!1},createUser:{default:null},width:{default:"100%"},height:{default:240},data:{default:DEFAULT_MIND_DATA},svg:{default:DEFAULT_MIND_DATA}}),addOptions:()=>({HTMLAttributes:{class:"mind"},getCreateUserId:()=>null}),parseHTML:()=>[{tag:"div[class=mind]"}],renderHTML({HTMLAttributes,node}){return["div",(0,tiptap_core_esm.P1)(this.options.HTMLAttributes,HTMLAttributes)]},addCommands(){return{setMind:attrs=>({tr,commands,chain,state})=>{if((attrs=attrs||{}).data=attrs.data||DEFAULT_MIND_DATA,tr.selection?.node?.type?.name==this.name)return commands.updateAttributes(this.name,attrs);const{selection}=state,{empty}=selection,head=selection.$head;if(empty)return chain().insertContent({type:this.name,attrs}).run();return head.node(head.depth).type.name===state.schema.topNodeType.name?chain().command((({tr,dispatch,state})=>(dispatch&&tr.replaceSelectionWith(state.schema.nodes[this.name].create(attrs)).scrollIntoView(),!0))).run():chain().insertContentAt(head.after(),[{type:this.name,attrs}]).run()}}},addNodeView:()=>(0,tiptap_react_esm.fW)(MindView),addInputRules(){return[(0,tiptap_core_esm.x2)({find:/^\$mind\$$/,type:this.type,getAttributes:()=>({width:"100%",defaultShowPicker:!0})})]}});var use_active=__webpack_require__("./src/hooks/use-active.tsx"),react_dom=__webpack_require__("./node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js");const StyledMindEditorContainer=styled_components_browser_esm.ZP.div`
  position: relative;
  height: 100%;
  margin: 0 -24px;
  border-top: 1px solid ${props=>props.theme.borderColor};

  .km-view {
    font-family: "STHeitiSC-Light", "STHeiti", "Hei", "Heiti SC",
      "Microsoft Yahei", Arial, sans-serif;
    -webkit-user-select: none;
    user-select: none;
    position: relative;
  }

  .km-view .km-receiver {
    position: absolute;
    left: -99999px;
    top: -99999px;
    width: 20px;
    height: 20px;
    outline: none;
    margin: 0;
  }

  .km-view image {
    cursor: zoom-in;
  }

  .km-image-viewer {
    position: fixed;
    z-index: 99999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.75);
  }

  .km-image-viewer .km-image-viewer-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    white-space: nowrap;
    overflow: auto;
  }

  .km-image-viewer .km-image-viewer-container::before {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    font-size: 0;
    vertical-align: middle;
  }

  .km-image-viewer .km-image-viewer-container img {
    cursor: zoom-out;
    vertical-align: middle;
  }

  .km-image-viewer .km-image-viewer-container img.limited {
    cursor: zoom-in;
    max-width: 100%;
    max-height: 100%;
  }

  .km-image-viewer .km-image-viewer-toolbar {
    z-index: 1;
    background: rgba(0, 0, 0, 0.75);
    text-align: right;
    transition: all 0.25s;
  }

  .km-image-viewer .km-image-viewer-toolbar.hidden {
    transform: translate(0, -100%);
    opacity: 0;
  }

  .km-image-viewer .km-image-viewer-btn {
    cursor: pointer;
    outline: 0;
    border: 0;
    width: 44px;
    height: 44px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY0IiBoZWlnaHQ9Ijg4IiB2aWV3Qm94PSIwIDAgMjY0IDg4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT5kZWZhdWx0LXNraW4gMjwvdGl0bGU+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Zz48cGF0aCBkPSJNNjcuMDAyIDU5LjV2My43NjhjLTYuMzA3Ljg0LTkuMTg0IDUuNzUtMTAuMDAyIDkuNzMyIDIuMjItMi44MyA1LjU2NC01LjA5OCAxMC4wMDItNS4wOThWNzEuNUw3MyA2NS41ODUgNjcuMDAyIDU5LjV6IiBpZD0iU2hhcGUiIGZpbGw9IiNmZmYiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTMgMjl2LTVoMnYzaDN2MmgtNXpNMTMgMTVoNXYyaC0zdjNoLTJ2LTV6TTMxIDE1djVoLTJ2LTNoLTN2LTJoNXpNMzEgMjloLTV2LTJoM3YtM2gydjV6IiBpZD0iU2hhcGUiLz48L2c+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTYyIDI0djVoLTJ2LTNoLTN2LTJoNXpNNjIgMjBoLTV2LTJoM3YtM2gydjV6TTcwIDIwdi01aDJ2M2gzdjJoLTV6TTcwIDI0aDV2MmgtM3YzaC0ydi01eiIvPjwvZz48cGF0aCBkPSJNMjAuNTg2IDY2bC01LjY1Ni01LjY1NiAxLjQxNC0xLjQxNEwyMiA2NC41ODZsNS42NTYtNS42NTYgMS40MTQgMS40MTRMMjMuNDE0IDY2bDUuNjU2IDUuNjU2LTEuNDE0IDEuNDE0TDIyIDY3LjQxNGwtNS42NTYgNS42NTYtMS40MTQtMS40MTRMMjAuNTg2IDY2eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMTEuNzg1IDY1LjAzTDExMCA2My41bDMtMy41aC0xMHYtMmgxMGwtMy0zLjUgMS43ODUtMS40NjhMMTE3IDU5bC01LjIxNSA2LjAzeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNTIuMjE1IDY1LjAzTDE1NCA2My41bC0zLTMuNWgxMHYtMmgtMTBsMy0zLjUtMS43ODUtMS40NjhMMTQ3IDU5bDUuMjE1IDYuMDN6IiBmaWxsPSIjZmZmIi8+PGc+PHBhdGggaWQ9IlJlY3RhbmdsZS0xMSIgZmlsbD0iI2ZmZiIgZD0iTTE2MC45NTcgMjguNTQzbC0zLjI1LTMuMjUtMS40MTMgMS40MTQgMy4yNSAzLjI1eiIvPjxwYXRoIGQ9Ik0xNTIuNSAyN2MzLjAzOCAwIDUuNS0yLjQ2MiA1LjUtNS41cy0yLjQ2Mi01LjUtNS41LTUuNS01LjUgMi40NjItNS41IDUuNSAyLjQ2MiA1LjUgNS41IDUuNXoiIGlkPSJPdmFsLTEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUwIDIxaDV2MWgtNXoiLz48L2c+PGc+PHBhdGggZD0iTTExNi45NTcgMjguNTQzbC0xLjQxNCAxLjQxNC0zLjI1LTMuMjUgMS40MTQtMS40MTQgMy4yNSAzLjI1eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMDguNSAyN2MzLjAzOCAwIDUuNS0yLjQ2MiA1LjUtNS41cy0yLjQ2Mi01LjUtNS41LTUuNS01LjUgMi40NjItNS41IDUuNSAyLjQ2MiA1LjUgNS41IDUuNXoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTA2IDIxaDV2MWgtNXoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTA5LjA0MyAxOS4wMDhsLS4wODUgNS0xLS4wMTcuMDg1LTV6Ii8+PC9nPjwvZz48L2c+PC9zdmc+);
  }

  .km-image-viewer .km-image-viewer-toolbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .km-image-viewer .km-image-viewer-close {
    background-position: 0 -44px;
  }

  .km-editor {
    overflow: hidden;
    z-index: 2;
  }
  .km-editor > .mask {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: transparent;
  }
  .km-editor > .receiver {
    position: absolute;
    background: white;
    outline: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    left: 0;
    top: 0;
    padding: 3px 5px;
    margin-left: -3px;
    margin-top: -5px;
    max-width: 300px;
    width: auto;
    font-size: 14px;
    line-height: 1.4em;
    min-height: 1.4em;
    box-sizing: border-box;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    border: none;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
  }
  .km-editor > .receiver.debug {
    opacity: 1;
    outline: 1px solid green;
    background: none;
    z-index: 0;
  }
  .km-editor > .receiver.input {
    pointer-events: all;
    opacity: 1;
    z-index: 999;
    background: white;
    outline: none;
  }
  div.minder-editor-container {
    position: absolute;
    top: 40px;
    bottom: 0;
    left: 0;
    right: 0;
    font-family: Arial, "Hiragino Sans GB", "Microsoft YaHei",
      "WenQuanYi Micro Hei", sans-serif;
  }
  .minder-editor {
    position: absolute;
    top: 92px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .minder-viewer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .control-panel {
    position: absolute;
    top: 0;
    right: 0;
    width: 250px;
    bottom: 0;
    border-left: 1px solid #ccc;
  }
  .minder-divider {
    position: absolute;
    top: 0;
    right: 250px;
    bottom: 0;
    width: 2px;
    background-color: #fbfbfb;
    cursor: ew-resize;
  }
  .panel-body {
    padding: 10px;
  }
  .upload-image {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .top-tab .nav-tabs {
    background-color: #e1e1e1;
    border: 0;
    height: 32px;
  }
  .top-tab .nav-tabs li {
    margin: 0;
  }
  .top-tab .nav-tabs li a {
    margin: 0;
    border: 0;
    padding: 6px 15px;
    border-radius: 0;
    vertical-align: middle;
  }
  .top-tab .nav-tabs li a:hover,
  .top-tab .nav-tabs li a:focus {
    background: inherit;
    border: 0;
  }
  .top-tab .nav-tabs li.active a {
    border: 0;
    background-color: #fff;
  }
  .top-tab .nav-tabs li.active a:hover,
  .top-tab .nav-tabs li.active a:focus {
    border: 0;
  }
  .top-tab .tab-content {
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid #dbdbdb;
  }
  .top-tab .tab-pane {
    font-size: 0;
  }
  .km-btn-group {
    display: inline-block;
    margin: 5px 0;
    padding: 0 5px;
    vertical-align: middle;
    border-right: 1px dashed #eee;
  }
  .km-btn-item {
    display: inline-block;
    margin: 0 3px;
    font-size: 0;
    cursor: default;
  }
  .km-btn-item[disabled] {
    opacity: 0.5;
  }
  .km-btn-item[disabled]:hover,
  .km-btn-item[disabled]:active {
    background-color: #fff;
  }
  .km-btn-item .km-btn-icon {
    display: inline-block;
    background: url(images/icons.png) no-repeat;
    background-position: 0 20px;
    width: 20px;
    height: 20px;
    padding: 2px;
    margin: 1px;
    vertical-align: middle;
  }
  .km-btn-item .km-btn-caption {
    display: inline-block;
    font-size: 12px;
    vertical-align: middle;
  }
  .km-btn-item:hover {
    background-color: #eff3fa;
  }
  .km-btn-item:active {
    background-color: #c4d0ee;
  }
  .do-group {
    width: 38px;
  }
  .undo .km-btn-icon {
    background-position: 0 -1240px;
  }
  .redo .km-btn-icon {
    background-position: 0 -1220px;
  }
  .append-group {
    width: 212px;
  }
  .append-child-node .km-btn-icon {
    background-position: 0 0;
  }
  .append-sibling-node .km-btn-icon {
    background-position: 0 -20px;
  }
  .append-parent-node .km-btn-icon {
    background-position: 0 -40px;
  }
  .arrange-group {
    width: 64px;
  }
  .arrange-up .km-btn-icon {
    background-position: 0 -280px;
  }
  .arrange-down .km-btn-icon {
    background-position: 0 -300px;
  }
  .operation-group {
    width: 64px;
  }
  .edit-node .km-btn-icon {
    background-position: 0 -60px;
  }
  .remove-node .km-btn-icon {
    background-position: 0 -80px;
  }
  .btn-group-vertical {
    vertical-align: middle;
    margin: 5px;
  }
  .btn-group-vertical .hyperlink,
  .btn-group-vertical .hyperlink-caption {
    width: 40px;
    margin: 0;
    padding: 0;
    border: none !important;
    border-radius: 0 !important;
  }
  .btn-group-vertical .hyperlink:hover,
  .btn-group-vertical .hyperlink-caption:hover {
    background-color: #eff3fa;
  }
  .btn-group-vertical .hyperlink:active,
  .btn-group-vertical .hyperlink-caption:active {
    background-color: #c4d0ee;
  }
  .btn-group-vertical .hyperlink.active,
  .btn-group-vertical .hyperlink-caption.active {
    box-shadow: none;
    background-color: #eff3fa;
  }
  .btn-group-vertical .hyperlink {
    height: 25px;
    background: url(images/icons.png) no-repeat center -100px;
  }
  .btn-group-vertical .hyperlink-caption {
    height: 20px;
  }
  .btn-group-vertical .hyperlink-caption .caption {
    font-size: 12px;
  }
  .open > .dropdown-toggle.btn-default {
    background-color: #eff3fa;
  }
  .btn-group-vertical .image-btn,
  .btn-group-vertical .image-btn-caption {
    width: 40px;
    margin: 0;
    padding: 0;
    border: none !important;
    border-radius: 0 !important;
  }
  .btn-group-vertical .image-btn:hover,
  .btn-group-vertical .image-btn-caption:hover {
    background-color: #eff3fa;
  }
  .btn-group-vertical .image-btn:active,
  .btn-group-vertical .image-btn-caption:active {
    background-color: #c4d0ee;
  }
  .btn-group-vertical .image-btn.active,
  .btn-group-vertical .image-btn-caption.active {
    box-shadow: none;
    background-color: #eff3fa;
  }
  .btn-group-vertical .image-btn {
    height: 25px;
    background: url(images/icons.png) no-repeat center -125px;
  }
  .btn-group-vertical .image-btn-caption {
    height: 20px;
  }
  .btn-group-vertical .image-btn-caption .caption {
    font-size: 12px;
  }
  .image-preview {
    display: block;
    max-width: 50%;
  }
  .modal-body .tab-pane {
    font-size: inherit;
    padding-top: 15px;
  }
  .search-result {
    margin-top: 15px;
    height: 370px;
    overflow: hidden;
  }
  .search-result ul {
    margin: 0;
    padding: 0;
    list-style: none;
    clear: both;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .search-result ul li {
    list-style: none;
    float: left;
    display: block;
    width: 130px;
    height: 130px;
    line-height: 130px;
    margin: 6px;
    padding: 0;
    font-size: 12px;
    position: relative;
    text-align: center;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #fcfcfc;
  }
  .search-result ul li.selected {
    border: 2px solid #fc8383;
  }
  .search-result ul li img {
    max-width: 126px;
    max-height: 130px;
    vertical-align: middle;
  }
  .search-result ul li span {
    display: block;
    position: absolute;
    bottom: 0;
    height: 20px;
    background: rgba(0, 0, 0, 0.5);
    left: 0;
    right: 0;
    color: white;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
    opacity: 0;
    -webkit-transform: translate(0, 20px);
    -ms-transform: translate(0, 20px);
    transform: translate(0, 20px);
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  .search-result ul li:hover span {
    opacity: 1;
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  @media (min-width: 768px) {
    .form-inline .form-control {
      width: 422px;
    }
  }
  .btn-group-vertical {
    vertical-align: top;
    margin: 5px;
  }
  .btn-group-vertical.note-btn-group {
    border-right: 1px dashed #eee;
    padding-right: 5px;
  }
  .btn-group-vertical .note-btn,
  .btn-group-vertical .note-btn-caption {
    width: 40px;
    margin: 0;
    padding: 0;
    border: none !important;
    border-radius: 0 !important;
  }
  .btn-group-vertical .note-btn:hover,
  .btn-group-vertical .note-btn-caption:hover {
    background-color: #eff3fa;
  }
  .btn-group-vertical .note-btn:active,
  .btn-group-vertical .note-btn-caption:active {
    background-color: #c4d0ee;
  }
  .btn-group-vertical .note-btn.active,
  .btn-group-vertical .note-btn-caption.active {
    box-shadow: none;
    background-color: #eff3fa;
  }
  .btn-group-vertical .note-btn {
    height: 25px;
    background: url(images/icons.png) no-repeat center -1150px;
  }
  .btn-group-vertical .note-btn-caption {
    height: 20px;
  }
  .btn-group-vertical .note-btn-caption .caption {
    font-size: 12px;
  }
  .open > .dropdown-toggle.btn-default {
    background-color: #eff3fa;
  }
  .gfm-render {
    font-size: 12px;
    color: #333;
    line-height: 1.8em;
  }
  .gfm-render blockquote,
  .gfm-render ul,
  .gfm-render table,
  .gfm-render p,
  .gfm-render pre,
  .gfm-render hr {
    margin: 1em 0;
    cursor: text;
  }
  .gfm-render blockquote:first-child:last-child,
  .gfm-render ul:first-child:last-child,
  .gfm-render table:first-child:last-child,
  .gfm-render p:first-child:last-child,
  .gfm-render pre:first-child:last-child,
  .gfm-render hr:first-child:last-child {
    margin: 0;
  }
  .gfm-render img {
    max-width: 100%;
  }
  .gfm-render a {
    color: blue;
  }
  .gfm-render a:hover {
    color: red;
  }
  .gfm-render blockquote {
    display: block;
    border-left: 4px solid #e4ad91;
    color: #da8e68;
    padding-left: 10px;
    font-style: italic;
    margin-left: 2em;
  }
  .gfm-render ul,
  .gfm-render ol {
    padding-left: 3em;
  }
  .gfm-render table {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
  }
  .gfm-render table th,
  .gfm-render table td {
    border: 1px solid #666;
    padding: 2px 4px;
  }
  .gfm-render table th {
    background: rgba(45, 141, 234, 0.2);
  }
  .gfm-render table tr:nth-child(even) td {
    background: rgba(45, 141, 234, 0.03);
  }
  .gfm-render em {
    color: red;
  }
  .gfm-render del {
    color: #999;
  }
  .gfm-render pre {
    background: rgba(45, 141, 234, 0.1);
    padding: 5px;
    border-radius: 5px;
    word-break: break-all;
    word-wrap: break-word;
  }
  .gfm-render code {
    background: rgba(45, 141, 234, 0.1);
    /*         display: inline-block; */
    padding: 0 5px;
    border-radius: 3px;
  }
  .gfm-render pre code {
    background: none;
  }
  .gfm-render hr {
    border: none;
    border-top: 1px solid #ccc;
  }
  .gfm-render .highlight {
    background: yellow;
    color: red;
  }
  .km-note {
    width: 300px;
    border-left: 1px solid #babfcd;
    padding: 5px 10px;
    background: white;
    position: absolute;
    top: 92px;
    right: 0;
    bottom: 0;
    left: auto;
    z-index: 3;
  }
  .km-note.panel {
    margin: 0;
    padding: 0;
  }
  .km-note.panel .panel-heading h3 {
    display: inline-block;
  }
  .km-note.panel .panel-heading .close-note-editor {
    width: 15px;
    height: 15px;
    display: inline-block;
  }
  .km-note.panel .panel-heading .close-note-editor:hover {
    cursor: pointer;
  }
  .km-note.panel .panel-body {
    padding: 0;
  }
  .km-note .CodeMirror {
    position: absolute;
    top: 41px;
    bottom: 0;
    height: auto;
    cursor: text;
    font-size: 14px;
    line-height: 1.3em;
    font-family: consolas;
  }
  .km-note-tips {
    color: #ccc;
    padding: 3px 8px;
  }
  #previewer-content {
    position: absolute;
    background: #ffd;
    padding: 5px 15px;
    border-radius: 5px;
    max-width: 400px;
    max-height: 200px;
    overflow: auto;
    z-index: 10;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    word-break: break-all;
    font-size: 12px;
    color: #333;
    line-height: 1.8em;
  }
  #previewer-content blockquote,
  #previewer-content ul,
  #previewer-content table,
  #previewer-content p,
  #previewer-content pre,
  #previewer-content hr {
    margin: 1em 0;
    cursor: text;
  }
  #previewer-content blockquote:first-child:last-child,
  #previewer-content ul:first-child:last-child,
  #previewer-content table:first-child:last-child,
  #previewer-content p:first-child:last-child,
  #previewer-content pre:first-child:last-child,
  #previewer-content hr:first-child:last-child {
    margin: 0;
  }
  #previewer-content img {
    max-width: 100%;
  }
  #previewer-content a {
    color: blue;
  }
  #previewer-content a:hover {
    color: red;
  }
  #previewer-content blockquote {
    display: block;
    border-left: 4px solid #e4ad91;
    color: #da8e68;
    padding-left: 10px;
    font-style: italic;
    margin-left: 2em;
  }
  #previewer-content ul,
  #previewer-content ol {
    padding-left: 3em;
  }
  #previewer-content table {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
  }
  #previewer-content table th,
  #previewer-content table td {
    border: 1px solid #666;
    padding: 2px 4px;
  }
  #previewer-content table th {
    background: rgba(45, 141, 234, 0.2);
  }
  #previewer-content table tr:nth-child(even) td {
    background: rgba(45, 141, 234, 0.03);
  }
  #previewer-content em {
    color: red;
  }
  #previewer-content del {
    color: #999;
  }
  #previewer-content pre {
    background: rgba(45, 141, 234, 0.1);
    padding: 5px;
    border-radius: 5px;
    word-break: break-all;
    word-wrap: break-word;
  }
  #previewer-content code {
    background: rgba(45, 141, 234, 0.1);
    /*         display: inline-block; */
    padding: 0 5px;
    border-radius: 3px;
  }
  #previewer-content pre code {
    background: none;
  }
  #previewer-content hr {
    border: none;
    border-top: 1px solid #ccc;
  }
  #previewer-content .highlight {
    background: yellow;
    color: red;
  }
  #previewer-content.ng-hide {
    display: block !important;
    left: -99999px !important;
    top: -99999px !important;
  }
  .panel-body {
    padding: 10px;
  }
  .tab-content .km-priority {
    vertical-align: middle;
    font-size: inherit;
    display: inline-block;
    width: 140px;
    margin: 5px;
    border-right: 1px dashed #eee;
  }
  .tab-content .km-priority .km-priority-item {
    margin: 0 1px;
    padding: 1px;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon {
    background: url(images/iconpriority.png) repeat-y;
    background-color: transparent;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon.priority-0 {
    background-position: 0 20px;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon.priority-1 {
    background-position: 0 0px;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon.priority-2 {
    background-position: 0 -20px;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon.priority-3 {
    background-position: 0 -40px;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon.priority-4 {
    background-position: 0 -60px;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon.priority-5 {
    background-position: 0 -80px;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon.priority-6 {
    background-position: 0 -100px;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon.priority-7 {
    background-position: 0 -120px;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon.priority-8 {
    background-position: 0 -140px;
  }
  .tab-content .km-priority .km-priority-item .km-priority-icon.priority-9 {
    background-position: 0 -160px;
  }
  .tab-content .km-progress {
    vertical-align: middle;
    font-size: inherit;
    display: inline-block;
    width: 140px;
    margin: 5px;
    border-right: 1px dashed #eee;
  }
  .tab-content .km-progress .km-progress-item {
    margin: 0 1px;
    padding: 1px;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon {
    background: url(images/iconprogress.png) repeat-y;
    background-color: transparent;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon.progress-0 {
    background-position: 0 20px;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon.progress-1 {
    background-position: 0 0px;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon.progress-2 {
    background-position: 0 -20px;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon.progress-3 {
    background-position: 0 -40px;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon.progress-4 {
    background-position: 0 -60px;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon.progress-5 {
    background-position: 0 -80px;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon.progress-6 {
    background-position: 0 -100px;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon.progress-7 {
    background-position: 0 -120px;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon.progress-8 {
    background-position: 0 -140px;
  }
  .tab-content .km-progress .km-progress-item .km-progress-icon.progress-9 {
    background-position: 0 -160px;
  }
  .resource-editor {
    vertical-align: middle;
    display: inline-block;
    margin: 5px;
  }
  .resource-editor .input-group,
  .resource-editor .km-resource {
    font-size: 12px;
  }
  .resource-editor .input-group {
    height: 20px;
    width: 168px;
  }
  .resource-editor .resource-dropdown {
    position: relative;
    width: 168px;
    border: 1px solid #ccc;
    margin-top: -1px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .resource-editor .resource-dropdown .km-resource {
    position: absolute;
    width: 154px;
    margin-bottom: 3px;
    padding: 0;
    list-style-type: none;
    overflow: scroll;
    max-height: 500px;
  }
  .resource-editor .resource-dropdown .km-resource.open {
    z-index: 3;
    background-color: #fff;
  }
  .resource-editor .resource-dropdown .km-resource li {
    display: inline-block;
    padding: 1px 2px;
    border-radius: 4px;
    margin: 2px 3px;
  }
  .resource-editor .resource-dropdown .km-resource li[disabled] {
    opacity: 0.5;
  }
  .resource-editor .resource-dropdown .resource-caret {
    display: block;
    float: right;
    width: 12px;
    height: 24px;
    padding: 8px 1px;
  }
  .resource-editor .resource-dropdown .resource-caret:hover {
    background-color: #eff3fa;
  }
  .resource-editor .resource-dropdown .resource-caret:active {
    background-color: #c4d0ee;
  }
  .resource-editor input.form-control,
  .resource-editor .btn {
    font-size: 12px;
  }
  .resource-editor input.form-control {
    padding: 2px 4px;
    height: 24px;
    border-bottom-left-radius: 0;
  }
  .resource-editor .input-group-btn {
    line-height: 24px;
  }
  .resource-editor .input-group-btn .btn {
    padding: 2px 4px;
    height: 24px;
    border-bottom-right-radius: 0;
  }
  .temp-panel {
    margin: 5px 5px 5px 10px;
    border-right: 1px dashed #eee;
    display: inline-block;
    vertical-align: middle;
  }
  .temp-list {
    min-width: 124px;
  }
  .temp-item-wrap {
    width: 50px;
    height: 40px;
    padding: 0 2px;
    margin: 5px;
    display: inline-block;
  }
  .temp-item {
    display: inline-block;
    width: 50px;
    height: 40px;
    background-image: url(images/template.png);
    background-repeat: no-repeat;
  }
  .temp-item.default {
    background-position: 0 0;
  }
  .temp-item.structure {
    background-position: -50px 0;
  }
  .temp-item.filetree {
    background-position: -100px 0;
  }
  .temp-item.right {
    background-position: -150px 0;
  }
  .temp-item.fish-bone {
    background-position: -200px 0;
  }
  .temp-item.tianpan {
    background-position: -250px 0;
  }
  .current-temp-item {
    width: 74px;
    padding: 0 0 0 5px;
    border: 1px solid #fff;
  }
  .current-temp-item:hover {
    background-color: #eff3fa;
  }
  .current-temp-item[disabled] {
    opacity: 0.5;
  }
  .current-temp-item .caret {
    margin-left: 5px;
  }
  .temp-item-selected {
    background-color: #87a9da;
  }
  .theme-panel {
    height: 42px;
    margin: 5px;
    padding: 0 5px 0 0;
    border-right: 1px dashed #eee;
    display: inline-block;
    vertical-align: middle;
  }
  .theme-list {
    min-width: 162px;
  }
  div a.theme-item {
    display: inline-block;
    width: 70px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    padding: 0 5px;
    font-size: 12px;
    cursor: pointer;
    text-decoration: none;
    color: #000;
  }
  .theme-item-selected {
    width: 100px;
    padding: 6px 7px;
    border: 1px solid #fff;
  }
  .theme-item-selected:hover {
    background-color: #eff3fa;
  }
  .theme-item-selected .caret {
    margin-left: 5px;
  }
  .theme-item-selected[disabled] {
    opacity: 0.5;
  }
  .theme-item-wrap {
    display: inline-block;
    width: 80px;
    height: 40px;
    padding: 5px;
  }
  .theme-item-wrap:hover {
    background-color: #eff3fa;
  }
  .readjust-layout {
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px 0 5px;
    border-right: 1px dashed #eee;
  }
  .btn-icon {
    width: 25px;
    height: 25px;
    margin-left: 12px;
    display: block;
  }
  .btn-label {
    font-size: 12px;
  }
  .btn-wrap {
    width: 50px;
    height: 42px;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
  }
  .btn-wrap[disabled] span {
    opacity: 0.5;
  }
  .btn-wrap[disabled] {
    cursor: default;
  }
  .btn-wrap[disabled]:hover {
    background-color: transparent;
  }
  .btn-wrap[disabled]:active {
    background-color: transparent;
  }
  .btn-wrap:link {
    text-decoration: none;
  }
  .btn-wrap:visited {
    text-decoration: none;
  }
  .btn-wrap:hover {
    background-color: #eff3fa;
    text-decoration: none;
  }
  .btn-wrap:active {
    background-color: #c4d0ee;
  }
  .reset-layout-icon {
    background: url(images/icons.png) no-repeat;
    background-position: 0 -150px;
  }
  .style-operator {
    display: inline-block;
    vertical-align: middle;
    padding: 0 5px;
    border-right: 1px dashed #eee;
  }
  .style-operator .clear-style {
    vertical-align: middle;
  }
  .clear-style-icon {
    background: url(images/icons.png) no-repeat;
    background-position: 0 -175px;
  }
  .s-btn-group-vertical {
    display: inline-block;
    vertical-align: middle;
  }
  .s-btn-icon {
    width: 20px;
    height: 20px;
    margin-right: 3px;
    display: inline-block;
    vertical-align: middle;
  }
  .s-btn-label {
    font-size: 12px;
    vertical-align: middle;
    display: inline-block;
  }
  .s-btn-wrap {
    padding: 0 5px 0 3px;
    display: inline-block;
    text-decoration: none;
    font-size: 0;
  }
  .s-btn-wrap[disabled] span {
    opacity: 0.5;
  }
  .s-btn-wrap[disabled] {
    cursor: default;
  }
  .s-btn-wrap[disabled]:hover {
    background-color: transparent;
  }
  .s-btn-wrap[disabled]:active {
    background-color: transparent;
  }
  .s-btn-wrap:hover {
    background-color: #eff3fa;
    text-decoration: none;
  }
  .s-btn-wrap:active {
    background-color: #c4d0ee;
  }
  .copy-style-icon {
    background: url(images/icons.png) no-repeat;
    background-position: 0 -200px;
  }
  .paste-style-wrap {
    display: block;
  }
  .paste-style-icon {
    background: url(images/icons.png) no-repeat;
    background-position: 0 -220px;
  }
  .font-operator {
    width: 170px;
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    padding: 0 5px;
  }
  .font-operator .font-size-list {
    display: inline-block;
    border: 1px solid #eee;
    padding: 2px 4px;
  }
  .font-operator .font-family-list {
    display: inline-block;
    border: 1px solid #eee;
    padding: 2px 4px;
  }
  .current-font-item a {
    text-decoration: none;
    display: inline-block;
  }
  .current-font-family {
    width: 75px;
    height: 18px;
    overflow: hidden;
    vertical-align: bottom;
  }
  .current-font-size {
    width: 32px;
    height: 18px;
    overflow: hidden;
    vertical-align: bottom;
  }
  .current-font-item[disabled] {
    opacity: 0.5;
  }
  .font-item {
    line-height: 1em;
    text-align: left;
  }
  .font-item-selected {
    background-color: #87a9da;
  }
  .font-bold,
  .font-italics {
    display: inline-block;
    background: url(images/icons.png) no-repeat;
    cursor: pointer;
    margin: 0 3px;
  }
  .font-bold:hover,
  .font-italics:hover {
    background-color: #eff3fa;
  }
  .font-bold:active,
  .font-italics:active {
    background-color: #c4d0ee;
  }
  .font-bold[disabled],
  .font-italics[disabled] {
    opacity: 0.5;
  }
  .font-bold {
    background-position: 0 -240px;
  }
  .font-italics {
    background-position: 0 -260px;
  }
  .font-bold-selected,
  .font-italics-selected {
    background-color: #87a9da;
  }
  .font-color-wrap {
    display: inline-block;
    width: 30px;
    height: 22px;
    margin: 3px 3px 0 0;
    border: 1px #efefef solid;
    vertical-align: middle;
    font-size: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .font-color-wrap[disabled] {
    opacity: 0.5;
  }
  .font-color-wrap .quick-font-color {
    display: inline-block;
    width: 20px;
    height: 16px;
    font-size: 14px;
    line-height: 16px;
    vertical-align: top;
    text-align: center;
    cursor: default;
    color: #000;
  }
  .font-color-wrap .quick-font-color:hover {
    background-color: #eff3fa;
  }
  .font-color-wrap .quick-font-color:active {
    background-color: #c4d0ee;
  }
  .font-color-wrap .quick-font-color[disabled] {
    opacity: 0.5;
  }
  .font-color-wrap .font-color-preview {
    display: inline-block;
    width: 12px;
    height: 2px;
    margin: 0 4px 0;
    background-color: #000;
  }
  .font-color-wrap .font-color-preview[disabled] {
    opacity: 0.5;
  }
  .font-color {
    display: inline-block;
    width: 8px;
    height: 16px;
  }
  .font-color:hover {
    background-color: #eff3fa;
  }
  .font-color:active {
    background-color: #c4d0ee;
  }
  .font-color[disabled] {
    opacity: 0.5;
  }
  .font-color .caret {
    margin-left: -2px;
    margin-top: 7px;
  }
  .bg-color-wrap {
    display: inline-block;
    width: 30px;
    height: 22px;
    margin: 3px 3px 0 0;
    border: 1px #efefef solid;
    vertical-align: middle;
    font-size: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .bg-color-wrap[disabled] {
    opacity: 0.5;
  }
  .bg-color-wrap .quick-bg-color {
    display: inline-block;
    width: 20px;
    height: 16px;
    font-size: 14px;
    line-height: 16px;
    vertical-align: top;
    text-align: center;
    cursor: default;
    color: #000;
    background: url(images/icons.png) no-repeat center -1260px;
  }
  .bg-color-wrap .quick-bg-color:hover {
    background-color: #eff3fa;
  }
  .bg-color-wrap .quick-bg-color:active {
    background-color: #c4d0ee;
  }
  .bg-color-wrap .quick-bg-color[disabled] {
    opacity: 0.5;
  }
  .bg-color-wrap .bg-color-preview {
    display: inline-block;
    width: 12px;
    height: 2px;
    margin: 0 4px 0;
    background-color: #fff;
  }
  .bg-color-wrap .bg-color-preview[disabled] {
    opacity: 0.5;
  }
  .bg-color {
    display: inline-block;
    width: 8px;
    height: 16px;
  }
  .bg-color:hover {
    background-color: #eff3fa;
  }
  .bg-color:active {
    background-color: #c4d0ee;
  }
  .bg-color[disabled] {
    opacity: 0.5;
  }
  .bg-color .caret {
    margin-left: -2px;
    margin-top: 7px;
  }
  .btn-group-vertical {
    vertical-align: middle;
    margin: 5px;
  }
  .btn-group-vertical .expand,
  .btn-group-vertical .expand-caption {
    width: 40px;
    margin: 0;
    padding: 0;
    border: none !important;
    border-radius: 0 !important;
  }
  .btn-group-vertical .expand:hover,
  .btn-group-vertical .expand-caption:hover {
    background-color: #eff3fa;
  }
  .btn-group-vertical .expand:active,
  .btn-group-vertical .expand-caption:active {
    background-color: #c4d0ee;
  }
  .btn-group-vertical .expand.active,
  .btn-group-vertical .expand-caption.active {
    box-shadow: none;
    background-color: #eff3fa;
  }
  .btn-group-vertical .expand {
    height: 25px;
    background: url(images/icons.png) no-repeat 0 -995px;
    background-position-x: 50%;
  }
  .btn-group-vertical .expand-caption {
    height: 20px;
  }
  .btn-group-vertical .expand-caption .caption {
    font-size: 12px;
  }
  .btn-group-vertical {
    vertical-align: middle;
    margin: 5px;
  }
  .btn-group-vertical .select,
  .btn-group-vertical .select-caption {
    width: 40px;
    margin: 0;
    padding: 0;
    border: none !important;
    border-radius: 0 !important;
  }
  .btn-group-vertical .select:hover,
  .btn-group-vertical .select-caption:hover {
    background-color: #eff3fa;
  }
  .btn-group-vertical .select:active,
  .btn-group-vertical .select-caption:active {
    background-color: #c4d0ee;
  }
  .btn-group-vertical .select.active,
  .btn-group-vertical .select-caption.active {
    box-shadow: none;
    background-color: #eff3fa;
  }
  .btn-group-vertical .select {
    height: 25px;
    background: url(images/icons.png) no-repeat 7px -1175px;
  }
  .btn-group-vertical .select-caption {
    height: 20px;
  }
  .btn-group-vertical .select-caption .caption {
    font-size: 12px;
  }
  .btn-group-vertical {
    vertical-align: middle;
    margin: 5px;
  }
  .btn-group-vertical .search,
  .btn-group-vertical .search-caption {
    width: 40px;
    margin: 0;
    padding: 0;
    border: none !important;
    border-radius: 0 !important;
  }
  .btn-group-vertical .search:hover,
  .btn-group-vertical .search-caption:hover {
    background-color: #eff3fa;
  }
  .btn-group-vertical .search:active,
  .btn-group-vertical .search-caption:active {
    background-color: #c4d0ee;
  }
  .btn-group-vertical .search.active,
  .btn-group-vertical .search-caption.active {
    box-shadow: none;
    background-color: #eff3fa;
  }
  .btn-group-vertical .search {
    height: 25px;
    background: url(images/icons.png) no-repeat 0 -345px;
    background-position-x: 50%;
  }
  .btn-group-vertical .search-caption {
    height: 20px;
  }
  .btn-group-vertical .search-caption .caption {
    font-size: 12px;
  }
  .search-box {
    float: right;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    position: relative;
    top: 0;
    z-index: 3;
    width: 360px;
    height: 40px;
    padding: 3px 6px;
    opacity: 1;
  }
  .search-box .search-input-wrap,
  .search-box .prev-and-next-btn {
    float: left;
  }
  .search-box .close-search {
    float: right;
    height: 16px;
    width: 16px;
    padding: 1px;
    border-radius: 100%;
    margin-top: 6px;
    margin-right: 10px;
  }
  .search-box .close-search .glyphicon {
    top: -1px;
  }
  .search-box .close-search:hover {
    background-color: #efefef;
  }
  .search-box .close-search:active {
    background-color: #999;
  }
  .search-box .search-input-wrap {
    width: 240px;
  }
  .search-box .prev-and-next-btn {
    margin-left: 5px;
  }
  .search-box .prev-and-next-btn .btn:focus {
    outline: none;
  }
  .search-box .search-addon {
    background-color: #fff;
  }
  .tool-group {
    padding: 0;
  }
  .tool-group[disabled] {
    opacity: 0.5;
  }
  .tool-group .tool-group-item {
    display: inline-block;
    border-radius: 4px;
  }
  .tool-group .tool-group-item .tool-group-icon {
    width: 20px;
    height: 20px;
    padding: 2px;
    margin: 1px;
  }
  .tool-group .tool-group-item:hover {
    background-color: #eff3fa;
  }
  .tool-group .tool-group-item:active {
    background-color: #c4d0ee;
  }
  .tool-group .tool-group-item.active {
    background-color: #c4d0ee;
  }
  .nav-bar {
    position: absolute;
    width: 35px;
    height: 240px;
    padding: 5px 0;
    left: 10px;
    bottom: 10px;
    background: #fc8383;
    color: #fff;
    border-radius: 4px;
    z-index: 10;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    transition: -webkit-transform 0.7s 0.1s ease;
    transition: transform 0.7s 0.1s ease;
  }
  .nav-bar .nav-btn {
    width: 35px;
    height: 24px;
    line-height: 24px;
    text-align: center;
  }
  .nav-bar .nav-btn .icon {
    background: url(images/icons.png);
    width: 20px;
    height: 20px;
    margin: 2px auto;
    display: block;
  }
  .nav-bar .nav-btn.active {
    background-color: #5a6378;
  }
  .nav-bar .zoom-in .icon {
    background-position: 0 -730px;
  }
  .nav-bar .zoom-out .icon {
    background-position: 0 -750px;
  }
  .nav-bar .hand .icon {
    background-position: 0 -770px;
    width: 25px;
    height: 25px;
    margin: 0 auto;
  }
  .nav-bar .camera .icon {
    background-position: 0 -870px;
    width: 25px;
    height: 25px;
    margin: 0 auto;
  }
  .nav-bar .nav-trigger .icon {
    background-position: 0 -845px;
    width: 25px;
    height: 25px;
    margin: 0 auto;
  }
  .nav-bar .zoom-pan {
    width: 2px;
    height: 70px;
    box-shadow: 0 1px #e50000;
    position: relative;
    background: white;
    margin: 3px auto;
    overflow: visible;
  }
  .nav-bar .zoom-pan .origin {
    position: absolute;
    width: 20px;
    height: 8px;
    left: -9px;
    margin-top: -4px;
    background: transparent;
  }
  .nav-bar .zoom-pan .origin:after {
    content: " ";
    display: block;
    width: 6px;
    height: 2px;
    background: white;
    left: 7px;
    top: 3px;
    position: absolute;
  }
  .nav-bar .zoom-pan .indicator {
    position: absolute;
    width: 8px;
    height: 8px;
    left: -3px;
    background: white;
    border-radius: 100%;
    margin-top: -4px;
  }
  .nav-previewer {
    background: #fff;
    width: 140px;
    height: 120px;
    position: absolute;
    left: 45px;
    bottom: 30px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    border-radius: 0 2px 2px 0;
    padding: 1px;
    z-index: 9;
    cursor: crosshair;
    transition: -webkit-transform 0.7s 0.1s ease;
    transition: transform 0.7s 0.1s ease;
  }
  .nav-previewer.grab {
    cursor: move;
    cursor: -webkit-grabbing;
    cursor: -moz-grabbing;
    cursor: grabbing;
  }
`;try{StyledMindEditorContainer.displayName="StyledMindEditorContainer",StyledMindEditorContainer.__docgenInfo={description:"",displayName:"StyledMindEditorContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement) => void) | RefObject<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/extensions/mind/menu/style.tsx#StyledMindEditorContainer"]={docgenInfo:StyledMindEditorContainer.__docgenInfo,name:"StyledMindEditorContainer",path:"src/extensions/mind/menu/style.tsx#StyledMindEditorContainer"})}catch(__react_docgen_typescript_loader_error){}const BgColor=({editor,bgColor,selectedNode,setBackgroundColor})=>react.createElement(components.zH,{onSetColor:color=>{setBackgroundColor(color)}},react.createElement(components.u,{editor,title:"背景色",zLevel:"highest"},react.createElement(components.zx,{disabled:!selectedNode,icon:react.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},react.createElement(icons.t6,null),react.createElement("span",{style:{width:12,height:2,backgroundColor:bgColor}}))})));try{BgColor.displayName="BgColor",BgColor.__docgenInfo={description:"",displayName:"BgColor",props:{editor:{defaultValue:null,description:"",name:"editor",required:!0,type:{name:"any"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!0,type:{name:"any"}},selectedNode:{defaultValue:null,description:"",name:"selectedNode",required:!0,type:{name:"any"}},setBackgroundColor:{defaultValue:null,description:"",name:"setBackgroundColor",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/extensions/mind/menu/toolbar/bgcolor.tsx#BgColor"]={docgenInfo:BgColor.__docgenInfo,name:"BgColor",path:"src/extensions/mind/menu/toolbar/bgcolor.tsx#BgColor"})}catch(__react_docgen_typescript_loader_error){}const FontColor=({editor,selectedNode,setFontColor,textColor})=>react.createElement(components.zH,{onSetColor:color=>{setFontColor(color)}},react.createElement(components.u,{editor,title:"文本色",zLevel:"highest"},react.createElement(components.zx,{disabled:!selectedNode,icon:react.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},react.createElement(icons.wG,null),react.createElement("span",{style:{width:12,height:2,backgroundColor:textColor}}))})));try{FontColor.displayName="FontColor",FontColor.__docgenInfo={description:"",displayName:"FontColor",props:{editor:{defaultValue:null,description:"",name:"editor",required:!0,type:{name:"any"}},selectedNode:{defaultValue:null,description:"",name:"selectedNode",required:!0,type:{name:"any"}},setFontColor:{defaultValue:null,description:"",name:"setFontColor",required:!0,type:{name:"any"}},textColor:{defaultValue:null,description:"",name:"textColor",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/extensions/mind/menu/toolbar/font-color.tsx#FontColor"]={docgenInfo:FontColor.__docgenInfo,name:"FontColor",path:"src/extensions/mind/menu/toolbar/font-color.tsx#FontColor"})}catch(__react_docgen_typescript_loader_error){}const HELP_MESSAGE=[{key:"新增同级节点",value:"Enter 键"},{key:"新增子节点",value:"Tab 键"},{key:"编辑节点文字",value:"双击节点"},{key:"编辑节点菜单",value:"在节点右键"}],Help=()=>react.createElement(components.J2,{zIndex:1e4,spacing:10,style:{padding:12,overflow:"hidden"},position:"bottomLeft",content:react.createElement("section",null,HELP_MESSAGE.map((msg=>react.createElement("div",null,msg.key,"：",msg.value))))},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.Su,null)})),Image=({editor,disabled,image,setImage})=>react.createElement(components.Lt,{stopPropagation:!0,zIndex:1e4,trigger:"click",position:"bottomLeft",render:react.createElement("div",{style:{padding:12}},react.createElement(components.gq,{editor,mimeTypes:["image/*"],onOK:setImage}))},react.createElement("span",{style:{display:"inline-block"}},react.createElement(components.u,{editor,title:"设置图片",zLevel:"highest"},react.createElement(components.zx,{disabled,icon:react.createElement(icons.Z,null)}))));try{Image.displayName="Image",Image.__docgenInfo={description:"",displayName:"Image",props:{editor:{defaultValue:null,description:"",name:"editor",required:!0,type:{name:"any"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"any"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"any"}},setImage:{defaultValue:null,description:"",name:"setImage",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/extensions/mind/menu/toolbar/image.tsx#Image"]={docgenInfo:Image.__docgenInfo,name:"Image",path:"src/extensions/mind/menu/toolbar/image.tsx#Image"})}catch(__react_docgen_typescript_loader_error){}const Link=({editor,disabled,link,setLink})=>{const inputRef=(0,react.useRef)(null),[url,setUrl]=(0,react.useState)(link),save=(0,react.useCallback)((()=>{setLink(url)}),[url]);return(0,react.useEffect)((()=>{setUrl(link)}),[link]),(0,react.useEffect)((()=>{const timer=setTimeout((()=>{inputRef.current?.focus()}),300);return()=>{clearTimeout(timer)}}),[]),react.createElement(components.Lt,{stopPropagation:!0,zIndex:1e4,trigger:"click",position:"bottomLeft",render:react.createElement("div",{style:{padding:12}},react.createElement(components.II,{autofocus:!0,ref:inputRef,value:url,onChange:setUrl}),react.createElement(components.zx,{type:"primary",onClick:save,style:{marginTop:12}},"保存"))},react.createElement("span",{style:{display:"inline-block"}},react.createElement(components.u,{editor,title:"设置链接",zLevel:"highest"},react.createElement(components.zx,{disabled,icon:react.createElement(icons.JH,null)}))))};try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{editor:{defaultValue:null,description:"",name:"editor",required:!0,type:{name:"any"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"any"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"any"}},setLink:{defaultValue:null,description:"",name:"setLink",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/extensions/mind/menu/toolbar/link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/extensions/mind/menu/toolbar/link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}const getProgressTitle=index=>{switch(index){case 0:return"移除进度";case 1:return"未开始";case 9:return"全部完成";default:return"完成"+(index-1)+"/8"}},PROGRESSES=Array.from({length:10},((_,i)=>({text:getProgressTitle(i),value:i}))),PRIORITIES=[{text:"移除优先级",value:0},...Array.from({length:9},((_,i)=>({text:`P${i+1}`,value:i+1})))],TEMPLATES=[{label:"经典",value:"default"},{label:"文件夹",value:"filetree"},{label:"鱼骨图",value:"fish-bone"},{label:"靠右",value:"right"},{label:"组织",value:"structure"},{label:"天盘",value:"tianpan"}],THEMES=[{label:"经典",value:"classic",style:{color:"rgb(68, 51, 0)",background:" rgb(233, 223, 152)"}},{label:"紧凑",value:"classic-compact",style:{color:"rgb(68, 51, 0)",background:" rgb(233, 223, 152)"}},{label:"清新红",value:"fresh-red",style:{color:"white",background:" rgb(191, 115, 115)"}},{label:"泥土黄",value:"fresh-soil",style:{color:"white",background:"rgb(191, 147, 115)"}},{label:"文艺绿",value:"fresh-green",style:{color:"white",background:"rgb(115, 191, 118)"}},{label:"天空蓝",value:"fresh-blue",style:{color:"white",background:"rgb(115, 161, 191)"}},{label:"浪漫紫",value:"fresh-purple",style:{color:"white",background:"rgb(123, 115, 191)"}},{label:"胭脂粉",value:"fresh-pink",style:{color:"white",background:"rgb(191, 115, 148)"}},{label:"冷光",value:"snow",style:{color:"#fff",background:"rgb(164, 197, 192)"}},{label:"鱼骨图",value:"fish",style:{color:"#fff",background:"rgb(58, 65, 68)"}}],Priority=({editor,selectedNode,setPriority})=>react.createElement(components.Lt,{trigger:"click",render:react.createElement(components.Lt.Menu,null,PRIORITIES.map((item=>react.createElement(components.Lt.Item,{key:item.value,onClick:setPriority(item.value)},item.text))))},react.createElement("span",null,react.createElement(components.u,{editor,title:"优先级",zLevel:"highest"},react.createElement(components.zx,{size:"small",disabled:!selectedNode,icon:react.createElement(icons.cb,null)}))));try{Priority.displayName="Priority",Priority.__docgenInfo={description:"",displayName:"Priority",props:{editor:{defaultValue:null,description:"",name:"editor",required:!0,type:{name:"any"}},selectedNode:{defaultValue:null,description:"",name:"selectedNode",required:!0,type:{name:"any"}},setPriority:{defaultValue:null,description:"",name:"setPriority",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/extensions/mind/menu/toolbar/priority.tsx#Priority"]={docgenInfo:Priority.__docgenInfo,name:"Priority",path:"src/extensions/mind/menu/toolbar/priority.tsx#Priority"})}catch(__react_docgen_typescript_loader_error){}const Progress=({editor,selectedNode,setProgress})=>react.createElement(components.Lt,{trigger:"click",render:react.createElement(components.Lt.Menu,null,PROGRESSES.map((progress=>react.createElement(components.Lt.Item,{key:progress.value,onClick:setProgress(progress.value)},progress.text))))},react.createElement("span",null,react.createElement(components.u,{editor,title:"进度",zLevel:"highest"},react.createElement(components.zx,{size:"small",disabled:!selectedNode,icon:react.createElement(icons.Gw,null)}))));try{Progress.displayName="Progress",Progress.__docgenInfo={description:"",displayName:"Progress",props:{editor:{defaultValue:null,description:"",name:"editor",required:!0,type:{name:"any"}},selectedNode:{defaultValue:null,description:"",name:"selectedNode",required:!0,type:{name:"any"}},setProgress:{defaultValue:null,description:"",name:"setProgress",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/extensions/mind/menu/toolbar/progress.tsx#Progress"]={docgenInfo:Progress.__docgenInfo,name:"Progress",path:"src/extensions/mind/menu/toolbar/progress.tsx#Progress"})}catch(__react_docgen_typescript_loader_error){}const StyledSection=styled_components_browser_esm.ZP.section`
  margin-top: 16px;

  > div {
    display: flex;
    width: 192px;
    margin-top: 8px;
    flex-wrap: wrap;

    ul {
      display: flex;
      padding: 0;
      margin: 0;
      list-style: none;
      flex-wrap: wrap;

      li {
        width: 80px;
        height: 30px;
        padding: 0 5px;
        font-size: 12px;
        line-height: 30px;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        border: 1px solid rgb(28 31 35 / 8%);

        * {
          font-size: inherit;
        }

        &.active {
          border: 1px solid rgb(0 101 255);
        }

        &:nth-of-type(2n) {
          margin-left: 8px;
        }

        &:nth-of-type(n + 3) {
          margin-top: 8px;
        }
      }
    }
  }
`;try{StyledSection.displayName="StyledSection",StyledSection.__docgenInfo={description:"",displayName:"StyledSection",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLElement) => void) | RefObject<HTMLElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/extensions/mind/menu/toolbar/styled.tsx#StyledSection"]={docgenInfo:StyledSection.__docgenInfo,name:"StyledSection",path:"src/extensions/mind/menu/toolbar/styled.tsx#StyledSection"})}catch(__react_docgen_typescript_loader_error){}const Template=({editor,template,setTemplate})=>react.createElement(components.J2,{zIndex:constants.DA,spacing:10,style:{padding:"0 12px 12px",overflow:"hidden"},position:"bottomLeft",trigger:"hover",getPopupContainer:()=>editor.options.element,content:react.createElement(StyledSection,null,react.createElement("span",null,"布局"),react.createElement("div",null,react.createElement("ul",null,TEMPLATES.map((item=>react.createElement("li",{key:item.label,onClick:()=>setTemplate(item.value)},react.createElement("span",null,item.label)))))))},react.createElement("span",null,react.createElement(components.u,{editor,title:"布局",zLevel:"highest"},react.createElement(components.zx,{icon:react.createElement(icons.l1,null),size:"small"}))));try{Template.displayName="Template",Template.__docgenInfo={description:"",displayName:"Template",props:{editor:{defaultValue:null,description:"",name:"editor",required:!0,type:{name:"any"}},template:{defaultValue:null,description:"",name:"template",required:!0,type:{name:"any"}},setTemplate:{defaultValue:null,description:"",name:"setTemplate",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/extensions/mind/menu/toolbar/template.tsx#Template"]={docgenInfo:Template.__docgenInfo,name:"Template",path:"src/extensions/mind/menu/toolbar/template.tsx#Template"})}catch(__react_docgen_typescript_loader_error){}const Theme=({editor,theme,setTheme})=>react.createElement(components.J2,{zIndex:constants.DA,spacing:10,style:{padding:"0 12px 12px",overflow:"hidden"},position:"bottomLeft",getPopupContainer:()=>editor.options.element,content:react.createElement(StyledSection,null,react.createElement("span",null,"主题"),react.createElement("div",null,react.createElement("ul",null,THEMES.map((item=>react.createElement("li",{key:item.label,style:item.style||{},onClick:()=>setTheme(item.value)},item.label))))))},react.createElement("span",null,react.createElement(components.u,{editor,title:"主题",zLevel:"highest"},react.createElement(components.zx,{icon:react.createElement(icons.us,null),size:"small"}))));try{Theme.displayName="Theme",Theme.__docgenInfo={description:"",displayName:"Theme",props:{editor:{defaultValue:null,description:"",name:"editor",required:!0,type:{name:"any"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"any"}},setTheme:{defaultValue:null,description:"",name:"setTheme",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/extensions/mind/menu/toolbar/theme.tsx#Theme"]={docgenInfo:Theme.__docgenInfo,name:"Theme",path:"src/extensions/mind/menu/toolbar/theme.tsx#Theme"})}catch(__react_docgen_typescript_loader_error){}const Toolbar=({editor,mind})=>{const[node,setNode]=(0,react.useState)(null),[hasUndo,toggleHasUndo]=(0,react.useState)(!1),[hasRedo,toggleHasRedo]=(0,react.useState)(!1),[isBold,toggleIsBold]=(0,react.useState)(!1),[textColor,setTextColor]=(0,react.useState)(""),[bgColor,setBgColor]=(0,react.useState)(""),[link,setLink]=(0,react.useState)(""),[image,setImage]=(0,react.useState)(""),[template,setTemplateState]=(0,react.useState)(""),[theme,setThemeState]=(0,react.useState)(""),undo=(0,react.useCallback)((()=>{mind&&mind.editor.history.hasUndo()&&mind.editor.history.undo()}),[mind]),redo=(0,react.useCallback)((()=>{mind&&mind.editor.history.hasRedo()&&mind.editor.history.redo()}),[mind]),toggleBold=(0,react.useCallback)((()=>{mind&&mind.execCommand("Bold")}),[mind]),setFontColor=(0,react.useCallback)((color=>{mind&&mind.execCommand("ForeColor",color)}),[mind]),setBackgroundColor=(0,react.useCallback)((color=>{mind&&mind.execCommand("Background",color)}),[mind]),setHyperLink=(0,react.useCallback)((url=>{mind&&mind.execCommand("HyperLink",url)}),[mind]),insertImage=(0,react.useCallback)((url=>{mind&&mind.execCommand("Image",url)}),[mind]),setProgress=(0,react.useCallback)((value=>()=>{if(!mind)return;mind.getSelectedNode()&&mind.execCommand("progress",value)}),[mind]),setPriority=(0,react.useCallback)((value=>()=>{if(!mind)return;mind.getSelectedNode()&&mind.execCommand("priority",value)}),[mind]),setTemplate=(0,react.useCallback)((template=>{mind&&mind.execCommand("template",template)}),[mind]),setTheme=(0,react.useCallback)((theme=>{mind&&mind.execCommand("theme",theme)}),[mind]),setZoom=(0,react.useCallback)((type=>()=>{mind&&mind.execCommand("minus"===type?"zoomOut":"zoomIn")}),[mind]),setCenter=(0,react.useCallback)((()=>{mind&&mind.execCommand("camera",mind.getRoot(),600)}),[mind]);return(0,react.useEffect)((()=>{if(!mind)return;const handler=()=>{const node=mind.getSelectedNode();let textColor,bgColor,link,image,isBold=!1;node?(isBold=1===mind.queryCommandState("Bold"),textColor=mind.queryCommandValue("ForeColor"),bgColor=mind.queryCommandValue("Background"),link=mind.queryCommandValue("HyperLink").url,image=mind.queryCommandValue("Image").url,setNode(node)):setNode(null),toggleHasUndo(mind.editor.history.hasUndo()),toggleHasRedo(mind.editor.history.hasRedo()),setTemplateState(mind.queryCommandValue("Template")),setThemeState(mind.queryCommandValue("Theme")),toggleIsBold(isBold),setTextColor(textColor),setBgColor(bgColor),setLink(link),setImage(image)};return mind.on("interactchange",handler),()=>{mind.off("interactchange",handler)}}),[mind,toggleHasUndo,toggleHasRedo,toggleIsBold,setBackgroundColor]),react.createElement(components.T,null,react.createElement(components.u,{editor,zLevel:"highest",title:"撤销"},react.createElement(components.zx,{onClick:undo,icon:react.createElement(icons.WL,null),disabled:!hasUndo})),react.createElement(components.u,{editor,zLevel:"highest",title:"重做"},react.createElement(components.zx,{onClick:redo,icon:react.createElement(icons.M1,null),disabled:!hasRedo})),react.createElement(components.iz,null),react.createElement(components.u,{editor,zLevel:"highest",title:"加粗"},react.createElement(components.zx,{disabled:!node,onClick:toggleBold,icon:react.createElement(icons.lM,null)})),react.createElement(FontColor,{editor,selectedNode:node,textColor,setFontColor}),react.createElement(BgColor,{editor,selectedNode:node,bgColor,setBackgroundColor}),react.createElement(Link,{editor,disabled:!node,link,setLink:setHyperLink}),react.createElement(Image,{editor,disabled:!node,image,setImage:insertImage}),react.createElement(components.iz,null),react.createElement(Progress,{editor,selectedNode:node,setProgress}),react.createElement(Priority,{editor,selectedNode:node,setPriority}),react.createElement(components.iz,null),react.createElement(components.u,{editor,zLevel:"highest",title:"居中"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.U6,{style:{fontSize:"0.85em"}}),onClick:setCenter})),react.createElement(components.u,{editor,zLevel:"highest",title:"缩小"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.DS,{style:{fontSize:"0.85em"}}),onClick:setZoom("minus")})),react.createElement(components.u,{editor,zLevel:"highest",title:"放大"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.WM,{style:{fontSize:"0.85em"}}),onClick:setZoom("plus")})),react.createElement(components.iz,null),react.createElement(Template,{editor,template,setTemplate}),react.createElement(Theme,{editor,theme,setTheme}),react.createElement(components.iz,null),react.createElement(Help,null))};try{Toolbar.displayName="Toolbar",Toolbar.__docgenInfo={description:"",displayName:"Toolbar",props:{editor:{defaultValue:null,description:"",name:"editor",required:!0,type:{name:"any"}},mind:{defaultValue:null,description:"",name:"mind",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/extensions/mind/menu/toolbar/index.tsx#Toolbar"]={docgenInfo:Toolbar.__docgenInfo,name:"Toolbar",path:"src/extensions/mind/menu/toolbar/index.tsx#Toolbar"})}catch(__react_docgen_typescript_loader_error){}const StyledHeader=styled_components_browser_esm.ZP.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -24px;
  padding: 8px 12px;
`,modal_StyledIconContainer=styled_components_browser_esm.ZP.span`
  display: flex;
  width: 18px;
  height: 18px;
  color: #fff;
  background-color: #f80;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
`,modal_StyledToolbarContainer=styled_components_browser_esm.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding: 6px 24px;
  overflow-x: auto;
  color: #fff;
  background-color: var(--semi-color-nav-bg);
  border-bottom: 1px solid var(--semi-color-border);
  align-items: center;
`,MindSettingModal=({editor,data:outInData,onClose})=>{const[mind,setMind]=(0,react.useState)(null),[initialData,setInitialData]=(0,react.useState)({}),[visible,toggleVisible]=(0,react.useState)(!0),[loading,toggleLoading]=(0,react.useState)(!0),[error,setError]=(0,react.useState)(null),renderMindEditor=(0,react.useCallback)((div=>{if(!div)return;const mindInstance=function renderMind(options){const editor=new(0,window.kityminder.Editor)(options.container),mind=editor.minder;return mind.editor=editor,options.data&&mind.importJson(options.data),options.isEditable||(mind.disable(),mind.setStatus("readonly")),setTimeout((()=>{if(mind.execCommand("camera"),!options.isEditable){const selectedNodes=mind.getSelectedNodes();selectedNodes.length&&mind.removeSelectedNodes(selectedNodes)}}),0),mind}({container:div,data:initialData,isEditable:!0});setMind(mindInstance)}),[initialData]);(0,react.useEffect)((()=>{(async()=>{try{if("undefined"!=typeof window&&window.kityminder&&window.kityminder.Editor)return;await __webpack_require__.e(998).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/.pnpm/kity@2.0.4/node_modules/kity/dist/kity.js",23)),await __webpack_require__.e(690).then(__webpack_require__.t.bind(__webpack_require__,"./src/extensions/mind/menu/kityminder/hotbox.js",23)),await __webpack_require__.e(38).then(__webpack_require__.t.bind(__webpack_require__,"./src/extensions/mind/menu/kityminder/kityminder.core.js",23)),await __webpack_require__.e(901).then(__webpack_require__.t.bind(__webpack_require__,"./src/extensions/mind/menu/kityminder/kityminder.editor.js",23))}catch(e){throw new Error(e)}})().catch(setError).finally((()=>toggleLoading(!1)))}),[toggleLoading]);const save=(0,react.useCallback)((async()=>mind?mind.exportData("svg").then((svg=>{const data=mind.exportJson();editor.chain().focus().setMind({data:JSON.stringify(data),svg}).run()})):(toggleVisible(!1),void onClose())),[editor,toggleVisible,mind]),saveAndExit=(0,react.useCallback)((()=>{save().then((()=>{toggleVisible(!1),onClose()}))}),[save]);return(0,react.useEffect)((()=>{outInData&&setInitialData(outInData)}),[outInData]),react.createElement(components.u_,{centered:!0,title:"思维导图",fullScreen:!0,visible,okText:"保存",cancelText:"退出",motion:!1,header:react.createElement(StyledHeader,null,react.createElement(components.T,null,react.createElement(modal_StyledIconContainer,null,react.createElement(icons.Ts,null)),react.createElement("strong",null,"思维导图")),react.createElement(components.T,null,react.createElement(components.zx,{type:"primary",onClick:save},"保存"),react.createElement(components.zx,{onClick:saveAndExit},"保存并退出"))),footer:null},react.createElement(StyledMindEditorContainer,null,loading&&react.createElement(components.gb,null),error&&react.createElement("span",null,error&&error.message||"未知错误"),react.createElement(modal_StyledToolbarContainer,null,react.createElement(Toolbar,{editor,mind})),loading||error?null:react.createElement("div",{style:{height:"100%",maxHeight:"100%",overflow:"hidden"},ref:renderMindEditor})))};var theme=__webpack_require__("./src/editor/theme.ts");const showMindEditor=editor=>{const{state}=editor;let start,end,data;if((0,utilities.Ig)(editor,Mind.name)){const attrs=editor.getAttributes(Mind.name);data=JSON.parse(attrs.data)}else{const{from,to}=state.selection;start=from,end=to,data=JSON.parse(DEFAULT_MIND_DATA)}const div=document.createElement("div");editor.options.element.appendChild(div),react_dom.render(react.createElement(styled_components_browser_esm.f6,{theme:(0,theme.w)(editor)},react.createElement(MindSettingModal,{editor,data,onClose:()=>{react_dom.unmountComponentAtNode(div),div.remove()}})),div)};try{showMindEditor.displayName="showMindEditor",showMindEditor.__docgenInfo={description:"",displayName:"showMindEditor",props:{commandManager:{defaultValue:null,description:"",name:"commandManager",required:!0,type:{name:"any"}},extensionManager:{defaultValue:null,description:"",name:"extensionManager",required:!0,type:{name:"ExtensionManager"}},css:{defaultValue:null,description:"",name:"css",required:!0,type:{name:"any"}},schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"Schema<any, any>"}},view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"EditorView"}},isFocused:{defaultValue:null,description:"",name:"isFocused",required:!0,type:{name:"boolean"}},extensionStorage:{defaultValue:null,description:"",name:"extensionStorage",required:!0,type:{name:"Record<string, any>"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"EditorOptions"}},storage:{defaultValue:null,description:"Returns the editor storage.",name:"storage",required:!0,type:{name:"Record<string, any>"}},commands:{defaultValue:null,description:"An object of all registered commands.",name:"commands",required:!0,type:{name:"SingleCommands"}},chain:{defaultValue:null,description:"Create a command chain to call multiple commands at once.",name:"chain",required:!0,type:{name:"() => ChainedCommands"}},can:{defaultValue:null,description:"Check if a command or a command chain can be executed. Without executing it.",name:"can",required:!0,type:{name:"() => CanCommands"}},injectCSS:{defaultValue:null,description:"Inject CSS styles.",name:"injectCSS",required:!0,type:{name:"any"}},setOptions:{defaultValue:null,description:"Update editor options.\n@param",name:"setOptions",required:!0,type:{name:"(options?: Partial<EditorOptions>) => void"}},setEditable:{defaultValue:null,description:"Update editable state of the editor.",name:"setEditable",required:!0,type:{name:"(editable: boolean) => void"}},isEditable:{defaultValue:null,description:"Returns whether the editor is editable.",name:"isEditable",required:!0,type:{name:"boolean"}},state:{defaultValue:null,description:"Returns the editor state.",name:"state",required:!0,type:{name:"EditorState"}},registerPlugin:{defaultValue:null,description:"Register a ProseMirror plugin.\n@param \n@param",name:"registerPlugin",required:!0,type:{name:"(plugin: Plugin<any>, handlePlugins?: (newPlugin: Plugin<any>, plugins: Plugin<any>[]) => Plugin<any>[]) => void"}},unregisterPlugin:{defaultValue:null,description:"Unregister a ProseMirror plugin.\n@param",name:"unregisterPlugin",required:!0,type:{name:"(nameOrPluginKey: string | PluginKey<any>) => void"}},createExtensionManager:{defaultValue:null,description:"Creates an extension manager.",name:"createExtensionManager",required:!0,type:{name:"any"}},createCommandManager:{defaultValue:null,description:"Creates an command manager.",name:"createCommandManager",required:!0,type:{name:"any"}},createSchema:{defaultValue:null,description:"Creates a ProseMirror schema.",name:"createSchema",required:!0,type:{name:"any"}},createView:{defaultValue:null,description:"Creates a ProseMirror view.",name:"createView",required:!0,type:{name:"any"}},createNodeViews:{defaultValue:null,description:"Creates all node views.",name:"createNodeViews",required:!0,type:{name:"() => void"}},isCapturingTransaction:{defaultValue:null,description:"",name:"isCapturingTransaction",required:!0,type:{name:"boolean"}},capturedTransaction:{defaultValue:null,description:"",name:"capturedTransaction",required:!0,type:{name:"any"}},captureTransaction:{defaultValue:null,description:"",name:"captureTransaction",required:!0,type:{name:"(fn: Function) => Transaction"}},dispatchTransaction:{defaultValue:null,description:"The callback over which to send transactions (state updates) produced by the view.\n@param",name:"dispatchTransaction",required:!0,type:{name:"any"}},getAttributes:{defaultValue:null,description:"Get attributes of the currently selected node or mark.",name:"getAttributes",required:!0,type:{name:"(nameOrType: string | MarkType | NodeType) => Record<string, any>"}},isActive:{defaultValue:null,description:"Returns if the currently selected node or mark is active.\n@param \n@param",name:"isActive",required:!0,type:{name:"{ (name: string, attributes?: {}): boolean; (attributes: {}): boolean; }"}},getJSON:{defaultValue:null,description:"Get the document as JSON.",name:"getJSON",required:!0,type:{name:"() => JSONContent"}},getHTML:{defaultValue:null,description:"Get the document as HTML.",name:"getHTML",required:!0,type:{name:"() => string"}},getText:{defaultValue:null,description:"Get the document as text.",name:"getText",required:!0,type:{name:"(options?: { blockSeparator?: string; textSerializers?: Record<string, TextSerializer>; }) => string"}},isEmpty:{defaultValue:null,description:"Check if there is no content.",name:"isEmpty",required:!0,type:{name:"boolean"}},getCharacterCount:{defaultValue:null,description:"Get the number of characters for the current document.\n@deprecated",name:"getCharacterCount",required:!0,type:{name:"() => number"}},destroy:{defaultValue:null,description:"Destroy the editor.",name:"destroy",required:!0,type:{name:"() => void"}},isDestroyed:{defaultValue:null,description:"Check if the editor is already destroyed.",name:"isDestroyed",required:!0,type:{name:"boolean"}},callbacks:{defaultValue:null,description:"",name:"callbacks",required:!0,type:{name:"any"}},on:{defaultValue:null,description:"",name:"on",required:!0,type:{name:'<EventName extends "blur" | "focus" | "beforeCreate" | "create" | "update" | "selectionUpdate" | "transaction" | "destroy">(event: EventName, fn: CallbackFunction<EditorEvents, EventName>) => Editor'}},emit:{defaultValue:null,description:"",name:"emit",required:!0,type:{name:'<EventName extends "blur" | "focus" | "beforeCreate" | "create" | "update" | "selectionUpdate" | "transaction" | "destroy">(event: EventName, ...args: CallbackType<EditorEvents, EventName>) => Editor'}},off:{defaultValue:null,description:"",name:"off",required:!0,type:{name:'<EventName extends "blur" | "focus" | "beforeCreate" | "create" | "update" | "selectionUpdate" | "transaction" | "destroy">(event: EventName, fn?: CallbackFunction<EditorEvents, EventName>) => Editor'}},removeAllListeners:{defaultValue:null,description:"",name:"removeAllListeners",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/extensions/mind/menu/edit.tsx#showMindEditor"]={docgenInfo:showMindEditor.__docgenInfo,name:"showMindEditor",path:"src/extensions/mind/menu/edit.tsx#showMindEditor"})}catch(__react_docgen_typescript_loader_error){}const MindStaticMenu=({editor})=>{const isActive=(0,use_active.t)(editor,Mind.name),toggleLink=(0,react.useCallback)((()=>{showMindEditor(editor)}),[editor]);return react.createElement(components.u,{title:"思维导图",editor},react.createElement(components.zx,{icon:react.createElement(icons.Ts,null),onClick:toggleLink,active:isActive}))};var hooks=__webpack_require__("./src/hooks/index.tsx");const bubble_MindBubbleMenu=({editor})=>{(0,hooks.C)(editor,Mind.name,{width:0,height:0,data:"",svg:""});const shouldShow=(0,react.useCallback)((()=>editor.isActive(Mind.name)),[editor]),copyMe=(0,react.useCallback)((()=>(0,utilities.Bc)(editor,Mind.name)),[editor]),deleteMe=(0,react.useCallback)((()=>(0,utilities.IK)(editor,Mind.name)),[editor]),openEditModal=(0,react.useCallback)((()=>{showMindEditor(editor)}),[editor]);return react.createElement(components.NM,{className:"bubble-menu",editor,pluginKey:"mind-bubble-menu",shouldShow,forNode:!0},react.createElement(components.T,{spacing:4},react.createElement(components.u,{editor,title:"复制"},react.createElement(components.zx,{onClick:copyMe,icon:react.createElement(icons.vU,null),size:"small"})),react.createElement(components.u,{editor,title:"编辑"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.yl,null),onClick:openEditModal})),react.createElement(components.iz,null),react.createElement(components.u,{editor,title:"删除"},react.createElement(components.zx,{onClick:deleteMe,icon:react.createElement(icons.Fz,null),size:"small"}))))};try{bubble_MindBubbleMenu.displayName="MindBubbleMenu",bubble_MindBubbleMenu.__docgenInfo={description:"",displayName:"MindBubbleMenu",props:{editor:{defaultValue:null,description:"",name:"editor",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/extensions/mind/menu/bubble.tsx#MindBubbleMenu"]={docgenInfo:bubble_MindBubbleMenu.__docgenInfo,name:"MindBubbleMenu",path:"src/extensions/mind/menu/bubble.tsx#MindBubbleMenu"})}catch(__react_docgen_typescript_loader_error){}try{MindBubbleMenu.displayName="MindBubbleMenu",MindBubbleMenu.__docgenInfo={description:"",displayName:"MindBubbleMenu",props:{editor:{defaultValue:null,description:"",name:"editor",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/extensions/mind/menu/index.tsx#MindBubbleMenu"]={docgenInfo:MindBubbleMenu.__docgenInfo,name:"MindBubbleMenu",path:"src/extensions/mind/menu/index.tsx#MindBubbleMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/extensions/ordered-list/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>tiptap_extension_ordered_list_esm.GS});var tiptap_extension_ordered_list_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-ordered-list@2.0.0-beta.30_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-ordered-list/dist/tiptap-extension-ordered-list.esm.js")},"./src/extensions/placeholder/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>Placeholder});var tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),dist=__webpack_require__("./node_modules/.pnpm/prosemirror-state@1.4.1/node_modules/prosemirror-state/dist/index.js"),prosemirror_view_dist=__webpack_require__("./node_modules/.pnpm/prosemirror-view@1.26.2/node_modules/prosemirror-view/dist/index.js");const Placeholder=tiptap_core_esm.hj.create({name:"placeholder",addOptions:()=>({emptyEditorClass:"is-editor-empty",emptyNodeClass:"is-empty",placeholder:"Write something …",showOnlyWhenEditable:!0,showOnlyCurrent:!0,includeChildren:!0}),addProseMirrorPlugins(){return[new dist.Sy({key:new dist.H$("placeholder"),props:{decorations:({doc,selection})=>{const active=this.editor.isEditable||!this.options.showOnlyWhenEditable,{anchor}=selection,decorations=[];return active?(doc.descendants(((node,pos)=>{const hasAnchor=anchor>=pos&&anchor<=pos+node.nodeSize,isEmpty=!node.isLeaf&&!node.childCount||"magicBlock"===node.type.name&&node.nodeSize<=4;if((hasAnchor||!this.options.showOnlyCurrent)&&isEmpty){const classes=[this.options.emptyNodeClass];this.editor.isEmpty&&classes.push(this.options.emptyEditorClass);const decoration=prosemirror_view_dist.p.node(pos,pos+node.nodeSize,{class:classes.join(" "),"data-placeholder":"function"==typeof this.options.placeholder?this.options.placeholder({editor:this.editor,node,pos,hasAnchor}):this.options.placeholder});decorations.push(decoration)}return this.options.includeChildren})),prosemirror_view_dist.EH.create(doc,decorations)):null}}})]}})},"./src/extensions/slash/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>Slash});var tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),tiptap_react_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+react@2.0.0-beta.115_qcznkxrdrnvwbgjhf5yu5evfae/node_modules/@tiptap/react/dist/tiptap-react.esm.js"),tiptap_suggestion_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+suggestion@2.0.0-beta.98_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/suggestion/dist/tiptap-suggestion.esm.js"),tippy_esm=__webpack_require__("./node_modules/.pnpm/tippy.js@6.3.7/node_modules/tippy.js/dist/tippy.esm.js"),dist=__webpack_require__("./node_modules/.pnpm/prosemirror-state@1.4.1/node_modules/prosemirror-state/dist/index.js"),constants=__webpack_require__("./src/constants.ts"),react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),es=__webpack_require__("./node_modules/.pnpm/scroll-into-view-if-needed@2.2.29/node_modules/scroll-into-view-if-needed/es/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.6_v5ja746gkdtknuc6tj46sve3be/node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledContainer=styled_components_browser_esm.ZP.div`
  width: 254px;
  max-height: 240px;
  overflow: auto;

  box-shadow: ${props=>props.theme.slashMenuBoxshadow};
  background-color: ${props=>props.theme.background};
  border-radius: ${props=>props.theme.borderRadius};
`,StyledTitle=styled_components_browser_esm.ZP.div`
  padding: 8px 16px;

  color: ${props=>props.theme.slashMenuTitleColor};
`,StyledItem=styled_components_browser_esm.ZP.div`
  display: flex;
  justify-content: space-between;

  padding: 8px 16px;
  height: 32px;
  color: ${props=>props.theme.slashMenuColor};

  background-color: ${props=>props.active?props.theme.slashMenuHoverBgColor:"transparent"};

  cursor: pointer;

  &:hover {
    background-color: ${props=>props.theme.slashMenuHoverBgColor};
  }

  > div {
    display: flex;
    align-items: center;
  }
`,StyledText=styled_components_browser_esm.ZP.div`
  margin-left: 8px;
`,StyledSlash=styled_components_browser_esm.ZP.div`
  color: ${props=>props.theme.slashMenuTitleColor};
`,SlashMenuView=(0,react.forwardRef)(((props,ref)=>{const $container=(0,react.useRef)(null),[selectedIndex,setSelectedIndex]=(0,react.useState)(0),selectItem=index=>{const command=props.items[index];command&&props.command(command)};return(0,react.useEffect)((()=>setSelectedIndex(0)),[props.items]),(0,react.useEffect)((()=>{if(Number.isNaN(selectedIndex+1))return;const el=$container?.current?.querySelector(`.slash-menu-item:nth-of-type(${selectedIndex+1})`);el&&(0,es.Z)(el,{behavior:"smooth",scrollMode:"if-needed"})}),[selectedIndex]),(0,react.useImperativeHandle)(ref,(()=>({onKeyDown:({event})=>"ArrowUp"===event.key?(setSelectedIndex((selectedIndex+props.items.length-1)%props.items.length),!0):"ArrowDown"===event.key?(setSelectedIndex((selectedIndex+1)%props.items.length),!0):"Enter"===event.key&&(selectItem(selectedIndex),!0)}))),react.createElement(StyledContainer,{ref:$container},props.items.length?props.items.map(((item,index)=>"divider"in item?react.createElement(StyledTitle,{className:"slash-menu-item"},item.title):react.createElement(StyledItem,{className:"slash-menu-item",active:selectedIndex===index,onClick:()=>selectItem(index)},react.createElement("div",null,item.icon,react.createElement(StyledText,null,item.text)),react.createElement("div",null,react.createElement(StyledSlash,null,item.slash))))):react.createElement(StyledTitle,null,"没有找到结果"))}));SlashMenuView.displayName="SlashMenuView";const Slash=tiptap_core_esm.NB.create({name:"slash",priority:constants.tc,addOptions:()=>({char:"/",pluginKey:"slash",items:[]}),addProseMirrorPlugins(){return[(0,tiptap_suggestion_esm.ZP)({editor:this.editor,char:this.options.char,pluginKey:new dist.H$(this.options.pluginKey),command:({editor,props})=>{const{state,dispatch}=editor.view,{$head,$from}=state.selection,end=$from.pos,from=$head?.nodeBefore?.text?end-$head.nodeBefore.text.substring($head.nodeBefore.text.indexOf("/")).length:$from.start();dispatch(state.tr.deleteRange(from,end)),props?.action(editor,props.user),editor?.view?.focus()},items:({query})=>{if(!query)return this.options.items;const filter=this.options.items.filter((item=>"divider"in item||(item.text.includes(query)||item.slash.includes(query))));return filter.every((item=>"divider"in item))?[]:filter.filter(((item,index,arr)=>!("divider"in item)||!!arr[index+1]&&!("divider"in arr[index+1])))},render:()=>{let component,popup,isEditable;const getReferenceClientRect=()=>{const{ranges}=this.editor.state.selection,from=Math.min(...ranges.map((range=>range.$from.pos))),to=Math.max(...ranges.map((range=>range.$to.pos)));return(0,tiptap_core_esm.pr)(this.editor.view,from,to)};return{onStart:props=>{isEditable=props.editor.isEditable,isEditable&&(component=new tiptap_react_esm.M_(SlashMenuView,{props,editor:props.editor}),popup=(0,tippy_esm.ZP)("body",{getReferenceClientRect,appendTo:()=>document.body,content:component.element,showOnCreate:!0,interactive:!0,trigger:"manual",placement:"bottom-start"}))},onUpdate(props){isEditable&&(component.updateProps(props),popup[0].setProps({getReferenceClientRect:props.clientRect}))},onKeyDown(props){if(isEditable)return"Escape"===props.event.key?(popup[0].hide(),!0):component.ref?.onKeyDown(props)},onExit(){isEditable&&(popup[0].destroy(),component.destroy())}}}})]}})},"./src/extensions/status/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>Status,F:()=>StatusStaticMenu});var tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),tiptap_react_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+react@2.0.0-beta.115_qcznkxrdrnvwbgjhf5yu5evfae/node_modules/@tiptap/react/dist/tiptap-react.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.6_v5ja746gkdtknuc6tj46sve3be/node_modules/styled-components/dist/styled-components.browser.esm.js"),provider=__webpack_require__("./src/editor/provider.ts"),components=__webpack_require__("./src/components/index.tsx"),icons=__webpack_require__("./src/icons/index.tsx");const StyledTag=styled_components_browser_esm.ZP.span`
  font-size: 12px;
  line-height: 16px;
  padding: 2px 4px;
  border-radius: ${props=>props.theme.borderRadius};
  vertical-align: text-top;
  cursor: pointer;
`,STATUS_COLORS=[["rgb(223, 225, 230)","#42526E","#DFE1E6","rgb(80, 95, 121)"],["rgb(234, 230, 255)","#403294","#EAE6FF","rgb(82, 67, 170)"],["rgb(222, 235, 255)","#0747A6","#DEEBFF","rgb(0, 82, 204)"],["rgb(255, 235, 230)","#BF2600","#FFECE6","rgb(222, 53, 11)"],["rgb(255, 240, 179)","#172B4D","#FFF0B3","rgb(255, 153, 31)"],["rgb(227, 252, 239)","#006644","#E3FCEF","rgb(0, 135, 90)"]],StatusView=({editor,node,updateAttributes})=>{const isEditable=editor.isEditable,{createUserId,showPickerOnCreate,color,bgcolor,borderColor,text}=node.attrs,ref=(0,react.useRef)(null),[visible,toggleVisible]=(0,react.useState)(!1),[currentColor,setCurrentColor]=(0,react.useState)(color),[currentBgColor,setCurrentBgColor]=(0,react.useState)(bgcolor),[currentBorderColor,setCurrentBorderColorColor]=(0,react.useState)(borderColor),[currentText,setCurrentText]=(0,react.useState)(text),content=react.createElement(StyledTag,{style:{backgroundColor:currentBgColor,border:`1px solid ${currentBorderColor}`},onClick:()=>toggleVisible(!0)},react.createElement("span",{style:{color:currentColor}},currentText||"请设置状态内容")),setColor=(0,react.useCallback)((color=>()=>{setCurrentColor(color[1]),setCurrentBgColor(color[2]),setCurrentBorderColorColor(color[3])}),[updateAttributes]),onVisibleChange=(0,react.useCallback)((value=>{toggleVisible(value),value||updateAttributes({showPickerOnCreate:!1,color:currentColor,bgcolor:currentBgColor,borderColor:currentBorderColor,text:currentText})}),[currentColor,currentBgColor,currentBorderColor,currentText]);return(0,react.useEffect)((()=>{const currentUser=(0,provider.z)(editor).userProvider.getCurrentUser();showPickerOnCreate&&currentUser&&currentUser.id===createUserId&&(toggleVisible(!0),setTimeout((()=>ref.current?.focus()),200))}),[editor,updateAttributes,showPickerOnCreate,createUserId]),(0,react.useEffect)((()=>{visible&&setTimeout((()=>{ref.current?.focus()}),200)}),[visible]),react.createElement(tiptap_react_esm.T5,{as:"span"},isEditable?react.createElement(components.J2,{showArrow:!0,position:"bottomLeft",trigger:"custom",visible,onVisibleChange,onClickOutSide:()=>{onVisibleChange(!1)},content:react.createElement("div",{style:{width:184,height:65}},react.createElement("div",{style:{marginBottom:8}},react.createElement(components.II,{ref,placeholder:"输入状态",value:currentText,onChange:setCurrentText})),react.createElement(components.T,null,STATUS_COLORS.map((color=>react.createElement(components.Vp,{key:color[0],style:{width:24,height:24,cursor:"pointer",background:color[0],border:`1px solid ${color[3]}`},type:"solid",onClick:setColor(color)},currentColor===color[1]?react.createElement(icons.NO,{style:{color:color[1]}}):null)))))},content):content)},Status=tiptap_core_esm.NB.create({name:"status",group:"inline",inline:!0,selectable:!0,atom:!0,addAttributes:()=>({createUserId:{default:null},showPickerOnCreate:{default:!1},color:{default:STATUS_COLORS[0][1]},bgcolor:{default:STATUS_COLORS[0][2]},borderColor:{default:STATUS_COLORS[0][3]},text:{default:""}}),addOptions:()=>({HTMLAttributes:{class:"status"}}),parseHTML:()=>[{tag:"span.status"}],renderHTML({HTMLAttributes}){return["span",(0,tiptap_core_esm.P1)(this.options.HTMLAttributes,HTMLAttributes)]},addCommands(){return{setStatus:options=>({commands})=>commands.insertContent({type:this.name,attrs:options})}},addNodeView:()=>(0,tiptap_react_esm.fW)(StatusView)});var use_active=__webpack_require__("./src/hooks/use-active.tsx");const StatusStaticMenu=({editor})=>{const isStatusActive=(0,use_active.t)(editor,Status.name),setStatus=(0,react.useCallback)((()=>{const currentUser=(0,provider.z)(editor).userProvider.getCurrentUser();return editor.chain().focus().setStatus({createUserId:currentUser.id,showPickerOnCreate:!0}).run()}),[editor]);return react.createElement(components.u,{title:"状态",editor},react.createElement(components.zx,{icon:react.createElement(icons.yL,null),onClick:setStatus,active:isStatusActive}))}},"./src/extensions/strike/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>tiptap_extension_strike_esm.Re,x:()=>StrikeStaticMenu});var tiptap_extension_strike_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-strike@2.0.0-beta.29_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-strike/dist/tiptap-extension-strike.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),components=__webpack_require__("./src/components/index.tsx"),icons=__webpack_require__("./src/icons/index.tsx"),use_active=__webpack_require__("./src/hooks/use-active.tsx");const StrikeStaticMenu=({editor})=>{const isStrikeActive=(0,use_active.t)(editor,tiptap_extension_strike_esm.Re.name),toggleStrike=(0,react.useCallback)((()=>editor.chain().focus().toggleStrike().run()),[editor]);return react.createElement(components.u,{title:"删除线",editor},react.createElement(components.zx,{icon:react.createElement(icons.LI,null),onClick:toggleStrike,active:isStrikeActive}))}},"./src/extensions/subscript/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>tiptap_extension_subscript_esm.a,Z:()=>SubscriptStaticMenu});var tiptap_extension_subscript_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-subscript@2.0.0-beta.14_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-subscript/dist/tiptap-extension-subscript.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),components=__webpack_require__("./src/components/index.tsx"),icons=__webpack_require__("./src/icons/index.tsx"),use_active=__webpack_require__("./src/hooks/use-active.tsx");const SubscriptStaticMenu=({editor})=>{const isSubscriptActive=(0,use_active.t)(editor,tiptap_extension_subscript_esm.a.name),toggleSubscript=(0,react.useCallback)((()=>editor.chain().focus().toggleSubscript().run()),[editor]);return react.createElement(components.u,{title:"下标",editor},react.createElement(components.zx,{active:isSubscriptActive,icon:react.createElement(icons.s2,null),onClick:toggleSubscript}))}},"./src/extensions/superscript/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>tiptap_extension_superscript_esm.$,n:()=>SuperscriptStaticMenu});var tiptap_extension_superscript_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-superscript@2.0.0-beta.13_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-superscript/dist/tiptap-extension-superscript.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),components=__webpack_require__("./src/components/index.tsx"),icons=__webpack_require__("./src/icons/index.tsx"),use_active=__webpack_require__("./src/hooks/use-active.tsx");const SuperscriptStaticMenu=({editor})=>{const isSuperscriptActive=(0,use_active.t)(editor,tiptap_extension_superscript_esm.$.name),toggleSuperscript=(0,react.useCallback)((()=>editor.chain().focus().toggleSuperscript().run()),[editor]);return react.createElement(components.u,{title:"上标",editor},react.createElement(components.zx,{active:isSuperscriptActive,icon:react.createElement(icons.GO,null),onClick:toggleSuperscript}))}},"./src/extensions/table/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{iA:()=>Table,ze:()=>TableBubbleMenu,Jg:()=>TableExtensions,PS:()=>TableStaticMenu});var tiptap_extension_table_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-table@2.0.0-beta.199_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-table/dist/tiptap-extension-table.esm.js"),tiptap_extension_bubble_menu_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-bubble-menu@2.0.0-beta.199_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-bubble-menu/dist/tiptap-extension-bubble-menu.esm.js"),tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),tippy_esm=__webpack_require__("./node_modules/.pnpm/tippy.js@6.3.7/node_modules/tippy.js/dist/tippy.esm.js"),react_dom=__webpack_require__("./node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js"),react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),prosemirror_utils_selection=__webpack_require__("./src/prosemirror/prosemirror-utils/selection.js"),constants=__webpack_require__("./src/constants.ts"),components=__webpack_require__("./src/components/index.tsx");const cellButtonsConfig=[{name:"向上增加一行",action:editor=>editor.chain().focus().addRowBefore().run()},{name:"向下增加一行",action:editor=>editor.chain().focus().addRowAfter().run()},{name:"删除当前行",action:editor=>editor.chain().focus().deleteRow().run()},{divider:!0},{name:"向前增加一列",action:editor=>editor.chain().focus().addColumnBefore().run()},{name:"向后增加一列",action:editor=>editor.chain().focus().addColumnAfter().run()},{name:"删除当前列",action:editor=>editor.chain().focus().deleteColumn().run()},{divider:!0},{name:"将首行设为(或取消)表头",action:editor=>editor.chain().focus().toggleHeaderRow().run()},{name:"将首列设为(或取消)表头",action:editor=>editor.chain().focus().toggleHeaderColumn().run()},{name:"将当前单元格设为(或取消)表头",action:editor=>editor.chain().focus().toggleHeaderCell().run()},{divider:!0},{name:"删除表格",action:editor=>editor.chain().focus().deleteTable().run()}],predicateIsTableCell=node=>["tableHeader","tableCell"].includes(node.type.name),TableCellMenu=({editor})=>{const popupRef=(0,react.useRef)(null),toggleVisible=(0,react.useCallback)((()=>{popupRef.current?.state.isVisible?popupRef.current.hide():popupRef.current?.show()}),[]);return(0,react.useEffect)((()=>{const div=document.createElement("div");react_dom.render(react.createElement(components.Lt.Menu,{style:{minWidth:200,padding:"0 !important"}},cellButtonsConfig.map(((btn,index)=>btn.divider?react.createElement(components.Lt.Divider,{key:index}):react.createElement(components.Lt.Item,{key:btn.name,onClick:()=>btn?.action?.(editor)},btn.name)))),div);const popup=(0,tippy_esm.ZP)("body",{getReferenceClientRect:()=>{const{selection}=editor.state,parent=(0,prosemirror_utils_selection.Kk)(predicateIsTableCell)(selection);if(editor.view.docView){return editor.view.nodeDOM(parent?.pos).getBoundingClientRect()}return(0,tiptap_core_esm.pr)(editor.view,editor.state.selection.from,editor.state.selection.to)},appendTo:()=>editor.options.element,content:div,showOnCreate:!1,interactive:!0,trigger:"manual",placement:"right-start",theme:"bubble-menu padding-0 ",arrow:!1,zIndex:constants.l1});return popupRef.current=popup[0],()=>{popupRef.current&&(popupRef.current.destroy(),react_dom.unmountComponentAtNode(div))}}),[editor]),(0,react.useEffect)((()=>{const handler=event=>{const{selection}=editor.state;(0,prosemirror_utils_selection.Kk)(predicateIsTableCell)(selection)&&(event?.preventDefault(),toggleVisible())};return window.addEventListener("contextmenu",handler),()=>{window.removeEventListener("contextmenu",handler)}}),[editor,toggleVisible]),null},TableCellMenuPlugin=editor=>{const div=document.createElement("div");return react_dom.render(react.createElement(TableCellMenu,{editor}),div),(0,tiptap_extension_bubble_menu_esm.q3)({pluginKey:"TableCellMenuPlugin",editor,element:div,tippyOptions:{appendTo:()=>editor.options.element,duration:200,animation:"shift-toward-subtle",moveTransition:"transform 0.2s ease-in-out",zIndex:constants.l1,arrow:!1,theme:"bubble-menu padding-0 hidden",getReferenceClientRect:()=>{const{selection}=editor.state,parent=(0,prosemirror_utils_selection.Kk)((node=>["tableHeader","tableCell"].includes(node.type.name)))(selection);if(parent){return editor.view.nodeDOM(parent?.pos).getBoundingClientRect()}return(0,tiptap_core_esm.pr)(editor.view,selection.from,selection.to)},position:"bottom"},shouldShow:({state})=>{const{selection}=state,parent=(0,prosemirror_utils_selection.Kk)((node=>["tableHeader","tableCell"].includes(node.type.name)))(selection);return Boolean(parent)}})};try{TableCellMenuPlugin.displayName="TableCellMenuPlugin",TableCellMenuPlugin.__docgenInfo={description:"",displayName:"TableCellMenuPlugin",props:{commandManager:{defaultValue:null,description:"",name:"commandManager",required:!0,type:{name:"any"}},extensionManager:{defaultValue:null,description:"",name:"extensionManager",required:!0,type:{name:"ExtensionManager"}},css:{defaultValue:null,description:"",name:"css",required:!0,type:{name:"any"}},schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"Schema<any, any>"}},view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"EditorView"}},isFocused:{defaultValue:null,description:"",name:"isFocused",required:!0,type:{name:"boolean"}},extensionStorage:{defaultValue:null,description:"",name:"extensionStorage",required:!0,type:{name:"Record<string, any>"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"EditorOptions"}},storage:{defaultValue:null,description:"Returns the editor storage.",name:"storage",required:!0,type:{name:"Record<string, any>"}},commands:{defaultValue:null,description:"An object of all registered commands.",name:"commands",required:!0,type:{name:"SingleCommands"}},chain:{defaultValue:null,description:"Create a command chain to call multiple commands at once.",name:"chain",required:!0,type:{name:"() => ChainedCommands"}},can:{defaultValue:null,description:"Check if a command or a command chain can be executed. Without executing it.",name:"can",required:!0,type:{name:"() => CanCommands"}},injectCSS:{defaultValue:null,description:"Inject CSS styles.",name:"injectCSS",required:!0,type:{name:"any"}},setOptions:{defaultValue:null,description:"Update editor options.\n@param",name:"setOptions",required:!0,type:{name:"(options?: Partial<EditorOptions>) => void"}},setEditable:{defaultValue:null,description:"Update editable state of the editor.",name:"setEditable",required:!0,type:{name:"(editable: boolean) => void"}},isEditable:{defaultValue:null,description:"Returns whether the editor is editable.",name:"isEditable",required:!0,type:{name:"boolean"}},state:{defaultValue:null,description:"Returns the editor state.",name:"state",required:!0,type:{name:"EditorState"}},registerPlugin:{defaultValue:null,description:"Register a ProseMirror plugin.\n@param \n@param",name:"registerPlugin",required:!0,type:{name:"(plugin: Plugin<any>, handlePlugins?: (newPlugin: Plugin<any>, plugins: Plugin<any>[]) => Plugin<any>[]) => void"}},unregisterPlugin:{defaultValue:null,description:"Unregister a ProseMirror plugin.\n@param",name:"unregisterPlugin",required:!0,type:{name:"(nameOrPluginKey: string | PluginKey<any>) => void"}},createExtensionManager:{defaultValue:null,description:"Creates an extension manager.",name:"createExtensionManager",required:!0,type:{name:"any"}},createCommandManager:{defaultValue:null,description:"Creates an command manager.",name:"createCommandManager",required:!0,type:{name:"any"}},createSchema:{defaultValue:null,description:"Creates a ProseMirror schema.",name:"createSchema",required:!0,type:{name:"any"}},createView:{defaultValue:null,description:"Creates a ProseMirror view.",name:"createView",required:!0,type:{name:"any"}},createNodeViews:{defaultValue:null,description:"Creates all node views.",name:"createNodeViews",required:!0,type:{name:"() => void"}},isCapturingTransaction:{defaultValue:null,description:"",name:"isCapturingTransaction",required:!0,type:{name:"boolean"}},capturedTransaction:{defaultValue:null,description:"",name:"capturedTransaction",required:!0,type:{name:"any"}},captureTransaction:{defaultValue:null,description:"",name:"captureTransaction",required:!0,type:{name:"(fn: Function) => Transaction"}},dispatchTransaction:{defaultValue:null,description:"The callback over which to send transactions (state updates) produced by the view.\n@param",name:"dispatchTransaction",required:!0,type:{name:"any"}},getAttributes:{defaultValue:null,description:"Get attributes of the currently selected node or mark.",name:"getAttributes",required:!0,type:{name:"(nameOrType: string | MarkType | NodeType) => Record<string, any>"}},isActive:{defaultValue:null,description:"Returns if the currently selected node or mark is active.\n@param \n@param",name:"isActive",required:!0,type:{name:"{ (name: string, attributes?: {}): boolean; (attributes: {}): boolean; }"}},getJSON:{defaultValue:null,description:"Get the document as JSON.",name:"getJSON",required:!0,type:{name:"() => JSONContent"}},getHTML:{defaultValue:null,description:"Get the document as HTML.",name:"getHTML",required:!0,type:{name:"() => string"}},getText:{defaultValue:null,description:"Get the document as text.",name:"getText",required:!0,type:{name:"(options?: { blockSeparator?: string; textSerializers?: Record<string, TextSerializer>; }) => string"}},isEmpty:{defaultValue:null,description:"Check if there is no content.",name:"isEmpty",required:!0,type:{name:"boolean"}},getCharacterCount:{defaultValue:null,description:"Get the number of characters for the current document.\n@deprecated",name:"getCharacterCount",required:!0,type:{name:"() => number"}},destroy:{defaultValue:null,description:"Destroy the editor.",name:"destroy",required:!0,type:{name:"() => void"}},isDestroyed:{defaultValue:null,description:"Check if the editor is already destroyed.",name:"isDestroyed",required:!0,type:{name:"boolean"}},callbacks:{defaultValue:null,description:"",name:"callbacks",required:!0,type:{name:"any"}},on:{defaultValue:null,description:"",name:"on",required:!0,type:{name:'<EventName extends "blur" | "focus" | "beforeCreate" | "create" | "update" | "selectionUpdate" | "transaction" | "destroy">(event: EventName, fn: CallbackFunction<EditorEvents, EventName>) => Editor'}},emit:{defaultValue:null,description:"",name:"emit",required:!0,type:{name:'<EventName extends "blur" | "focus" | "beforeCreate" | "create" | "update" | "selectionUpdate" | "transaction" | "destroy">(event: EventName, ...args: CallbackType<EditorEvents, EventName>) => Editor'}},off:{defaultValue:null,description:"",name:"off",required:!0,type:{name:'<EventName extends "blur" | "focus" | "beforeCreate" | "create" | "update" | "selectionUpdate" | "transaction" | "destroy">(event: EventName, fn?: CallbackFunction<EditorEvents, EventName>) => Editor'}},removeAllListeners:{defaultValue:null,description:"",name:"removeAllListeners",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/extensions/table/cell-menu-plugin/index.tsx#TableCellMenuPlugin"]={docgenInfo:TableCellMenuPlugin.__docgenInfo,name:"TableCellMenuPlugin",path:"src/extensions/table/cell-menu-plugin/index.tsx#TableCellMenuPlugin"})}catch(__react_docgen_typescript_loader_error){}function updateColumns(node,colgroup,table,cellMinWidth,overrideCol,overrideValue){let totalWidth=0,fixedWidth=!0,nextDOM=colgroup.firstChild;const row=node.firstChild;for(let i=0,col=0;i<row.childCount;i+=1){const{colspan,colwidth}=row.child(i).attrs;for(let j=0;j<colspan;j+=1,col+=1){const hasWidth=overrideCol===col?overrideValue:colwidth&&colwidth[j],cssWidth=hasWidth?`${hasWidth}px`:"";totalWidth+=hasWidth||cellMinWidth,hasWidth||(fixedWidth=!1),nextDOM?(nextDOM.style.width!==cssWidth&&(nextDOM.style.width=cssWidth),nextDOM=nextDOM.nextSibling):colgroup.appendChild(document.createElement("col")).style.width=cssWidth}}for(;nextDOM;){const after=nextDOM.nextSibling;nextDOM.parentNode.removeChild(nextDOM),nextDOM=after}fixedWidth?(table.style.width=`${totalWidth}px`,table.style.minWidth=""):(table.style.width="",table.style.minWidth=`${totalWidth}px`)}class TableView{constructor(node,cellMinWidth){this.node=node,this.cellMinWidth=cellMinWidth,this.dom=document.createElement("div"),this.dom.className="tableWrapper",this.dom.dataset.blockId=node.attrs.blockId,this.scrollDom=document.createElement("div"),this.scrollDom.className="scrollWrapper",this.dom.appendChild(this.scrollDom),this.table=this.scrollDom.appendChild(document.createElement("table")),this.colgroup=this.table.appendChild(document.createElement("colgroup")),updateColumns(node,this.colgroup,this.table,cellMinWidth),this.contentDOM=this.table.appendChild(document.createElement("tbody"))}update(node){return node.type===this.node.type&&(this.node=node,this.dom.dataset.blockId=node.attrs.blockId,updateColumns(node,this.colgroup,this.table,this.cellMinWidth),!0)}ignoreMutation(mutation){return"attributes"===mutation.type&&(mutation.target===this.table||this.colgroup.contains(mutation.target))}}const Table=tiptap_extension_table_esm.ZP.extend({addOptions:()=>({HTMLAttributes:{},resizable:!1,handleWidth:5,cellMinWidth:25,View:TableView,lastColumnResizable:!0,allowTableNodeSelection:!1}),addProseMirrorPlugins(){const{isEditable}=this.editor;return[...this.parent?.(),TableCellMenuPlugin(this.editor)]}});var dist=__webpack_require__("./node_modules/.pnpm/prosemirror-state@1.4.1/node_modules/prosemirror-state/dist/index.js"),prosemirror_view_dist=__webpack_require__("./node_modules/.pnpm/prosemirror-view@1.26.2/node_modules/prosemirror-view/dist/index.js"),index_esm=__webpack_require__("./node_modules/.pnpm/@_ueberdosis+prosemirror-tables@1.1.3/node_modules/@_ueberdosis/prosemirror-tables/dist/index.esm.js"),icons=__webpack_require__("./src/icons/index.tsx");const isRectSelected=rect=>selection=>{const map=index_esm.rU.get(selection.$anchorCell.node(-1)),start=selection.$anchorCell.start(-1),cells=map.cellsInRect(rect),selectedCells=map.cellsInRect(map.rectBetween(selection.$anchorCell.pos-start,selection.$headCell.pos-start));for(let i=0,count=cells.length;i<count;i++)if(-1===selectedCells.indexOf(cells[i]))return!1;return!0},findTable=selection=>(0,tiptap_core_esm.Kk)((node=>node.type.spec.tableRole&&"table"===node.type.spec.tableRole))(selection),isCellSelection=selection=>selection instanceof index_esm.Xc,utilities_select=type=>index=>tr=>{const table=findTable(tr.selection),isRowSelection="row"===type;if(table){const map=index_esm.rU.get(table.node);if(index>=0&&index<(isRowSelection?map.height:map.width)){const left=isRowSelection?0:index,top=isRowSelection?index:0,right=isRowSelection?map.width:index+1,bottom=isRowSelection?index+1:map.height,cellsInFirstRow=map.cellsInRect({left,top,right:isRowSelection?right:left+1,bottom:isRowSelection?top+1:bottom}),cellsInLastRow=bottom-top==1?cellsInFirstRow:map.cellsInRect({left:isRowSelection?left:right-1,top:isRowSelection?bottom-1:top,right,bottom}),head=table.start+cellsInFirstRow[0],anchor=table.start+cellsInLastRow[cellsInLastRow.length-1],$head=tr.doc.resolve(head),$anchor=tr.doc.resolve(anchor);return tr.setSelection(new index_esm.Xc($anchor,$head))}}return tr},selectColumn=utilities_select("column"),selectRow=utilities_select("row");const TableCell=tiptap_core_esm.NB.create({name:"tableCell",content:"block+",tableRole:"cell",isolating:!0,addOptions:()=>({HTMLAttributes:{}}),addAttributes:()=>({colspan:{default:1,parseHTML:element=>{const colspan=element.getAttribute("colspan");return colspan?parseInt(colspan,10):1}},rowspan:{default:1,parseHTML:element=>{const rowspan=element.getAttribute("rowspan");return rowspan?parseInt(rowspan,10):1}},colwidth:{default:[200],parseHTML:element=>{const colwidth=element.getAttribute("colwidth");return colwidth?[parseInt(colwidth,10)]:null}},style:{default:null}}),parseHTML:()=>[{tag:"td"}],renderHTML({HTMLAttributes}){return["td",(0,tiptap_core_esm.P1)(this.options.HTMLAttributes,HTMLAttributes),0]},addStorage:()=>({clearCallbacks:[]}),onDestroy(){this.storage.clearCallbacks.forEach((cb=>cb())),this.storage.clearCallbacks.length=0},addProseMirrorPlugins(){const{isEditable}=this.editor;return[new dist.Sy({key:new dist.H$("table-cell-control"),props:{decorations:state=>{if(!isEditable)return prosemirror_view_dist.EH.empty;const{doc,selection}=state,decorations=[],cells=(columnIndex=0,selection=>{const table=findTable(selection);if(table){const map=index_esm.rU.get(table.node);return(Array.isArray(columnIndex)?columnIndex:Array.from([columnIndex])).reduce(((acc,index)=>{if(index>=0&&index<=map.width-1){const cells=map.cellsInRect({left:index,right:index+1,top:0,bottom:map.height});return acc.concat(cells.map((nodePos=>{const node=table.node.nodeAt(nodePos),pos=nodePos+table.start;return{pos,start:pos+1,node}})))}return acc}),[])}})(selection);var columnIndex;return cells&&(this.storage.clearCallbacks.forEach((cb=>cb())),this.storage.clearCallbacks.length=0,cells.forEach((({pos},index)=>{0===index&&decorations.push(prosemirror_view_dist.p.widget(pos+1,(()=>{let className="grip-table";const selected=(selection=>{if(isCellSelection(selection)){const map=index_esm.rU.get(selection.$anchorCell.node(-1));return isRectSelected({left:0,right:map.width,top:0,bottom:map.height})(selection)}return!1})(selection);selected&&(className+=" selected");const grip=document.createElement("a");return grip.className=className,grip.addEventListener("mousedown",(event=>{event.preventDefault(),event.stopImmediatePropagation(),this.editor.view.dispatch((tr=>{const table=findTable(tr.selection);if(table){const{map}=index_esm.rU.get(table.node);if(map&&map.length){const head=table.start+map[0],anchor=table.start+map[map.length-1],$head=tr.doc.resolve(head),$anchor=tr.doc.resolve(anchor);return tr.setSelection(new index_esm.Xc($anchor,$head))}}return tr})(this.editor.state.tr))})),grip}))),decorations.push(prosemirror_view_dist.p.widget(pos+1,(()=>{const rowSelected=(rowIndex=index,selection=>{if(isCellSelection(selection)){const map=index_esm.rU.get(selection.$anchorCell.node(-1));return isRectSelected({left:0,right:map.width,top:rowIndex,bottom:rowIndex+1})(selection)}return!1})(selection);var rowIndex;let className="grip-row";rowSelected&&(className+=" selected"),0===index&&(className+=" first"),index===cells.length-1&&(className+=" last");const grip=document.createElement("a");return react_dom.render(react.createElement(components.u,{editor:this.editor,title:"向后增加一行"},react.createElement(icons.SC,null)),grip),this.storage.clearCallbacks.push((()=>{react_dom.unmountComponentAtNode(grip)})),grip.className=className,grip.addEventListener("mousedown",(event=>{event.preventDefault(),event.stopImmediatePropagation(),this.editor.view.dispatch(selectRow(index)(this.editor.state.tr)),event.target!==grip&&(0,index_esm.dl)(this.editor.state,this.editor.view.dispatch)}),!0),grip})))}))),prosemirror_view_dist.EH.create(doc,decorations)}}})]}}),TableHeader=tiptap_core_esm.NB.create({name:"tableHeader",content:"block+",tableRole:"header_cell",isolating:!0,addOptions:()=>({HTMLAttributes:{}}),addAttributes:()=>({colspan:{default:1},rowspan:{default:1},colwidth:{default:null,parseHTML:element=>{const colwidth=element.getAttribute("colwidth");return colwidth?[parseInt(colwidth,10)]:null}},style:{default:null}}),parseHTML:()=>[{tag:"th"}],renderHTML({HTMLAttributes}){return["th",(0,tiptap_core_esm.P1)(this.options.HTMLAttributes,HTMLAttributes),0]},addStorage:()=>({clearCallbacks:[]}),onDestroy(){this.storage.clearCallbacks.forEach((cb=>cb())),this.storage.clearCallbacks.length=0},addProseMirrorPlugins(){const{isEditable}=this.editor;return[new dist.Sy({key:new dist.H$("table-header-control"),props:{decorations:state=>{if(!isEditable)return prosemirror_view_dist.EH.empty;const{doc,selection}=state,decorations=[],cells=(rowIndex=0,selection=>{const table=findTable(selection);if(table){const map=index_esm.rU.get(table.node);return(Array.isArray(rowIndex)?rowIndex:Array.from([rowIndex])).reduce(((acc,index)=>{if(index>=0&&index<=map.height-1){const cells=map.cellsInRect({left:0,right:map.width,top:index,bottom:index+1});return acc.concat(cells.map((nodePos=>{const node=table.node.nodeAt(nodePos),pos=nodePos+table.start;return{pos,start:pos+1,node}})))}return acc}),[])}})(selection);var rowIndex;return cells&&(this.storage.clearCallbacks.forEach((cb=>cb())),this.storage.clearCallbacks.length=0,cells.forEach((({pos},index)=>{decorations.push(prosemirror_view_dist.p.widget(pos+1,(()=>{const colSelected=(columnIndex=index,selection=>{if(isCellSelection(selection)){const map=index_esm.rU.get(selection.$anchorCell.node(-1));return isRectSelected({left:columnIndex,right:columnIndex+1,top:0,bottom:map.height})(selection)}return!1})(selection);var columnIndex;let className="grip-column";colSelected&&(className+=" selected"),0===index?className+=" first":index===cells.length-1&&(className+=" last");const grip=document.createElement("a");return grip.className=className,react_dom.render(react.createElement(components.u,{editor:this.editor,title:"向后增加一列"},react.createElement(icons.SC,null)),grip),this.storage.clearCallbacks.push((()=>{react_dom.unmountComponentAtNode(grip)})),grip.addEventListener("mousedown",(event=>{event.preventDefault(),event.stopImmediatePropagation(),this.editor.view.dispatch(selectColumn(index)(this.editor.state.tr)),event.target!==grip&&(0,index_esm.e2)(this.editor.state,this.editor.view.dispatch)})),grip})))}))),prosemirror_view_dist.EH.create(doc,decorations)}}})]}});const TableRow=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-table-row@2.0.0-beta.199_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-table-row/dist/tiptap-extension-table-row.esm.js").S.extend({allowGapCursor:!1}),TableExtensions=[Table.configure({resizable:!0,cellMinWidth:50}),TableCell,TableHeader,TableRow];var utilities=__webpack_require__("./src/utilities/index.ts");const TableBubbleMenu=({editor})=>{const shouldShow=(0,react.useCallback)((()=>editor.isActive(Table.name)),[editor]),getReferenceClientRect=(0,react.useCallback)((()=>{const{selection}=editor.state,parent=(0,prosemirror_utils_selection.Kk)((node=>node.type.name===Table.name))(selection);if(parent){return editor.view.nodeDOM(parent?.pos).getBoundingClientRect()}return(0,tiptap_core_esm.pr)(editor.view,selection.from,selection.to)}),[editor]),copyMe=(0,react.useCallback)((()=>{(0,utilities.Bc)(editor,Table.name)}),[editor]),deleteMe=(0,react.useCallback)((()=>{(0,utilities.IK)(editor,Table.name)}),[editor]),addColumnBefore=(0,react.useCallback)((()=>editor.chain().focus().addColumnBefore().run()),[editor]),addColumnAfter=(0,react.useCallback)((()=>editor.chain().focus().addColumnAfter().run()),[editor]),deleteColumn=(0,react.useCallback)((()=>editor.chain().focus().deleteColumn().run()),[editor]),addRowBefore=(0,react.useCallback)((()=>editor.chain().focus().addRowBefore().run()),[editor]),addRowAfter=(0,react.useCallback)((()=>editor.chain().focus().addRowAfter().run()),[editor]),deleteRow=(0,react.useCallback)((()=>editor.chain().focus().deleteRow().run()),[editor]),toggleHeaderColumn=(0,react.useCallback)((()=>editor.chain().focus().toggleHeaderColumn().run()),[editor]),toggleHeaderRow=(0,react.useCallback)((()=>editor.chain().focus().toggleHeaderRow().run()),[editor]),toggleHeaderCell=(0,react.useCallback)((()=>editor.chain().focus().toggleHeaderCell().run()),[editor]),mergeCells=(0,react.useCallback)((()=>editor.chain().focus().mergeCells().run()),[editor]),splitCell=(0,react.useCallback)((()=>editor.chain().focus().splitCell().run()),[editor]);return react.createElement(components.NM,{className:"bubble-menu bubble-menu-table",editor,pluginKey:"table-bubble-menu",shouldShow,tippyOptions:{getReferenceClientRect,offset:[0,-2]}},react.createElement(components.T,{spacing:2},react.createElement(components.u,{editor,title:"复制"},react.createElement(components.zx,{onClick:copyMe,icon:react.createElement(icons.vU,null),size:"small"})),react.createElement(components.iz,null),react.createElement(components.u,{editor,title:"向前插入一列"},react.createElement(components.zx,{onClick:addColumnBefore,icon:react.createElement(icons.dE,null),size:"small"})),react.createElement(components.u,{editor,title:"向后插入一列"},react.createElement(components.zx,{onClick:addColumnAfter,icon:react.createElement(icons.LS,null),size:"small"})),react.createElement(components.u,{editor,title:"删除当前列"},react.createElement(components.zx,{onClick:deleteColumn,icon:react.createElement(icons.pU,null),size:"small"})),react.createElement(components.iz,null),react.createElement(components.u,{editor,title:"向前插入一行"},react.createElement(components.zx,{onClick:addRowBefore,icon:react.createElement(icons.dT,null),size:"small"})),react.createElement(components.u,{editor,title:"向后插入一行"},react.createElement(components.zx,{onClick:addRowAfter,icon:react.createElement(icons.Pm,null),size:"small"})),react.createElement(components.u,{editor,title:"删除当前行"},react.createElement(components.zx,{onClick:deleteRow,icon:react.createElement(icons.$T,null),size:"small"})),react.createElement(components.iz,null),react.createElement(components.u,{editor,title:"设置(或取消)当前列为表头"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.SX,null),onClick:toggleHeaderColumn})),react.createElement(components.u,{editor,title:"设置(或取消)当前行为表头"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.dJ,null),onClick:toggleHeaderRow})),react.createElement(components.u,{editor,title:"设置(或取消)当前单元格为表头"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.DP,null),onClick:toggleHeaderCell})),react.createElement(components.iz,null),react.createElement(components.u,{editor,title:"合并单元格"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons._q,null),onClick:mergeCells})),react.createElement(components.u,{editor,title:"分离单元格"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.UG,null),onClick:splitCell})),react.createElement(components.iz,null),react.createElement(components.u,{editor,title:"删除表格"},react.createElement(components.zx,{size:"small",icon:react.createElement(icons.GQ,null),onClick:deleteMe}))))};var use_active=__webpack_require__("./src/hooks/use-active.tsx");const TableStaticMenu=({editor})=>{const isTableActibe=(0,use_active.t)(editor,Table.name),toggleSuperscript=(0,react.useCallback)((()=>editor.chain().insertTable({rows:3,cols:4,withHeaderRow:!0}).focus().run()),[editor]);return react.createElement(components.u,{title:"插入表格",editor},react.createElement(components.zx,{active:isTableActibe,icon:react.createElement(icons.fq,null),onClick:toggleSuperscript}))}},"./src/extensions/text-align/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>TextAlign,h:()=>TextAlignStaticMenu});const TextAlign=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-text-align@2.0.0-beta.31_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-text-align/dist/tiptap-extension-text-align.esm.js").Z.configure({types:["heading","paragraph","image"]});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js"),tippy_esm=__webpack_require__("./node_modules/.pnpm/tippy.js@6.3.7/node_modules/tippy.js/dist/tippy.esm.js"),components=__webpack_require__("./src/components/index.tsx"),icons=__webpack_require__("./src/icons/index.tsx"),use_active=__webpack_require__("./src/hooks/use-active.tsx"),constants=__webpack_require__("./src/constants.ts");const _TextAlignStaticMenu=({editor,getPopupContainer})=>{const containerRef=(0,react.useRef)(null),popupRef=(0,react.useRef)(null),isAlignCenter=(0,use_active.t)(editor,TextAlign.name,{textAlign:"center"}),isAlignRight=(0,use_active.t)(editor,TextAlign.name,{textAlign:"right"}),isAlignJustify=(0,use_active.t)(editor,TextAlign.name,{textAlign:"justify"}),current=(0,react.useMemo)((()=>isAlignCenter?react.createElement(icons.k5,null):isAlignRight?react.createElement(icons.Qz,null):isAlignJustify?react.createElement(icons.yp,null):react.createElement(icons.hI,null)),[isAlignCenter,isAlignRight,isAlignJustify]),toggle=(0,react.useCallback)((align=>()=>editor.chain().focus().setTextAlign(align).run()),[editor]);return(0,react.useEffect)((()=>{const div=document.createElement("div");react_dom.render(react.createElement(react.Fragment,null,react.createElement(components.u,{editor,title:"左对齐"},react.createElement(components.zx,{onClick:toggle("left"),icon:react.createElement(icons.hI,null)})),react.createElement(components.u,{editor,title:"居中"},react.createElement(components.zx,{onClick:toggle("center"),icon:react.createElement(icons.k5,null)})),react.createElement(components.u,{editor,title:"右对齐"},react.createElement(components.zx,{onClick:toggle("right"),icon:react.createElement(icons.Qz,null)})),react.createElement(components.u,{editor,title:"两端对齐"},react.createElement(components.zx,{onClick:toggle("justify"),icon:react.createElement(icons.yp,null)}))),div);const popup=(0,tippy_esm.ZP)("body",{getReferenceClientRect:()=>containerRef.current.getBoundingClientRect(),appendTo:getPopupContainer||(()=>editor.options.element),content:div,showOnCreate:!1,interactive:!0,popperOptions:{strategy:"fixed"},trigger:"manual",placement:"top-start",theme:"bubble-menu",arrow:!1,zIndex:constants.l1});return popupRef.current=popup[0],()=>{popupRef.current&&react_dom.unmountComponentAtNode(div)}}),[editor,getPopupContainer]),react.createElement("span",{ref:containerRef},react.createElement(components.u,{editor,title:"对齐方式"},react.createElement(components.zx,{icon:current,onClick:()=>{popupRef.current?.state.isVisible?popupRef.current.hide():popupRef.current?.show()}})))},TextAlignStaticMenu=react.memo(_TextAlignStaticMenu,((prevProps,nextProps)=>prevProps.editor===nextProps.editor))},"./src/extensions/underline/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>tiptap_extension_underline_esm.v,n:()=>UnderlineStaticMenu});var tiptap_extension_underline_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-underline@2.0.0-beta.25_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-underline/dist/tiptap-extension-underline.esm.js"),react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),components=__webpack_require__("./src/components/index.tsx"),icons=__webpack_require__("./src/icons/index.tsx"),use_active=__webpack_require__("./src/hooks/use-active.tsx");const UnderlineStaticMenu=({editor})=>{const isUnderlineActive=(0,use_active.t)(editor,tiptap_extension_underline_esm.v.name),toggleUnderline=(0,react.useCallback)((()=>editor.chain().focus().toggleUnderline().run()),[editor]);return react.createElement(components.u,{title:"下划线",editor},react.createElement(components.zx,{icon:react.createElement(icons.xx,null),onClick:toggleUnderline,active:isUnderlineActive}))}},"./src/extensions/unique-id/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>UniqueID});var tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),v4=__webpack_require__("./node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-browser/v4.js"),dist=__webpack_require__("./node_modules/.pnpm/prosemirror-state@1.4.1/node_modules/prosemirror-state/dist/index.js"),prosemirror_model_dist=__webpack_require__("./node_modules/.pnpm/prosemirror-model@1.18.1/node_modules/prosemirror-model/dist/index.js"),prosemirror_transform_dist=__webpack_require__("./node_modules/.pnpm/prosemirror-transform@1.6.0/node_modules/prosemirror-transform/dist/index.js");function removeDuplicates(array,by=JSON.stringify){const seen={};return array.filter((item=>{const key=by(item);return!Object.prototype.hasOwnProperty.call(seen,key)&&(seen[key]=!0)}))}function getChangedRanges(transform){const{mapping,steps}=transform,changes=[];return mapping.maps.forEach(((stepMap,index)=>{if(stepMap.ranges.length)stepMap.forEach(((from,to)=>{const newStart=mapping.slice(index).map(from,-1),newEnd=mapping.slice(index).map(to),oldStart=mapping.invert().map(newStart,-1),oldEnd=mapping.invert().map(newEnd);changes.push({oldStart,oldEnd,newStart,newEnd})}));else{const step=steps[index];if(void 0===step.from||void 0===step.to)return;changes.push({oldStart:step.from,oldEnd:step.to,newStart:step.from,newEnd:step.to})}})),function simplifyChangedRanges(changes){const uniqueChanges=removeDuplicates(changes);return 1===uniqueChanges.length?uniqueChanges:uniqueChanges.filter(((change,index)=>!uniqueChanges.filter(((_,i)=>i!==index)).some((otherChange=>change.oldStart>=otherChange.oldStart&&change.oldEnd<=otherChange.oldEnd&&change.newStart>=otherChange.newStart&&change.newEnd<=otherChange.newEnd))))}(changes)}var constants=__webpack_require__("./src/constants.ts");const UniqueID=tiptap_core_esm.hj.create({name:"uniqueID",priority:constants.tc,addOptions:()=>({attributeName:"blockId",types:["heading","paragraph","orderedList","bulletList","flow","mind","excalidraw","status","table","iframe","codeBlock","blockquote","columns","image"],generateID:()=>(0,v4.Z)(),filterTransaction:null}),addGlobalAttributes(){return[{types:this.options.types,attributes:{[this.options.attributeName]:{default:null,parseHTML:element=>element.getAttribute(`data-${this.options.attributeName}`),renderHTML:attributes=>attributes[this.options.attributeName]?{[`data-${this.options.attributeName}`]:attributes[this.options.attributeName]}:{}}}}]},onCreate(){const{view,state}=this.editor,{tr,doc}=state,{types,attributeName,generateID}=this.options;(0,tiptap_core_esm.N2)(doc,(node=>types.includes(node.type.name)&&null===node.attrs[attributeName])).forEach((({node,pos})=>{tr.setNodeMarkup(pos,void 0,{...node.attrs,[attributeName]:generateID()})})),view.dispatch(tr)},addProseMirrorPlugins(){let dragSourceElement=null,transformPasted=!1;return[new dist.Sy({key:new dist.H$("uniqueID"),appendTransaction:(transactions,oldState,newState)=>{const docChanges=transactions.some((transaction=>transaction.docChanged))&&!oldState.doc.eq(newState.doc),filterTransactions=this.options.filterTransaction&&transactions.some((tr=>!this.options.filterTransaction?.(tr)));if(!docChanges||filterTransactions)return;const{tr}=newState,{types,attributeName,generateID}=this.options,transform=function combineTransactionSteps(oldDoc,transactions){const transform=new prosemirror_transform_dist.wx(oldDoc);return transactions.forEach((transaction=>{transaction.steps.forEach((step=>{transform.step(step)}))})),transform}(oldState.doc,transactions),{mapping}=transform;return getChangedRanges(transform).forEach((change=>{const newRange={from:change.newStart,to:change.newEnd},newNodes=(0,tiptap_core_esm.b5)(newState.doc,newRange,(node=>types.includes(node.type.name))),duplicatedNewIds=function findDuplicates(items){return removeDuplicates(items.filter(((el,index)=>items.indexOf(el)!==index)))}(newNodes.map((({node})=>node.attrs[attributeName])).filter((id=>null!==id)));newNodes.forEach((({node,pos})=>{const id=tr.doc.nodeAt(pos)?.attrs[attributeName];if(null===id)return void tr.setNodeMarkup(pos,void 0,{...node.attrs,[attributeName]:generateID()});const{deleted}=mapping.invert().mapResult(pos);deleted&&duplicatedNewIds.includes(id)&&tr.setNodeMarkup(pos,void 0,{...node.attrs,[attributeName]:generateID()})}))})),tr.steps.length?tr:void 0},view(view){const handleDragstart=event=>{dragSourceElement=view.dom.parentElement?.contains(event.target)?view.dom.parentElement:null};return window.addEventListener("dragstart",handleDragstart),{destroy(){window.removeEventListener("dragstart",handleDragstart)}}},props:{handleDOMEvents:{drop:(view,event)=>(dragSourceElement===view.dom.parentElement&&"copy"!==event.dataTransfer?.effectAllowed||(dragSourceElement=null,transformPasted=!0),!1),paste:()=>(transformPasted=!0,!1)},transformPasted:slice=>{if(!transformPasted)return slice;const{types,attributeName}=this.options,removeId=fragment=>{const list=[];return fragment.forEach((node=>{if(node.isText)return void list.push(node);if(!types.includes(node.type.name))return void list.push(node.copy(removeId(node.content)));const nodeWithoutId=node.type.create({...node.attrs,[attributeName]:null},removeId(node.content),node.marks);list.push(nodeWithoutId)})),prosemirror_model_dist.HY.from(list)};return transformPasted=!1,new prosemirror_model_dist.p2(removeId(slice.content),slice.openStart,slice.openEnd)}}})]}})},"./src/hooks/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>_use_attributes__WEBPACK_IMPORTED_MODULE_1__.C});__webpack_require__("./src/hooks/use-active.tsx");var _use_attributes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/use-attributes.tsx")},"./src/hooks/use-active.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>useActive});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),deep_equal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/deep-equal@2.0.5/node_modules/deep-equal/index.js"),deep_equal__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_1__);const useActive=(editor,name,attributes)=>{const[active,toggleActive]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const listener=()=>{const selection=editor.state.selection,node=selection.$head.node(selection.$head.depth);toggleActive(function someEqual(sub,full){return!!sub&&Object.keys(sub).every((key=>deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(sub[key],full[key])))}(attributes,node.attrs)||editor.isActive(name,attributes))};return editor.on("selectionUpdate",listener),editor.on("transaction",listener),()=>{editor.off("selectionUpdate",listener),editor.off("transaction",listener)}}),[editor,name,attributes,toggleActive]),active}},"./src/hooks/use-attributes.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>useAttributes});var deep_equal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/deep-equal@2.0.5/node_modules/deep-equal/index.js"),deep_equal__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");function mapSelf(d){return d}function useAttributes(editor,attribute,defaultValue,map){const mapFn=map||mapSelf,[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mapFn(defaultValue)),prevValueCache=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(value);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const listener=()=>{const attrs={...defaultValue,...editor.getAttributes(attribute)};Object.keys(attrs).forEach((key=>{null!==attrs[key]&&void 0!==attrs[key]||(attrs[key]=defaultValue[key])}));const nextAttrs=mapFn(attrs);deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(prevValueCache.current,nextAttrs)||(setValue(nextAttrs),prevValueCache.current=nextAttrs)};return editor.on("selectionUpdate",listener),editor.on("transaction",listener),()=>{editor.off("selectionUpdate",listener),editor.off("transaction",listener)}}),[editor,defaultValue,attribute,mapFn]),value}},"./src/icons/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{LS:()=>IconAddColumnAfter,dE:()=>IconAddColumnBefore,Pm:()=>IconAddRowAfter,dT:()=>IconAddRowBefore,k5:()=>IconAlignCenter,yp:()=>IconAlignJustify,hI:()=>IconAlignLeft,Qz:()=>IconAlignRight,t6:()=>IconBackgroundColor,K9:()=>IconBlockquote,lM:()=>IconBold,U6:()=>IconCenter,NO:()=>IconCheck,se:()=>IconCode,Zw:()=>IconCodeBlock,eY:()=>IconColumns,vU:()=>IconCopy,Fz:()=>IconDelete,pU:()=>IconDeleteColumn,$T:()=>IconDeleteRow,GQ:()=>IconDeleteTable,yl:()=>IconEdit,F6:()=>IconExcalidraw,uG:()=>IconFlow,wG:()=>IconFontColor,vh:()=>IconHeading1,X0:()=>IconHeading2,wD:()=>IconHeading3,Ry:()=>IconHeading4,Su:()=>IconHelpCircle,zW:()=>IconHorizontalRule,Z:()=>IconImage,O0:()=>IconImageAlignCenter,B2:()=>IconImageAlignLeft,zn:()=>IconImageAlignRight,C9:()=>IconItalic,JH:()=>IconLink,_q:()=>IconMergeCell,Ts:()=>IconMind,l1:()=>IconMindTemplate,us:()=>IconMindTheme,SC:()=>IconPlus,cb:()=>IconPriority,Gw:()=>IconProgress,M1:()=>IconRedo,UG:()=>IconSplitCell,yL:()=>IconStatus,LI:()=>IconStrike,s2:()=>IconSubscript,GO:()=>IconSuperscript,fq:()=>IconTable,DP:()=>IconTableHeaderCell,SX:()=>IconTableHeaderColumn,dJ:()=>IconTableHeaderRow,xx:()=>IconUnderline,WL:()=>IconUndo,K2:()=>IconUnlink,hd:()=>IconVisitlink,WM:()=>IconZoomIn,DS:()=>IconZoomOut});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.6_v5ja746gkdtknuc6tj46sve3be/node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const DEFAULT_EMPTY_STYLE={},StyledSpan=styled_components_browser_esm.ZP.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`,Icon=(0,react.forwardRef)((({style=DEFAULT_EMPTY_STYLE,svg},ref)=>react.createElement(StyledSpan,{ref,style},svg))),buildIcon=svg=>(0,react.forwardRef)(((props,ref)=>react.createElement(Icon,_extends({ref,svg},props))));try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},svg:{defaultValue:null,description:"",name:"svg",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/icons/icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}try{buildIcon.displayName="buildIcon",buildIcon.__docgenInfo={description:"",displayName:"buildIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/icon.tsx#buildIcon"]={docgenInfo:buildIcon.__docgenInfo,name:"buildIcon",path:"src/icons/icon.tsx#buildIcon"})}catch(__react_docgen_typescript_loader_error){}const IconPlus=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{d:"M20.5 13.5C21.3284 13.5 22 12.8284 22 12C22 11.1716 21.3284 10.5 20.5 10.5L13.5 10.5L13.5 3.5C13.5 2.67157 12.8284 2 12 2C11.1716 2 10.5 2.67157 10.5 3.5L10.5 10.5L3.5 10.5C2.67157 10.5 2 11.1716 2 12C2 12.8284 2.67157 13.5 3.5 13.5L10.5 13.5V20.5C10.5 21.3284 11.1716 22 12 22C12.8284 22 13.5 21.3284 13.5 20.5V13.5L20.5 13.5Z",fill:"currentColor"}))),IconEdit=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21v2zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z"}))),IconBold=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 3C6 2.44772 6.44772 2 7 2H12.5C15.7318 2 18.5 4.49474 18.5 7.75C18.5 9.23767 17.9219 10.5665 16.9855 11.571C18.4934 12.6006 19.5 14.287 19.5 16.25C19.5 19.5053 16.7318 22 13.5 22H7C6.44772 22 6 21.5523 6 21V3ZM13 19C14.7388 19 16 17.6892 16 16.25C16 14.8108 14.7388 13.5 13 13.5H9.00003V19H13ZM12 10.5C13.7388 10.5 15 9.18916 15 7.75C15 6.31084 13.7388 5 12 5H9.00003V10.5H12Z",fill:"currentColor"}))),IconItalic=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 3.5C9 2.67157 9.67157 2 10.5 2H17.5C18.3284 2 19 2.67157 19 3.5C19 4.32843 18.3284 5 17.5 5H15.5L12 19H13.5C14.3284 19 15 19.6716 15 20.5C15 21.3284 14.3284 22 13.5 22H6.5C5.67157 22 5 21.3284 5 20.5C5 19.6716 5.67157 19 6.5 19H8.5L12 5H10.5C9.67157 5 9 4.32843 9 3.5Z",fill:"currentColor"}))),IconUnderline=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{d:"M7 2C6.17157 2 5.5 2.67157 5.5 3.5V11C5.5 14.5899 8.41015 17.5 12 17.5C15.5899 17.5 18.5 14.5899 18.5 11V3.5C18.5 2.67157 17.8284 2 17 2C16.1716 2 15.5 2.67157 15.5 3.5V11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11V3.5C8.5 2.67157 7.82843 2 7 2Z",fill:"currentColor"}),react.createElement("path",{d:"M5.5 19C4.67157 19 4 19.6716 4 20.5C4 21.3284 4.67157 22 5.5 22H18.5C19.3284 22 20 21.3284 20 20.5C20 19.6716 19.3284 19 18.5 19H5.5Z",fill:"currentColor"}))),IconStrike=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.5 4.5C9.71311 4.5 8.49999 5.93921 8.49999 7C8.49999 8.06895 9.2604 9.60002 12.2163 10.5H6.74635C5.9307 9.47544 5.49999 8.28481 5.49999 7C5.49999 4.06079 8.28687 1.5 11.5 1.5C14.4721 1.5 16.9167 2.72229 18.7 5.1C19.197 5.76274 19.0627 6.70294 18.4 7.2C17.7372 7.69706 16.797 7.56274 16.3 6.9C15.0833 5.27771 13.5279 4.5 11.5 4.5Z",fill:"currentColor"}),react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.7183 15.5H19.2439C19.4081 15.9665 19.5 16.4668 19.5 17C19.5 18.8721 18.4653 20.3055 17.0451 21.2048C15.6584 22.0828 13.8591 22.5 12 22.5C8.07666 22.5 5.23007 20.105 4.54477 17.3638C4.34385 16.5601 4.83249 15.7457 5.63619 15.5448C5.74807 15.5168 5.86017 15.5022 5.97079 15.5H6.03145C6.69154 15.5134 7.28738 15.9649 7.4552 16.6362C7.76991 17.895 9.2959 19.5 12 19.5C13.4546 19.5 14.6553 19.1672 15.4402 18.6702C16.1915 18.1945 16.5 17.6279 16.5 17C16.5 16.5665 16.3036 16.0589 15.7183 15.5Z",fill:"currentColor"}),react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.5 10.5H21.5C22.3284 10.5 23 11.1716 23 12C23 12.8284 22.3284 13.5 21.5 13.5H2.5C1.67157 13.5 1 12.8284 1 12C1 11.1716 1.67157 10.5 2.5 10.5Z",fill:"currentColor"}))),IconCode=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z"}))),IconLink=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z"}))),IconUnlink=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M17 17h5v2h-3v3h-2v-5zM7 7H2V5h3V2h2v5zm11.364 8.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"}))),IconVisitlink=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"}))),IconDrag=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 1024 1024"},react.createElement("path",{d:"M362.666667 192m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"}),react.createElement("path",{d:"M661.333333 192m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"}),react.createElement("path",{d:"M362.666667 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"}),react.createElement("path",{d:"M661.333333 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"}),react.createElement("path",{d:"M362.666667 832m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"}),react.createElement("path",{d:"M661.333333 832m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"}))),IconBlockquote=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"}))),IconCodeBlock=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M4 18v-3.7a1.5 1.5 0 0 0-1.5-1.5H2v-1.6h.5A1.5 1.5 0 0 0 4 9.7V6a3 3 0 0 1 3-3h1v2H7a1 1 0 0 0-1 1v4.1A2 2 0 0 1 4.626 12 2 2 0 0 1 6 13.9V18a1 1 0 0 0 1 1h1v2H7a3 3 0 0 1-3-3zm16-3.7V18a3 3 0 0 1-3 3h-1v-2h1a1 1 0 0 0 1-1v-4.1a2 2 0 0 1 1.374-1.9A2 2 0 0 1 18 10.1V6a1 1 0 0 0-1-1h-1V3h1a3 3 0 0 1 3 3v3.7a1.5 1.5 0 0 0 1.5 1.5h.5v1.6h-.5a1.5 1.5 0 0 0-1.5 1.5z"}))),IconCopy=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"}))),IconAlignLeft=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M3 4h18v2H3V4zm0 15h14v2H3v-2zm0-5h18v2H3v-2zm0-5h14v2H3V9z"}))),IconAlignCenter=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M3 4h18v2H3V4zm2 15h14v2H5v-2zm-2-5h18v2H3v-2zm2-5h14v2H5V9z"}))),IconAlignRight=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M3 4h18v2H3V4zm4 15h14v2H7v-2zm-4-5h18v2H3v-2zm4-5h14v2H7V9z"}))),IconAlignJustify=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M3 4h18v2H3V4zm0 15h18v2H3v-2zm0-5h18v2H3v-2zm0-5h18v2H3V9z"}))),IconSuperscript=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M5.596 5l4.904 5.928L15.404 5H18l-6.202 7.497L18 19.994V20h-2.59l-4.91-5.934L5.59 20H3v-.006l6.202-7.497L3 5h2.596zM21.55 6.58a.8.8 0 1 0-1.32-.36l-1.155.33A2.001 2.001 0 0 1 21 4a2 2 0 0 1 1.373 3.454L20.744 9H23v1h-4V9l2.55-2.42z"}))),IconSubscript=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M5.596 4L10.5 9.928 15.404 4H18l-6.202 7.497L18 18.994V19h-2.59l-4.91-5.934L5.59 19H3v-.006l6.202-7.497L3 4h2.596zM21.55 16.58a.8.8 0 1 0-1.32-.36l-1.155.33A2.001 2.001 0 0 1 21 14a2 2 0 0 1 1.373 3.454L20.744 19H23v1h-4v-1l2.55-2.42z"}))),IconHorizontalRule=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 256 256"},react.createElement("g",{fill:"none",fillRule:"evenodd"},react.createElement("rect",{fill:"currentColor",x:"17",y:"116",width:"223",height:"24",rx:"12"})))),IconTable=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M13 10v4h6v-4h-6zm-2 0H5v4h6v-4zm2 9h6v-3h-6v3zm-2 0v-3H5v3h6zm2-14v3h6V5h-6zm-2 0H5v3h6V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"}))),IconCheck=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"}))),IconStatus=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z"}))),IconImage=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}))),IconImageAlignLeft=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{d:"M6 17h12a1 1 0 010 2H6a1 1 0 010-2zm0-8h4a1 1 0 011 1v4a1 1 0 01-1 1H6a1 1 0 01-1-1v-4a1 1 0 011-1zm0-4h12a1 1 0 010 2H6a1 1 0 110-2z",fill:"currentColor",fillRule:"evenodd"}))),IconImageAlignCenter=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{d:"M6 17h12a1 1 0 010 2H6a1 1 0 010-2zm4-8h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1zM6 5h12a1 1 0 010 2H6a1 1 0 110-2z",fill:"currentColor",fillRule:"evenodd"}))),IconImageAlignRight=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{d:"M6 17h12a1 1 0 010 2H6a1 1 0 010-2zm8-8h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1zM6 5h12a1 1 0 010 2H6a1 1 0 110-2z",fill:"currentColor",fillRule:"evenodd"}))),IconDelete=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"}))),IconMore=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M4.5 10.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S6 12.825 6 12s-.675-1.5-1.5-1.5zm15 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S21 12.825 21 12s-.675-1.5-1.5-1.5zm-7.5 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z"}))),IconAddRowBefore=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0H24V24H0z"}),react.createElement("path",{d:"M20 13c.552 0 1 .448 1 1v6c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-6c0-.552.448-1 1-1h16zm-1 2H5v4h14v-4zM12 1c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm1 2h-2v1.999L9 5v2l2-.001V9h2V6.999L15 7V5l-2-.001V3z"}))),IconAddRowAfter=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0H24V24H0z"}),react.createElement("path",{d:"M12 13c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm1 2h-2v1.999L9 17v2l2-.001V21h2v-2.001L15 19v-2l-2-.001V15zm7-12c.552 0 1 .448 1 1v6c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h16zM5 5v4h14V5H5z"}))),IconDeleteRow=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0H24V24H0z"}),react.createElement("path",{d:"M20 5c.552 0 1 .448 1 1v6c0 .552-.448 1-1 1 .628.835 1 1.874 1 3 0 2.761-2.239 5-5 5s-5-2.239-5-5c0-1.126.372-2.165 1-3H4c-.552 0-1-.448-1-1V6c0-.552.448-1 1-1h16zm-7 10v2h6v-2h-6zm6-8H5v4h14V7z"}))),IconAddColumnBefore=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0H24V24H0z"}),react.createElement("path",{d:"M20 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h6zm-1 2h-4v14h4V5zM6 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm1 2H5v1.999L3 11v2l2-.001V15h2v-2.001L9 13v-2l-2-.001V9z"}))),IconAddColumnAfter=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0H24V24H0z"}),react.createElement("path",{d:"M10 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h6zM9 5H5v14h4V5zm9 2c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm1 2h-2v1.999L15 11v2l2-.001V15h2v-2.001L21 13v-2l-2-.001V9z"}))),IconDeleteColumn=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0H24V24H0z"}),react.createElement("path",{d:"M12 3c.552 0 1 .448 1 1v8c.835-.628 1.874-1 3-1 2.761 0 5 2.239 5 5s-2.239 5-5 5c-1.032 0-1.99-.313-2.787-.848L13 20c0 .552-.448 1-1 1H6c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h6zm-1 2H7v14h4V5zm8 10h-6v2h6v-2z"}))),IconTableHeaderColumn=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 1024 1024"},react.createElement("path",{d:"M64 960l896 0L960 64 64 64 64 960zM640 384l0 256L384 640 384 384 640 384zM384 896l0-192 256 0 0 192L384 896zM320 896 258.88 896 320 834.88 320 896zM320 744.384 168.384 896 128 896l0-76.096 192-192L320 744.384zM128 729.344 128 611.904l192-192 0 117.504L128 729.344zM128 521.344 128 403.904l192-192 0 117.504L128 521.344zM128 313.344 128 227.904 227.904 128l85.504 0L128 313.344zM896 896l-192 0 0-192 192 0L896 896zM896 640l-192 0L704 384l192 0L896 640zM896 128l0 192-192 0L704 128 896 128zM640 320 384 320 384 128l256 0L640 320z"}))),IconTableHeaderRow=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 1024 1024"},react.createElement("path",{d:"M128.1024 371.5072V216.9856a28.5696 28.5696 0 0 1 28.8768-28.2624h711.8848a28.5696 28.5696 0 0 1 28.8768 28.2624v154.5216z m769.6384 231.8336H675.0208v-182.272h222.8224v182.272z m0 204.0832a28.5696 28.5696 0 0 1-28.8768 28.2624H675.0208v-182.272h222.8224v153.6z m-496.128 27.7504v-182.272H624.64v182.272z m-244.6336 0a28.5696 28.5696 0 0 1-28.8768-28.2624V652.3904h222.8224v182.3744H156.9792z m193.9456-231.8336H128.1024v-182.272h222.8224zM624.64 421.0688v182.3744H401.6128V421.0688z m251.392-281.9072h-727.04a71.0656 71.0656 0 0 0-71.68 70.4512v605.3888a71.0656 71.0656 0 0 0 71.68 70.3488h727.04a71.68 71.68 0 0 0 71.68-70.3488V209.5104a71.0656 71.0656 0 0 0-71.68-70.3488z m0 0"}),react.createElement("path",{d:"M169.984 211.2512h685.568a20.48 20.48 0 0 1 20.48 20.48v120.4224H149.504V231.7312a20.48 20.48 0 0 1 20.48-20.48z"}))),IconTableHeaderCell=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 1024 1024"},react.createElement("path",{d:"M128 266.666667A138.666667 138.666667 0 0 1 266.666667 128h490.666666A138.666667 138.666667 0 0 1 896 266.666667v490.666666A138.666667 138.666667 0 0 1 757.333333 896H266.666667A138.666667 138.666667 0 0 1 128 757.333333V266.666667zM266.666667 192A74.666667 74.666667 0 0 0 192 266.666667V362.666667h170.666667v-170.666667H266.666667zM192 426.666667h170.666667v170.666666h-170.666667v-170.666666z m234.666667 0v170.666666h170.666666v-170.666666h-170.666666z m234.666666 0v170.666666h170.666667v-170.666666h-170.666667zM597.333333 661.333333h-170.666666v170.666667h170.666666v-170.666667z m64 170.666667v-170.666667h170.666667v96a74.666667 74.666667 0 0 1-74.666667 74.666667H661.333333z m0-469.333333v-170.666667h96c41.216 0 74.666667 33.450667 74.666667 74.666667V362.666667h-170.666667z m-64-170.666667v170.666667h-170.666666v-170.666667h170.666666z m-405.333333 469.333333h170.666667v170.666667H266.666667a74.666667 74.666667 0 0 1-74.666667-74.666667V661.333333z"}))),IconMergeCell=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 1024 1024"},react.createElement("path",{d:"M213.333333 426.666667H128V170.666667h341.333333v85.333333H213.333333v170.666667m597.333334 341.333333h-256v85.333333h341.333333v-256h-85.333333v170.666667M213.333333 768v-170.666667H128v256h341.333333v-85.333333H213.333333M896 170.666667h-341.333333v85.333333h256v170.666667h85.333333V170.666667M341.333333 554.666667v85.333333l128-128-128-128v85.333333H128v85.333334h213.333333m341.333334-85.333334V384l-128 128 128 128v-85.333333h213.333333v-85.333334h-213.333333z"}))),IconSplitCell=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 1024 1024"},react.createElement("path",{d:"M810.016 598.016h86.016v256h-768v-256h86.016v170.016h596v-170.016zM128 170.016v256h86.016V256h596v170.016h86.016v-256h-768z m342.016 300v84h-128v86.016l-128-128 128-128v86.016h128z m212 0V384l128 128-128 128v-86.016h-128v-84h128z"}))),IconDeleteTable=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 1024 1024"},react.createElement("path",{d:"M659.797 677.504l60.374-60.373 90.496 90.581 90.496-90.496 60.373 60.33L870.955 768l90.496 90.496-60.331 60.373-90.453-90.581-90.496 90.496-60.374-60.33L750.38 768l-90.496-90.496zM170.667 128H768a85.333 85.333 0 0 1 85.333 85.333v302.251a255.275 255.275 0 0 0-184.192 39.083H512v170.666h46.25a254.72 254.72 0 0 0-0.085 85.334H170.667a85.333 85.333 0 0 1-85.334-85.334v-512A85.333 85.333 0 0 1 170.667 128z m0 170.667v170.666h256V298.667h-256z m341.333 0v170.666h256V298.667H512z m-341.333 256v170.666h256V554.667h-256z"}))),IconExcalidraw=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M8.586 17H3v-2h18v2h-5.586l3.243 3.243-1.414 1.414L13 17.414V20h-2v-2.586l-4.243 4.243-1.414-1.414L8.586 17zM5 3h14a1 1 0 0 1 1 1v10H4V4a1 1 0 0 1 1-1zm1 2v7h12V5H6z"}))),IconZoomIn=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15zM10 10V7h2v3h3v2h-3v3h-2v-3H7v-2h3z"}))),IconZoomOut=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15zM7 10h8v2H7v-2z"}))),IconCenter=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"}))),IconFontColor=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M15.246 14H8.754l-1.6 4H5l6-15h2l6 15h-2.154l-1.6-4zm-.8-2L12 5.885 9.554 12h4.892zM3 20h18v2H3v-2z"}))),IconBackgroundColor=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M15.243 4.515l-6.738 6.737-.707 2.121-1.04 1.041 2.828 2.829 1.04-1.041 2.122-.707 6.737-6.738-4.242-4.242zm6.364 3.535a1 1 0 0 1 0 1.414l-7.779 7.779-2.12.707-1.415 1.414a1 1 0 0 1-1.414 0l-4.243-4.243a1 1 0 0 1 0-1.414l1.414-1.414.707-2.121 7.779-7.779a1 1 0 0 1 1.414 0l5.657 5.657zm-6.364-.707l1.414 1.414-4.95 4.95-1.414-1.414 4.95-4.95zM4.283 16.89l2.828 2.829-1.414 1.414-4.243-1.414 2.828-2.829z"}))),IconHelpCircle=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z"}))),IconRedo=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M16 7h-5a6 6 0 1 0 0 12h9v2h-9a8 8 0 1 1 0-16h5V1l6 5-6 5V7z"}))),IconUndo=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z"}))),IconPriority=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{d:"M12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23ZM19.857 12C19.8568 13.5605 19.392 15.0855 18.5217 16.3808C17.6515 17.676 16.4153 18.6828 14.9706 19.2728C13.526 19.8628 11.9384 20.0093 10.4103 19.6936C8.88208 19.3778 7.48253 18.6142 6.39 17.5L12 12V4.143C14.0838 4.143 16.0823 4.97079 17.5557 6.44426C19.0292 7.91774 19.857 9.91619 19.857 12Z",fill:"currentColor"}))),IconProgress=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM13.5 6.5V11.3787L17.0607 14.9393C17.6464 15.5251 17.6464 16.4749 17.0607 17.0607C16.4749 17.6464 15.5251 17.6464 14.9393 17.0607L10.9393 13.0607C10.658 12.7794 10.5 12.3978 10.5 12V6.5C10.5 5.67157 11.1716 5 12 5C12.8284 5 13.5 5.67157 13.5 6.5Z",fill:"currentColor"}))),IconMind=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0H24V24H0z"}),react.createElement("path",{d:"M18 3c1.657 0 3 1.343 3 3s-1.343 3-3 3h-3c-1.306 0-2.417-.834-2.829-2H11c-1.1 0-2 .9-2 2v.171c1.166.412 2 1.523 2 2.829 0 1.306-.834 2.417-2 2.829V15c0 1.1.9 2 2 2h1.17c.412-1.165 1.524-2 2.83-2h3c1.657 0 3 1.343 3 3s-1.343 3-3 3h-3c-1.306 0-2.417-.834-2.829-2H11c-2.21 0-4-1.79-4-4H5c-1.657 0-3-1.343-3-3s1.343-3 3-3h2c0-2.21 1.79-4 4-4h1.17c.412-1.165 1.524-2 2.83-2h3zm0 14h-3c-.552 0-1 .448-1 1s.448 1 1 1h3c.552 0 1-.448 1-1s-.448-1-1-1zM8 11H5c-.552 0-1 .448-1 1s.448 1 1 1h3c.552 0 1-.448 1-1s-.448-1-1-1zm10-6h-3c-.552 0-1 .448-1 1s.448 1 1 1h3c.552 0 1-.448 1-1s-.448-1-1-1z"}))),IconMindTemplate=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 1024 1024"},react.createElement("path",{d:"M896 645.888V608C896 519.808 824.256 448 736 448H512V384h32c52.928 0 96-43.072 96-96v-128C640 107.072 596.928 64 544 64h-128C363.072 64 320 107.072 320 160v128C320 340.928 363.072 384 416 384H448v64H224A160.192 160.192 0 0 0 64 608v37.888c-37.184 13.248-64 48.448-64 90.112v128c0 52.928 43.072 96 96 96h64c52.928 0 96-43.072 96-96v-128c0-52.928-43.072-96-96-96H128v-32C128 555.072 171.072 512 224 512H448v128h-32c-52.928 0-96 43.072-96 96v128c0 52.928 43.072 96 96 96h128c52.928 0 96-43.072 96-96v-128c0-52.928-43.072-96-96-96H512V512h224c52.928 0 96 43.072 96 96v32h-32c-52.928 0-96 43.072-96 96v128c0 52.928 43.072 96 96 96h64c52.928 0 96-43.072 96-96v-128c0-41.664-26.816-76.864-64-90.112zM384 288v-128a32 32 0 0 1 32-32h128a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32h-128a32 32 0 0 1-32-32z m-192 448v128a32 32 0 0 1-32 32h-64a32 32 0 0 1-32-32v-128a32 32 0 0 1 32-32h64a32 32 0 0 1 32 32z m384 0v128a32 32 0 0 1-32 32h-128a32 32 0 0 1-32-32v-128a32 32 0 0 1 32-32h128a32 32 0 0 1 32 32z m320 128c0 17.6-14.4 32-32 32h-64a32.064 32.064 0 0 1-32-32v-128c0-17.6 14.4-32 32-32h64c17.6 0 32 14.4 32 32v128z"}))),IconMindTheme=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{d:"M21.957 2.13a1 1 0 0 0-1.406.147l-9.11 11.25a6.632 6.632 0 0 0-1.367 2.969.221.221 0 0 0 .302.244 6.632 6.632 0 0 0 2.62-1.955l9.109-11.25a1 1 0 0 0-.148-1.406Z",fill:"currentColor"}),react.createElement("path",{d:"M17.008 3.665a13.454 13.454 0 0 0-5.06-.984l-.024.004-.538.011-.51.03c-1.191.091-2.37.343-3.51.75a12.305 12.305 0 0 0-3.754 2.142c-1.096.922-1.96 1.99-2.568 3.176a8.435 8.435 0 0 0-.96 3.885c0 1.335.324 2.63.962 3.848.608 1.157 1.474 2.195 2.573 3.083a12.303 12.303 0 0 0 3.755 2.049c1.444.494 2.981.745 4.563.745l.545-.01.525-.029a14.43 14.43 0 0 0 1.57-.203l.722-.148.196-.06c.514-.186.96-.566 1.253-1.083a2.87 2.87 0 0 0 .26-2.178l-.09-.349-.03-.218a2.301 2.301 0 0 1 .357-1.454c.357-.544.93-.868 1.538-.871h1.768l.204-.007c1.614-.113 2.91-1.56 3.007-3.365l.006-.22-.006-.24-.05-.432-.067-.404a8.844 8.844 0 0 0-1.236-3.08 10.13 10.13 0 0 0-.802-1.096l-1.199 1.48c.154.2.298.406.43.617.483.76.81 1.563.974 2.393l.06.358.032.276.003.086-.007.22-.021.169c-.12.724-.604 1.301-1.19 1.38l-.138.01h-1.77l-.247.008c-1.14.079-2.192.702-2.847 1.7a4.145 4.145 0 0 0-.574 3.156l.068.273.037.13.028.154a.993.993 0 0 1-.118.588.58.58 0 0 1-.248.247l-.07.021-.67.134-.549.085a12.6 12.6 0 0 1-1.657.11 12.18 12.18 0 0 1-3.961-.647 10.426 10.426 0 0 1-3.19-1.734c-.9-.729-1.606-1.57-2.096-2.5a6.38 6.38 0 0 1-.75-2.984c0-1.037.254-2.06.755-3.034.495-.963 1.206-1.839 2.11-2.6A10.494 10.494 0 0 1 7.99 5.235a11.42 11.42 0 0 1 3.41-.677l.538-.01.496.01c1.153.048 2.281.264 3.338.633l1.236-1.526Z",fill:"currentColor"}),react.createElement("path",{d:"M6.875 14.466a1.377 1.377 0 0 0-1.374-1.374 1.375 1.375 0 0 0 0 2.747c.758 0 1.374-.616 1.374-1.373ZM8.124 9.47a1.375 1.375 0 0 0-2.748 0 1.374 1.374 0 1 0 2.748 0Zm5.246-1.874a1.374 1.374 0 1 0-2.747-.001 1.374 1.374 0 0 0 2.747 0Z",fill:"currentColor"}))),IconFlow=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0H24V24H0z"}),react.createElement("path",{d:"M6 21.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5c1.585 0 2.924 1.054 3.355 2.5H15v-2h2V9.242L14.757 7H9V9H3V3h6v2h5.757L18 1.756 22.243 6 19 9.241V15L21 15v6h-6v-2H9.355c-.43 1.446-1.77 2.5-3.355 2.5zm0-5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm13 .5h-2v2h2v-2zM18 4.586L16.586 6 18 7.414 19.414 6 18 4.586zM7 5H5v2h2V5z"}))),IconHeading1=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0H24V24H0z"}),react.createElement("path",{d:"M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8H21z"}))),IconHeading2=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0H24V24H0z"}),react.createElement("path",{d:"M4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 4c2.071 0 3.75 1.679 3.75 3.75 0 .857-.288 1.648-.772 2.28l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546c.268-.307.43-.709.43-1.148 0-.966-.784-1.75-1.75-1.75-.918 0-1.671.707-1.744 1.606l-.006.144h-2C14.75 9.679 16.429 8 18.5 8z"}))),IconHeading3=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0H24V24H0z"}),react.createElement("path",{d:"M22 8l-.002 2-2.505 2.883c1.59.435 2.757 1.89 2.757 3.617 0 2.071-1.679 3.75-3.75 3.75-1.826 0-3.347-1.305-3.682-3.033l1.964-.382c.156.806.866 1.415 1.718 1.415.966 0 1.75-.784 1.75-1.75s-.784-1.75-1.75-1.75c-.286 0-.556.069-.794.19l-1.307-1.547L19.35 10H15V8h7zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z"}))),IconHeading4=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0H24V24H0z"}),react.createElement("path",{d:"M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm9-12v8h1.5v2H22v2h-2v-2h-5.5v-1.34l5-8.66H22zm-2 3.133L17.19 16H20v-4.867z"}))),IconColumns=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M11 5H5v14h6V5zm2 0v14h6V5h-6zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"}))),IconSyncBlock=buildIcon(react.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},react.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react.createElement("path",{d:"M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z"})));try{IconPlus.displayName="IconPlus",IconPlus.__docgenInfo={description:"",displayName:"IconPlus",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconPlus"]={docgenInfo:IconPlus.__docgenInfo,name:"IconPlus",path:"src/icons/index.tsx#IconPlus"})}catch(__react_docgen_typescript_loader_error){}try{IconEdit.displayName="IconEdit",IconEdit.__docgenInfo={description:"",displayName:"IconEdit",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconEdit"]={docgenInfo:IconEdit.__docgenInfo,name:"IconEdit",path:"src/icons/index.tsx#IconEdit"})}catch(__react_docgen_typescript_loader_error){}try{IconBold.displayName="IconBold",IconBold.__docgenInfo={description:"",displayName:"IconBold",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconBold"]={docgenInfo:IconBold.__docgenInfo,name:"IconBold",path:"src/icons/index.tsx#IconBold"})}catch(__react_docgen_typescript_loader_error){}try{IconItalic.displayName="IconItalic",IconItalic.__docgenInfo={description:"",displayName:"IconItalic",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconItalic"]={docgenInfo:IconItalic.__docgenInfo,name:"IconItalic",path:"src/icons/index.tsx#IconItalic"})}catch(__react_docgen_typescript_loader_error){}try{IconUnderline.displayName="IconUnderline",IconUnderline.__docgenInfo={description:"",displayName:"IconUnderline",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconUnderline"]={docgenInfo:IconUnderline.__docgenInfo,name:"IconUnderline",path:"src/icons/index.tsx#IconUnderline"})}catch(__react_docgen_typescript_loader_error){}try{IconStrike.displayName="IconStrike",IconStrike.__docgenInfo={description:"",displayName:"IconStrike",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconStrike"]={docgenInfo:IconStrike.__docgenInfo,name:"IconStrike",path:"src/icons/index.tsx#IconStrike"})}catch(__react_docgen_typescript_loader_error){}try{IconCode.displayName="IconCode",IconCode.__docgenInfo={description:"",displayName:"IconCode",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconCode"]={docgenInfo:IconCode.__docgenInfo,name:"IconCode",path:"src/icons/index.tsx#IconCode"})}catch(__react_docgen_typescript_loader_error){}try{IconLink.displayName="IconLink",IconLink.__docgenInfo={description:"",displayName:"IconLink",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconLink"]={docgenInfo:IconLink.__docgenInfo,name:"IconLink",path:"src/icons/index.tsx#IconLink"})}catch(__react_docgen_typescript_loader_error){}try{IconUnlink.displayName="IconUnlink",IconUnlink.__docgenInfo={description:"",displayName:"IconUnlink",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconUnlink"]={docgenInfo:IconUnlink.__docgenInfo,name:"IconUnlink",path:"src/icons/index.tsx#IconUnlink"})}catch(__react_docgen_typescript_loader_error){}try{IconVisitlink.displayName="IconVisitlink",IconVisitlink.__docgenInfo={description:"",displayName:"IconVisitlink",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconVisitlink"]={docgenInfo:IconVisitlink.__docgenInfo,name:"IconVisitlink",path:"src/icons/index.tsx#IconVisitlink"})}catch(__react_docgen_typescript_loader_error){}try{IconDrag.displayName="IconDrag",IconDrag.__docgenInfo={description:"",displayName:"IconDrag",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconDrag"]={docgenInfo:IconDrag.__docgenInfo,name:"IconDrag",path:"src/icons/index.tsx#IconDrag"})}catch(__react_docgen_typescript_loader_error){}try{IconBlockquote.displayName="IconBlockquote",IconBlockquote.__docgenInfo={description:"",displayName:"IconBlockquote",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconBlockquote"]={docgenInfo:IconBlockquote.__docgenInfo,name:"IconBlockquote",path:"src/icons/index.tsx#IconBlockquote"})}catch(__react_docgen_typescript_loader_error){}try{IconCodeBlock.displayName="IconCodeBlock",IconCodeBlock.__docgenInfo={description:"",displayName:"IconCodeBlock",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconCodeBlock"]={docgenInfo:IconCodeBlock.__docgenInfo,name:"IconCodeBlock",path:"src/icons/index.tsx#IconCodeBlock"})}catch(__react_docgen_typescript_loader_error){}try{IconCopy.displayName="IconCopy",IconCopy.__docgenInfo={description:"",displayName:"IconCopy",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconCopy"]={docgenInfo:IconCopy.__docgenInfo,name:"IconCopy",path:"src/icons/index.tsx#IconCopy"})}catch(__react_docgen_typescript_loader_error){}try{IconAlignLeft.displayName="IconAlignLeft",IconAlignLeft.__docgenInfo={description:"",displayName:"IconAlignLeft",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconAlignLeft"]={docgenInfo:IconAlignLeft.__docgenInfo,name:"IconAlignLeft",path:"src/icons/index.tsx#IconAlignLeft"})}catch(__react_docgen_typescript_loader_error){}try{IconAlignCenter.displayName="IconAlignCenter",IconAlignCenter.__docgenInfo={description:"",displayName:"IconAlignCenter",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconAlignCenter"]={docgenInfo:IconAlignCenter.__docgenInfo,name:"IconAlignCenter",path:"src/icons/index.tsx#IconAlignCenter"})}catch(__react_docgen_typescript_loader_error){}try{IconAlignRight.displayName="IconAlignRight",IconAlignRight.__docgenInfo={description:"",displayName:"IconAlignRight",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconAlignRight"]={docgenInfo:IconAlignRight.__docgenInfo,name:"IconAlignRight",path:"src/icons/index.tsx#IconAlignRight"})}catch(__react_docgen_typescript_loader_error){}try{IconAlignJustify.displayName="IconAlignJustify",IconAlignJustify.__docgenInfo={description:"",displayName:"IconAlignJustify",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconAlignJustify"]={docgenInfo:IconAlignJustify.__docgenInfo,name:"IconAlignJustify",path:"src/icons/index.tsx#IconAlignJustify"})}catch(__react_docgen_typescript_loader_error){}try{IconSuperscript.displayName="IconSuperscript",IconSuperscript.__docgenInfo={description:"",displayName:"IconSuperscript",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconSuperscript"]={docgenInfo:IconSuperscript.__docgenInfo,name:"IconSuperscript",path:"src/icons/index.tsx#IconSuperscript"})}catch(__react_docgen_typescript_loader_error){}try{IconSubscript.displayName="IconSubscript",IconSubscript.__docgenInfo={description:"",displayName:"IconSubscript",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconSubscript"]={docgenInfo:IconSubscript.__docgenInfo,name:"IconSubscript",path:"src/icons/index.tsx#IconSubscript"})}catch(__react_docgen_typescript_loader_error){}try{IconHorizontalRule.displayName="IconHorizontalRule",IconHorizontalRule.__docgenInfo={description:"",displayName:"IconHorizontalRule",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconHorizontalRule"]={docgenInfo:IconHorizontalRule.__docgenInfo,name:"IconHorizontalRule",path:"src/icons/index.tsx#IconHorizontalRule"})}catch(__react_docgen_typescript_loader_error){}try{IconTable.displayName="IconTable",IconTable.__docgenInfo={description:"",displayName:"IconTable",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconTable"]={docgenInfo:IconTable.__docgenInfo,name:"IconTable",path:"src/icons/index.tsx#IconTable"})}catch(__react_docgen_typescript_loader_error){}try{IconCheck.displayName="IconCheck",IconCheck.__docgenInfo={description:"",displayName:"IconCheck",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconCheck"]={docgenInfo:IconCheck.__docgenInfo,name:"IconCheck",path:"src/icons/index.tsx#IconCheck"})}catch(__react_docgen_typescript_loader_error){}try{IconStatus.displayName="IconStatus",IconStatus.__docgenInfo={description:"",displayName:"IconStatus",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconStatus"]={docgenInfo:IconStatus.__docgenInfo,name:"IconStatus",path:"src/icons/index.tsx#IconStatus"})}catch(__react_docgen_typescript_loader_error){}try{IconImage.displayName="IconImage",IconImage.__docgenInfo={description:"",displayName:"IconImage",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconImage"]={docgenInfo:IconImage.__docgenInfo,name:"IconImage",path:"src/icons/index.tsx#IconImage"})}catch(__react_docgen_typescript_loader_error){}try{IconImageAlignLeft.displayName="IconImageAlignLeft",IconImageAlignLeft.__docgenInfo={description:"",displayName:"IconImageAlignLeft",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconImageAlignLeft"]={docgenInfo:IconImageAlignLeft.__docgenInfo,name:"IconImageAlignLeft",path:"src/icons/index.tsx#IconImageAlignLeft"})}catch(__react_docgen_typescript_loader_error){}try{IconImageAlignCenter.displayName="IconImageAlignCenter",IconImageAlignCenter.__docgenInfo={description:"",displayName:"IconImageAlignCenter",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconImageAlignCenter"]={docgenInfo:IconImageAlignCenter.__docgenInfo,name:"IconImageAlignCenter",path:"src/icons/index.tsx#IconImageAlignCenter"})}catch(__react_docgen_typescript_loader_error){}try{IconImageAlignRight.displayName="IconImageAlignRight",IconImageAlignRight.__docgenInfo={description:"",displayName:"IconImageAlignRight",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconImageAlignRight"]={docgenInfo:IconImageAlignRight.__docgenInfo,name:"IconImageAlignRight",path:"src/icons/index.tsx#IconImageAlignRight"})}catch(__react_docgen_typescript_loader_error){}try{IconDelete.displayName="IconDelete",IconDelete.__docgenInfo={description:"",displayName:"IconDelete",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconDelete"]={docgenInfo:IconDelete.__docgenInfo,name:"IconDelete",path:"src/icons/index.tsx#IconDelete"})}catch(__react_docgen_typescript_loader_error){}try{IconMore.displayName="IconMore",IconMore.__docgenInfo={description:"",displayName:"IconMore",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconMore"]={docgenInfo:IconMore.__docgenInfo,name:"IconMore",path:"src/icons/index.tsx#IconMore"})}catch(__react_docgen_typescript_loader_error){}try{IconAddRowBefore.displayName="IconAddRowBefore",IconAddRowBefore.__docgenInfo={description:"",displayName:"IconAddRowBefore",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconAddRowBefore"]={docgenInfo:IconAddRowBefore.__docgenInfo,name:"IconAddRowBefore",path:"src/icons/index.tsx#IconAddRowBefore"})}catch(__react_docgen_typescript_loader_error){}try{IconAddRowAfter.displayName="IconAddRowAfter",IconAddRowAfter.__docgenInfo={description:"",displayName:"IconAddRowAfter",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconAddRowAfter"]={docgenInfo:IconAddRowAfter.__docgenInfo,name:"IconAddRowAfter",path:"src/icons/index.tsx#IconAddRowAfter"})}catch(__react_docgen_typescript_loader_error){}try{IconDeleteRow.displayName="IconDeleteRow",IconDeleteRow.__docgenInfo={description:"",displayName:"IconDeleteRow",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconDeleteRow"]={docgenInfo:IconDeleteRow.__docgenInfo,name:"IconDeleteRow",path:"src/icons/index.tsx#IconDeleteRow"})}catch(__react_docgen_typescript_loader_error){}try{IconAddColumnBefore.displayName="IconAddColumnBefore",IconAddColumnBefore.__docgenInfo={description:"",displayName:"IconAddColumnBefore",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconAddColumnBefore"]={docgenInfo:IconAddColumnBefore.__docgenInfo,name:"IconAddColumnBefore",path:"src/icons/index.tsx#IconAddColumnBefore"})}catch(__react_docgen_typescript_loader_error){}try{IconAddColumnAfter.displayName="IconAddColumnAfter",IconAddColumnAfter.__docgenInfo={description:"",displayName:"IconAddColumnAfter",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconAddColumnAfter"]={docgenInfo:IconAddColumnAfter.__docgenInfo,name:"IconAddColumnAfter",path:"src/icons/index.tsx#IconAddColumnAfter"})}catch(__react_docgen_typescript_loader_error){}try{IconDeleteColumn.displayName="IconDeleteColumn",IconDeleteColumn.__docgenInfo={description:"",displayName:"IconDeleteColumn",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconDeleteColumn"]={docgenInfo:IconDeleteColumn.__docgenInfo,name:"IconDeleteColumn",path:"src/icons/index.tsx#IconDeleteColumn"})}catch(__react_docgen_typescript_loader_error){}try{IconTableHeaderColumn.displayName="IconTableHeaderColumn",IconTableHeaderColumn.__docgenInfo={description:"",displayName:"IconTableHeaderColumn",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconTableHeaderColumn"]={docgenInfo:IconTableHeaderColumn.__docgenInfo,name:"IconTableHeaderColumn",path:"src/icons/index.tsx#IconTableHeaderColumn"})}catch(__react_docgen_typescript_loader_error){}try{IconTableHeaderRow.displayName="IconTableHeaderRow",IconTableHeaderRow.__docgenInfo={description:"",displayName:"IconTableHeaderRow",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconTableHeaderRow"]={docgenInfo:IconTableHeaderRow.__docgenInfo,name:"IconTableHeaderRow",path:"src/icons/index.tsx#IconTableHeaderRow"})}catch(__react_docgen_typescript_loader_error){}try{IconTableHeaderCell.displayName="IconTableHeaderCell",IconTableHeaderCell.__docgenInfo={description:"",displayName:"IconTableHeaderCell",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconTableHeaderCell"]={docgenInfo:IconTableHeaderCell.__docgenInfo,name:"IconTableHeaderCell",path:"src/icons/index.tsx#IconTableHeaderCell"})}catch(__react_docgen_typescript_loader_error){}try{IconMergeCell.displayName="IconMergeCell",IconMergeCell.__docgenInfo={description:"",displayName:"IconMergeCell",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconMergeCell"]={docgenInfo:IconMergeCell.__docgenInfo,name:"IconMergeCell",path:"src/icons/index.tsx#IconMergeCell"})}catch(__react_docgen_typescript_loader_error){}try{IconSplitCell.displayName="IconSplitCell",IconSplitCell.__docgenInfo={description:"",displayName:"IconSplitCell",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconSplitCell"]={docgenInfo:IconSplitCell.__docgenInfo,name:"IconSplitCell",path:"src/icons/index.tsx#IconSplitCell"})}catch(__react_docgen_typescript_loader_error){}try{IconDeleteTable.displayName="IconDeleteTable",IconDeleteTable.__docgenInfo={description:"",displayName:"IconDeleteTable",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconDeleteTable"]={docgenInfo:IconDeleteTable.__docgenInfo,name:"IconDeleteTable",path:"src/icons/index.tsx#IconDeleteTable"})}catch(__react_docgen_typescript_loader_error){}try{IconExcalidraw.displayName="IconExcalidraw",IconExcalidraw.__docgenInfo={description:"",displayName:"IconExcalidraw",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconExcalidraw"]={docgenInfo:IconExcalidraw.__docgenInfo,name:"IconExcalidraw",path:"src/icons/index.tsx#IconExcalidraw"})}catch(__react_docgen_typescript_loader_error){}try{IconZoomIn.displayName="IconZoomIn",IconZoomIn.__docgenInfo={description:"",displayName:"IconZoomIn",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconZoomIn"]={docgenInfo:IconZoomIn.__docgenInfo,name:"IconZoomIn",path:"src/icons/index.tsx#IconZoomIn"})}catch(__react_docgen_typescript_loader_error){}try{IconZoomOut.displayName="IconZoomOut",IconZoomOut.__docgenInfo={description:"",displayName:"IconZoomOut",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconZoomOut"]={docgenInfo:IconZoomOut.__docgenInfo,name:"IconZoomOut",path:"src/icons/index.tsx#IconZoomOut"})}catch(__react_docgen_typescript_loader_error){}try{IconCenter.displayName="IconCenter",IconCenter.__docgenInfo={description:"",displayName:"IconCenter",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconCenter"]={docgenInfo:IconCenter.__docgenInfo,name:"IconCenter",path:"src/icons/index.tsx#IconCenter"})}catch(__react_docgen_typescript_loader_error){}try{IconFontColor.displayName="IconFontColor",IconFontColor.__docgenInfo={description:"",displayName:"IconFontColor",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconFontColor"]={docgenInfo:IconFontColor.__docgenInfo,name:"IconFontColor",path:"src/icons/index.tsx#IconFontColor"})}catch(__react_docgen_typescript_loader_error){}try{IconBackgroundColor.displayName="IconBackgroundColor",IconBackgroundColor.__docgenInfo={description:"",displayName:"IconBackgroundColor",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconBackgroundColor"]={docgenInfo:IconBackgroundColor.__docgenInfo,name:"IconBackgroundColor",path:"src/icons/index.tsx#IconBackgroundColor"})}catch(__react_docgen_typescript_loader_error){}try{IconHelpCircle.displayName="IconHelpCircle",IconHelpCircle.__docgenInfo={description:"",displayName:"IconHelpCircle",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconHelpCircle"]={docgenInfo:IconHelpCircle.__docgenInfo,name:"IconHelpCircle",path:"src/icons/index.tsx#IconHelpCircle"})}catch(__react_docgen_typescript_loader_error){}try{IconRedo.displayName="IconRedo",IconRedo.__docgenInfo={description:"",displayName:"IconRedo",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconRedo"]={docgenInfo:IconRedo.__docgenInfo,name:"IconRedo",path:"src/icons/index.tsx#IconRedo"})}catch(__react_docgen_typescript_loader_error){}try{IconUndo.displayName="IconUndo",IconUndo.__docgenInfo={description:"",displayName:"IconUndo",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconUndo"]={docgenInfo:IconUndo.__docgenInfo,name:"IconUndo",path:"src/icons/index.tsx#IconUndo"})}catch(__react_docgen_typescript_loader_error){}try{IconPriority.displayName="IconPriority",IconPriority.__docgenInfo={description:"",displayName:"IconPriority",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconPriority"]={docgenInfo:IconPriority.__docgenInfo,name:"IconPriority",path:"src/icons/index.tsx#IconPriority"})}catch(__react_docgen_typescript_loader_error){}try{IconProgress.displayName="IconProgress",IconProgress.__docgenInfo={description:"",displayName:"IconProgress",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconProgress"]={docgenInfo:IconProgress.__docgenInfo,name:"IconProgress",path:"src/icons/index.tsx#IconProgress"})}catch(__react_docgen_typescript_loader_error){}try{IconMind.displayName="IconMind",IconMind.__docgenInfo={description:"",displayName:"IconMind",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconMind"]={docgenInfo:IconMind.__docgenInfo,name:"IconMind",path:"src/icons/index.tsx#IconMind"})}catch(__react_docgen_typescript_loader_error){}try{IconMindTemplate.displayName="IconMindTemplate",IconMindTemplate.__docgenInfo={description:"",displayName:"IconMindTemplate",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconMindTemplate"]={docgenInfo:IconMindTemplate.__docgenInfo,name:"IconMindTemplate",path:"src/icons/index.tsx#IconMindTemplate"})}catch(__react_docgen_typescript_loader_error){}try{IconMindTheme.displayName="IconMindTheme",IconMindTheme.__docgenInfo={description:"",displayName:"IconMindTheme",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconMindTheme"]={docgenInfo:IconMindTheme.__docgenInfo,name:"IconMindTheme",path:"src/icons/index.tsx#IconMindTheme"})}catch(__react_docgen_typescript_loader_error){}try{IconFlow.displayName="IconFlow",IconFlow.__docgenInfo={description:"",displayName:"IconFlow",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconFlow"]={docgenInfo:IconFlow.__docgenInfo,name:"IconFlow",path:"src/icons/index.tsx#IconFlow"})}catch(__react_docgen_typescript_loader_error){}try{IconHeading1.displayName="IconHeading1",IconHeading1.__docgenInfo={description:"",displayName:"IconHeading1",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconHeading1"]={docgenInfo:IconHeading1.__docgenInfo,name:"IconHeading1",path:"src/icons/index.tsx#IconHeading1"})}catch(__react_docgen_typescript_loader_error){}try{IconHeading2.displayName="IconHeading2",IconHeading2.__docgenInfo={description:"",displayName:"IconHeading2",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconHeading2"]={docgenInfo:IconHeading2.__docgenInfo,name:"IconHeading2",path:"src/icons/index.tsx#IconHeading2"})}catch(__react_docgen_typescript_loader_error){}try{IconHeading3.displayName="IconHeading3",IconHeading3.__docgenInfo={description:"",displayName:"IconHeading3",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconHeading3"]={docgenInfo:IconHeading3.__docgenInfo,name:"IconHeading3",path:"src/icons/index.tsx#IconHeading3"})}catch(__react_docgen_typescript_loader_error){}try{IconHeading4.displayName="IconHeading4",IconHeading4.__docgenInfo={description:"",displayName:"IconHeading4",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconHeading4"]={docgenInfo:IconHeading4.__docgenInfo,name:"IconHeading4",path:"src/icons/index.tsx#IconHeading4"})}catch(__react_docgen_typescript_loader_error){}try{IconColumns.displayName="IconColumns",IconColumns.__docgenInfo={description:"",displayName:"IconColumns",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconColumns"]={docgenInfo:IconColumns.__docgenInfo,name:"IconColumns",path:"src/icons/index.tsx#IconColumns"})}catch(__react_docgen_typescript_loader_error){}try{IconSyncBlock.displayName="IconSyncBlock",IconSyncBlock.__docgenInfo={description:"",displayName:"IconSyncBlock",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.tsx#IconSyncBlock"]={docgenInfo:IconSyncBlock.__docgenInfo,name:"IconSyncBlock",path:"src/icons/index.tsx#IconSyncBlock"})}catch(__react_docgen_typescript_loader_error){}},"./src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{mU:()=>collaboration_CollaborationEditor,c4:()=>render_EditorRender});var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),hocuspocus_provider_esm=__webpack_require__("./node_modules/.pnpm/@hocuspocus+provider@1.0.0-alpha.40/node_modules/@hocuspocus/provider/dist/hocuspocus-provider.esm.js"),tiptap_core_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+core@2.0.0-beta.183/node_modules/@tiptap/core/dist/tiptap-core.esm.js"),keys=__webpack_require__("./node_modules/.pnpm/y-prosemirror@1.2.0_owck6tcppkn7nhpyektz337fiy/node_modules/y-prosemirror/src/plugins/keys.js"),undo_plugin=__webpack_require__("./node_modules/.pnpm/y-prosemirror@1.2.0_owck6tcppkn7nhpyektz337fiy/node_modules/y-prosemirror/src/plugins/undo-plugin.js"),sync_plugin=__webpack_require__("./node_modules/.pnpm/y-prosemirror@1.2.0_owck6tcppkn7nhpyektz337fiy/node_modules/y-prosemirror/src/plugins/sync-plugin.js");const Collaboration=tiptap_core_esm.hj.create({name:"collaboration",priority:1e3,addOptions:()=>({document:null,field:"default",fragment:null,blockIds:null}),onCreate(){this.editor.extensionManager.extensions.find((extension=>"history"===extension.name))&&console.warn('[tiptap warn]: "@tiptap/extension-collaboration" comes with its own history support and is not compatible with "@tiptap/extension-history".')},addCommands:()=>({undo:()=>({tr,state,dispatch})=>{tr.setMeta("preventDispatch",!0);return 0!==keys.Gk.getState(state).undoManager.undoStack.length&&(!dispatch||(0,undo_plugin.Yw)(state))},redo:()=>({tr,state,dispatch})=>{tr.setMeta("preventDispatch",!0);return 0!==keys.Gk.getState(state).undoManager.redoStack.length&&(!dispatch||(0,undo_plugin.KX)(state))}}),addKeyboardShortcuts(){return{"Mod-z":()=>this.editor.commands.undo(),"Mod-y":()=>this.editor.commands.redo(),"Shift-Mod-z":()=>this.editor.commands.redo()}},addProseMirrorPlugins(){const fragment=this.options.fragment?this.options.fragment:this.options.document.getXmlFragment(this.options.field);return[(0,sync_plugin.Z)(fragment),(0,undo_plugin.v0)()]}});var tiptap_react_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+react@2.0.0-beta.115_qcznkxrdrnvwbgjhf5yu5evfae/node_modules/@tiptap/react/dist/tiptap-react.esm.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.6_v5ja746gkdtknuc6tj46sve3be/node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledEditor=styled_components_browser_esm.ZP.div`
  box-sizing: border-box;
  color: ${props=>props.theme.text};
  background: ${props=>props.theme.background};
  font-family: ${props=>props.theme.fontFamily};
  font-weight: ${props=>props.theme.fontWeight};
  font-size: 1em;
  line-height: 1.7em;
  width: 100%;
  padding: 0 12px;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  > div {
    position: relative;
  }

  .ProseMirror {
    position: relative;
    outline: none;
    word-wrap: break-word;
    white-space: pre-wrap;
    white-space: break-spaces;
    -webkit-font-variant-ligatures: none;
    font-variant-ligatures: none;
  }

  .ProseMirror-hideselection *::selection {
    background: transparent;
  }

  .ProseMirror-hideselection {
    caret-color: transparent;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    margin: 1em 0 0.5em;
    font-weight: 500;
    cursor: text;

    &:not([data-placeholder]):before {
      display: inline-block;
      font-family: ${props=>props.theme.fontFamilyMono};
      color: ${props=>props.theme.textSecondary};
      font-size: 13px;
      line-height: 0;
      margin-left: -24px;
      transition: opacity 150ms ease-in-out;
      opacity: 0;
      width: 24px;
    }

    &:hover,
    &:focus-within {
      .heading-actions {
        opacity: 1;
      }
    }
  }

  .heading-anchor,
  .heading-fold {
    display: inline-block;
    color: ${props=>props.theme.text};
    opacity: 0.75;
    cursor: pointer;
    background: none;
    outline: none;
    border: 0;
    margin: 0;
    padding: 0;
    text-align: left;
    font-family: ${props=>props.theme.fontFamilyMono};
    font-size: 14px;
    line-height: 0;
    width: 12px;
    height: 24px;

    &:focus,
    &:hover {
      opacity: 1;
    }
  }

  .heading-actions {
    opacity: 0;
    background: ${props=>props.theme.background};
    flex-direction: row;
    display: inline-flex;
    position: absolute;
    top: -2px;
    left: -16px;
    height: 24px;

    &.collapsed {
      opacity: 1;
    }

    &.collapsed .heading-anchor {
      opacity: 0;
    }

    &.collapsed .heading-fold {
      opacity: 1;
    }
  }

  .heading-fold {
    display: inline-block;
    transform-origin: center;
    padding: 0;

    &.collapsed {
      transform: rotate(-90deg);
      transition-delay: 0.1s;
      opacity: 1;
    }
  }

  .folded-content {
    display: none;
  }

  p {
    margin: 0;

    span:first-child + br:last-child {
      display: none;
    }
  }

  blockquote {
    position: relative;
    margin: 0.5em 0;
    padding-left: 1em;
    border-left: 2px solid ${props=>props.theme.blockquoteBorderColor};
    color: ${props=>props.theme.blockquoteTextColor};
  }

  hr {
    position: relative;
    height: 1em;
    border: 0;
  }

  hr:before {
    content: "";
    display: block;
    position: absolute;
    border-top: 1px solid ${props=>props.theme.horizontalRule};
    top: 0.5em;
    left: 0;
    right: 0;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

  /* S List */
  ol,
  ul {
    margin: 0;
    padding-left: 18px;

    p {
      margin: 0;
    }
  }

  li > ul,
  li > ol,
  ul > ul,
  ol > ol {
    margin-top: 0;
  }

  ul {
    list-style-type: disc;
  }

  ol,
  ol ol ol ol,
  ol ol ol ol ol ol ol,
  ol ol ol ol ol ol ol ol ol ol {
    list-style-type: decimal;
  }

  ol ol,
  ol ol ol ol ol,
  ol ol ol ol ol ol ol ol,
  ol ol ol ol ol ol ol ol ol ol ol {
    list-style-type: lower-alpha;
  }

  ol ol ol,
  ol ol ol ol ol ol,
  ol ol ol ol ol ol ol ol ol,
  ol ol ol ol ol ol ol ol ol ol ol ol {
    list-style-type: lower-roman;
  }

  ul[data-type="taskList"] {
    padding: 0;
    list-style: none;

    li {
      position: relative;
      display: flex;
      align-items: center;
      padding-left: 16px;
      cursor: pointer;

      > label {
        position: absolute;
        top: 6px;
        left: 0;
        display: block;
        width: 16px;
        height: 16px;
        background-color: #fff;
        border: 1px solid var(--semi-color-border);
        border-radius: 2px;

        > input {
          display: none;
        }

        &::after {
          position: absolute;
          top: -0.357143px;
          left: 4.071429px;
          width: 6.714286px;
          height: 12.142857px;
          border: 2px solid #fff;
          content: " ";
          opacity: 0;
          transform: rotate(45deg) scale(0);
          border-top: 0;
          border-left: 0;
          transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6),
            opacity 0.1s;
        }
      }

      > div {
        flex: 1 1 auto;
        padding-left: 0.5rem;
      }

      &[data-checked="true"] {
        color: var(--semi-color-text-2);

        > label {
          background-color: var(--semi-color-primary);

          &::after {
            opacity: 1;
            transform: rotate(45deg) scale(1);
          }
        }

        > div {
          p {
            text-decoration: line-through;
          }
        }
      }
    }
  }
  /* E List */

  /* S Table */
  .tableWrapper {
    position: relative;
    margin: 0.5em 0px;

    &.has-focus {
      .scrollWrapper {
        margin-top: -20px;
      }
    }
  }

  .scrollWrapper {
    overflow-y: hidden;
    overflow-x: auto;
    padding-left: 28px;
    padding-top: 28px;
    padding-bottom: 8px;
    margin-left: -28px;
    margin-top: -20px;
    margin-bottom: -8px;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    -webkit-transition: border 250ms ease-in-out 0s;
    transition: border 250ms ease-in-out 0s;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 4px;
    overflow: auto;

    box-sizing: border-box;

    * {
      box-sizing: border-box;
    }

    tr {
      position: relative;
      border-bottom: 1px solid ${props=>props.theme.tableBorderColor};
    }

    th {
      background: ${props=>props.theme.tableHeaderBgColor};
    }

    td,
    th {
      position: relative;
      vertical-align: top;
      border: 1px solid ${props=>props.theme.tableBorderColor};
      position: relative;
      padding: 4px 8px;
      text-align: left;
      min-width: 100px;
    }

    .selectedCell {
      position: relative;
      border: 1px solid ${props=>props.theme.tableSelectedBorderColor};
      background-color: ${props=>props.theme.tableSelectedCellBgColor};

      &::after {
        box-sizing: content-box;
        height: 100%;
        width: 100%;
        border: 1px solid ${props=>props.theme.tableSelectedBorderColor};
        content: "";
        position: absolute;
        left: -1px;
        top: -1px;
        bottom: 0px;
        z-index: 12;
        display: inline-block;
        pointer-events: none;
      }
    }

    .grip-column {
      position: absolute;
      top: -12px;
      left: -1px;
      width: 100%;

      font-size: 0;

      > span {
        position: absolute;
        top: -18px;
        left: 100%;
        transform: translateX(-8px);

        display: inline-block;
        width: 16px;
        height: 16px;
      }

      &::before {
        content: "";
        position: absolute;
        left: 100%;
        bottom: 4px;
        transform: translateX(-1px);

        width: 4px;
        height: 4px;
        background-color: ${props=>props.theme.tableBorderColor};
        border-radius: 50%;
        display: block;
      }

      &::after {
        box-sizing: content-box;
        content: "";
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 10px;
        background: ${props=>props.theme.tableHeaderBgColor};
        border: 1px solid ${props=>props.theme.tableBorderColor};
        display: block;
      }

      &:hover {
        font-size: 14px;
        color: ${props=>props.theme.tableSelectedBorderColor};

        &::before {
          display: none;
        }

        &::after {
          background: ${props=>props.theme.tableSelectedControlBgColor};
          border-color: ${props=>props.theme.tableSelectedControlBgColor};
        }
      }

      &.last::after {
        border-top-right-radius: 3px;
      }

      &.selected::after {
        background: ${props=>props.theme.tableSelectedControlBgColor};
        border-color: ${props=>props.theme.tableSelectedControlBgColor};
      }
    }

    .grip-row {
      position: absolute;
      left: -12px;
      top: -1px;
      height: 100%;
      font-size: 0;

      > span {
        transform: translateY(8px);
        position: absolute;
        left: -16px;
        bottom: 4px;

        display: inline-block;
        width: 16px;
        height: 16px;
      }

      &::before {
        content: "";
        position: absolute;
        left: -10px;
        bottom: -2px;
        width: 4px;
        height: 4px;
        background-color: ${props=>props.theme.tableBorderColor};
        border-radius: 50%;
        display: block;
      }

      &::after {
        box-sizing: content-box;
        content: "";
        cursor: pointer;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 10px;
        background: ${props=>props.theme.tableHeaderBgColor};
        border: 1px solid ${props=>props.theme.tableBorderColor};
        display: block;
      }

      &:hover {
        font-size: 14px;
        color: ${props=>props.theme.tableSelectedBorderColor};

        &::before {
          display: none;
        }

        &::after {
          background: ${props=>props.theme.tableSelectedControlBgColor};
          border-color: ${props=>props.theme.tableSelectedBorderColor};
        }
      }

      &.last::after {
        border-bottom-left-radius: 3px;
      }

      &.selected::after {
        background: ${props=>props.theme.tableSelectedControlBgColor};
        border-color: ${props=>props.theme.tableSelectedBorderColor};
      }
    }

    .grip-table {
      &::after {
        box-sizing: content-box;
        content: "";
        cursor: pointer;
        position: absolute;
        top: -12px;
        left: -12px;
        display: block;
        background: ${props=>props.theme.tableHeaderBgColor};
        width: 10px;
        height: 10px;
        border: 1px solid ${props=>props.theme.tableBorderColor};
        border-top-left-radius: 3px;
      }

      &:hover::after {
        background: ${props=>props.theme.tableSelectedControlBgColor};
        border-color: ${props=>props.theme.tableSelectedBorderColor};
      }

      &.selected::after {
        background: ${props=>props.theme.tableSelectedControlBgColor};
        border-color: ${props=>props.theme.tableSelectedBorderColor};
      }
    }
  }

  .column-resize-handle {
    position: absolute;
    top: 0;
    right: -2px;
    bottom: -2px;
    width: 4px;
    pointer-events: none;
    background-color: ${props=>props.theme.tableResizeHandleBgColor};
  }

  .resize-cursor {
    cursor: ew-resize;
    cursor: col-resize; /* stylelint-disable declaration-block-no-duplicate-properties */
  }
  /* E Table */

  /* S Code */
  code {
    padding: 4px;
    font-family: ${props=>props.theme.fontFamilyMono};
    font-size: 0.875rem;
    line-height: 1.3;
    cursor: text;
    background-color: #f5f6f7;
    border-radius: 4px;
  }

  pre {
    position: relative;
    display: flex;
    min-width: 48px;
    margin: 0;
    line-height: 1.3;
    background-color: #f5f6f7;
    counter-reset: line 0;

    code {
      width: 100%;
      padding: 0;
      margin: 12px;
      overflow: auto;
      font-size: 0.875rem;
      line-height: 1.5rem;
      color: inherit;
      white-space: pre;
      background-color: transparent;
      overscroll-behavior: contain;
    }
  }
  /* E Code */

  /* S ReactRenderer */
  .react-renderer {
    margin: 0.75em 0;
    line-height: 0;
  }
  /* E ReactRenderer */

  /* S Resizable */
  .resizable {
    position: relative;
    display: inline-block;
    max-width: 100%;
    vertical-align: top;
  }
  /* E Resizable */

  /* S Dragable */
  [data-drag-handle] {
    position: absolute;
    z-index: 100;
    display: inline;
    width: 16px;
    height: 16px;
    cursor: move;
    background-color: #fff;
    opacity: 0;
    transition: opacity 0.3s ease-out;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='3' y='1' width='3' height='3' rx='1.5' fill='%23111'/%3E%3Crect x='10' y='1' width='3' height='3' rx='1.5' fill='%23111'/%3E%3Crect x='3' y='6' width='3' height='3' rx='1.5' fill='%23111'/%3E%3Crect x='10' y='6' width='3' height='3' rx='1.5' fill='%23111'/%3E%3Crect x='3' y='11' width='3' height='3' rx='1.5' fill='%23111'/%3E%3Crect x='10' y='11' width='3' height='3' rx='1.5' fill='%23111'/%3E%3C/svg%3E");
    background-size: contain;
    background-position: center 0;
    background-repeat: no-repeat;

    &.show {
      opacity: 0.3;

      &:hover {
        opacity: 1;
      }
    }

    &.hide {
      opacity: 0;
    }
  }
  /* E Dragable */

  /* S Placeholder */
  .is-empty {
    position: relative;

    &.has-focus {
      &::before {
        float: left;
        height: 0;
        color: #aaa;
        pointer-events: none;
        content: attr(data-placeholder);
      }
    }

    &.node-codeBlock::before {
      display: none;
    }
  }
  /* E Placeholder */

  .collaboration-cursor__caret {
    position: relative;
    border-left: 1px solid #0d0d0d;
    margin-right: -1px;
    margin-left: -1px;
    word-break: normal;
    pointer-events: none;
    border-right: 1px solid #0d0d0d;
  }

  .collaboration-cursor__label {
    position: absolute;
    top: -1.4em;
    left: -1px;
    padding: 0.1rem 0.3rem;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #0d0d0d;
    white-space: nowrap;
    border-radius: 3px 3px 3px 0;
    user-select: none;
  }

  .columns {
    display: flex;
    width: 100%;
    gap: 8px;

    .column {
      min-width: 0;
      padding: 12px;
      border: 1px solid ${props=>props.theme.borderColor};
      border-radius: ${props=>props.theme.borderRadius};
      flex: 1 1 0%;
      box-sizing: border-box;

      p {
        &:first-of-type {
          margin-top: 0;
        }
      }
    }
  }

  /* S Tooltip */
  .tippy-box[data-animation="fade"][data-state="hidden"] {
    opacity: 0;
  }
  [data-tippy-root] {
    max-width: calc(100vw - 10px);
  }
  .tippy-box {
    position: relative;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    line-height: 1.4;
    white-space: normal;
    outline: 0;
    transition-property: transform, visibility, opacity;
  }
  .tippy-box[data-theme~="bubble-menu"] {
    background-color: #fff;
    padding: 0;
    border: 1px solid ${props=>props.theme.borderColor};
    border-radius: 6px;
    color: #333;
  }
  .tippy-box[data-placement^="top"] > .tippy-arrow {
    bottom: 0;
  }
  .tippy-box[data-placement^="top"] > .tippy-arrow:before {
    bottom: -7px;
    left: 0;
    border-width: 8px 8px 0;
    border-top-color: initial;
    transform-origin: center top;
  }
  .tippy-box[data-placement^="bottom"] > .tippy-arrow {
    top: 0;
  }
  .tippy-box[data-placement^="bottom"] > .tippy-arrow:before {
    top: -7px;
    left: 0;
    border-width: 0 8px 8px;
    border-bottom-color: initial;
    transform-origin: center bottom;
  }
  .tippy-box[data-placement^="left"] > .tippy-arrow {
    right: 0;
  }
  .tippy-box[data-placement^="left"] > .tippy-arrow:before {
    border-width: 8px 0 8px 8px;
    border-left-color: initial;
    right: -7px;
    transform-origin: center left;
  }
  .tippy-box[data-placement^="right"] > .tippy-arrow {
    left: 0;
  }
  .tippy-box[data-placement^="right"] > .tippy-arrow:before {
    left: -7px;
    border-width: 8px 8px 8px 0;
    border-right-color: initial;
    transform-origin: center right;
  }
  .tippy-box[data-inertia][data-state="visible"] {
    transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
  }
  .tippy-arrow {
    width: 16px;
    height: 16px;
    color: #333;
  }
  .tippy-arrow:before {
    content: "";
    position: absolute;
    border-color: transparent;
    border-style: solid;
  }
  .tippy-content {
    position: relative;
    padding: 4px 6px;
    z-index: 1;

    ul,
    ol {
      padding: 0;
    }
  }
  .tippy-box[data-theme~="bubble-menu"] .tippy-content {
    overflow-x: auto;
    overflow-y: visible;
  }
  .tippy-box[data-theme~="padding-0"] .tippy-content {
    padding: 0;
  }
  .tippy-box[data-theme~="padding-8"] .tippy-content {
    padding: 8px 12px;
  }
  .tippy-box[data-theme~="hidden"] {
    display: none;
  }
  /* E Tooltip */

  /* S highlight */
  .hljs {
    color: #24292e;
    background: #fff;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-meta .hljs-keyword,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-type,
  .hljs-variable.language_ {
    /* prettylights-syntax-keyword */
    color: #d73a49;
  }

  .hljs-title,
  .hljs-title.class_,
  .hljs-title.class_.inherited__,
  .hljs-title.function_ {
    /* prettylights-syntax-entity */
    color: #6f42c1;
  }

  .hljs-attr,
  .hljs-attribute,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-operator,
  .hljs-variable,
  .hljs-selector-attr,
  .hljs-selector-class,
  .hljs-selector-id {
    /* prettylights-syntax-constant */
    color: #005cc5;
  }

  .hljs-regexp,
  .hljs-string,
  .hljs-meta .hljs-string {
    /* prettylights-syntax-string */
    color: #032f62;
  }

  .hljs-built_in,
  .hljs-symbol {
    /* prettylights-syntax-variable */
    color: #e36209;
  }

  .hljs-comment,
  .hljs-code,
  .hljs-formula {
    /* prettylights-syntax-comment */
    color: #6a737d;
  }

  .hljs-name,
  .hljs-quote,
  .hljs-selector-tag,
  .hljs-selector-pseudo {
    /* prettylights-syntax-entity-tag */
    color: #22863a;
  }

  .hljs-subst {
    /* prettylights-syntax-storage-modifier-import */
    color: #24292e;
  }

  .hljs-section {
    font-weight: bold;

    /* prettylights-syntax-markup-heading */
    color: #005cc5;
  }

  .hljs-bullet {
    /* prettylights-syntax-markup-list */
    color: #735c0f;
  }

  .hljs-emphasis {
    font-style: italic;

    /* prettylights-syntax-markup-italic */
    color: #24292e;
  }

  .hljs-strong {
    font-weight: bold;

    /* prettylights-syntax-markup-bold */
    color: #24292e;
  }

  .hljs-addition {
    /* prettylights-syntax-markup-inserted */
    color: #22863a;
    background-color: #f0fff4;
  }

  .hljs-deletion {
    /* prettylights-syntax-markup-deleted */
    color: #b31d28;
    background-color: #ffeef0;
  }
  /* E highlight */

  /* S Mind */
  .km-view {
    font-family: "STHeitiSC-Light", "STHeiti", "Hei", "Heiti SC",
      "Microsoft Yahei", Arial, sans-serif;
    -webkit-user-select: none;
    user-select: none;
    position: relative;
  }

  .km-view .km-receiver {
    position: absolute;
    left: -99999px;
    top: -99999px;
    width: 20px;
    height: 20px;
    outline: none;
    margin: 0;
  }

  .km-view image {
    cursor: zoom-in;
  }

  .km-image-viewer {
    position: fixed;
    z-index: 99999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.75);
  }

  .km-image-viewer .km-image-viewer-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    white-space: nowrap;
    overflow: auto;
  }

  .km-image-viewer .km-image-viewer-container::before {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    font-size: 0;
    vertical-align: middle;
  }

  .km-image-viewer .km-image-viewer-container img {
    cursor: zoom-out;
    vertical-align: middle;
  }

  .km-image-viewer .km-image-viewer-container img.limited {
    cursor: zoom-in;
    max-width: 100%;
    max-height: 100%;
  }

  .km-image-viewer .km-image-viewer-toolbar {
    z-index: 1;
    background: rgba(0, 0, 0, 0.75);
    text-align: right;
    transition: all 0.25s;
  }

  .km-image-viewer .km-image-viewer-toolbar.hidden {
    transform: translate(0, -100%);
    opacity: 0;
  }

  .km-image-viewer .km-image-viewer-btn {
    cursor: pointer;
    outline: 0;
    border: 0;
    width: 44px;
    height: 44px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY0IiBoZWlnaHQ9Ijg4IiB2aWV3Qm94PSIwIDAgMjY0IDg4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT5kZWZhdWx0LXNraW4gMjwvdGl0bGU+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Zz48cGF0aCBkPSJNNjcuMDAyIDU5LjV2My43NjhjLTYuMzA3Ljg0LTkuMTg0IDUuNzUtMTAuMDAyIDkuNzMyIDIuMjItMi44MyA1LjU2NC01LjA5OCAxMC4wMDItNS4wOThWNzEuNUw3MyA2NS41ODUgNjcuMDAyIDU5LjV6IiBpZD0iU2hhcGUiIGZpbGw9IiNmZmYiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTMgMjl2LTVoMnYzaDN2MmgtNXpNMTMgMTVoNXYyaC0zdjNoLTJ2LTV6TTMxIDE1djVoLTJ2LTNoLTN2LTJoNXpNMzEgMjloLTV2LTJoM3YtM2gydjV6IiBpZD0iU2hhcGUiLz48L2c+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTYyIDI0djVoLTJ2LTNoLTN2LTJoNXpNNjIgMjBoLTV2LTJoM3YtM2gydjV6TTcwIDIwdi01aDJ2M2gzdjJoLTV6TTcwIDI0aDV2MmgtM3YzaC0ydi01eiIvPjwvZz48cGF0aCBkPSJNMjAuNTg2IDY2bC01LjY1Ni01LjY1NiAxLjQxNC0xLjQxNEwyMiA2NC41ODZsNS42NTYtNS42NTYgMS40MTQgMS40MTRMMjMuNDE0IDY2bDUuNjU2IDUuNjU2LTEuNDE0IDEuNDE0TDIyIDY3LjQxNGwtNS42NTYgNS42NTYtMS40MTQtMS40MTRMMjAuNTg2IDY2eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMTEuNzg1IDY1LjAzTDExMCA2My41bDMtMy41aC0xMHYtMmgxMGwtMy0zLjUgMS43ODUtMS40NjhMMTE3IDU5bC01LjIxNSA2LjAzeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNTIuMjE1IDY1LjAzTDE1NCA2My41bC0zLTMuNWgxMHYtMmgtMTBsMy0zLjUtMS43ODUtMS40NjhMMTQ3IDU5bDUuMjE1IDYuMDN6IiBmaWxsPSIjZmZmIi8+PGc+PHBhdGggaWQ9IlJlY3RhbmdsZS0xMSIgZmlsbD0iI2ZmZiIgZD0iTTE2MC45NTcgMjguNTQzbC0zLjI1LTMuMjUtMS40MTMgMS40MTQgMy4yNSAzLjI1eiIvPjxwYXRoIGQ9Ik0xNTIuNSAyN2MzLjAzOCAwIDUuNS0yLjQ2MiA1LjUtNS41cy0yLjQ2Mi01LjUtNS41LTUuNS01LjUgMi40NjItNS41IDUuNSAyLjQ2MiA1LjUgNS41IDUuNXoiIGlkPSJPdmFsLTEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUwIDIxaDV2MWgtNXoiLz48L2c+PGc+PHBhdGggZD0iTTExNi45NTcgMjguNTQzbC0xLjQxNCAxLjQxNC0zLjI1LTMuMjUgMS40MTQtMS40MTQgMy4yNSAzLjI1eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMDguNSAyN2MzLjAzOCAwIDUuNS0yLjQ2MiA1LjUtNS41cy0yLjQ2Mi01LjUtNS41LTUuNS01LjUgMi40NjItNS41IDUuNSAyLjQ2MiA1LjUgNS41IDUuNXoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTA2IDIxaDV2MWgtNXoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTA5LjA0MyAxOS4wMDhsLS4wODUgNS0xLS4wMTcuMDg1LTV6Ii8+PC9nPjwvZz48L2c+PC9zdmc+);
  }

  .km-image-viewer .km-image-viewer-toolbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .km-image-viewer .km-image-viewer-close {
    background-position: 0 -44px;
  }
  /* E Mind */
`;var dist=__webpack_require__("./node_modules/.pnpm/prosemirror-state@1.4.1/node_modules/prosemirror-state/dist/index.js"),prosemirror_view_dist=__webpack_require__("./node_modules/.pnpm/prosemirror-view@1.26.2/node_modules/prosemirror-view/dist/index.js");const Focus=tiptap_core_esm.hj.create({name:"focus",addOptions:()=>({className:"has-focus",mode:"all"}),addProseMirrorPlugins(){return[new dist.Sy({key:new dist.H$("focus"),props:{decorations:({doc,selection})=>{const{isEditable,isFocused}=this.editor,{anchor}=selection,decorations=[];if(!isEditable||!isFocused)return prosemirror_view_dist.EH.create(doc,[]);let maxLevels=0;"deepest"===this.options.mode&&doc.descendants(((node,pos)=>{if(node.isText)return;if(!(anchor>=pos&&anchor<=pos+node.nodeSize-1))return!1;maxLevels+=1}));let currentLevel=0;return doc.descendants(((node,pos)=>{if(node.isText)return!1;if(!(anchor>=pos&&anchor<=pos+node.nodeSize-1))return!1;currentLevel+=1;if("deepest"===this.options.mode&&maxLevels-currentLevel>0||"shallowest"===this.options.mode&&currentLevel>1)return"deepest"===this.options.mode;decorations.push(prosemirror_view_dist.p.node(pos,pos+node.nodeSize,{class:this.options.className}))})),prosemirror_view_dist.EH.create(doc,decorations)}}})]}});var tiptap_extension_paragraph_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-paragraph@2.0.0-beta.26_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-paragraph/dist/tiptap-extension-paragraph.esm.js"),tiptap_extension_text_esm=__webpack_require__("./node_modules/.pnpm/@tiptap+extension-text@2.0.0-beta.17_ngwxlaqnk6fwzlupw2ne24im6m/node_modules/@tiptap/extension-text/dist/tiptap-extension-text.esm.js"),hard_break=__webpack_require__("./src/extensions/hard-break/index.ts");function nodeEqualsType({types,node}){return!node||(Array.isArray(types)&&types.includes(node.type)||node.type===types)}const TrailingNode=tiptap_core_esm.hj.create({name:"trailingNode",addOptions:()=>({node:"paragraph",notAfter:["paragraph"]}),addProseMirrorPlugins(){const plugin=new dist.H$(this.name),disabledNodes=Object.entries(this.editor.schema.nodes).map((([,value])=>value)).filter((node=>this.options.notAfter.includes(node.name)));return[new dist.Sy({key:plugin,appendTransaction:(_,__,state)=>{const{doc,tr,schema}=state,shouldInsertNodeAtEnd=plugin.getState(state),endPosition=doc.content.size,type=schema.nodes[this.options.node];if(shouldInsertNodeAtEnd)return tr.insert(endPosition,type.create())},state:{init:(_,state)=>!nodeEqualsType({node:state.tr.doc.lastChild,types:disabledNodes}),apply:(tr,value)=>{if(!tr.docChanged)return value;const lastNode=tr.doc.lastChild?.content?.content?.[0];return!nodeEqualsType({node:lastNode,types:disabledNodes})}}})]}}),resolveEditorKit=props=>{const{schema,extensions}=props;return[tiptap_core_esm.NB.create({name:"doc",topNode:!0,content:schema}),tiptap_extension_paragraph_esm.n,tiptap_extension_text_esm.x,hard_break.U,Focus,TrailingNode,...extensions.flat()]},base={text:"rgba(0, 0, 0, .85)",background:"#fff",primary:"#0064fa",greyLight:"#F4F7FA",grey:"#E8EBED",greyMid:"#C5CCD3",greyDark:"#DAE1E9",fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen, Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",fontFamilyMono:"'SFMono-Regular',Consolas,'Liberation Mono', Menlo, Courier,monospace",borderColor:"#dee0e3",borderRadius:"2px",boxShadow:"rgb(0 0 0/10%) 0 0 10px",horizontalRule:"#dee0e3",bubbleMenuBoxshadow:"rgb(0 0 0/10%) 0 0 10px",codeBlockBorderColor:"#dee0e3",blockquoteBorderColor:"#bbbfc5",blockquoteTextColor:"#1f2329b3",tableBorderColor:"#c1c7d0",tableHeaderBgColor:"#f4f5f7",tableSelectedBorderColor:"#0065ff",tableSelectedCellBgColor:"#e8f2ff",tableSelectedControlBgColor:"#2584ff",tableResizeHandleBgColor:"#adf",slashMenuColor:"rgba(0, 0, 0, 0.85)",slashMenuTitleColor:"rgba(0, 0, 0, 0.45)",slashMenuBoxshadow:"rgb(0 0 0/10%) 0 0 10px",slashMenuHoverBgColor:"rgb(46 50 56 / 5%)"},light={...base},theme=light,render_EditorRender=(0,react.forwardRef)(((props,ref)=>{const{schema,content,extensions,userProvider,fileProvider,children}=props,editorProvider={userProvider,fileProvider},editor=(0,tiptap_react_esm.jE)({content,extensions:resolveEditorKit({schema,extensions}),editorProps:{attributes:{class:"magic-editor",spellcheck:"false",suppressContentEditableWarning:"true"},editorProvider,theme},onCreate(props){props.editor.view.focus()},onUpdate(props){}},[]);return(0,react.useImperativeHandle)(ref,(()=>editor)),react.createElement(styled_components_browser_esm.f6,{theme},react.createElement("div",null,children),react.createElement(StyledEditor,null,react.createElement(tiptap_react_esm.kg,{editor})))}));render_EditorRender.displayName="EditorRender";try{render_EditorRender.displayName="EditorRender",render_EditorRender.__docgenInfo={description:"",displayName:"EditorRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/editor/render.tsx#EditorRender"]={docgenInfo:render_EditorRender.__docgenInfo,name:"EditorRender",path:"src/editor/render.tsx#EditorRender"})}catch(__react_docgen_typescript_loader_error){}var cursor_plugin=__webpack_require__("./node_modules/.pnpm/y-prosemirror@1.2.0_owck6tcppkn7nhpyektz337fiy/node_modules/y-prosemirror/src/plugins/cursor-plugin.js");const awarenessStatesToArray=states=>Array.from(states.entries()).map((([key,value])=>({clientId:key,...value.user}))),defaultOnUpdate=()=>null,CollaborationCursor=tiptap_core_esm.hj.create({name:"collaborationCursor",addOptions:()=>({provider:null,user:{name:null,color:null},render:user=>{const cursor=document.createElement("span");cursor.classList.add("collaboration-cursor__caret"),cursor.setAttribute("style",`border-color: ${user.color}`);const label=document.createElement("div");return label.classList.add("collaboration-cursor__label"),label.setAttribute("style",`background-color: ${user.color}`),label.insertBefore(document.createTextNode(user.name),null),cursor.insertBefore(label,null),cursor},onUpdate:defaultOnUpdate}),onCreate(){this.options.onUpdate!==defaultOnUpdate&&console.warn('[tiptap warn]: DEPRECATED: The "onUpdate" option is deprecated. Please use `editor.storage.collaborationCursor.users` instead. Read more: https://tiptap.dev/api/extensions/collaboration-cursor')},addStorage:()=>({users:[]}),addCommands(){return{updateUser:attributes=>()=>(this.options.user=attributes,this.options.provider.awareness.setLocalStateField("user",this.options.user),!0),user:attributes=>({editor})=>(console.warn('[tiptap warn]: DEPRECATED: The "user" command is deprecated. Please use "updateUser" instead. Read more: https://tiptap.dev/api/extensions/collaboration-cursor'),editor.commands.updateUser(attributes))}},addProseMirrorPlugins(){return[(0,cursor_plugin.JL)((()=>(this.options.provider.awareness.setLocalStateField("user",this.options.user),this.storage.users=awarenessStatesToArray(this.options.provider.awareness.states),this.options.provider.awareness.on("update",(()=>{this.storage.users=awarenessStatesToArray(this.options.provider.awareness.states)})),this.options.provider.awareness))(),{cursorBuilder:this.options.render})]}});function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const collaboration_colors=["#47A1FF","#59CB74","#FFB952","#FC6980","#6367EC","#DA65CC","#FBD54A","#ADDF84","#6CD3FF","#659AEC","#9F8CF1","#ED8CCE","#A2E5FF","#4DCCCB","#F79452","#84E0BE","#5982F6","#E37474","#3FDDC7","#9861E5"],total=collaboration_colors.length,collaboration_CollaborationEditor=(0,react.forwardRef)(((props,ref)=>{const{id,url,token,extensions,userProvider,...restProps}=props,hocuspocusProvider=(0,react.useMemo)((()=>new hocuspocus_provider_esm.Ui({url,name:id,token,maxAttempts:1})),[id,url,token]),currentUser=(0,react.useMemo)((()=>userProvider.getCurrentUser()??{}),[userProvider]);return hocuspocusProvider?react.createElement(render_EditorRender,_extends({ref,extensions:[...extensions,Collaboration.configure({document:hocuspocusProvider.document}),CollaborationCursor.configure({provider:hocuspocusProvider,user:{...currentUser,color:collaboration_colors[~~(Math.random()*total)]}})],userProvider},restProps)):react.createElement("div",null,"loading")}));collaboration_CollaborationEditor.displayName="CollaborationEditor";try{collaboration_CollaborationEditor.displayName="CollaborationEditor",collaboration_CollaborationEditor.__docgenInfo={description:"",displayName:"CollaborationEditor",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/editor/collaboration.tsx#CollaborationEditor"]={docgenInfo:collaboration_CollaborationEditor.__docgenInfo,name:"CollaborationEditor",path:"src/editor/collaboration.tsx#CollaborationEditor"})}catch(__react_docgen_typescript_loader_error){}try{CollaborationEditor.displayName="CollaborationEditor",CollaborationEditor.__docgenInfo={description:"",displayName:"CollaborationEditor",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/editor/index.tsx#CollaborationEditor"]={docgenInfo:CollaborationEditor.__docgenInfo,name:"CollaborationEditor",path:"src/editor/index.tsx#CollaborationEditor"})}catch(__react_docgen_typescript_loader_error){}try{EditorRender.displayName="EditorRender",EditorRender.__docgenInfo={description:"",displayName:"EditorRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/editor/index.tsx#EditorRender"]={docgenInfo:EditorRender.__docgenInfo,name:"EditorRender",path:"src/editor/index.tsx#EditorRender"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/utilities/index.ts"),__webpack_require__("./src/icons/index.tsx"),__webpack_require__("./src/hooks/index.tsx");try{CollaborationEditor.displayName="CollaborationEditor",CollaborationEditor.__docgenInfo={description:"",displayName:"CollaborationEditor",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#CollaborationEditor"]={docgenInfo:CollaborationEditor.__docgenInfo,name:"CollaborationEditor",path:"src/index.tsx#CollaborationEditor"})}catch(__react_docgen_typescript_loader_error){}try{EditorRender.displayName="EditorRender",EditorRender.__docgenInfo={description:"",displayName:"EditorRender",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#EditorRender"]={docgenInfo:EditorRender.__docgenInfo,name:"EditorRender",path:"src/index.tsx#EditorRender"})}catch(__react_docgen_typescript_loader_error){}try{copy.displayName="copy",copy.__docgenInfo={description:"",displayName:"copy",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#copy"]={docgenInfo:copy.__docgenInfo,name:"copy",path:"src/index.tsx#copy"})}catch(__react_docgen_typescript_loader_error){}try{atTheEndOfDoc.displayName="atTheEndOfDoc",atTheEndOfDoc.__docgenInfo={description:"",displayName:"atTheEndOfDoc",props:{doc:{defaultValue:null,description:"The current document.",name:"doc",required:!0,type:{name:"Node"}},selection:{defaultValue:null,description:"The selection.",name:"selection",required:!0,type:{name:"Selection"}},storedMarks:{defaultValue:null,description:"A set of marks to apply to the next input. Will be null when\nno explicit marks have been set.",name:"storedMarks",required:!0,type:{name:"readonly Mark[]"}},schema:{defaultValue:null,description:"The schema of the state's document.",name:"schema",required:!0,type:{name:"Schema<any, any>"}},plugins:{defaultValue:null,description:"The plugins that are active in this state.",name:"plugins",required:!0,type:{name:"readonly Plugin<any>[]"}},apply:{defaultValue:null,description:"Apply the given transaction to produce a new state.",name:"apply",required:!0,type:{name:"(tr: Transaction) => EditorState"}},filterTransaction:{defaultValue:null,description:"@ignore",name:"filterTransaction",required:!0,type:{name:"(tr: Transaction, ignore?: number) => boolean"}},applyTransaction:{defaultValue:null,description:"Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that\nreturns the precise transactions that were applied (which might\nbe influenced by the [transaction\nhooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of\nplugins) along with the new state.",name:"applyTransaction",required:!0,type:{name:"(rootTr: Transaction) => { state: EditorState; transactions: readonly Transaction[]; }"}},tr:{defaultValue:null,description:"Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.",name:"tr",required:!0,type:{name:"Transaction"}},reconfigure:{defaultValue:null,description:"Create a new state based on this one, but with an adjusted set\nof active plugins. State fields that exist in both sets of\nplugins are kept unchanged. Those that no longer exist are\ndropped, and those that are new are initialized using their\n[`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new\nconfiguration object..",name:"reconfigure",required:!0,type:{name:"(config: { plugins?: readonly Plugin<any>[]; }) => EditorState"}},toJSON:{defaultValue:null,description:"Serialize this state to JSON. If you want to serialize the state\nof plugins, pass an object mapping property names to use in the\nresulting JSON object to plugin objects. The argument may also be\na string or number, in which case it is ignored, to support the\nway `JSON.stringify` calls `toString` methods.",name:"toJSON",required:!0,type:{name:"(pluginFields?: { [propName: string]: Plugin<any>; }) => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#atTheEndOfDoc"]={docgenInfo:atTheEndOfDoc.__docgenInfo,name:"atTheEndOfDoc",path:"src/index.tsx#atTheEndOfDoc"})}catch(__react_docgen_typescript_loader_error){}try{atTheBeginningOfDoc.displayName="atTheBeginningOfDoc",atTheBeginningOfDoc.__docgenInfo={description:"",displayName:"atTheBeginningOfDoc",props:{doc:{defaultValue:null,description:"The current document.",name:"doc",required:!0,type:{name:"Node"}},selection:{defaultValue:null,description:"The selection.",name:"selection",required:!0,type:{name:"Selection"}},storedMarks:{defaultValue:null,description:"A set of marks to apply to the next input. Will be null when\nno explicit marks have been set.",name:"storedMarks",required:!0,type:{name:"readonly Mark[]"}},schema:{defaultValue:null,description:"The schema of the state's document.",name:"schema",required:!0,type:{name:"Schema<any, any>"}},plugins:{defaultValue:null,description:"The plugins that are active in this state.",name:"plugins",required:!0,type:{name:"readonly Plugin<any>[]"}},apply:{defaultValue:null,description:"Apply the given transaction to produce a new state.",name:"apply",required:!0,type:{name:"(tr: Transaction) => EditorState"}},filterTransaction:{defaultValue:null,description:"@ignore",name:"filterTransaction",required:!0,type:{name:"(tr: Transaction, ignore?: number) => boolean"}},applyTransaction:{defaultValue:null,description:"Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that\nreturns the precise transactions that were applied (which might\nbe influenced by the [transaction\nhooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of\nplugins) along with the new state.",name:"applyTransaction",required:!0,type:{name:"(rootTr: Transaction) => { state: EditorState; transactions: readonly Transaction[]; }"}},tr:{defaultValue:null,description:"Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.",name:"tr",required:!0,type:{name:"Transaction"}},reconfigure:{defaultValue:null,description:"Create a new state based on this one, but with an adjusted set\nof active plugins. State fields that exist in both sets of\nplugins are kept unchanged. Those that no longer exist are\ndropped, and those that are new are initialized using their\n[`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new\nconfiguration object..",name:"reconfigure",required:!0,type:{name:"(config: { plugins?: readonly Plugin<any>[]; }) => EditorState"}},toJSON:{defaultValue:null,description:"Serialize this state to JSON. If you want to serialize the state\nof plugins, pass an object mapping property names to use in the\nresulting JSON object to plugin objects. The argument may also be\na string or number, in which case it is ignored, to support the\nway `JSON.stringify` calls `toString` methods.",name:"toJSON",required:!0,type:{name:"(pluginFields?: { [propName: string]: Plugin<any>; }) => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#atTheBeginningOfDoc"]={docgenInfo:atTheBeginningOfDoc.__docgenInfo,name:"atTheBeginningOfDoc",path:"src/index.tsx#atTheBeginningOfDoc"})}catch(__react_docgen_typescript_loader_error){}try{atTheEndOfBlock.displayName="atTheEndOfBlock",atTheEndOfBlock.__docgenInfo={description:"",displayName:"atTheEndOfBlock",props:{doc:{defaultValue:null,description:"The current document.",name:"doc",required:!0,type:{name:"Node"}},selection:{defaultValue:null,description:"The selection.",name:"selection",required:!0,type:{name:"Selection"}},storedMarks:{defaultValue:null,description:"A set of marks to apply to the next input. Will be null when\nno explicit marks have been set.",name:"storedMarks",required:!0,type:{name:"readonly Mark[]"}},schema:{defaultValue:null,description:"The schema of the state's document.",name:"schema",required:!0,type:{name:"Schema<any, any>"}},plugins:{defaultValue:null,description:"The plugins that are active in this state.",name:"plugins",required:!0,type:{name:"readonly Plugin<any>[]"}},apply:{defaultValue:null,description:"Apply the given transaction to produce a new state.",name:"apply",required:!0,type:{name:"(tr: Transaction) => EditorState"}},filterTransaction:{defaultValue:null,description:"@ignore",name:"filterTransaction",required:!0,type:{name:"(tr: Transaction, ignore?: number) => boolean"}},applyTransaction:{defaultValue:null,description:"Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that\nreturns the precise transactions that were applied (which might\nbe influenced by the [transaction\nhooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of\nplugins) along with the new state.",name:"applyTransaction",required:!0,type:{name:"(rootTr: Transaction) => { state: EditorState; transactions: readonly Transaction[]; }"}},tr:{defaultValue:null,description:"Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.",name:"tr",required:!0,type:{name:"Transaction"}},reconfigure:{defaultValue:null,description:"Create a new state based on this one, but with an adjusted set\nof active plugins. State fields that exist in both sets of\nplugins are kept unchanged. Those that no longer exist are\ndropped, and those that are new are initialized using their\n[`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new\nconfiguration object..",name:"reconfigure",required:!0,type:{name:"(config: { plugins?: readonly Plugin<any>[]; }) => EditorState"}},toJSON:{defaultValue:null,description:"Serialize this state to JSON. If you want to serialize the state\nof plugins, pass an object mapping property names to use in the\nresulting JSON object to plugin objects. The argument may also be\na string or number, in which case it is ignored, to support the\nway `JSON.stringify` calls `toString` methods.",name:"toJSON",required:!0,type:{name:"(pluginFields?: { [propName: string]: Plugin<any>; }) => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#atTheEndOfBlock"]={docgenInfo:atTheEndOfBlock.__docgenInfo,name:"atTheEndOfBlock",path:"src/index.tsx#atTheEndOfBlock"})}catch(__react_docgen_typescript_loader_error){}try{endPositionOfParent.displayName="endPositionOfParent",endPositionOfParent.__docgenInfo={description:"",displayName:"endPositionOfParent",props:{pos:{defaultValue:null,description:"The position that was resolved.",name:"pos",required:!0,type:{name:"number"}},parentOffset:{defaultValue:null,description:"The offset this position has into its parent node.",name:"parentOffset",required:!0,type:{name:"number"}},depth:{defaultValue:null,description:"The number of levels the parent node is from the root. If this\nposition points directly into the root node, it is 0. If it\npoints into a top-level paragraph, 1, and so on.",name:"depth",required:!0,type:{name:"number"}},parent:{defaultValue:null,description:"The parent node that the position points into. Note that even if\na position points into a text node, that node is not considered\nthe parent—text nodes are ‘flat’ in this model, and have no content.",name:"parent",required:!0,type:{name:"Node"}},doc:{defaultValue:null,description:"The root node in which the position was resolved.",name:"doc",required:!0,type:{name:"Node"}},node:{defaultValue:null,description:"The ancestor node at the given level. `p.node(p.depth)` is the\nsame as `p.parent`.",name:"node",required:!0,type:{name:"(depth?: number) => Node"}},index:{defaultValue:null,description:"The index into the ancestor at the given level. If this points\nat the 3rd node in the 2nd paragraph on the top level, for\nexample, `p.index(0)` is 1 and `p.index(1)` is 2.",name:"index",required:!0,type:{name:"(depth?: number) => number"}},indexAfter:{defaultValue:null,description:"The index pointing after this position into the ancestor at the\ngiven level.",name:"indexAfter",required:!0,type:{name:"(depth?: number) => number"}},start:{defaultValue:null,description:"The (absolute) position at the start of the node at the given\nlevel.",name:"start",required:!0,type:{name:"(depth?: number) => number"}},end:{defaultValue:null,description:"The (absolute) position at the end of the node at the given\nlevel.",name:"end",required:!0,type:{name:"(depth?: number) => number"}},before:{defaultValue:null,description:"The (absolute) position directly before the wrapping node at the\ngiven level, or, when `depth` is `this.depth + 1`, the original\nposition.",name:"before",required:!0,type:{name:"(depth?: number) => number"}},after:{defaultValue:null,description:"The (absolute) position directly after the wrapping node at the\ngiven level, or the original position when `depth` is `this.depth + 1`.",name:"after",required:!0,type:{name:"(depth?: number) => number"}},textOffset:{defaultValue:null,description:"When this position points into a text node, this returns the\ndistance between the position and the start of the text node.\nWill be zero for positions that point between nodes.",name:"textOffset",required:!0,type:{name:"number"}},nodeAfter:{defaultValue:null,description:"Get the node directly after the position, if any. If the position\npoints into a text node, only the part of that node after the\nposition is returned.",name:"nodeAfter",required:!0,type:{name:"Node"}},nodeBefore:{defaultValue:null,description:"Get the node directly before the position, if any. If the\nposition points into a text node, only the part of that node\nbefore the position is returned.",name:"nodeBefore",required:!0,type:{name:"Node"}},posAtIndex:{defaultValue:null,description:"Get the position at the given index in the parent node at the\ngiven depth (which defaults to `this.depth`).",name:"posAtIndex",required:!0,type:{name:"(index: number, depth?: number) => number"}},marks:{defaultValue:null,description:"Get the marks at this position, factoring in the surrounding\nmarks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the\nposition is at the start of a non-empty node, the marks of the\nnode after it (if any) are returned.",name:"marks",required:!0,type:{name:"() => readonly Mark[]"}},marksAcross:{defaultValue:null,description:"Get the marks after the current position, if any, except those\nthat are non-inclusive and not present at position `$end`. This\nis mostly useful for getting the set of marks to preserve after a\ndeletion. Will return `null` if this position is at the end of\nits parent node or its parent node isn't a textblock (in which\ncase no marks should be preserved).",name:"marksAcross",required:!0,type:{name:"($end: ResolvedPos) => readonly Mark[]"}},sharedDepth:{defaultValue:null,description:"The depth up to which this position and the given (non-resolved)\nposition share the same parent nodes.",name:"sharedDepth",required:!0,type:{name:"(pos: number) => number"}},blockRange:{defaultValue:null,description:"Returns a range based on the place where this position and the\ngiven position diverge around block content. If both point into\nthe same textblock, for example, a range around that textblock\nwill be returned. If they point into different blocks, the range\naround those blocks in their shared ancestor is returned. You can\npass in an optional predicate that will be called with a parent\nnode to see if a range into that parent is acceptable.",name:"blockRange",required:!0,type:{name:"(other?: ResolvedPos, pred?: (node: Node) => boolean) => NodeRange"}},sameParent:{defaultValue:null,description:"Query whether the given position shares the same parent node.",name:"sameParent",required:!0,type:{name:"(other: ResolvedPos) => boolean"}},max:{defaultValue:null,description:"Return the greater of this and the given position.",name:"max",required:!0,type:{name:"(other: ResolvedPos) => ResolvedPos"}},min:{defaultValue:null,description:"Return the smaller of this and the given position.",name:"min",required:!0,type:{name:"(other: ResolvedPos) => ResolvedPos"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#endPositionOfParent"]={docgenInfo:endPositionOfParent.__docgenInfo,name:"endPositionOfParent",path:"src/index.tsx#endPositionOfParent"})}catch(__react_docgen_typescript_loader_error){}try{canMoveUp.displayName="canMoveUp",canMoveUp.__docgenInfo={description:"",displayName:"canMoveUp",props:{doc:{defaultValue:null,description:"The current document.",name:"doc",required:!0,type:{name:"Node"}},selection:{defaultValue:null,description:"The selection.",name:"selection",required:!0,type:{name:"Selection"}},storedMarks:{defaultValue:null,description:"A set of marks to apply to the next input. Will be null when\nno explicit marks have been set.",name:"storedMarks",required:!0,type:{name:"readonly Mark[]"}},schema:{defaultValue:null,description:"The schema of the state's document.",name:"schema",required:!0,type:{name:"Schema<any, any>"}},plugins:{defaultValue:null,description:"The plugins that are active in this state.",name:"plugins",required:!0,type:{name:"readonly Plugin<any>[]"}},apply:{defaultValue:null,description:"Apply the given transaction to produce a new state.",name:"apply",required:!0,type:{name:"(tr: Transaction) => EditorState"}},filterTransaction:{defaultValue:null,description:"@ignore",name:"filterTransaction",required:!0,type:{name:"(tr: Transaction, ignore?: number) => boolean"}},applyTransaction:{defaultValue:null,description:"Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that\nreturns the precise transactions that were applied (which might\nbe influenced by the [transaction\nhooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of\nplugins) along with the new state.",name:"applyTransaction",required:!0,type:{name:"(rootTr: Transaction) => { state: EditorState; transactions: readonly Transaction[]; }"}},tr:{defaultValue:null,description:"Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.",name:"tr",required:!0,type:{name:"Transaction"}},reconfigure:{defaultValue:null,description:"Create a new state based on this one, but with an adjusted set\nof active plugins. State fields that exist in both sets of\nplugins are kept unchanged. Those that no longer exist are\ndropped, and those that are new are initialized using their\n[`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new\nconfiguration object..",name:"reconfigure",required:!0,type:{name:"(config: { plugins?: readonly Plugin<any>[]; }) => EditorState"}},toJSON:{defaultValue:null,description:"Serialize this state to JSON. If you want to serialize the state\nof plugins, pass an object mapping property names to use in the\nresulting JSON object to plugin objects. The argument may also be\na string or number, in which case it is ignored, to support the\nway `JSON.stringify` calls `toString` methods.",name:"toJSON",required:!0,type:{name:"(pluginFields?: { [propName: string]: Plugin<any>; }) => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#canMoveUp"]={docgenInfo:canMoveUp.__docgenInfo,name:"canMoveUp",path:"src/index.tsx#canMoveUp"})}catch(__react_docgen_typescript_loader_error){}try{canMoveDown.displayName="canMoveDown",canMoveDown.__docgenInfo={description:"",displayName:"canMoveDown",props:{doc:{defaultValue:null,description:"The current document.",name:"doc",required:!0,type:{name:"Node"}},selection:{defaultValue:null,description:"The selection.",name:"selection",required:!0,type:{name:"Selection"}},storedMarks:{defaultValue:null,description:"A set of marks to apply to the next input. Will be null when\nno explicit marks have been set.",name:"storedMarks",required:!0,type:{name:"readonly Mark[]"}},schema:{defaultValue:null,description:"The schema of the state's document.",name:"schema",required:!0,type:{name:"Schema<any, any>"}},plugins:{defaultValue:null,description:"The plugins that are active in this state.",name:"plugins",required:!0,type:{name:"readonly Plugin<any>[]"}},apply:{defaultValue:null,description:"Apply the given transaction to produce a new state.",name:"apply",required:!0,type:{name:"(tr: Transaction) => EditorState"}},filterTransaction:{defaultValue:null,description:"@ignore",name:"filterTransaction",required:!0,type:{name:"(tr: Transaction, ignore?: number) => boolean"}},applyTransaction:{defaultValue:null,description:"Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that\nreturns the precise transactions that were applied (which might\nbe influenced by the [transaction\nhooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of\nplugins) along with the new state.",name:"applyTransaction",required:!0,type:{name:"(rootTr: Transaction) => { state: EditorState; transactions: readonly Transaction[]; }"}},tr:{defaultValue:null,description:"Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.",name:"tr",required:!0,type:{name:"Transaction"}},reconfigure:{defaultValue:null,description:"Create a new state based on this one, but with an adjusted set\nof active plugins. State fields that exist in both sets of\nplugins are kept unchanged. Those that no longer exist are\ndropped, and those that are new are initialized using their\n[`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new\nconfiguration object..",name:"reconfigure",required:!0,type:{name:"(config: { plugins?: readonly Plugin<any>[]; }) => EditorState"}},toJSON:{defaultValue:null,description:"Serialize this state to JSON. If you want to serialize the state\nof plugins, pass an object mapping property names to use in the\nresulting JSON object to plugin objects. The argument may also be\na string or number, in which case it is ignored, to support the\nway `JSON.stringify` calls `toString` methods.",name:"toJSON",required:!0,type:{name:"(pluginFields?: { [propName: string]: Plugin<any>; }) => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#canMoveDown"]={docgenInfo:canMoveDown.__docgenInfo,name:"canMoveDown",path:"src/index.tsx#canMoveDown"})}catch(__react_docgen_typescript_loader_error){}try{createParagraphNear.displayName="createParagraphNear",createParagraphNear.__docgenInfo={description:"",displayName:"createParagraphNear",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#createParagraphNear"]={docgenInfo:createParagraphNear.__docgenInfo,name:"createParagraphNear",path:"src/index.tsx#createParagraphNear"})}catch(__react_docgen_typescript_loader_error){}try{addParagraphAtEnd.displayName="addParagraphAtEnd",addParagraphAtEnd.__docgenInfo={description:"",displayName:"addParagraphAtEnd",props:{time:{defaultValue:null,description:"The timestamp associated with this transaction, in the same\nformat as `Date.now()`.",name:"time",required:!0,type:{name:"number"}},curSelection:{defaultValue:null,description:"",name:"curSelection",required:!0,type:{name:"any"}},curSelectionFor:{defaultValue:null,description:"",name:"curSelectionFor",required:!0,type:{name:"any"}},updated:{defaultValue:null,description:"",name:"updated",required:!0,type:{name:"any"}},meta:{defaultValue:null,description:"",name:"meta",required:!0,type:{name:"any"}},storedMarks:{defaultValue:null,description:"The stored marks set by this transaction, if any.",name:"storedMarks",required:!0,type:{name:"readonly Mark[]"}},selection:{defaultValue:null,description:"The transaction's current selection. This defaults to the editor\nselection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the\ntransaction, but can be overwritten with\n[`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).",name:"selection",required:!0,type:{name:"Selection"}},setSelection:{defaultValue:null,description:"Update the transaction's current selection. Will determine the\nselection that the editor gets when the transaction is applied.",name:"setSelection",required:!0,type:{name:"(selection: Selection) => Transaction"}},selectionSet:{defaultValue:null,description:"Whether the selection was explicitly updated by this transaction.",name:"selectionSet",required:!0,type:{name:"boolean"}},setStoredMarks:{defaultValue:null,description:"Set the current stored marks.",name:"setStoredMarks",required:!0,type:{name:"(marks: readonly Mark[]) => Transaction"}},ensureMarks:{defaultValue:null,description:"Make sure the current stored marks or, if that is null, the marks\nat the selection, match the given set of marks. Does nothing if\nthis is already the case.",name:"ensureMarks",required:!0,type:{name:"(marks: readonly Mark[]) => Transaction"}},addStoredMark:{defaultValue:null,description:"Add a mark to the set of stored marks.",name:"addStoredMark",required:!0,type:{name:"(mark: Mark) => Transaction"}},removeStoredMark:{defaultValue:null,description:"Remove a mark or mark type from the set of stored marks.",name:"removeStoredMark",required:!0,type:{name:"(mark: Mark | MarkType) => Transaction"}},storedMarksSet:{defaultValue:null,description:"Whether the stored marks were explicitly set for this transaction.",name:"storedMarksSet",required:!0,type:{name:"boolean"}},setTime:{defaultValue:null,description:"Update the timestamp for the transaction.",name:"setTime",required:!0,type:{name:"(time: number) => Transaction"}},replaceSelection:{defaultValue:null,description:"Replace the current selection with the given slice.",name:"replaceSelection",required:!0,type:{name:"(slice: Slice) => Transaction"}},replaceSelectionWith:{defaultValue:null,description:"Replace the selection with the given node. When `inheritMarks` is\ntrue and the content is inline, it inherits the marks from the\nplace where it is inserted.",name:"replaceSelectionWith",required:!0,type:{name:"(node: Node, inheritMarks?: boolean) => Transaction"}},deleteSelection:{defaultValue:null,description:"Delete the selection.",name:"deleteSelection",required:!0,type:{name:"() => Transaction"}},insertText:{defaultValue:null,description:"Replace the given range, or the selection if no range is given,\nwith a text node containing the given string.",name:"insertText",required:!0,type:{name:"(text: string, from?: number, to?: number) => Transaction"}},setMeta:{defaultValue:null,description:"Store a metadata property in this transaction, keyed either by\nname or by plugin.",name:"setMeta",required:!0,type:{name:"(key: string | Plugin<any> | PluginKey<any>, value: any) => Transaction"}},getMeta:{defaultValue:null,description:"Retrieve a metadata property for a given name or plugin.",name:"getMeta",required:!0,type:{name:"(key: string | Plugin<any> | PluginKey<any>) => any"}},isGeneric:{defaultValue:null,description:"Returns true if this transaction doesn't contain any metadata,\nand can thus safely be extended.",name:"isGeneric",required:!0,type:{name:"boolean"}},scrollIntoView:{defaultValue:null,description:"Indicate that the editor should scroll the selection into view\nwhen updated to the state produced by this transaction.",name:"scrollIntoView",required:!0,type:{name:"() => Transaction"}},scrolledIntoView:{defaultValue:null,description:"True when this transaction has had `scrollIntoView` called on it.",name:"scrolledIntoView",required:!0,type:{name:"boolean"}},doc:{defaultValue:null,description:"The current document (the result of applying the steps in the\ntransform).",name:"doc",required:!0,type:{name:"Node"}},steps:{defaultValue:null,description:"The steps in this transform.",name:"steps",required:!0,type:{name:"Step[]"}},docs:{defaultValue:null,description:"The documents before each of the steps.",name:"docs",required:!0,type:{name:"Node[]"}},mapping:{defaultValue:null,description:"A mapping with the maps for each of the steps in this transform.",name:"mapping",required:!0,type:{name:"Mapping"}},before:{defaultValue:null,description:"The starting document.",name:"before",required:!0,type:{name:"Node"}},step:{defaultValue:null,description:"Apply a new step in this transform, saving the result. Throws an\nerror when the step fails.",name:"step",required:!0,type:{name:"(step: Step) => Transaction"}},maybeStep:{defaultValue:null,description:"Try to apply a step in this transformation, ignoring it if it\nfails. Returns the step result.",name:"maybeStep",required:!0,type:{name:"(step: Step) => StepResult"}},docChanged:{defaultValue:null,description:"True when the document has been changed (when there are any\nsteps).",name:"docChanged",required:!0,type:{name:"boolean"}},replace:{defaultValue:null,description:"Replace the part of the document between `from` and `to` with the\ngiven `slice`.",name:"replace",required:!0,type:{name:"(from: number, to?: number, slice?: Slice) => Transaction"}},replaceWith:{defaultValue:null,description:"Replace the given range with the given content, which may be a\nfragment, node, or array of nodes.",name:"replaceWith",required:!0,type:{name:"(from: number, to: number, content: Node | Fragment | readonly Node[]) => Transaction"}},delete:{defaultValue:null,description:"Delete the content between the given positions.",name:"delete",required:!0,type:{name:"(from: number, to: number) => Transaction"}},insert:{defaultValue:null,description:"Insert the given content at the given position.",name:"insert",required:!0,type:{name:"(pos: number, content: Node | Fragment | readonly Node[]) => Transaction"}},replaceRange:{defaultValue:null,description:"Replace a range of the document with a given slice, using\n`from`, `to`, and the slice's\n[`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather\nthan fixed start and end points. This method may grow the\nreplaced area or close open nodes in the slice in order to get a\nfit that is more in line with WYSIWYG expectations, by dropping\nfully covered parent nodes of the replaced region when they are\nmarked [non-defining as\ncontext](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an\nopen parent node from the slice that _is_ marked as [defining\nits content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).\n\nThis is the method, for example, to handle paste. The similar\n[`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more\nprimitive tool which will _not_ move the start and end of its given\nrange, and is useful in situations where you need more precise\ncontrol over what happens.",name:"replaceRange",required:!0,type:{name:"(from: number, to: number, slice: Slice) => Transaction"}},replaceRangeWith:{defaultValue:null,description:"Replace the given range with a node, but use `from` and `to` as\nhints, rather than precise positions. When from and to are the same\nand are at the start or end of a parent node in which the given\nnode doesn't fit, this method may _move_ them out towards a parent\nthat does allow the given node to be placed. When the given range\ncompletely covers a parent node, this method may completely replace\nthat parent node.",name:"replaceRangeWith",required:!0,type:{name:"(from: number, to: number, node: Node) => Transaction"}},deleteRange:{defaultValue:null,description:"Delete the given range, expanding it to cover fully covered\nparent nodes until a valid replace is found.",name:"deleteRange",required:!0,type:{name:"(from: number, to: number) => Transaction"}},lift:{defaultValue:null,description:"Split the content in the given range off from its parent, if there\nis sibling content before or after it, and move it up the tree to\nthe depth specified by `target`. You'll probably want to use\n[`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make\nsure the lift is valid.",name:"lift",required:!0,type:{name:"(range: NodeRange, target: number) => Transaction"}},join:{defaultValue:null,description:"Join the blocks around the given position. If depth is 2, their\nlast and first siblings are also joined, and so on.",name:"join",required:!0,type:{name:"(pos: number, depth?: number) => Transaction"}},wrap:{defaultValue:null,description:"Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.\nThe wrappers are assumed to be valid in this position, and should\nprobably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).",name:"wrap",required:!0,type:{name:"(range: NodeRange, wrappers: readonly { type: NodeType; attrs?: Attrs; }[]) => Transaction"}},setBlockType:{defaultValue:null,description:"Set the type of all textblocks (partly) between `from` and `to` to\nthe given node type with the given attributes.",name:"setBlockType",required:!0,type:{name:"(from: number, to: number, type: NodeType, attrs?: Attrs) => Transaction"}},setNodeMarkup:{defaultValue:null,description:"Change the type, attributes, and/or marks of the node at `pos`.\nWhen `type` isn't given, the existing node type is preserved,",name:"setNodeMarkup",required:!0,type:{name:"(pos: number, type?: NodeType, attrs?: Attrs, marks?: readonly Mark[]) => Transaction"}},split:{defaultValue:null,description:"Split the node at the given position, and optionally, if `depth` is\ngreater than one, any number of nodes above that. By default, the\nparts split off will inherit the node type of the original node.\nThis can be changed by passing an array of types and attributes to\nuse after the split.",name:"split",required:!0,type:{name:"(pos: number, depth?: number, typesAfter?: { type: NodeType; attrs?: Attrs; }[]) => Transaction"}},addMark:{defaultValue:null,description:"Add the given mark to the inline content between `from` and `to`.",name:"addMark",required:!0,type:{name:"(from: number, to: number, mark: Mark) => Transaction"}},removeMark:{defaultValue:null,description:"Remove marks from inline nodes between `from` and `to`. When\n`mark` is a single mark, remove precisely that mark. When it is\na mark type, remove all marks of that type. When it is null,\nremove all marks of any type.",name:"removeMark",required:!0,type:{name:"(from: number, to: number, mark?: Mark | MarkType) => Transaction"}},clearIncompatible:{defaultValue:null,description:"Removes all marks and nodes from the content of the node at\n`pos` that don't match the given new parent node type. Accepts\nan optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as\nthird argument.",name:"clearIncompatible",required:!0,type:{name:"(pos: number, parentType: NodeType, match?: ContentMatch) => Transaction"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#addParagraphAtEnd"]={docgenInfo:addParagraphAtEnd.__docgenInfo,name:"addParagraphAtEnd",path:"src/index.tsx#addParagraphAtEnd"})}catch(__react_docgen_typescript_loader_error){}try{isMarkActive.displayName="isMarkActive",isMarkActive.__docgenInfo={description:"",displayName:"isMarkActive",props:{name:{defaultValue:null,description:"The name of the mark type.",name:"name",required:!0,type:{name:"string"}},schema:{defaultValue:null,description:"The schema that this mark type instance is part of.",name:"schema",required:!0,type:{name:"Schema<any, any>"}},spec:{defaultValue:null,description:"The spec on which the type is based.",name:"spec",required:!0,type:{name:"MarkSpec"}},create:{defaultValue:null,description:"Create a mark of this type. `attrs` may be `null` or an object\ncontaining only some of the mark's attributes. The others, if\nthey have defaults, will be added.",name:"create",required:!0,type:{name:"(attrs?: Attrs) => Mark"}},removeFromSet:{defaultValue:null,description:"When there is a mark of this type in the given set, a new set\nwithout it is returned. Otherwise, the input set is returned.",name:"removeFromSet",required:!0,type:{name:"(set: readonly Mark[]) => readonly Mark[]"}},isInSet:{defaultValue:null,description:"Tests whether there is a mark of this type in the given set.",name:"isInSet",required:!0,type:{name:"(set: readonly Mark[]) => Mark"}},excludes:{defaultValue:null,description:"Queries whether a given mark type is\n[excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.",name:"excludes",required:!0,type:{name:"(other: MarkType) => boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#isMarkActive"]={docgenInfo:isMarkActive.__docgenInfo,name:"isMarkActive",path:"src/index.tsx#isMarkActive"})}catch(__react_docgen_typescript_loader_error){}try{getCurrentNode.displayName="getCurrentNode",getCurrentNode.__docgenInfo={description:"",displayName:"getCurrentNode",props:{doc:{defaultValue:null,description:"The current document.",name:"doc",required:!0,type:{name:"Node"}},selection:{defaultValue:null,description:"The selection.",name:"selection",required:!0,type:{name:"Selection"}},storedMarks:{defaultValue:null,description:"A set of marks to apply to the next input. Will be null when\nno explicit marks have been set.",name:"storedMarks",required:!0,type:{name:"readonly Mark[]"}},schema:{defaultValue:null,description:"The schema of the state's document.",name:"schema",required:!0,type:{name:"Schema<any, any>"}},plugins:{defaultValue:null,description:"The plugins that are active in this state.",name:"plugins",required:!0,type:{name:"readonly Plugin<any>[]"}},apply:{defaultValue:null,description:"Apply the given transaction to produce a new state.",name:"apply",required:!0,type:{name:"(tr: Transaction) => EditorState"}},filterTransaction:{defaultValue:null,description:"@ignore",name:"filterTransaction",required:!0,type:{name:"(tr: Transaction, ignore?: number) => boolean"}},applyTransaction:{defaultValue:null,description:"Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that\nreturns the precise transactions that were applied (which might\nbe influenced by the [transaction\nhooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of\nplugins) along with the new state.",name:"applyTransaction",required:!0,type:{name:"(rootTr: Transaction) => { state: EditorState; transactions: readonly Transaction[]; }"}},tr:{defaultValue:null,description:"Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.",name:"tr",required:!0,type:{name:"Transaction"}},reconfigure:{defaultValue:null,description:"Create a new state based on this one, but with an adjusted set\nof active plugins. State fields that exist in both sets of\nplugins are kept unchanged. Those that no longer exist are\ndropped, and those that are new are initialized using their\n[`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new\nconfiguration object..",name:"reconfigure",required:!0,type:{name:"(config: { plugins?: readonly Plugin<any>[]; }) => EditorState"}},toJSON:{defaultValue:null,description:"Serialize this state to JSON. If you want to serialize the state\nof plugins, pass an object mapping property names to use in the\nresulting JSON object to plugin objects. The argument may also be\na string or number, in which case it is ignored, to support the\nway `JSON.stringify` calls `toString` methods.",name:"toJSON",required:!0,type:{name:"(pluginFields?: { [propName: string]: Plugin<any>; }) => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#getCurrentNode"]={docgenInfo:getCurrentNode.__docgenInfo,name:"getCurrentNode",path:"src/index.tsx#getCurrentNode"})}catch(__react_docgen_typescript_loader_error){}try{isInCodeBlock.displayName="isInCodeBlock",isInCodeBlock.__docgenInfo={description:"",displayName:"isInCodeBlock",props:{doc:{defaultValue:null,description:"The current document.",name:"doc",required:!0,type:{name:"Node"}},selection:{defaultValue:null,description:"The selection.",name:"selection",required:!0,type:{name:"Selection"}},storedMarks:{defaultValue:null,description:"A set of marks to apply to the next input. Will be null when\nno explicit marks have been set.",name:"storedMarks",required:!0,type:{name:"readonly Mark[]"}},schema:{defaultValue:null,description:"The schema of the state's document.",name:"schema",required:!0,type:{name:"Schema<any, any>"}},plugins:{defaultValue:null,description:"The plugins that are active in this state.",name:"plugins",required:!0,type:{name:"readonly Plugin<any>[]"}},apply:{defaultValue:null,description:"Apply the given transaction to produce a new state.",name:"apply",required:!0,type:{name:"(tr: Transaction) => EditorState"}},filterTransaction:{defaultValue:null,description:"@ignore",name:"filterTransaction",required:!0,type:{name:"(tr: Transaction, ignore?: number) => boolean"}},applyTransaction:{defaultValue:null,description:"Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that\nreturns the precise transactions that were applied (which might\nbe influenced by the [transaction\nhooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of\nplugins) along with the new state.",name:"applyTransaction",required:!0,type:{name:"(rootTr: Transaction) => { state: EditorState; transactions: readonly Transaction[]; }"}},tr:{defaultValue:null,description:"Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.",name:"tr",required:!0,type:{name:"Transaction"}},reconfigure:{defaultValue:null,description:"Create a new state based on this one, but with an adjusted set\nof active plugins. State fields that exist in both sets of\nplugins are kept unchanged. Those that no longer exist are\ndropped, and those that are new are initialized using their\n[`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new\nconfiguration object..",name:"reconfigure",required:!0,type:{name:"(config: { plugins?: readonly Plugin<any>[]; }) => EditorState"}},toJSON:{defaultValue:null,description:"Serialize this state to JSON. If you want to serialize the state\nof plugins, pass an object mapping property names to use in the\nresulting JSON object to plugin objects. The argument may also be\na string or number, in which case it is ignored, to support the\nway `JSON.stringify` calls `toString` methods.",name:"toJSON",required:!0,type:{name:"(pluginFields?: { [propName: string]: Plugin<any>; }) => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#isInCodeBlock"]={docgenInfo:isInCodeBlock.__docgenInfo,name:"isInCodeBlock",path:"src/index.tsx#isInCodeBlock"})}catch(__react_docgen_typescript_loader_error){}try{isInTitle.displayName="isInTitle",isInTitle.__docgenInfo={description:"",displayName:"isInTitle",props:{doc:{defaultValue:null,description:"The current document.",name:"doc",required:!0,type:{name:"Node"}},selection:{defaultValue:null,description:"The selection.",name:"selection",required:!0,type:{name:"Selection"}},storedMarks:{defaultValue:null,description:"A set of marks to apply to the next input. Will be null when\nno explicit marks have been set.",name:"storedMarks",required:!0,type:{name:"readonly Mark[]"}},schema:{defaultValue:null,description:"The schema of the state's document.",name:"schema",required:!0,type:{name:"Schema<any, any>"}},plugins:{defaultValue:null,description:"The plugins that are active in this state.",name:"plugins",required:!0,type:{name:"readonly Plugin<any>[]"}},apply:{defaultValue:null,description:"Apply the given transaction to produce a new state.",name:"apply",required:!0,type:{name:"(tr: Transaction) => EditorState"}},filterTransaction:{defaultValue:null,description:"@ignore",name:"filterTransaction",required:!0,type:{name:"(tr: Transaction, ignore?: number) => boolean"}},applyTransaction:{defaultValue:null,description:"Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that\nreturns the precise transactions that were applied (which might\nbe influenced by the [transaction\nhooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of\nplugins) along with the new state.",name:"applyTransaction",required:!0,type:{name:"(rootTr: Transaction) => { state: EditorState; transactions: readonly Transaction[]; }"}},tr:{defaultValue:null,description:"Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.",name:"tr",required:!0,type:{name:"Transaction"}},reconfigure:{defaultValue:null,description:"Create a new state based on this one, but with an adjusted set\nof active plugins. State fields that exist in both sets of\nplugins are kept unchanged. Those that no longer exist are\ndropped, and those that are new are initialized using their\n[`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new\nconfiguration object..",name:"reconfigure",required:!0,type:{name:"(config: { plugins?: readonly Plugin<any>[]; }) => EditorState"}},toJSON:{defaultValue:null,description:"Serialize this state to JSON. If you want to serialize the state\nof plugins, pass an object mapping property names to use in the\nresulting JSON object to plugin objects. The argument may also be\na string or number, in which case it is ignored, to support the\nway `JSON.stringify` calls `toString` methods.",name:"toJSON",required:!0,type:{name:"(pluginFields?: { [propName: string]: Plugin<any>; }) => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#isInTitle"]={docgenInfo:isInTitle.__docgenInfo,name:"isInTitle",path:"src/index.tsx#isInTitle"})}catch(__react_docgen_typescript_loader_error){}try{isInCallout.displayName="isInCallout",isInCallout.__docgenInfo={description:"",displayName:"isInCallout",props:{doc:{defaultValue:null,description:"The current document.",name:"doc",required:!0,type:{name:"Node"}},selection:{defaultValue:null,description:"The selection.",name:"selection",required:!0,type:{name:"Selection"}},storedMarks:{defaultValue:null,description:"A set of marks to apply to the next input. Will be null when\nno explicit marks have been set.",name:"storedMarks",required:!0,type:{name:"readonly Mark[]"}},schema:{defaultValue:null,description:"The schema of the state's document.",name:"schema",required:!0,type:{name:"Schema<any, any>"}},plugins:{defaultValue:null,description:"The plugins that are active in this state.",name:"plugins",required:!0,type:{name:"readonly Plugin<any>[]"}},apply:{defaultValue:null,description:"Apply the given transaction to produce a new state.",name:"apply",required:!0,type:{name:"(tr: Transaction) => EditorState"}},filterTransaction:{defaultValue:null,description:"@ignore",name:"filterTransaction",required:!0,type:{name:"(tr: Transaction, ignore?: number) => boolean"}},applyTransaction:{defaultValue:null,description:"Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that\nreturns the precise transactions that were applied (which might\nbe influenced by the [transaction\nhooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of\nplugins) along with the new state.",name:"applyTransaction",required:!0,type:{name:"(rootTr: Transaction) => { state: EditorState; transactions: readonly Transaction[]; }"}},tr:{defaultValue:null,description:"Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.",name:"tr",required:!0,type:{name:"Transaction"}},reconfigure:{defaultValue:null,description:"Create a new state based on this one, but with an adjusted set\nof active plugins. State fields that exist in both sets of\nplugins are kept unchanged. Those that no longer exist are\ndropped, and those that are new are initialized using their\n[`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new\nconfiguration object..",name:"reconfigure",required:!0,type:{name:"(config: { plugins?: readonly Plugin<any>[]; }) => EditorState"}},toJSON:{defaultValue:null,description:"Serialize this state to JSON. If you want to serialize the state\nof plugins, pass an object mapping property names to use in the\nresulting JSON object to plugin objects. The argument may also be\na string or number, in which case it is ignored, to support the\nway `JSON.stringify` calls `toString` methods.",name:"toJSON",required:!0,type:{name:"(pluginFields?: { [propName: string]: Plugin<any>; }) => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#isInCallout"]={docgenInfo:isInCallout.__docgenInfo,name:"isInCallout",path:"src/index.tsx#isInCallout"})}catch(__react_docgen_typescript_loader_error){}try{isTitleNode.displayName="isTitleNode",isTitleNode.__docgenInfo={description:"",displayName:"isTitleNode",props:{type:{defaultValue:null,description:"The type of node that this is.",name:"type",required:!0,type:{name:"NodeType"}},attrs:{defaultValue:null,description:"An object mapping attribute names to values. The kind of\nattributes allowed and required are\n[determined](https://prosemirror.net/docs/ref/#model.NodeSpec.attrs) by the node type.",name:"attrs",required:!0,type:{name:"Attrs"}},marks:{defaultValue:null,description:"The marks (things like whether it is emphasized or part of a\nlink) applied to this node.",name:"marks",required:!0,type:{name:"readonly Mark[]"}},content:{defaultValue:null,description:"A container holding the node's children.",name:"content",required:!0,type:{name:"Fragment"}},text:{defaultValue:null,description:"For text nodes, this contains the node's text content.",name:"text",required:!0,type:{name:"string"}},nodeSize:{defaultValue:null,description:"The size of this node, as defined by the integer-based [indexing\nscheme](/docs/guide/#doc.indexing). For text nodes, this is the\namount of characters. For other leaf nodes, it is one. For\nnon-leaf nodes, it is the size of the content plus two (the\nstart and end token).",name:"nodeSize",required:!0,type:{name:"number"}},childCount:{defaultValue:null,description:"The number of children that the node has.",name:"childCount",required:!0,type:{name:"number"}},child:{defaultValue:null,description:"Get the child node at the given index. Raises an error when the\nindex is out of range.",name:"child",required:!0,type:{name:"(index: number) => Node"}},maybeChild:{defaultValue:null,description:"Get the child node at the given index, if it exists.",name:"maybeChild",required:!0,type:{name:"(index: number) => Node"}},forEach:{defaultValue:null,description:"Call `f` for every child node, passing the node, its offset\ninto this parent node, and its index.",name:"forEach",required:!0,type:{name:"(f: (node: Node, offset: number, index: number) => void) => void"}},nodesBetween:{defaultValue:null,description:"Invoke a callback for all descendant nodes recursively between\nthe given two positions that are relative to start of this\nnode's content. The callback is invoked with the node, its\nparent-relative position, its parent node, and its child index.\nWhen the callback returns false for a given node, that node's\nchildren will not be recursed over. The last parameter can be\nused to specify a starting position to count from.",name:"nodesBetween",required:!0,type:{name:"(from: number, to: number, f: (node: Node, pos: number, parent: Node, index: number) => boolean | void, startPos?: number) => void"}},descendants:{defaultValue:null,description:"Call the given callback for every descendant node. Doesn't\ndescend into a node when the callback returns `false`.",name:"descendants",required:!0,type:{name:"(f: (node: Node, pos: number, parent: Node, index: number) => boolean | void) => void"}},textContent:{defaultValue:null,description:"Concatenates all the text nodes found in this fragment and its\nchildren.",name:"textContent",required:!0,type:{name:"string"}},textBetween:{defaultValue:null,description:"Get all text between positions `from` and `to`. When\n`blockSeparator` is given, it will be inserted to separate text\nfrom different block nodes. If `leafText` is given, it'll be\ninserted for every non-text leaf node encountered, otherwise\n[`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.",name:"textBetween",required:!0,type:{name:"(from: number, to: number, blockSeparator?: string, leafText?: string | ((leafNode: Node) => string)) => string"}},firstChild:{defaultValue:null,description:"Returns this node's first child, or `null` if there are no\nchildren.",name:"firstChild",required:!0,type:{name:"Node"}},lastChild:{defaultValue:null,description:"Returns this node's last child, or `null` if there are no\nchildren.",name:"lastChild",required:!0,type:{name:"Node"}},eq:{defaultValue:null,description:"Test whether two nodes represent the same piece of document.",name:"eq",required:!0,type:{name:"(other: Node) => boolean"}},sameMarkup:{defaultValue:null,description:"Compare the markup (type, attributes, and marks) of this node to\nthose of another. Returns `true` if both have the same markup.",name:"sameMarkup",required:!0,type:{name:"(other: Node) => boolean"}},hasMarkup:{defaultValue:null,description:"Check whether this node's markup correspond to the given type,\nattributes, and marks.",name:"hasMarkup",required:!0,type:{name:"(type: NodeType, attrs?: Attrs, marks?: readonly Mark[]) => boolean"}},copy:{defaultValue:null,description:"Create a new node with the same markup as this node, containing\nthe given content (or empty, if no content is given).",name:"copy",required:!0,type:{name:"(content?: Fragment) => Node"}},mark:{defaultValue:null,description:"Create a copy of this node, with the given set of marks instead\nof the node's own marks.",name:"mark",required:!0,type:{name:"(marks: readonly Mark[]) => Node"}},cut:{defaultValue:null,description:"Create a copy of this node with only the content between the\ngiven positions. If `to` is not given, it defaults to the end of\nthe node.",name:"cut",required:!0,type:{name:"(from: number, to?: number) => Node"}},slice:{defaultValue:null,description:"Cut out the part of the document between the given positions, and\nreturn it as a `Slice` object.",name:"slice",required:!0,type:{name:"(from: number, to?: number, includeParents?: boolean) => Slice"}},replace:{defaultValue:null,description:"Replace the part of the document between the given positions with\nthe given slice. The slice must 'fit', meaning its open sides\nmust be able to connect to the surrounding content, and its\ncontent nodes must be valid children for the node they are placed\ninto. If any of this is violated, an error of type\n[`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.",name:"replace",required:!0,type:{name:"(from: number, to: number, slice: Slice) => Node"}},nodeAt:{defaultValue:null,description:"Find the node directly after the given position.",name:"nodeAt",required:!0,type:{name:"(pos: number) => Node"}},childAfter:{defaultValue:null,description:"Find the (direct) child node after the given offset, if any,\nand return it along with its index and offset relative to this\nnode.",name:"childAfter",required:!0,type:{name:"(pos: number) => { node: Node; index: number; offset: number; }"}},childBefore:{defaultValue:null,description:"Find the (direct) child node before the given offset, if any,\nand return it along with its index and offset relative to this\nnode.",name:"childBefore",required:!0,type:{name:"(pos: number) => { node: Node; index: number; offset: number; }"}},resolve:{defaultValue:null,description:"Resolve the given position in the document, returning an\n[object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.",name:"resolve",required:!0,type:{name:"(pos: number) => ResolvedPos"}},rangeHasMark:{defaultValue:null,description:"Test whether a given mark or mark type occurs in this document\nbetween the two given positions.",name:"rangeHasMark",required:!0,type:{name:"(from: number, to: number, type: Mark | MarkType) => boolean"}},isBlock:{defaultValue:null,description:"True when this is a block (non-inline node)",name:"isBlock",required:!0,type:{name:"boolean"}},isTextblock:{defaultValue:null,description:"True when this is a textblock node, a block node with inline\ncontent.",name:"isTextblock",required:!0,type:{name:"boolean"}},inlineContent:{defaultValue:null,description:"True when this node allows inline content.",name:"inlineContent",required:!0,type:{name:"boolean"}},isInline:{defaultValue:null,description:"True when this is an inline node (a text node or a node that can\nappear among text).",name:"isInline",required:!0,type:{name:"boolean"}},isText:{defaultValue:null,description:"True when this is a text node.",name:"isText",required:!0,type:{name:"boolean"}},isLeaf:{defaultValue:null,description:"True when this is a leaf node.",name:"isLeaf",required:!0,type:{name:"boolean"}},isAtom:{defaultValue:null,description:"True when this is an atom, i.e. when it does not have directly\neditable content. This is usually the same as `isLeaf`, but can\nbe configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)\non a node's spec (typically used when the node is displayed as\nan uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).",name:"isAtom",required:!0,type:{name:"boolean"}},toString:{defaultValue:null,description:"Return a string representation of this node for debugging\npurposes.",name:"toString",required:!1,type:{name:"() => string"}},contentMatchAt:{defaultValue:null,description:"Get the content match in this node at the given index.",name:"contentMatchAt",required:!0,type:{name:"(index: number) => ContentMatch"}},canReplace:{defaultValue:null,description:"Test whether replacing the range between `from` and `to` (by\nchild index) with the given replacement fragment (which defaults\nto the empty fragment) would leave the node's content valid. You\ncan optionally pass `start` and `end` indices into the\nreplacement fragment.",name:"canReplace",required:!0,type:{name:"(from: number, to: number, replacement?: Fragment, start?: number, end?: number) => boolean"}},canReplaceWith:{defaultValue:null,description:"Test whether replacing the range `from` to `to` (by index) with\na node of the given type would leave the node's content valid.",name:"canReplaceWith",required:!0,type:{name:"(from: number, to: number, type: NodeType, marks?: readonly Mark[]) => boolean"}},canAppend:{defaultValue:null,description:"Test whether the given node's content could be appended to this\nnode. If that node is empty, this will only return true if there\nis at least one node type that can appear in both nodes (to avoid\nmerging completely incompatible nodes).",name:"canAppend",required:!0,type:{name:"(other: Node) => boolean"}},check:{defaultValue:null,description:"Check whether this node and its descendants conform to the\nschema, and raise error when they do not.",name:"check",required:!0,type:{name:"() => void"}},toJSON:{defaultValue:null,description:"Return a JSON-serializeable representation of this node.",name:"toJSON",required:!0,type:{name:"() => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#isTitleNode"]={docgenInfo:isTitleNode.__docgenInfo,name:"isTitleNode",path:"src/index.tsx#isTitleNode"})}catch(__react_docgen_typescript_loader_error){}try{isBulletListNode.displayName="isBulletListNode",isBulletListNode.__docgenInfo={description:"",displayName:"isBulletListNode",props:{type:{defaultValue:null,description:"The type of node that this is.",name:"type",required:!0,type:{name:"NodeType"}},attrs:{defaultValue:null,description:"An object mapping attribute names to values. The kind of\nattributes allowed and required are\n[determined](https://prosemirror.net/docs/ref/#model.NodeSpec.attrs) by the node type.",name:"attrs",required:!0,type:{name:"Attrs"}},marks:{defaultValue:null,description:"The marks (things like whether it is emphasized or part of a\nlink) applied to this node.",name:"marks",required:!0,type:{name:"readonly Mark[]"}},content:{defaultValue:null,description:"A container holding the node's children.",name:"content",required:!0,type:{name:"Fragment"}},text:{defaultValue:null,description:"For text nodes, this contains the node's text content.",name:"text",required:!0,type:{name:"string"}},nodeSize:{defaultValue:null,description:"The size of this node, as defined by the integer-based [indexing\nscheme](/docs/guide/#doc.indexing). For text nodes, this is the\namount of characters. For other leaf nodes, it is one. For\nnon-leaf nodes, it is the size of the content plus two (the\nstart and end token).",name:"nodeSize",required:!0,type:{name:"number"}},childCount:{defaultValue:null,description:"The number of children that the node has.",name:"childCount",required:!0,type:{name:"number"}},child:{defaultValue:null,description:"Get the child node at the given index. Raises an error when the\nindex is out of range.",name:"child",required:!0,type:{name:"(index: number) => Node"}},maybeChild:{defaultValue:null,description:"Get the child node at the given index, if it exists.",name:"maybeChild",required:!0,type:{name:"(index: number) => Node"}},forEach:{defaultValue:null,description:"Call `f` for every child node, passing the node, its offset\ninto this parent node, and its index.",name:"forEach",required:!0,type:{name:"(f: (node: Node, offset: number, index: number) => void) => void"}},nodesBetween:{defaultValue:null,description:"Invoke a callback for all descendant nodes recursively between\nthe given two positions that are relative to start of this\nnode's content. The callback is invoked with the node, its\nparent-relative position, its parent node, and its child index.\nWhen the callback returns false for a given node, that node's\nchildren will not be recursed over. The last parameter can be\nused to specify a starting position to count from.",name:"nodesBetween",required:!0,type:{name:"(from: number, to: number, f: (node: Node, pos: number, parent: Node, index: number) => boolean | void, startPos?: number) => void"}},descendants:{defaultValue:null,description:"Call the given callback for every descendant node. Doesn't\ndescend into a node when the callback returns `false`.",name:"descendants",required:!0,type:{name:"(f: (node: Node, pos: number, parent: Node, index: number) => boolean | void) => void"}},textContent:{defaultValue:null,description:"Concatenates all the text nodes found in this fragment and its\nchildren.",name:"textContent",required:!0,type:{name:"string"}},textBetween:{defaultValue:null,description:"Get all text between positions `from` and `to`. When\n`blockSeparator` is given, it will be inserted to separate text\nfrom different block nodes. If `leafText` is given, it'll be\ninserted for every non-text leaf node encountered, otherwise\n[`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.",name:"textBetween",required:!0,type:{name:"(from: number, to: number, blockSeparator?: string, leafText?: string | ((leafNode: Node) => string)) => string"}},firstChild:{defaultValue:null,description:"Returns this node's first child, or `null` if there are no\nchildren.",name:"firstChild",required:!0,type:{name:"Node"}},lastChild:{defaultValue:null,description:"Returns this node's last child, or `null` if there are no\nchildren.",name:"lastChild",required:!0,type:{name:"Node"}},eq:{defaultValue:null,description:"Test whether two nodes represent the same piece of document.",name:"eq",required:!0,type:{name:"(other: Node) => boolean"}},sameMarkup:{defaultValue:null,description:"Compare the markup (type, attributes, and marks) of this node to\nthose of another. Returns `true` if both have the same markup.",name:"sameMarkup",required:!0,type:{name:"(other: Node) => boolean"}},hasMarkup:{defaultValue:null,description:"Check whether this node's markup correspond to the given type,\nattributes, and marks.",name:"hasMarkup",required:!0,type:{name:"(type: NodeType, attrs?: Attrs, marks?: readonly Mark[]) => boolean"}},copy:{defaultValue:null,description:"Create a new node with the same markup as this node, containing\nthe given content (or empty, if no content is given).",name:"copy",required:!0,type:{name:"(content?: Fragment) => Node"}},mark:{defaultValue:null,description:"Create a copy of this node, with the given set of marks instead\nof the node's own marks.",name:"mark",required:!0,type:{name:"(marks: readonly Mark[]) => Node"}},cut:{defaultValue:null,description:"Create a copy of this node with only the content between the\ngiven positions. If `to` is not given, it defaults to the end of\nthe node.",name:"cut",required:!0,type:{name:"(from: number, to?: number) => Node"}},slice:{defaultValue:null,description:"Cut out the part of the document between the given positions, and\nreturn it as a `Slice` object.",name:"slice",required:!0,type:{name:"(from: number, to?: number, includeParents?: boolean) => Slice"}},replace:{defaultValue:null,description:"Replace the part of the document between the given positions with\nthe given slice. The slice must 'fit', meaning its open sides\nmust be able to connect to the surrounding content, and its\ncontent nodes must be valid children for the node they are placed\ninto. If any of this is violated, an error of type\n[`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.",name:"replace",required:!0,type:{name:"(from: number, to: number, slice: Slice) => Node"}},nodeAt:{defaultValue:null,description:"Find the node directly after the given position.",name:"nodeAt",required:!0,type:{name:"(pos: number) => Node"}},childAfter:{defaultValue:null,description:"Find the (direct) child node after the given offset, if any,\nand return it along with its index and offset relative to this\nnode.",name:"childAfter",required:!0,type:{name:"(pos: number) => { node: Node; index: number; offset: number; }"}},childBefore:{defaultValue:null,description:"Find the (direct) child node before the given offset, if any,\nand return it along with its index and offset relative to this\nnode.",name:"childBefore",required:!0,type:{name:"(pos: number) => { node: Node; index: number; offset: number; }"}},resolve:{defaultValue:null,description:"Resolve the given position in the document, returning an\n[object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.",name:"resolve",required:!0,type:{name:"(pos: number) => ResolvedPos"}},rangeHasMark:{defaultValue:null,description:"Test whether a given mark or mark type occurs in this document\nbetween the two given positions.",name:"rangeHasMark",required:!0,type:{name:"(from: number, to: number, type: Mark | MarkType) => boolean"}},isBlock:{defaultValue:null,description:"True when this is a block (non-inline node)",name:"isBlock",required:!0,type:{name:"boolean"}},isTextblock:{defaultValue:null,description:"True when this is a textblock node, a block node with inline\ncontent.",name:"isTextblock",required:!0,type:{name:"boolean"}},inlineContent:{defaultValue:null,description:"True when this node allows inline content.",name:"inlineContent",required:!0,type:{name:"boolean"}},isInline:{defaultValue:null,description:"True when this is an inline node (a text node or a node that can\nappear among text).",name:"isInline",required:!0,type:{name:"boolean"}},isText:{defaultValue:null,description:"True when this is a text node.",name:"isText",required:!0,type:{name:"boolean"}},isLeaf:{defaultValue:null,description:"True when this is a leaf node.",name:"isLeaf",required:!0,type:{name:"boolean"}},isAtom:{defaultValue:null,description:"True when this is an atom, i.e. when it does not have directly\neditable content. This is usually the same as `isLeaf`, but can\nbe configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)\non a node's spec (typically used when the node is displayed as\nan uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).",name:"isAtom",required:!0,type:{name:"boolean"}},toString:{defaultValue:null,description:"Return a string representation of this node for debugging\npurposes.",name:"toString",required:!1,type:{name:"() => string"}},contentMatchAt:{defaultValue:null,description:"Get the content match in this node at the given index.",name:"contentMatchAt",required:!0,type:{name:"(index: number) => ContentMatch"}},canReplace:{defaultValue:null,description:"Test whether replacing the range between `from` and `to` (by\nchild index) with the given replacement fragment (which defaults\nto the empty fragment) would leave the node's content valid. You\ncan optionally pass `start` and `end` indices into the\nreplacement fragment.",name:"canReplace",required:!0,type:{name:"(from: number, to: number, replacement?: Fragment, start?: number, end?: number) => boolean"}},canReplaceWith:{defaultValue:null,description:"Test whether replacing the range `from` to `to` (by index) with\na node of the given type would leave the node's content valid.",name:"canReplaceWith",required:!0,type:{name:"(from: number, to: number, type: NodeType, marks?: readonly Mark[]) => boolean"}},canAppend:{defaultValue:null,description:"Test whether the given node's content could be appended to this\nnode. If that node is empty, this will only return true if there\nis at least one node type that can appear in both nodes (to avoid\nmerging completely incompatible nodes).",name:"canAppend",required:!0,type:{name:"(other: Node) => boolean"}},check:{defaultValue:null,description:"Check whether this node and its descendants conform to the\nschema, and raise error when they do not.",name:"check",required:!0,type:{name:"() => void"}},toJSON:{defaultValue:null,description:"Return a JSON-serializeable representation of this node.",name:"toJSON",required:!0,type:{name:"() => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#isBulletListNode"]={docgenInfo:isBulletListNode.__docgenInfo,name:"isBulletListNode",path:"src/index.tsx#isBulletListNode"})}catch(__react_docgen_typescript_loader_error){}try{isOrderedListNode.displayName="isOrderedListNode",isOrderedListNode.__docgenInfo={description:"",displayName:"isOrderedListNode",props:{type:{defaultValue:null,description:"The type of node that this is.",name:"type",required:!0,type:{name:"NodeType"}},attrs:{defaultValue:null,description:"An object mapping attribute names to values. The kind of\nattributes allowed and required are\n[determined](https://prosemirror.net/docs/ref/#model.NodeSpec.attrs) by the node type.",name:"attrs",required:!0,type:{name:"Attrs"}},marks:{defaultValue:null,description:"The marks (things like whether it is emphasized or part of a\nlink) applied to this node.",name:"marks",required:!0,type:{name:"readonly Mark[]"}},content:{defaultValue:null,description:"A container holding the node's children.",name:"content",required:!0,type:{name:"Fragment"}},text:{defaultValue:null,description:"For text nodes, this contains the node's text content.",name:"text",required:!0,type:{name:"string"}},nodeSize:{defaultValue:null,description:"The size of this node, as defined by the integer-based [indexing\nscheme](/docs/guide/#doc.indexing). For text nodes, this is the\namount of characters. For other leaf nodes, it is one. For\nnon-leaf nodes, it is the size of the content plus two (the\nstart and end token).",name:"nodeSize",required:!0,type:{name:"number"}},childCount:{defaultValue:null,description:"The number of children that the node has.",name:"childCount",required:!0,type:{name:"number"}},child:{defaultValue:null,description:"Get the child node at the given index. Raises an error when the\nindex is out of range.",name:"child",required:!0,type:{name:"(index: number) => Node"}},maybeChild:{defaultValue:null,description:"Get the child node at the given index, if it exists.",name:"maybeChild",required:!0,type:{name:"(index: number) => Node"}},forEach:{defaultValue:null,description:"Call `f` for every child node, passing the node, its offset\ninto this parent node, and its index.",name:"forEach",required:!0,type:{name:"(f: (node: Node, offset: number, index: number) => void) => void"}},nodesBetween:{defaultValue:null,description:"Invoke a callback for all descendant nodes recursively between\nthe given two positions that are relative to start of this\nnode's content. The callback is invoked with the node, its\nparent-relative position, its parent node, and its child index.\nWhen the callback returns false for a given node, that node's\nchildren will not be recursed over. The last parameter can be\nused to specify a starting position to count from.",name:"nodesBetween",required:!0,type:{name:"(from: number, to: number, f: (node: Node, pos: number, parent: Node, index: number) => boolean | void, startPos?: number) => void"}},descendants:{defaultValue:null,description:"Call the given callback for every descendant node. Doesn't\ndescend into a node when the callback returns `false`.",name:"descendants",required:!0,type:{name:"(f: (node: Node, pos: number, parent: Node, index: number) => boolean | void) => void"}},textContent:{defaultValue:null,description:"Concatenates all the text nodes found in this fragment and its\nchildren.",name:"textContent",required:!0,type:{name:"string"}},textBetween:{defaultValue:null,description:"Get all text between positions `from` and `to`. When\n`blockSeparator` is given, it will be inserted to separate text\nfrom different block nodes. If `leafText` is given, it'll be\ninserted for every non-text leaf node encountered, otherwise\n[`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.",name:"textBetween",required:!0,type:{name:"(from: number, to: number, blockSeparator?: string, leafText?: string | ((leafNode: Node) => string)) => string"}},firstChild:{defaultValue:null,description:"Returns this node's first child, or `null` if there are no\nchildren.",name:"firstChild",required:!0,type:{name:"Node"}},lastChild:{defaultValue:null,description:"Returns this node's last child, or `null` if there are no\nchildren.",name:"lastChild",required:!0,type:{name:"Node"}},eq:{defaultValue:null,description:"Test whether two nodes represent the same piece of document.",name:"eq",required:!0,type:{name:"(other: Node) => boolean"}},sameMarkup:{defaultValue:null,description:"Compare the markup (type, attributes, and marks) of this node to\nthose of another. Returns `true` if both have the same markup.",name:"sameMarkup",required:!0,type:{name:"(other: Node) => boolean"}},hasMarkup:{defaultValue:null,description:"Check whether this node's markup correspond to the given type,\nattributes, and marks.",name:"hasMarkup",required:!0,type:{name:"(type: NodeType, attrs?: Attrs, marks?: readonly Mark[]) => boolean"}},copy:{defaultValue:null,description:"Create a new node with the same markup as this node, containing\nthe given content (or empty, if no content is given).",name:"copy",required:!0,type:{name:"(content?: Fragment) => Node"}},mark:{defaultValue:null,description:"Create a copy of this node, with the given set of marks instead\nof the node's own marks.",name:"mark",required:!0,type:{name:"(marks: readonly Mark[]) => Node"}},cut:{defaultValue:null,description:"Create a copy of this node with only the content between the\ngiven positions. If `to` is not given, it defaults to the end of\nthe node.",name:"cut",required:!0,type:{name:"(from: number, to?: number) => Node"}},slice:{defaultValue:null,description:"Cut out the part of the document between the given positions, and\nreturn it as a `Slice` object.",name:"slice",required:!0,type:{name:"(from: number, to?: number, includeParents?: boolean) => Slice"}},replace:{defaultValue:null,description:"Replace the part of the document between the given positions with\nthe given slice. The slice must 'fit', meaning its open sides\nmust be able to connect to the surrounding content, and its\ncontent nodes must be valid children for the node they are placed\ninto. If any of this is violated, an error of type\n[`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.",name:"replace",required:!0,type:{name:"(from: number, to: number, slice: Slice) => Node"}},nodeAt:{defaultValue:null,description:"Find the node directly after the given position.",name:"nodeAt",required:!0,type:{name:"(pos: number) => Node"}},childAfter:{defaultValue:null,description:"Find the (direct) child node after the given offset, if any,\nand return it along with its index and offset relative to this\nnode.",name:"childAfter",required:!0,type:{name:"(pos: number) => { node: Node; index: number; offset: number; }"}},childBefore:{defaultValue:null,description:"Find the (direct) child node before the given offset, if any,\nand return it along with its index and offset relative to this\nnode.",name:"childBefore",required:!0,type:{name:"(pos: number) => { node: Node; index: number; offset: number; }"}},resolve:{defaultValue:null,description:"Resolve the given position in the document, returning an\n[object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.",name:"resolve",required:!0,type:{name:"(pos: number) => ResolvedPos"}},rangeHasMark:{defaultValue:null,description:"Test whether a given mark or mark type occurs in this document\nbetween the two given positions.",name:"rangeHasMark",required:!0,type:{name:"(from: number, to: number, type: Mark | MarkType) => boolean"}},isBlock:{defaultValue:null,description:"True when this is a block (non-inline node)",name:"isBlock",required:!0,type:{name:"boolean"}},isTextblock:{defaultValue:null,description:"True when this is a textblock node, a block node with inline\ncontent.",name:"isTextblock",required:!0,type:{name:"boolean"}},inlineContent:{defaultValue:null,description:"True when this node allows inline content.",name:"inlineContent",required:!0,type:{name:"boolean"}},isInline:{defaultValue:null,description:"True when this is an inline node (a text node or a node that can\nappear among text).",name:"isInline",required:!0,type:{name:"boolean"}},isText:{defaultValue:null,description:"True when this is a text node.",name:"isText",required:!0,type:{name:"boolean"}},isLeaf:{defaultValue:null,description:"True when this is a leaf node.",name:"isLeaf",required:!0,type:{name:"boolean"}},isAtom:{defaultValue:null,description:"True when this is an atom, i.e. when it does not have directly\neditable content. This is usually the same as `isLeaf`, but can\nbe configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)\non a node's spec (typically used when the node is displayed as\nan uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).",name:"isAtom",required:!0,type:{name:"boolean"}},toString:{defaultValue:null,description:"Return a string representation of this node for debugging\npurposes.",name:"toString",required:!1,type:{name:"() => string"}},contentMatchAt:{defaultValue:null,description:"Get the content match in this node at the given index.",name:"contentMatchAt",required:!0,type:{name:"(index: number) => ContentMatch"}},canReplace:{defaultValue:null,description:"Test whether replacing the range between `from` and `to` (by\nchild index) with the given replacement fragment (which defaults\nto the empty fragment) would leave the node's content valid. You\ncan optionally pass `start` and `end` indices into the\nreplacement fragment.",name:"canReplace",required:!0,type:{name:"(from: number, to: number, replacement?: Fragment, start?: number, end?: number) => boolean"}},canReplaceWith:{defaultValue:null,description:"Test whether replacing the range `from` to `to` (by index) with\na node of the given type would leave the node's content valid.",name:"canReplaceWith",required:!0,type:{name:"(from: number, to: number, type: NodeType, marks?: readonly Mark[]) => boolean"}},canAppend:{defaultValue:null,description:"Test whether the given node's content could be appended to this\nnode. If that node is empty, this will only return true if there\nis at least one node type that can appear in both nodes (to avoid\nmerging completely incompatible nodes).",name:"canAppend",required:!0,type:{name:"(other: Node) => boolean"}},check:{defaultValue:null,description:"Check whether this node and its descendants conform to the\nschema, and raise error when they do not.",name:"check",required:!0,type:{name:"() => void"}},toJSON:{defaultValue:null,description:"Return a JSON-serializeable representation of this node.",name:"toJSON",required:!0,type:{name:"() => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#isOrderedListNode"]={docgenInfo:isOrderedListNode.__docgenInfo,name:"isOrderedListNode",path:"src/index.tsx#isOrderedListNode"})}catch(__react_docgen_typescript_loader_error){}try{isTodoListNode.displayName="isTodoListNode",isTodoListNode.__docgenInfo={description:"",displayName:"isTodoListNode",props:{type:{defaultValue:null,description:"The type of node that this is.",name:"type",required:!0,type:{name:"NodeType"}},attrs:{defaultValue:null,description:"An object mapping attribute names to values. The kind of\nattributes allowed and required are\n[determined](https://prosemirror.net/docs/ref/#model.NodeSpec.attrs) by the node type.",name:"attrs",required:!0,type:{name:"Attrs"}},marks:{defaultValue:null,description:"The marks (things like whether it is emphasized or part of a\nlink) applied to this node.",name:"marks",required:!0,type:{name:"readonly Mark[]"}},content:{defaultValue:null,description:"A container holding the node's children.",name:"content",required:!0,type:{name:"Fragment"}},text:{defaultValue:null,description:"For text nodes, this contains the node's text content.",name:"text",required:!0,type:{name:"string"}},nodeSize:{defaultValue:null,description:"The size of this node, as defined by the integer-based [indexing\nscheme](/docs/guide/#doc.indexing). For text nodes, this is the\namount of characters. For other leaf nodes, it is one. For\nnon-leaf nodes, it is the size of the content plus two (the\nstart and end token).",name:"nodeSize",required:!0,type:{name:"number"}},childCount:{defaultValue:null,description:"The number of children that the node has.",name:"childCount",required:!0,type:{name:"number"}},child:{defaultValue:null,description:"Get the child node at the given index. Raises an error when the\nindex is out of range.",name:"child",required:!0,type:{name:"(index: number) => Node"}},maybeChild:{defaultValue:null,description:"Get the child node at the given index, if it exists.",name:"maybeChild",required:!0,type:{name:"(index: number) => Node"}},forEach:{defaultValue:null,description:"Call `f` for every child node, passing the node, its offset\ninto this parent node, and its index.",name:"forEach",required:!0,type:{name:"(f: (node: Node, offset: number, index: number) => void) => void"}},nodesBetween:{defaultValue:null,description:"Invoke a callback for all descendant nodes recursively between\nthe given two positions that are relative to start of this\nnode's content. The callback is invoked with the node, its\nparent-relative position, its parent node, and its child index.\nWhen the callback returns false for a given node, that node's\nchildren will not be recursed over. The last parameter can be\nused to specify a starting position to count from.",name:"nodesBetween",required:!0,type:{name:"(from: number, to: number, f: (node: Node, pos: number, parent: Node, index: number) => boolean | void, startPos?: number) => void"}},descendants:{defaultValue:null,description:"Call the given callback for every descendant node. Doesn't\ndescend into a node when the callback returns `false`.",name:"descendants",required:!0,type:{name:"(f: (node: Node, pos: number, parent: Node, index: number) => boolean | void) => void"}},textContent:{defaultValue:null,description:"Concatenates all the text nodes found in this fragment and its\nchildren.",name:"textContent",required:!0,type:{name:"string"}},textBetween:{defaultValue:null,description:"Get all text between positions `from` and `to`. When\n`blockSeparator` is given, it will be inserted to separate text\nfrom different block nodes. If `leafText` is given, it'll be\ninserted for every non-text leaf node encountered, otherwise\n[`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.",name:"textBetween",required:!0,type:{name:"(from: number, to: number, blockSeparator?: string, leafText?: string | ((leafNode: Node) => string)) => string"}},firstChild:{defaultValue:null,description:"Returns this node's first child, or `null` if there are no\nchildren.",name:"firstChild",required:!0,type:{name:"Node"}},lastChild:{defaultValue:null,description:"Returns this node's last child, or `null` if there are no\nchildren.",name:"lastChild",required:!0,type:{name:"Node"}},eq:{defaultValue:null,description:"Test whether two nodes represent the same piece of document.",name:"eq",required:!0,type:{name:"(other: Node) => boolean"}},sameMarkup:{defaultValue:null,description:"Compare the markup (type, attributes, and marks) of this node to\nthose of another. Returns `true` if both have the same markup.",name:"sameMarkup",required:!0,type:{name:"(other: Node) => boolean"}},hasMarkup:{defaultValue:null,description:"Check whether this node's markup correspond to the given type,\nattributes, and marks.",name:"hasMarkup",required:!0,type:{name:"(type: NodeType, attrs?: Attrs, marks?: readonly Mark[]) => boolean"}},copy:{defaultValue:null,description:"Create a new node with the same markup as this node, containing\nthe given content (or empty, if no content is given).",name:"copy",required:!0,type:{name:"(content?: Fragment) => Node"}},mark:{defaultValue:null,description:"Create a copy of this node, with the given set of marks instead\nof the node's own marks.",name:"mark",required:!0,type:{name:"(marks: readonly Mark[]) => Node"}},cut:{defaultValue:null,description:"Create a copy of this node with only the content between the\ngiven positions. If `to` is not given, it defaults to the end of\nthe node.",name:"cut",required:!0,type:{name:"(from: number, to?: number) => Node"}},slice:{defaultValue:null,description:"Cut out the part of the document between the given positions, and\nreturn it as a `Slice` object.",name:"slice",required:!0,type:{name:"(from: number, to?: number, includeParents?: boolean) => Slice"}},replace:{defaultValue:null,description:"Replace the part of the document between the given positions with\nthe given slice. The slice must 'fit', meaning its open sides\nmust be able to connect to the surrounding content, and its\ncontent nodes must be valid children for the node they are placed\ninto. If any of this is violated, an error of type\n[`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.",name:"replace",required:!0,type:{name:"(from: number, to: number, slice: Slice) => Node"}},nodeAt:{defaultValue:null,description:"Find the node directly after the given position.",name:"nodeAt",required:!0,type:{name:"(pos: number) => Node"}},childAfter:{defaultValue:null,description:"Find the (direct) child node after the given offset, if any,\nand return it along with its index and offset relative to this\nnode.",name:"childAfter",required:!0,type:{name:"(pos: number) => { node: Node; index: number; offset: number; }"}},childBefore:{defaultValue:null,description:"Find the (direct) child node before the given offset, if any,\nand return it along with its index and offset relative to this\nnode.",name:"childBefore",required:!0,type:{name:"(pos: number) => { node: Node; index: number; offset: number; }"}},resolve:{defaultValue:null,description:"Resolve the given position in the document, returning an\n[object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.",name:"resolve",required:!0,type:{name:"(pos: number) => ResolvedPos"}},rangeHasMark:{defaultValue:null,description:"Test whether a given mark or mark type occurs in this document\nbetween the two given positions.",name:"rangeHasMark",required:!0,type:{name:"(from: number, to: number, type: Mark | MarkType) => boolean"}},isBlock:{defaultValue:null,description:"True when this is a block (non-inline node)",name:"isBlock",required:!0,type:{name:"boolean"}},isTextblock:{defaultValue:null,description:"True when this is a textblock node, a block node with inline\ncontent.",name:"isTextblock",required:!0,type:{name:"boolean"}},inlineContent:{defaultValue:null,description:"True when this node allows inline content.",name:"inlineContent",required:!0,type:{name:"boolean"}},isInline:{defaultValue:null,description:"True when this is an inline node (a text node or a node that can\nappear among text).",name:"isInline",required:!0,type:{name:"boolean"}},isText:{defaultValue:null,description:"True when this is a text node.",name:"isText",required:!0,type:{name:"boolean"}},isLeaf:{defaultValue:null,description:"True when this is a leaf node.",name:"isLeaf",required:!0,type:{name:"boolean"}},isAtom:{defaultValue:null,description:"True when this is an atom, i.e. when it does not have directly\neditable content. This is usually the same as `isLeaf`, but can\nbe configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)\non a node's spec (typically used when the node is displayed as\nan uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).",name:"isAtom",required:!0,type:{name:"boolean"}},toString:{defaultValue:null,description:"Return a string representation of this node for debugging\npurposes.",name:"toString",required:!1,type:{name:"() => string"}},contentMatchAt:{defaultValue:null,description:"Get the content match in this node at the given index.",name:"contentMatchAt",required:!0,type:{name:"(index: number) => ContentMatch"}},canReplace:{defaultValue:null,description:"Test whether replacing the range between `from` and `to` (by\nchild index) with the given replacement fragment (which defaults\nto the empty fragment) would leave the node's content valid. You\ncan optionally pass `start` and `end` indices into the\nreplacement fragment.",name:"canReplace",required:!0,type:{name:"(from: number, to: number, replacement?: Fragment, start?: number, end?: number) => boolean"}},canReplaceWith:{defaultValue:null,description:"Test whether replacing the range `from` to `to` (by index) with\na node of the given type would leave the node's content valid.",name:"canReplaceWith",required:!0,type:{name:"(from: number, to: number, type: NodeType, marks?: readonly Mark[]) => boolean"}},canAppend:{defaultValue:null,description:"Test whether the given node's content could be appended to this\nnode. If that node is empty, this will only return true if there\nis at least one node type that can appear in both nodes (to avoid\nmerging completely incompatible nodes).",name:"canAppend",required:!0,type:{name:"(other: Node) => boolean"}},check:{defaultValue:null,description:"Check whether this node and its descendants conform to the\nschema, and raise error when they do not.",name:"check",required:!0,type:{name:"() => void"}},toJSON:{defaultValue:null,description:"Return a JSON-serializeable representation of this node.",name:"toJSON",required:!0,type:{name:"() => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#isTodoListNode"]={docgenInfo:isTodoListNode.__docgenInfo,name:"isTodoListNode",path:"src/index.tsx#isTodoListNode"})}catch(__react_docgen_typescript_loader_error){}try{isListNode.displayName="isListNode",isListNode.__docgenInfo={description:"",displayName:"isListNode",props:{type:{defaultValue:null,description:"The type of node that this is.",name:"type",required:!0,type:{name:"NodeType"}},attrs:{defaultValue:null,description:"An object mapping attribute names to values. The kind of\nattributes allowed and required are\n[determined](https://prosemirror.net/docs/ref/#model.NodeSpec.attrs) by the node type.",name:"attrs",required:!0,type:{name:"Attrs"}},marks:{defaultValue:null,description:"The marks (things like whether it is emphasized or part of a\nlink) applied to this node.",name:"marks",required:!0,type:{name:"readonly Mark[]"}},content:{defaultValue:null,description:"A container holding the node's children.",name:"content",required:!0,type:{name:"Fragment"}},text:{defaultValue:null,description:"For text nodes, this contains the node's text content.",name:"text",required:!0,type:{name:"string"}},nodeSize:{defaultValue:null,description:"The size of this node, as defined by the integer-based [indexing\nscheme](/docs/guide/#doc.indexing). For text nodes, this is the\namount of characters. For other leaf nodes, it is one. For\nnon-leaf nodes, it is the size of the content plus two (the\nstart and end token).",name:"nodeSize",required:!0,type:{name:"number"}},childCount:{defaultValue:null,description:"The number of children that the node has.",name:"childCount",required:!0,type:{name:"number"}},child:{defaultValue:null,description:"Get the child node at the given index. Raises an error when the\nindex is out of range.",name:"child",required:!0,type:{name:"(index: number) => Node"}},maybeChild:{defaultValue:null,description:"Get the child node at the given index, if it exists.",name:"maybeChild",required:!0,type:{name:"(index: number) => Node"}},forEach:{defaultValue:null,description:"Call `f` for every child node, passing the node, its offset\ninto this parent node, and its index.",name:"forEach",required:!0,type:{name:"(f: (node: Node, offset: number, index: number) => void) => void"}},nodesBetween:{defaultValue:null,description:"Invoke a callback for all descendant nodes recursively between\nthe given two positions that are relative to start of this\nnode's content. The callback is invoked with the node, its\nparent-relative position, its parent node, and its child index.\nWhen the callback returns false for a given node, that node's\nchildren will not be recursed over. The last parameter can be\nused to specify a starting position to count from.",name:"nodesBetween",required:!0,type:{name:"(from: number, to: number, f: (node: Node, pos: number, parent: Node, index: number) => boolean | void, startPos?: number) => void"}},descendants:{defaultValue:null,description:"Call the given callback for every descendant node. Doesn't\ndescend into a node when the callback returns `false`.",name:"descendants",required:!0,type:{name:"(f: (node: Node, pos: number, parent: Node, index: number) => boolean | void) => void"}},textContent:{defaultValue:null,description:"Concatenates all the text nodes found in this fragment and its\nchildren.",name:"textContent",required:!0,type:{name:"string"}},textBetween:{defaultValue:null,description:"Get all text between positions `from` and `to`. When\n`blockSeparator` is given, it will be inserted to separate text\nfrom different block nodes. If `leafText` is given, it'll be\ninserted for every non-text leaf node encountered, otherwise\n[`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.",name:"textBetween",required:!0,type:{name:"(from: number, to: number, blockSeparator?: string, leafText?: string | ((leafNode: Node) => string)) => string"}},firstChild:{defaultValue:null,description:"Returns this node's first child, or `null` if there are no\nchildren.",name:"firstChild",required:!0,type:{name:"Node"}},lastChild:{defaultValue:null,description:"Returns this node's last child, or `null` if there are no\nchildren.",name:"lastChild",required:!0,type:{name:"Node"}},eq:{defaultValue:null,description:"Test whether two nodes represent the same piece of document.",name:"eq",required:!0,type:{name:"(other: Node) => boolean"}},sameMarkup:{defaultValue:null,description:"Compare the markup (type, attributes, and marks) of this node to\nthose of another. Returns `true` if both have the same markup.",name:"sameMarkup",required:!0,type:{name:"(other: Node) => boolean"}},hasMarkup:{defaultValue:null,description:"Check whether this node's markup correspond to the given type,\nattributes, and marks.",name:"hasMarkup",required:!0,type:{name:"(type: NodeType, attrs?: Attrs, marks?: readonly Mark[]) => boolean"}},copy:{defaultValue:null,description:"Create a new node with the same markup as this node, containing\nthe given content (or empty, if no content is given).",name:"copy",required:!0,type:{name:"(content?: Fragment) => Node"}},mark:{defaultValue:null,description:"Create a copy of this node, with the given set of marks instead\nof the node's own marks.",name:"mark",required:!0,type:{name:"(marks: readonly Mark[]) => Node"}},cut:{defaultValue:null,description:"Create a copy of this node with only the content between the\ngiven positions. If `to` is not given, it defaults to the end of\nthe node.",name:"cut",required:!0,type:{name:"(from: number, to?: number) => Node"}},slice:{defaultValue:null,description:"Cut out the part of the document between the given positions, and\nreturn it as a `Slice` object.",name:"slice",required:!0,type:{name:"(from: number, to?: number, includeParents?: boolean) => Slice"}},replace:{defaultValue:null,description:"Replace the part of the document between the given positions with\nthe given slice. The slice must 'fit', meaning its open sides\nmust be able to connect to the surrounding content, and its\ncontent nodes must be valid children for the node they are placed\ninto. If any of this is violated, an error of type\n[`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.",name:"replace",required:!0,type:{name:"(from: number, to: number, slice: Slice) => Node"}},nodeAt:{defaultValue:null,description:"Find the node directly after the given position.",name:"nodeAt",required:!0,type:{name:"(pos: number) => Node"}},childAfter:{defaultValue:null,description:"Find the (direct) child node after the given offset, if any,\nand return it along with its index and offset relative to this\nnode.",name:"childAfter",required:!0,type:{name:"(pos: number) => { node: Node; index: number; offset: number; }"}},childBefore:{defaultValue:null,description:"Find the (direct) child node before the given offset, if any,\nand return it along with its index and offset relative to this\nnode.",name:"childBefore",required:!0,type:{name:"(pos: number) => { node: Node; index: number; offset: number; }"}},resolve:{defaultValue:null,description:"Resolve the given position in the document, returning an\n[object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.",name:"resolve",required:!0,type:{name:"(pos: number) => ResolvedPos"}},rangeHasMark:{defaultValue:null,description:"Test whether a given mark or mark type occurs in this document\nbetween the two given positions.",name:"rangeHasMark",required:!0,type:{name:"(from: number, to: number, type: Mark | MarkType) => boolean"}},isBlock:{defaultValue:null,description:"True when this is a block (non-inline node)",name:"isBlock",required:!0,type:{name:"boolean"}},isTextblock:{defaultValue:null,description:"True when this is a textblock node, a block node with inline\ncontent.",name:"isTextblock",required:!0,type:{name:"boolean"}},inlineContent:{defaultValue:null,description:"True when this node allows inline content.",name:"inlineContent",required:!0,type:{name:"boolean"}},isInline:{defaultValue:null,description:"True when this is an inline node (a text node or a node that can\nappear among text).",name:"isInline",required:!0,type:{name:"boolean"}},isText:{defaultValue:null,description:"True when this is a text node.",name:"isText",required:!0,type:{name:"boolean"}},isLeaf:{defaultValue:null,description:"True when this is a leaf node.",name:"isLeaf",required:!0,type:{name:"boolean"}},isAtom:{defaultValue:null,description:"True when this is an atom, i.e. when it does not have directly\neditable content. This is usually the same as `isLeaf`, but can\nbe configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)\non a node's spec (typically used when the node is displayed as\nan uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).",name:"isAtom",required:!0,type:{name:"boolean"}},toString:{defaultValue:null,description:"Return a string representation of this node for debugging\npurposes.",name:"toString",required:!1,type:{name:"() => string"}},contentMatchAt:{defaultValue:null,description:"Get the content match in this node at the given index.",name:"contentMatchAt",required:!0,type:{name:"(index: number) => ContentMatch"}},canReplace:{defaultValue:null,description:"Test whether replacing the range between `from` and `to` (by\nchild index) with the given replacement fragment (which defaults\nto the empty fragment) would leave the node's content valid. You\ncan optionally pass `start` and `end` indices into the\nreplacement fragment.",name:"canReplace",required:!0,type:{name:"(from: number, to: number, replacement?: Fragment, start?: number, end?: number) => boolean"}},canReplaceWith:{defaultValue:null,description:"Test whether replacing the range `from` to `to` (by index) with\na node of the given type would leave the node's content valid.",name:"canReplaceWith",required:!0,type:{name:"(from: number, to: number, type: NodeType, marks?: readonly Mark[]) => boolean"}},canAppend:{defaultValue:null,description:"Test whether the given node's content could be appended to this\nnode. If that node is empty, this will only return true if there\nis at least one node type that can appear in both nodes (to avoid\nmerging completely incompatible nodes).",name:"canAppend",required:!0,type:{name:"(other: Node) => boolean"}},check:{defaultValue:null,description:"Check whether this node and its descendants conform to the\nschema, and raise error when they do not.",name:"check",required:!0,type:{name:"() => void"}},toJSON:{defaultValue:null,description:"Return a JSON-serializeable representation of this node.",name:"toJSON",required:!0,type:{name:"() => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#isListNode"]={docgenInfo:isListNode.__docgenInfo,name:"isListNode",path:"src/index.tsx#isListNode"})}catch(__react_docgen_typescript_loader_error){}try{safePos.displayName="safePos",safePos.__docgenInfo={description:"根据文档内容大小获取不越界的位置",displayName:"safePos",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#safePos"]={docgenInfo:safePos.__docgenInfo,name:"safePos",path:"src/index.tsx#safePos"})}catch(__react_docgen_typescript_loader_error){}try{uploadImage.displayName="uploadImage",uploadImage.__docgenInfo={description:"",displayName:"uploadImage",props:{commandManager:{defaultValue:null,description:"",name:"commandManager",required:!0,type:{name:"any"}},extensionManager:{defaultValue:null,description:"",name:"extensionManager",required:!0,type:{name:"ExtensionManager"}},css:{defaultValue:null,description:"",name:"css",required:!0,type:{name:"any"}},schema:{defaultValue:null,description:"",name:"schema",required:!0,type:{name:"Schema<any, any>"}},view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"EditorView"}},isFocused:{defaultValue:null,description:"",name:"isFocused",required:!0,type:{name:"boolean"}},extensionStorage:{defaultValue:null,description:"",name:"extensionStorage",required:!0,type:{name:"Record<string, any>"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"EditorOptions"}},storage:{defaultValue:null,description:"Returns the editor storage.",name:"storage",required:!0,type:{name:"Record<string, any>"}},commands:{defaultValue:null,description:"An object of all registered commands.",name:"commands",required:!0,type:{name:"SingleCommands"}},chain:{defaultValue:null,description:"Create a command chain to call multiple commands at once.",name:"chain",required:!0,type:{name:"() => ChainedCommands"}},can:{defaultValue:null,description:"Check if a command or a command chain can be executed. Without executing it.",name:"can",required:!0,type:{name:"() => CanCommands"}},injectCSS:{defaultValue:null,description:"Inject CSS styles.",name:"injectCSS",required:!0,type:{name:"any"}},setOptions:{defaultValue:null,description:"Update editor options.\n@param",name:"setOptions",required:!0,type:{name:"(options?: Partial<EditorOptions>) => void"}},setEditable:{defaultValue:null,description:"Update editable state of the editor.",name:"setEditable",required:!0,type:{name:"(editable: boolean) => void"}},isEditable:{defaultValue:null,description:"Returns whether the editor is editable.",name:"isEditable",required:!0,type:{name:"boolean"}},state:{defaultValue:null,description:"Returns the editor state.",name:"state",required:!0,type:{name:"EditorState"}},registerPlugin:{defaultValue:null,description:"Register a ProseMirror plugin.\n@param \n@param",name:"registerPlugin",required:!0,type:{name:"(plugin: Plugin<any>, handlePlugins?: (newPlugin: Plugin<any>, plugins: Plugin<any>[]) => Plugin<any>[]) => void"}},unregisterPlugin:{defaultValue:null,description:"Unregister a ProseMirror plugin.\n@param",name:"unregisterPlugin",required:!0,type:{name:"(nameOrPluginKey: string | PluginKey<any>) => void"}},createExtensionManager:{defaultValue:null,description:"Creates an extension manager.",name:"createExtensionManager",required:!0,type:{name:"any"}},createCommandManager:{defaultValue:null,description:"Creates an command manager.",name:"createCommandManager",required:!0,type:{name:"any"}},createSchema:{defaultValue:null,description:"Creates a ProseMirror schema.",name:"createSchema",required:!0,type:{name:"any"}},createView:{defaultValue:null,description:"Creates a ProseMirror view.",name:"createView",required:!0,type:{name:"any"}},createNodeViews:{defaultValue:null,description:"Creates all node views.",name:"createNodeViews",required:!0,type:{name:"() => void"}},isCapturingTransaction:{defaultValue:null,description:"",name:"isCapturingTransaction",required:!0,type:{name:"boolean"}},capturedTransaction:{defaultValue:null,description:"",name:"capturedTransaction",required:!0,type:{name:"any"}},captureTransaction:{defaultValue:null,description:"",name:"captureTransaction",required:!0,type:{name:"(fn: Function) => Transaction"}},dispatchTransaction:{defaultValue:null,description:"The callback over which to send transactions (state updates) produced by the view.\n@param",name:"dispatchTransaction",required:!0,type:{name:"any"}},getAttributes:{defaultValue:null,description:"Get attributes of the currently selected node or mark.",name:"getAttributes",required:!0,type:{name:"(nameOrType: string | MarkType | NodeType) => Record<string, any>"}},isActive:{defaultValue:null,description:"Returns if the currently selected node or mark is active.\n@param \n@param",name:"isActive",required:!0,type:{name:"{ (name: string, attributes?: {}): boolean; (attributes: {}): boolean; }"}},getJSON:{defaultValue:null,description:"Get the document as JSON.",name:"getJSON",required:!0,type:{name:"() => JSONContent"}},getHTML:{defaultValue:null,description:"Get the document as HTML.",name:"getHTML",required:!0,type:{name:"() => string"}},getText:{defaultValue:null,description:"Get the document as text.",name:"getText",required:!0,type:{name:"(options?: { blockSeparator?: string; textSerializers?: Record<string, TextSerializer>; }) => string"}},isEmpty:{defaultValue:null,description:"Check if there is no content.",name:"isEmpty",required:!0,type:{name:"boolean"}},getCharacterCount:{defaultValue:null,description:"Get the number of characters for the current document.\n@deprecated",name:"getCharacterCount",required:!0,type:{name:"() => number"}},destroy:{defaultValue:null,description:"Destroy the editor.",name:"destroy",required:!0,type:{name:"() => void"}},isDestroyed:{defaultValue:null,description:"Check if the editor is already destroyed.",name:"isDestroyed",required:!0,type:{name:"boolean"}},callbacks:{defaultValue:null,description:"",name:"callbacks",required:!0,type:{name:"any"}},on:{defaultValue:null,description:"",name:"on",required:!0,type:{name:'<EventName extends "blur" | "focus" | "beforeCreate" | "create" | "update" | "selectionUpdate" | "transaction" | "destroy">(event: EventName, fn: CallbackFunction<EditorEvents, EventName>) => Editor'}},emit:{defaultValue:null,description:"",name:"emit",required:!0,type:{name:'<EventName extends "blur" | "focus" | "beforeCreate" | "create" | "update" | "selectionUpdate" | "transaction" | "destroy">(event: EventName, ...args: CallbackType<EditorEvents, EventName>) => Editor'}},off:{defaultValue:null,description:"",name:"off",required:!0,type:{name:'<EventName extends "blur" | "focus" | "beforeCreate" | "create" | "update" | "selectionUpdate" | "transaction" | "destroy">(event: EventName, fn?: CallbackFunction<EditorEvents, EventName>) => Editor'}},removeAllListeners:{defaultValue:null,description:"",name:"removeAllListeners",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#uploadImage"]={docgenInfo:uploadImage.__docgenInfo,name:"uploadImage",path:"src/index.tsx#uploadImage"})}catch(__react_docgen_typescript_loader_error){}try{svgToDataURI.displayName="svgToDataURI",svgToDataURI.__docgenInfo={description:"",displayName:"svgToDataURI",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#svgToDataURI"]={docgenInfo:svgToDataURI.__docgenInfo,name:"svgToDataURI",path:"src/index.tsx#svgToDataURI"})}catch(__react_docgen_typescript_loader_error){}try{IconPlus.displayName="IconPlus",IconPlus.__docgenInfo={description:"",displayName:"IconPlus",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconPlus"]={docgenInfo:IconPlus.__docgenInfo,name:"IconPlus",path:"src/index.tsx#IconPlus"})}catch(__react_docgen_typescript_loader_error){}try{IconEdit.displayName="IconEdit",IconEdit.__docgenInfo={description:"",displayName:"IconEdit",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconEdit"]={docgenInfo:IconEdit.__docgenInfo,name:"IconEdit",path:"src/index.tsx#IconEdit"})}catch(__react_docgen_typescript_loader_error){}try{IconBold.displayName="IconBold",IconBold.__docgenInfo={description:"",displayName:"IconBold",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconBold"]={docgenInfo:IconBold.__docgenInfo,name:"IconBold",path:"src/index.tsx#IconBold"})}catch(__react_docgen_typescript_loader_error){}try{IconItalic.displayName="IconItalic",IconItalic.__docgenInfo={description:"",displayName:"IconItalic",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconItalic"]={docgenInfo:IconItalic.__docgenInfo,name:"IconItalic",path:"src/index.tsx#IconItalic"})}catch(__react_docgen_typescript_loader_error){}try{IconUnderline.displayName="IconUnderline",IconUnderline.__docgenInfo={description:"",displayName:"IconUnderline",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconUnderline"]={docgenInfo:IconUnderline.__docgenInfo,name:"IconUnderline",path:"src/index.tsx#IconUnderline"})}catch(__react_docgen_typescript_loader_error){}try{IconStrike.displayName="IconStrike",IconStrike.__docgenInfo={description:"",displayName:"IconStrike",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconStrike"]={docgenInfo:IconStrike.__docgenInfo,name:"IconStrike",path:"src/index.tsx#IconStrike"})}catch(__react_docgen_typescript_loader_error){}try{IconCode.displayName="IconCode",IconCode.__docgenInfo={description:"",displayName:"IconCode",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconCode"]={docgenInfo:IconCode.__docgenInfo,name:"IconCode",path:"src/index.tsx#IconCode"})}catch(__react_docgen_typescript_loader_error){}try{IconLink.displayName="IconLink",IconLink.__docgenInfo={description:"",displayName:"IconLink",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconLink"]={docgenInfo:IconLink.__docgenInfo,name:"IconLink",path:"src/index.tsx#IconLink"})}catch(__react_docgen_typescript_loader_error){}try{IconUnlink.displayName="IconUnlink",IconUnlink.__docgenInfo={description:"",displayName:"IconUnlink",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconUnlink"]={docgenInfo:IconUnlink.__docgenInfo,name:"IconUnlink",path:"src/index.tsx#IconUnlink"})}catch(__react_docgen_typescript_loader_error){}try{IconVisitlink.displayName="IconVisitlink",IconVisitlink.__docgenInfo={description:"",displayName:"IconVisitlink",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconVisitlink"]={docgenInfo:IconVisitlink.__docgenInfo,name:"IconVisitlink",path:"src/index.tsx#IconVisitlink"})}catch(__react_docgen_typescript_loader_error){}try{IconDrag.displayName="IconDrag",IconDrag.__docgenInfo={description:"",displayName:"IconDrag",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconDrag"]={docgenInfo:IconDrag.__docgenInfo,name:"IconDrag",path:"src/index.tsx#IconDrag"})}catch(__react_docgen_typescript_loader_error){}try{IconBlockquote.displayName="IconBlockquote",IconBlockquote.__docgenInfo={description:"",displayName:"IconBlockquote",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconBlockquote"]={docgenInfo:IconBlockquote.__docgenInfo,name:"IconBlockquote",path:"src/index.tsx#IconBlockquote"})}catch(__react_docgen_typescript_loader_error){}try{IconCodeBlock.displayName="IconCodeBlock",IconCodeBlock.__docgenInfo={description:"",displayName:"IconCodeBlock",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconCodeBlock"]={docgenInfo:IconCodeBlock.__docgenInfo,name:"IconCodeBlock",path:"src/index.tsx#IconCodeBlock"})}catch(__react_docgen_typescript_loader_error){}try{IconCopy.displayName="IconCopy",IconCopy.__docgenInfo={description:"",displayName:"IconCopy",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconCopy"]={docgenInfo:IconCopy.__docgenInfo,name:"IconCopy",path:"src/index.tsx#IconCopy"})}catch(__react_docgen_typescript_loader_error){}try{IconAlignLeft.displayName="IconAlignLeft",IconAlignLeft.__docgenInfo={description:"",displayName:"IconAlignLeft",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconAlignLeft"]={docgenInfo:IconAlignLeft.__docgenInfo,name:"IconAlignLeft",path:"src/index.tsx#IconAlignLeft"})}catch(__react_docgen_typescript_loader_error){}try{IconAlignCenter.displayName="IconAlignCenter",IconAlignCenter.__docgenInfo={description:"",displayName:"IconAlignCenter",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconAlignCenter"]={docgenInfo:IconAlignCenter.__docgenInfo,name:"IconAlignCenter",path:"src/index.tsx#IconAlignCenter"})}catch(__react_docgen_typescript_loader_error){}try{IconAlignRight.displayName="IconAlignRight",IconAlignRight.__docgenInfo={description:"",displayName:"IconAlignRight",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconAlignRight"]={docgenInfo:IconAlignRight.__docgenInfo,name:"IconAlignRight",path:"src/index.tsx#IconAlignRight"})}catch(__react_docgen_typescript_loader_error){}try{IconAlignJustify.displayName="IconAlignJustify",IconAlignJustify.__docgenInfo={description:"",displayName:"IconAlignJustify",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconAlignJustify"]={docgenInfo:IconAlignJustify.__docgenInfo,name:"IconAlignJustify",path:"src/index.tsx#IconAlignJustify"})}catch(__react_docgen_typescript_loader_error){}try{IconSuperscript.displayName="IconSuperscript",IconSuperscript.__docgenInfo={description:"",displayName:"IconSuperscript",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconSuperscript"]={docgenInfo:IconSuperscript.__docgenInfo,name:"IconSuperscript",path:"src/index.tsx#IconSuperscript"})}catch(__react_docgen_typescript_loader_error){}try{IconSubscript.displayName="IconSubscript",IconSubscript.__docgenInfo={description:"",displayName:"IconSubscript",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconSubscript"]={docgenInfo:IconSubscript.__docgenInfo,name:"IconSubscript",path:"src/index.tsx#IconSubscript"})}catch(__react_docgen_typescript_loader_error){}try{IconHorizontalRule.displayName="IconHorizontalRule",IconHorizontalRule.__docgenInfo={description:"",displayName:"IconHorizontalRule",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconHorizontalRule"]={docgenInfo:IconHorizontalRule.__docgenInfo,name:"IconHorizontalRule",path:"src/index.tsx#IconHorizontalRule"})}catch(__react_docgen_typescript_loader_error){}try{IconTable.displayName="IconTable",IconTable.__docgenInfo={description:"",displayName:"IconTable",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconTable"]={docgenInfo:IconTable.__docgenInfo,name:"IconTable",path:"src/index.tsx#IconTable"})}catch(__react_docgen_typescript_loader_error){}try{IconCheck.displayName="IconCheck",IconCheck.__docgenInfo={description:"",displayName:"IconCheck",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconCheck"]={docgenInfo:IconCheck.__docgenInfo,name:"IconCheck",path:"src/index.tsx#IconCheck"})}catch(__react_docgen_typescript_loader_error){}try{IconStatus.displayName="IconStatus",IconStatus.__docgenInfo={description:"",displayName:"IconStatus",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconStatus"]={docgenInfo:IconStatus.__docgenInfo,name:"IconStatus",path:"src/index.tsx#IconStatus"})}catch(__react_docgen_typescript_loader_error){}try{IconImage.displayName="IconImage",IconImage.__docgenInfo={description:"",displayName:"IconImage",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconImage"]={docgenInfo:IconImage.__docgenInfo,name:"IconImage",path:"src/index.tsx#IconImage"})}catch(__react_docgen_typescript_loader_error){}try{IconImageAlignLeft.displayName="IconImageAlignLeft",IconImageAlignLeft.__docgenInfo={description:"",displayName:"IconImageAlignLeft",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconImageAlignLeft"]={docgenInfo:IconImageAlignLeft.__docgenInfo,name:"IconImageAlignLeft",path:"src/index.tsx#IconImageAlignLeft"})}catch(__react_docgen_typescript_loader_error){}try{IconImageAlignCenter.displayName="IconImageAlignCenter",IconImageAlignCenter.__docgenInfo={description:"",displayName:"IconImageAlignCenter",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconImageAlignCenter"]={docgenInfo:IconImageAlignCenter.__docgenInfo,name:"IconImageAlignCenter",path:"src/index.tsx#IconImageAlignCenter"})}catch(__react_docgen_typescript_loader_error){}try{IconImageAlignRight.displayName="IconImageAlignRight",IconImageAlignRight.__docgenInfo={description:"",displayName:"IconImageAlignRight",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconImageAlignRight"]={docgenInfo:IconImageAlignRight.__docgenInfo,name:"IconImageAlignRight",path:"src/index.tsx#IconImageAlignRight"})}catch(__react_docgen_typescript_loader_error){}try{IconDelete.displayName="IconDelete",IconDelete.__docgenInfo={description:"",displayName:"IconDelete",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconDelete"]={docgenInfo:IconDelete.__docgenInfo,name:"IconDelete",path:"src/index.tsx#IconDelete"})}catch(__react_docgen_typescript_loader_error){}try{IconMore.displayName="IconMore",IconMore.__docgenInfo={description:"",displayName:"IconMore",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconMore"]={docgenInfo:IconMore.__docgenInfo,name:"IconMore",path:"src/index.tsx#IconMore"})}catch(__react_docgen_typescript_loader_error){}try{IconAddRowBefore.displayName="IconAddRowBefore",IconAddRowBefore.__docgenInfo={description:"",displayName:"IconAddRowBefore",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconAddRowBefore"]={docgenInfo:IconAddRowBefore.__docgenInfo,name:"IconAddRowBefore",path:"src/index.tsx#IconAddRowBefore"})}catch(__react_docgen_typescript_loader_error){}try{IconAddRowAfter.displayName="IconAddRowAfter",IconAddRowAfter.__docgenInfo={description:"",displayName:"IconAddRowAfter",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconAddRowAfter"]={docgenInfo:IconAddRowAfter.__docgenInfo,name:"IconAddRowAfter",path:"src/index.tsx#IconAddRowAfter"})}catch(__react_docgen_typescript_loader_error){}try{IconDeleteRow.displayName="IconDeleteRow",IconDeleteRow.__docgenInfo={description:"",displayName:"IconDeleteRow",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconDeleteRow"]={docgenInfo:IconDeleteRow.__docgenInfo,name:"IconDeleteRow",path:"src/index.tsx#IconDeleteRow"})}catch(__react_docgen_typescript_loader_error){}try{IconAddColumnBefore.displayName="IconAddColumnBefore",IconAddColumnBefore.__docgenInfo={description:"",displayName:"IconAddColumnBefore",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconAddColumnBefore"]={docgenInfo:IconAddColumnBefore.__docgenInfo,name:"IconAddColumnBefore",path:"src/index.tsx#IconAddColumnBefore"})}catch(__react_docgen_typescript_loader_error){}try{IconAddColumnAfter.displayName="IconAddColumnAfter",IconAddColumnAfter.__docgenInfo={description:"",displayName:"IconAddColumnAfter",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconAddColumnAfter"]={docgenInfo:IconAddColumnAfter.__docgenInfo,name:"IconAddColumnAfter",path:"src/index.tsx#IconAddColumnAfter"})}catch(__react_docgen_typescript_loader_error){}try{IconDeleteColumn.displayName="IconDeleteColumn",IconDeleteColumn.__docgenInfo={description:"",displayName:"IconDeleteColumn",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconDeleteColumn"]={docgenInfo:IconDeleteColumn.__docgenInfo,name:"IconDeleteColumn",path:"src/index.tsx#IconDeleteColumn"})}catch(__react_docgen_typescript_loader_error){}try{IconTableHeaderColumn.displayName="IconTableHeaderColumn",IconTableHeaderColumn.__docgenInfo={description:"",displayName:"IconTableHeaderColumn",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconTableHeaderColumn"]={docgenInfo:IconTableHeaderColumn.__docgenInfo,name:"IconTableHeaderColumn",path:"src/index.tsx#IconTableHeaderColumn"})}catch(__react_docgen_typescript_loader_error){}try{IconTableHeaderRow.displayName="IconTableHeaderRow",IconTableHeaderRow.__docgenInfo={description:"",displayName:"IconTableHeaderRow",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconTableHeaderRow"]={docgenInfo:IconTableHeaderRow.__docgenInfo,name:"IconTableHeaderRow",path:"src/index.tsx#IconTableHeaderRow"})}catch(__react_docgen_typescript_loader_error){}try{IconTableHeaderCell.displayName="IconTableHeaderCell",IconTableHeaderCell.__docgenInfo={description:"",displayName:"IconTableHeaderCell",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconTableHeaderCell"]={docgenInfo:IconTableHeaderCell.__docgenInfo,name:"IconTableHeaderCell",path:"src/index.tsx#IconTableHeaderCell"})}catch(__react_docgen_typescript_loader_error){}try{IconMergeCell.displayName="IconMergeCell",IconMergeCell.__docgenInfo={description:"",displayName:"IconMergeCell",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconMergeCell"]={docgenInfo:IconMergeCell.__docgenInfo,name:"IconMergeCell",path:"src/index.tsx#IconMergeCell"})}catch(__react_docgen_typescript_loader_error){}try{IconSplitCell.displayName="IconSplitCell",IconSplitCell.__docgenInfo={description:"",displayName:"IconSplitCell",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconSplitCell"]={docgenInfo:IconSplitCell.__docgenInfo,name:"IconSplitCell",path:"src/index.tsx#IconSplitCell"})}catch(__react_docgen_typescript_loader_error){}try{IconDeleteTable.displayName="IconDeleteTable",IconDeleteTable.__docgenInfo={description:"",displayName:"IconDeleteTable",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconDeleteTable"]={docgenInfo:IconDeleteTable.__docgenInfo,name:"IconDeleteTable",path:"src/index.tsx#IconDeleteTable"})}catch(__react_docgen_typescript_loader_error){}try{IconExcalidraw.displayName="IconExcalidraw",IconExcalidraw.__docgenInfo={description:"",displayName:"IconExcalidraw",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconExcalidraw"]={docgenInfo:IconExcalidraw.__docgenInfo,name:"IconExcalidraw",path:"src/index.tsx#IconExcalidraw"})}catch(__react_docgen_typescript_loader_error){}try{IconZoomIn.displayName="IconZoomIn",IconZoomIn.__docgenInfo={description:"",displayName:"IconZoomIn",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconZoomIn"]={docgenInfo:IconZoomIn.__docgenInfo,name:"IconZoomIn",path:"src/index.tsx#IconZoomIn"})}catch(__react_docgen_typescript_loader_error){}try{IconZoomOut.displayName="IconZoomOut",IconZoomOut.__docgenInfo={description:"",displayName:"IconZoomOut",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconZoomOut"]={docgenInfo:IconZoomOut.__docgenInfo,name:"IconZoomOut",path:"src/index.tsx#IconZoomOut"})}catch(__react_docgen_typescript_loader_error){}try{IconCenter.displayName="IconCenter",IconCenter.__docgenInfo={description:"",displayName:"IconCenter",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconCenter"]={docgenInfo:IconCenter.__docgenInfo,name:"IconCenter",path:"src/index.tsx#IconCenter"})}catch(__react_docgen_typescript_loader_error){}try{IconFontColor.displayName="IconFontColor",IconFontColor.__docgenInfo={description:"",displayName:"IconFontColor",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconFontColor"]={docgenInfo:IconFontColor.__docgenInfo,name:"IconFontColor",path:"src/index.tsx#IconFontColor"})}catch(__react_docgen_typescript_loader_error){}try{IconBackgroundColor.displayName="IconBackgroundColor",IconBackgroundColor.__docgenInfo={description:"",displayName:"IconBackgroundColor",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconBackgroundColor"]={docgenInfo:IconBackgroundColor.__docgenInfo,name:"IconBackgroundColor",path:"src/index.tsx#IconBackgroundColor"})}catch(__react_docgen_typescript_loader_error){}try{IconHelpCircle.displayName="IconHelpCircle",IconHelpCircle.__docgenInfo={description:"",displayName:"IconHelpCircle",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconHelpCircle"]={docgenInfo:IconHelpCircle.__docgenInfo,name:"IconHelpCircle",path:"src/index.tsx#IconHelpCircle"})}catch(__react_docgen_typescript_loader_error){}try{IconRedo.displayName="IconRedo",IconRedo.__docgenInfo={description:"",displayName:"IconRedo",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconRedo"]={docgenInfo:IconRedo.__docgenInfo,name:"IconRedo",path:"src/index.tsx#IconRedo"})}catch(__react_docgen_typescript_loader_error){}try{IconUndo.displayName="IconUndo",IconUndo.__docgenInfo={description:"",displayName:"IconUndo",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconUndo"]={docgenInfo:IconUndo.__docgenInfo,name:"IconUndo",path:"src/index.tsx#IconUndo"})}catch(__react_docgen_typescript_loader_error){}try{IconPriority.displayName="IconPriority",IconPriority.__docgenInfo={description:"",displayName:"IconPriority",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconPriority"]={docgenInfo:IconPriority.__docgenInfo,name:"IconPriority",path:"src/index.tsx#IconPriority"})}catch(__react_docgen_typescript_loader_error){}try{IconProgress.displayName="IconProgress",IconProgress.__docgenInfo={description:"",displayName:"IconProgress",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconProgress"]={docgenInfo:IconProgress.__docgenInfo,name:"IconProgress",path:"src/index.tsx#IconProgress"})}catch(__react_docgen_typescript_loader_error){}try{IconMind.displayName="IconMind",IconMind.__docgenInfo={description:"",displayName:"IconMind",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconMind"]={docgenInfo:IconMind.__docgenInfo,name:"IconMind",path:"src/index.tsx#IconMind"})}catch(__react_docgen_typescript_loader_error){}try{IconMindTemplate.displayName="IconMindTemplate",IconMindTemplate.__docgenInfo={description:"",displayName:"IconMindTemplate",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconMindTemplate"]={docgenInfo:IconMindTemplate.__docgenInfo,name:"IconMindTemplate",path:"src/index.tsx#IconMindTemplate"})}catch(__react_docgen_typescript_loader_error){}try{IconMindTheme.displayName="IconMindTheme",IconMindTheme.__docgenInfo={description:"",displayName:"IconMindTheme",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconMindTheme"]={docgenInfo:IconMindTheme.__docgenInfo,name:"IconMindTheme",path:"src/index.tsx#IconMindTheme"})}catch(__react_docgen_typescript_loader_error){}try{IconFlow.displayName="IconFlow",IconFlow.__docgenInfo={description:"",displayName:"IconFlow",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconFlow"]={docgenInfo:IconFlow.__docgenInfo,name:"IconFlow",path:"src/index.tsx#IconFlow"})}catch(__react_docgen_typescript_loader_error){}try{IconHeading1.displayName="IconHeading1",IconHeading1.__docgenInfo={description:"",displayName:"IconHeading1",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconHeading1"]={docgenInfo:IconHeading1.__docgenInfo,name:"IconHeading1",path:"src/index.tsx#IconHeading1"})}catch(__react_docgen_typescript_loader_error){}try{IconHeading2.displayName="IconHeading2",IconHeading2.__docgenInfo={description:"",displayName:"IconHeading2",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconHeading2"]={docgenInfo:IconHeading2.__docgenInfo,name:"IconHeading2",path:"src/index.tsx#IconHeading2"})}catch(__react_docgen_typescript_loader_error){}try{IconHeading3.displayName="IconHeading3",IconHeading3.__docgenInfo={description:"",displayName:"IconHeading3",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconHeading3"]={docgenInfo:IconHeading3.__docgenInfo,name:"IconHeading3",path:"src/index.tsx#IconHeading3"})}catch(__react_docgen_typescript_loader_error){}try{IconHeading4.displayName="IconHeading4",IconHeading4.__docgenInfo={description:"",displayName:"IconHeading4",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconHeading4"]={docgenInfo:IconHeading4.__docgenInfo,name:"IconHeading4",path:"src/index.tsx#IconHeading4"})}catch(__react_docgen_typescript_loader_error){}try{IconColumns.displayName="IconColumns",IconColumns.__docgenInfo={description:"",displayName:"IconColumns",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconColumns"]={docgenInfo:IconColumns.__docgenInfo,name:"IconColumns",path:"src/index.tsx#IconColumns"})}catch(__react_docgen_typescript_loader_error){}try{IconSyncBlock.displayName="IconSyncBlock",IconSyncBlock.__docgenInfo={description:"",displayName:"IconSyncBlock",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IconSyncBlock"]={docgenInfo:IconSyncBlock.__docgenInfo,name:"IconSyncBlock",path:"src/index.tsx#IconSyncBlock"})}catch(__react_docgen_typescript_loader_error){}},"./src/prosemirror/prosemirror-utils/selection.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Kk:()=>findParentNode});const findParentNode=predicate=>({$from})=>findParentNodeClosestToPos($from,predicate),findParentNodeClosestToPos=($pos,predicate)=>{for(let i=$pos.depth;i>0;i--){const node=$pos.node(i);if(predicate(node))return{pos:i>0?$pos.before(i):0,start:$pos.start(i),depth:i,node}}}},"./src/utilities/copy/copy-to-clipboard.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var deselectCurrent=__webpack_require__("./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js");module.exports=function copy(text,onCopy){var range,selection,mark;if(deselectCurrent(),range=document.createRange(),selection=document.getSelection(),(mark=document.createElement("span")).textContent=text,mark.style.all="unset",mark.style.position="fixed",mark.style.top=0,mark.style.clip="rect(0, 0, 0, 0)",mark.style.whiteSpace="pre",mark.style.webkitUserSelect="text",mark.style.MozUserSelect="text",mark.style.msUserSelect="text",mark.style.userSelect="text",mark.addEventListener("copy",(function(e){var data=[];"string"==typeof text?data=[{format:"text/plain",text}]:Array.isArray(text)?text.forEach((function(item){data.push({format:item.format||"text/plain",text:item.text||item})})):data.push({format:"text/plain",text}),data.forEach((function(item){e.clipboardData.setData(item.format,item.text)})),e.preventDefault(),onCopy&&onCopy()})),document.body.appendChild(mark),range.selectNodeContents(mark),selection.addRange(range),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");return!0,true}},"./src/utilities/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{uZ:()=>clamp,JG:()=>copy,Bc:()=>copyNode,IK:()=>deleteNode,zT:()=>getNodeAtPos,Ig:()=>isNodeActive,oD:()=>svgToDataURI,P2:()=>lodash_throttle_default(),Ix:()=>uploadImage});__webpack_require__("./node_modules/.pnpm/requestidlecallback-polyfill@1.0.2/node_modules/requestidlecallback-polyfill/index.js");function clamp(val,min,max){return val<min?min:val>max?max:val}var components=__webpack_require__("./src/components/index.tsx"),dist=__webpack_require__("./node_modules/.pnpm/prosemirror-model@1.18.1/node_modules/prosemirror-model/dist/index.js"),prosemirror_view_dist=__webpack_require__("./node_modules/.pnpm/prosemirror-view@1.26.2/node_modules/prosemirror-view/dist/index.js"),copy_to_clipboard=__webpack_require__("./src/utilities/copy/copy-to-clipboard.js"),copy_to_clipboard_default=__webpack_require__.n(copy_to_clipboard);function copy(text){return copy_to_clipboard_default()(text,(()=>components.FN.success("复制成功")))}const copyNode=(editor,extensionName)=>{let targetNode=null;const{state}=editor,$pos=state.selection.$anchor,currentNode=state.selection.node;if(currentNode&&currentNode.type.name===extensionName)targetNode=currentNode;else if($pos.depth)for(let d=$pos.depth;d>0;d--){const node=$pos.node(d);node.type.name===extensionName&&(targetNode=node)}if(targetNode){const slice=new dist.p2(dist.HY.fromArray([targetNode]),0,0),{dom,text}=(0,prosemirror_view_dist.aV)(editor.view,slice),data=[{format:"text/html",text:dom.innerHTML}];text&&data.push({format:"text/plain",text}),copy(data)}},deleteNode=(editor,extensionName)=>{const{state}=editor,$pos=state.selection.$anchor;if($pos.depth)for(let d=$pos.depth;d>0;d--){if($pos.node(d).type.name===extensionName)return editor.dispatchTransaction&&editor.dispatchTransaction(state.tr.delete($pos.before(d),$pos.after(d)).scrollIntoView()),!0}else{const node=state.selection.node;node&&node.type.name===extensionName&&editor.chain().deleteSelection().run()}return!1};function getNodeAtPos(state,pos){const $head=state.doc.resolve(pos);let node=null;for(let d=$head.depth;d>0;d--)node=$head.node(d);return node}function isNodeActive(editor,extensionName){const selection=editor.state.selection,node=selection?.node||selection.$head.node(selection.$head.depth);return node?node.type.name===extensionName:editor.isActive(extensionName)}var index_modern=__webpack_require__("./node_modules/.pnpm/browser-fs-access@0.31.1/node_modules/browser-fs-access/dist/index.modern.js"),provider=__webpack_require__("./src/editor/provider.ts");async function uploadImage(editor){const blob=await(0,index_modern.I$)({mimeTypes:["image/*"]}),editorProvider=(0,provider.z)(editor),url=await editorProvider.fileProvider.uploadFile(blob),size=await function getImageNaturalSize(url){return new Promise(((resolve,reject)=>{const img=new Image;img.onload=function(){resolve({width:img.naturalWidth,height:img.naturalHeight,aspectRatio:img.naturalWidth/img.naturalHeight})},img.onerror=function(err){reject(err)},img.src=url}))}(url);return{url,...size}}var lodash_throttle=__webpack_require__("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),lodash_throttle_default=__webpack_require__.n(lodash_throttle);function replaceAll(str,find,replace){return str.replace(new RegExp(function escapeRegExp(str){return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")}(find),"g"),replace)}function svgToDataURI(svg){if(!svg)return"";let encoded=svg.replace(/\s+/g," ");encoded=replaceAll(encoded,"%","%25"),encoded=replaceAll(encoded,"> <","><"),encoded=replaceAll(encoded,"; }",";}"),encoded=replaceAll(encoded,"<","%3c"),encoded=replaceAll(encoded,">","%3e"),encoded=replaceAll(encoded,'"',"'"),encoded=replaceAll(encoded,"#","%23"),encoded=replaceAll(encoded,"{","%7b"),encoded=replaceAll(encoded,"}","%7d"),encoded=replaceAll(encoded,"|","%7c"),encoded=replaceAll(encoded,"^","%5e"),encoded=replaceAll(encoded,"`","%60"),encoded=replaceAll(encoded,"@","%40");return`data:image/svg+xml;charset=UTF-8,${encoded}`}},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/.pnpm/@storybook+react@6.5.12_ea7vyhsru3sbhffz7or3g7aihy/node_modules/@storybook/react/dist/esm/client/index.js")},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stories/collaboration.stories.tsx":"./src/stories/collaboration.stories.tsx","./stories/editor.stories.tsx":"./src/stories/editor.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"?8654":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/.pnpm/@storybook+react@6.5.12_ea7vyhsru3sbhffz7or3g7aihy/node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[76],(()=>(__webpack_exec__("./node_modules/.pnpm/@storybook+core-client@6.5.12_iy7iytkoxyxdnuewfmklpfuxvu/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/.pnpm/@storybook+core-client@6.5.12_iy7iytkoxyxdnuewfmklpfuxvu/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/.pnpm/@storybook+react@6.5.12_ea7vyhsru3sbhffz7or3g7aihy/node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/.pnpm/@storybook+react@6.5.12_ea7vyhsru3sbhffz7or3g7aihy/node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/.pnpm/@storybook+addon-links@6.5.12_sfoxds7t5ydpegc3knd667wn6m/node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/.pnpm/@storybook+addon-docs@6.5.12_ru4c2bzlhccqj2k73yaw4l7ijy/node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/.pnpm/@storybook+addon-actions@6.5.12_sfoxds7t5ydpegc3knd667wn6m/node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/.pnpm/@storybook+addon-backgrounds@6.5.12_sfoxds7t5ydpegc3knd667wn6m/node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/.pnpm/@storybook+addon-measure@6.5.12_sfoxds7t5ydpegc3knd667wn6m/node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/.pnpm/@storybook+addon-outline@6.5.12_sfoxds7t5ydpegc3knd667wn6m/node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);
//# sourceMappingURL=main.77dfa884.iframe.bundle.js.map