
export interface Properties {
  POTEAU_ID_POT: number;
  PANNEAU_ID_PAN: number;
  PANNEAU_ID_RPA: number;
  DESCRIPTION_RPA: string;
  CODE_RPA: string;
  FLECHE_PAN: number;
  TOPONYME_PAN: string;
  POTEAU_VERSION_POT: number; //
  DATE_CONCEPTION_POT: number; //
  PAS_SUR_RUE: string; //
  DESCRIPTION_REP: string; //
  DESCRIPTION_RTP: string; //
  X_EPSG32188: number;
  Y_EPSG32188: number;
  Longitude: number;
  Latitude: number;
  DESCRIPTION_CAT: string;
  NOM_ARR: string;

}

/*
export class Properties {
  private POTEAU_ID_POT: number;
  private PANNEAU_ID_PAN: number;
  private PANNEAU_ID_RPA: number;
  private DESCRIPTION_RPA: string;
  private CODE_RPA: string;
  private FLECHE_PAN: number;
  private TOPONYME_PAN: string;
  private POTEAU_VERSION_POT: number; //
  private DATE_CONCEPTION_POT: number; //
  private PAS_SUR_RUE: string; //
  private DESCRIPTION_REP: string; //
  private DESCRIPTION_RTP: string; //
  private X_EPSG32188: number;
  private Y_EPSG32188: number;
  private Longitude: number;
  private Latitude: number;
  private DESCRIPTION_CAT: string;
  private NOM_ARR: string;

  public constructor(POTEAU_ID_POT: number,
                     PANNEAU_ID_PAN: number,
                     PANNEAU_ID_RPA: number,
                     DESCRIPTION_RPA: string,
                     CODE_RPA: string,
                     FLECHE_PAN: number,
                     TOPONYME_PAN: string,
                     POTEAU_VERSION_POT: number,
                     DATE_CONCEPTION_POT: number,
                     PAS_SUR_RUE: string,
                     DESCRIPTION_REP: string,
                     DESCRIPTION_RTP: string,
                     X_EPSG32188: number,
                     Y_EPSG32188: number,
                     Longitude: number,
                     Latitude: number,
                     DESCRIPTION_CAT: string,
                     NOM_ARR: string) {
  this.POTEAU_ID_POT = POTEAU_ID_POT;
  this.PANNEAU_ID_PAN = PANNEAU_ID_PAN;
  this.PANNEAU_ID_RPA = PANNEAU_ID_RPA;
  this.DESCRIPTION_RPA = DESCRIPTION_RPA;
  this.CODE_RPA = CODE_RPA;
  this.FLECHE_PAN = FLECHE_PAN;
  this.TOPONYME_PAN = TOPONYME_PAN;
  this.POTEAU_VERSION_POT = POTEAU_VERSION_POT;
  this.DATE_CONCEPTION_POT = DATE_CONCEPTION_POT;
  this.PAS_SUR_RUE = PAS_SUR_RUE;
  this.DESCRIPTION_REP = DESCRIPTION_REP;
  this.DESCRIPTION_RTP = DESCRIPTION_RTP;
  this.X_EPSG32188 = X_EPSG32188;
  this.Y_EPSG32188 = Y_EPSG32188;
  this.Longitude = Longitude;
  this.Latitude = Latitude;
  this.DESCRIPTION_CAT = DESCRIPTION_CAT;
  this.NOM_ARR = NOM_ARR;
  }

  public getCode(): string {
    return this.CODE_RPA;
  }

  public getLongitue(): number {
    return this.Longitude;
  }

  public getLatitude(): number {
    return this.Latitude;
  }

}
*/
