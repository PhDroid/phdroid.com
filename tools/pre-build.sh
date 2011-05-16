#!/bin/sh

cp ./closure-templates-for-javascript-latest/soyutils.js ../scripts/
java -jar closure-templates-for-javascript-latest/SoyToJsSrcCompiler.jar  --outputPathFormat ../scripts/index.js ../templates/index.soy
