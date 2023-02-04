// Netflix e Spotify

// Conceito streams 
// enquanto o arquivo esta sendo enviado pro servidor eu ja consigo processar os dados desse arquivo
// Readable Streams / Writable streams enviando uma informaçao aos poucos

// process.stdin.pipe(process.stdout)
import{Readable, Writable, Transform} from 'node:stream'


class InverseNumberStream extends Transform{
    _transform(chunk, encoding, callback){
        const transform = Number(chunk.toString() * - 1)
        callback(null,Buffer.from(String(transform)))
    }
}

class MultiplyByStream extends Writable{
    _write(chunk, encoding, callback){
        // console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

new OneToHundredStream()
.pipe(new InverseNumberStream())
.pipe(new MultiplyByStream())