loadData = LOAD 'example' as (data:chararray);
loadInput = LOAD 'textInput/textInput.txt' AS (inputs:chararray);

sentences = FOREACH loadData GENERATE FLATTEN(STRSPLIT(data, '\\u007B\\u005F\\u007D')) AS (filename:chararray, sentenceNum:chararray, sentence:chararray);

matchDataAndInput = JOIN loadInput BY inputs, sentences BY sentence;
showOutput = FOREACH matchDataAndInput GENERATE filename, sentenceNum, sentence;

store showOutput into 'output';
