import { color, Options } from './colors';
import { markdown, MDOptions } from './md';
import { Style } from './model';

export function style(text: string, options: Options | Style | MDOptions): string {
    if (text.length === 0) {
        return text;
    }
    if ('font' in options || 'background' in options || 'effects' in options) {
        return color(text, options);
    }
    if ('bold' in options || 'italic' in options || 'mono' in options || 'link' in options) {
        return markdown(text, options);
    }
    return text;
}

// if (text.length === 0) {
//     return text;
// }
// if ('font' in options || 'background' in options || 'effects' in options) {
//     return color(text, options);
// }
// if ('bold' in options || 'italic' in options || 'mono' in options || 'link' in options) {
//     return markdown(text, options);
// }
// return text;
// }
