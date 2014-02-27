/// <reference path="../definitions/jquery.d.ts" />

module showv {
    export interface IViewCreateOptions {
        tagName?:   string;
        className?: string;
        id?:        string;
        delegate?:  boolean;
        $el?:       JQuery;
    }
    export interface IEventSelectorPair {
        rawKey:   string;
        evName:   string;
        selector: string;
    }
    export class View {

        tagName:   string = 'div';
        className: string = '';
        id:        string = '';
        delegate: boolean = true;

        $el:       JQuery;

        constructor(options: IViewCreateOptions = {}) {
            this.ensureOptions(options);
            this.ensureElemens();
            this.delegateEvents();
        }

        private ensureOptions(options: IViewCreateOptions): View {
            this.tagName   = options.tagName || 'div';
            this.className = options.className || '';
            this.id        = options.id || '';
            this.delegate  = (options.delegate == null) ? true : options.delegate;
            this.$el       = options.$el || null;
            return this;
        }
        private ensureElemens(): View {
            this.$el = this.$el || $('<' + this.tagName + '>').attr({
                id:    this.id,
                class: this.className
            });
            return this;
        }

        // should be override
        events(): Object { return {}; }

        delegateEvents(): View {
            var _events = this.events();
            $.map(_events, (eventFunctionName, eventNameAndSelector) => {
                var pair = this.splitEventAndSelector(eventNameAndSelector);
                var fn = (function(_this){
                    return function(){
                        _this[_events[pair.rawKey]].apply(_this);
                    }
                })(this);
                this.$el.on.call(this.$el, pair.evName, pair.selector, fn);
            });
            return this;
        }
        // TODO: Exception handling
        private splitEventAndSelector(eventNameAndSelector: string): IEventSelectorPair {
            var splits = eventNameAndSelector.split(' ');
            return {
                rawKey: eventNameAndSelector,
                evName: splits[0],
                selector: splits[1]
            };
        }

        render(): View {
            return this;
        }
    }
}
