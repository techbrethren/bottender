import Bot from './Bot';
import LINEConnector from './LINEConnector';

export default class LINEBot extends Bot {
  constructor({ id, accessToken, channelSecret, sessionHandler }) {
    const connector = new LINEConnector({ accessToken, channelSecret });
    super({ id, connector, sessionHandler });
  }
}