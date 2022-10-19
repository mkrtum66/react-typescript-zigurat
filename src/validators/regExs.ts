// export const E_MAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const PASS_NUM = /\d/;

export const PASS_CHAR = /(?=.*[-!@#$%^&._*])/;

export const PASS_LEN = /^.{8,}$/;

export const NAME = /^[a-z ,.'-]+$/i;

export const PASS = new RegExp(`${PASS_NUM.source}|${PASS_CHAR.source}|${PASS_LEN.source}`);

export const TICKER = /^[A-Z, a-z]{1,7}$/;
