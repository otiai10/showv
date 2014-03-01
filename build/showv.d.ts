/// <reference path="../definitions/jquery.d.ts" />
declare module showv {
    interface IViewCreateOptions {
        tagName?: string;
        className?: string;
        id?: string;
        delegate?: boolean;
        $el?: JQuery;
    }
    interface IEventSelectorPair {
        rawKey: string;
        evName: string;
        selector: string;
    }
    class View {
        public tagName: string;
        public className: string;
        public id: string;
        public delegate: boolean;
        public $el: JQuery;
        constructor(options?: IViewCreateOptions);
        private ensureOptions(options);
        private ensureElemens();
        public events(): Object;
        public delegateEvents(): View;
        private splitEventAndSelector(eventNameAndSelector);
        public render(): View;
    }
}
