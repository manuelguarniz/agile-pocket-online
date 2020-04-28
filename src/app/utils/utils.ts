import { ElementRef } from '@angular/core';

export class Utils {
  public static scrollToTop(scrollDuration: number) {
    const cosParameter = window.scrollY / 2;
    let scrollCount = 0;
    let oldTimestamp = performance.now();
    const step = (newTimestamp: number) => {
      scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
      if (scrollCount >= Math.PI) {
        window.scrollTo(0, 0);
      }
      if (window.scrollY === 0) {
        return;
      }
      window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }

  public static scrollElementToTop(element: ElementRef<any>, scrollDuration: number) {
    const elementHtml = element.nativeElement;
    const cosParameter = (elementHtml.scrollHeight - elementHtml.scrollY) / 2;
    let scrollCount = 0;
    let oldTimestamp = performance.now();
    const step = (newTimestamp: number) => {
      scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
      if (scrollCount >= Math.PI) {
        elementHtml.scrollTo(0, 0);
      }
      if (elementHtml.scrollY === 0) {
        return;
      }
      elementHtml.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }

}
