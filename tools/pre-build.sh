#!/bin/sh

cp ./closure-templates-for-javascript-latest/soyutils.js ../scripts/
java -jar closure-templates-for-javascript-latest/SoyToJsSrcCompiler.jar  --outputPathFormat ../scripts/about.js ../templates/about.soy
java -jar closure-templates-for-javascript-latest/SoyToJsSrcCompiler.jar  --outputPathFormat ../scripts/contacts.js ../templates/contacts.soy
java -jar closure-templates-for-javascript-latest/SoyToJsSrcCompiler.jar  --outputPathFormat ../scripts/news.js ../templates/news.soy
java -jar closure-templates-for-javascript-latest/SoyToJsSrcCompiler.jar  --outputPathFormat ../scripts/register.js ../templates/register.soy
java -jar closure-templates-for-javascript-latest/SoyToJsSrcCompiler.jar  --outputPathFormat ../scripts/index.js ../templates/index.soy
