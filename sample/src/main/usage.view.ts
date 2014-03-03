/// <reference path="../../../build/showv.d.ts" />
/// <reference path="./sourcecode.view.ts" />

module Sample {
    export class UsageView extends SourcecodeView {
        constructor(){
            super(
                "Usage",
                // use template engine, please
                "/// &lt;reference path=\"your/path/to/showv.d.ts\" /&gt;\n"
                +"module YourApp {\n"
                +"  export class YourView extends showv.View {\n"
                +"      constructor() {\n"
                +"          super();\n"
                +"      }\n"
                +"  }\n"
                +"}"
            );
        }
        render(): UsageView {
            return super.render();
        }
    }
}
