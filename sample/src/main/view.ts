/// <reference path="../../../build/showv.d.ts" />

module Sample {
    export class MainView extends showv.View {
        constructor(){
            super();
        }
        render(): MainView {
            this.$el.append(
                '<div>This is main</div>'
            );
            return this;
        }
    }
}
