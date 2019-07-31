npm run generator-client
echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > build/typescript/.npmrc
cd build/typescript && npm publish --access=public
cd -
cd build/rust && cargo package && cargo publish --token $CARGO_TOKEN
