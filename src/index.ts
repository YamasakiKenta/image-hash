import { default as DifferenceHashBuilder } from './DifferenceHashBuilder';
import { default as HexadecimalToHash } from './HexadecimalToHash';
import { default as Hash } from './Hash';
import { lanczos } from '@rgba-image/lanczos';

interface globalThis {
    hash: any,
}
declare var global: globalThis

global.hash = {
    DifferenceHashBuilder,
    HexadecimalToHash,
    Hash,
    lanczos,
}