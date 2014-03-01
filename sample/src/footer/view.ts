/// <reference path="../../../build/showv.d.ts" />

module Sample {
    export class FooterView extends showv.View {
        constructor(){
            super();
        }
        render(): FooterView {
            this.$el.append(
                '<h2>This is Footer</h2>'
            );
            return this;
        }
    }
}
