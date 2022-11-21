import { CONFIG } from '../config';
const { NETWORK_CONFIG } = CONFIG;

export const SUPPORTED_NETWORKS = [19];

export const rpcUrls = {
  19: "https://sgb.ftso.com.au/ext/bc/C/rpc",
};


export const networkNames = {
  19: 'Songbird',
};

export const pgn2gifURL = 'https://pgn2gif.glitch.me/thing';

export const CREATE_MATCH = 'CREATE_MATCH';
export const JOIN_MATCH = 'JOIN_MATCH';

export const GAME_OUTCOME = {
  PLAYER_ONE: 'playerOne',
  PLAYER_TWO: 'playerTwo',
  DRAW: 'draw',
};
