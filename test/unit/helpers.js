import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

import sinon from 'sinon';

import Promise from 'bluebird';
import _sinonAsPromised from 'sinon-as-promised';
_sinonAsPromised(Promise);

import sinonChai from 'sinon-chai';

global.should = chai.should();
global.expect = chai.expect;
global.sinon = sinon;

chai.use(chaiAsPromised);
chai.use(sinonChai);
