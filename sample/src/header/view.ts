/// <reference path="../../../build/showv.d.ts" />

module Sample {
    export class HeaderView extends showv.View {
        constructor(){
            super();
        }
        render(): HeaderView {
            this.$el.append(
                '<h1>Showv</h1>',
                '<h2>The Simplest View Framework for TypeScript.</h2>'
            );
            return this;
        }
    }
}
