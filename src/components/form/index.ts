import { Form as Component } from './form.component';
import { applyHydration } from '@/utility/hydrate.utility';

/* -----------------------------------
 *
 * Hydrate
 *
 * -------------------------------- */

const Form = applyHydration('Form', Component);

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Form };
