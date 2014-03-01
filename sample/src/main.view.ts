/// <reference path="../../build/showv.d.ts" />

module Sample {
    export class MainView extends showv.View {
        constructor(){
            super({
                id: 'main'
            });
        }

        render(): MainView {
            this.$el.append(
                '<h1>Showv</h1>',
                '<h2>The Simplest View Framework for TyepScript.</h2>'
            );
            return this;
        }
    }
}
