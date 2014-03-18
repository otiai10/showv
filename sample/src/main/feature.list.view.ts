/// <reference path="../../../build/showv.d.ts" />


module Sample {
    export class FeatureListView extends showv.View {
        constructor(public feature: Feature) {
            super({
                tagName: 'li'
            });
        }
        render(): FeatureListView {
            this.$el.append(
                "hge"
            );
            return this;
        }
    }
}