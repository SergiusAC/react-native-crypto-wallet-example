import 'ethers/dist/shims.js';
import { withPersistStore } from './src/utils/hoc/withPersistStore';
import { withFonts } from './src/utils/hoc/withFonts';
import { withNativeBaseRoot } from './src/utils/hoc/withNativeBaseRoot';
import AppContainer from './src/navigation';

export default withNativeBaseRoot(withFonts(withPersistStore(AppContainer)));
