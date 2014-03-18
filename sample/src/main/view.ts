/// <reference path="../../../build/showv.d.ts" />
/// <reference path="./usage.view.ts" />
/// <reference path="./features.view.ts" />

module Sample {
    export class MainView extends showv.View {

        private usage: UsageView;
        private features: FeaturesView;

        constructor(){
            super();
            this.usage = new UsageView();
            this.features = new FeaturesView();
        }
        render(): MainView {
            this.$el.append(
                this.features.render().$el,
                this.usage.render().$el
            );
            return this;
        }
    }
}
