/// <reference path="../../../build/showv.d.ts" />

module Sample {
    export class HeaderView extends showv.View {
        constructor(){
            super();
        }
        render(): HeaderView {
            this.$el.append(
                '<h1>Showv <span>The Simplest View Framework for TypeScript</span></h1>'
            );
            return this;
        }
    }
}
