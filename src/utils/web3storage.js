import { Web3Storage } from 'web3.storage/dist/bundle.esm.min';

function getAccessToken() {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDA5Mjg3ZWU0MGE1NjFhMTY3ZTFEOEU4MUFCZjVkZjhjODU3M2I4OEEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjMzODI0MDYzOTksIm5hbWUiOiJkYXJrbWF0dGVyIn0.kKDncsRek_etdQLkafpnGKm-frgMqeweM98pdKLR220";
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

function makeFileObjects(obj) {
  const buffer = Buffer.from(JSON.stringify(obj));
  const files = [new File([buffer], 'game.json')];
  return files;
}

async function storeFiles(files) {
  const client = makeStorageClient();
  const cid = await client.put(files);
  return cid;
}

export { makeFileObjects, storeFiles, getAccessToken };
