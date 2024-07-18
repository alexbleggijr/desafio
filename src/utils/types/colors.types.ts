import type {
  DsColorAula,
  DsColorBrand,
  DsColorFeedback,
  DsColorMaterial,
  DsColorNeutral,
  DsColorProvas,
  DsColorQuestoes,
  DsColorRevalida,
} from '@utils/enums/colors.enums';

import type { DsLiteralUnion } from './utils.types';

export type DsColors =
  | `${DsColorBrand}`
  | `${DsColorFeedback}`
  | `${DsColorNeutral}`;

export type DsColorsMedsoft =
  | `${DsColorAula}`
  | `${DsColorMaterial}`
  | `${DsColorQuestoes}`
  | `${DsColorRevalida}`
  | `${DsColorProvas}`;

export type DsColor = DsLiteralUnion<DsColors | DsColorsMedsoft, string>;
