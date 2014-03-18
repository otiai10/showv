/// <reference path="../../../definitions/jquery.d.ts" />
/// <reference path="../../../build/showv.d.ts" />
/// <reference path="./feature.list.view.ts" />

module Sample {
    export class FeaturesView extends showv.View {
        private featureList = [
            {title:"minimum"},
            {title:"extensible"}
        ];
        private featureListView = FeatureListView;
        constructor(){
            super();
        }
        render(): FeaturesView {
            var features = makeupFeatureCollection(this.featureList);
            this.$el.append(
                '<a class="linky" id="Features" href="#Features"><h2>Features</h2></a>',
                // ここをcollectionにする
                new this.featureListView(this.featureList[0]).render().$el,
                new this.featureListView(this.featureList[1]).render().$el
            );
            return this;
        }
    }

    export class Feature {
        public title: string;
        constructor(featureObject: Object) {
            this.title = featureObject['title'];
        }
    }
    export function makeupFeatureCollection(featureList: Object[]): Feature[] {
        return $.map(featureList, (featureObject: Object) => {
            return new Feature(featureObject);
        });
    }
}
