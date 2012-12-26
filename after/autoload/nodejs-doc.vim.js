{
  "globals": {
    "console": [
      {
        "word": "assert(",
        "info": "console.assert(expression, [message])",
        "kind": "f"
      },
      {
        "word": "dir(",
        "info": "console.dir(obj)",
        "kind": "f"
      },
      {
        "word": "error(",
        "info": "console.error([data], [...])",
        "kind": "f"
      },
      {
        "word": "info(",
        "info": "console.info([data], [...])",
        "kind": "f"
      },
      {
        "word": "log(",
        "info": "console.log([data], [...])",
        "kind": "f"
      },
      {
        "word": "time(",
        "info": "console.time(label)",
        "kind": "f"
      },
      {
        "word": "timeEnd(",
        "info": "console.timeEnd(label)",
        "kind": "f"
      },
      {
        "word": "trace(",
        "info": "console.trace(label)",
        "kind": "f"
      },
      {
        "word": "warn(",
        "info": "console.warn([data], [...])",
        "kind": "f"
      }
    ],
    "process": [
      {
        "word": "abort(",
        "info": "process.abort()",
        "kind": "f"
      },
      {
        "word": "arch",
        "kind": "m"
      },
      {
        "word": "argv",
        "kind": "m"
      },
      {
        "word": "chdir(",
        "info": "process.chdir(directory)",
        "kind": "f"
      },
      {
        "word": "config",
        "kind": "m"
      },
      {
        "word": "cwd(",
        "info": "process.cwd()",
        "kind": "f"
      },
      {
        "word": "env",
        "kind": "m"
      },
      {
        "word": "execPath",
        "kind": "m"
      },
      {
        "word": "exit(",
        "info": "process.exit([code])",
        "kind": "f"
      },
      {
        "word": "getgid(",
        "info": "process.getgid()",
        "kind": "f"
      },
      {
        "word": "getuid(",
        "info": "process.getuid()",
        "kind": "f"
      },
      {
        "word": "hrtime(",
        "info": "process.hrtime()",
        "kind": "f"
      },
      {
        "word": "kill(",
        "info": "process.kill(pid, [signal])",
        "kind": "f"
      },
      {
        "word": "memoryUsage(",
        "info": "process.memoryUsage()",
        "kind": "f"
      },
      {
        "word": "nextTick(",
        "info": "process.nextTick(callback)",
        "kind": "f"
      },
      {
        "word": "pid",
        "kind": "m"
      },
      {
        "word": "platform",
        "kind": "m"
      },
      {
        "word": "setgid(",
        "info": "process.setgid(id)",
        "kind": "f"
      },
      {
        "word": "setuid(",
        "info": "process.setuid(id)",
        "kind": "f"
      },
      {
        "word": "stderr",
        "kind": "m"
      },
      {
        "word": "stdin",
        "kind": "m"
      },
      {
        "word": "stdout",
        "kind": "m"
      },
      {
        "word": "title",
        "kind": "m"
      },
      {
        "word": "umask(",
        "info": "process.umask([mask])",
        "kind": "f"
      },
      {
        "word": "uptime(",
        "info": "process.uptime()",
        "kind": "f"
      },
      {
        "word": "version",
        "kind": "m"
      },
      {
        "word": "versions",
        "kind": "m"
      }
    ],
    "require": [
      {
        "word": "cache",
        "kind": "m"
      },
      {
        "word": "extensions",
        "kind": "m"
      },
      {
        "word": "resolve(",
        "info": "require.resolve()",
        "kind": "f"
      }
    ]
  },
  "modules": {
    "assert": [
      {
        "word": "deepEqual(",
        "info": "assert.deepEqual(actual, expected, [message])",
        "kind": "f"
      },
      {
        "word": "doesNotThrow(",
        "info": "assert.doesNotThrow(block, [error], [message])",
        "kind": "f"
      },
      {
        "word": "equal(",
        "info": "assert.equal(actual, expected, [message])",
        "kind": "f"
      },
      {
        "word": "fail(",
        "info": "assert.fail(actual, expected, message, operator)",
        "kind": "f"
      },
      {
        "word": "ifError(",
        "info": "assert.ifError(value)",
        "kind": "f"
      },
      {
        "word": "notDeepEqual(",
        "info": "assert.notDeepEqual(actual, expected, [message])",
        "kind": "f"
      },
      {
        "word": "notEqual(",
        "info": "assert.notEqual(actual, expected, [message])",
        "kind": "f"
      },
      {
        "word": "notStrictEqual(",
        "info": "assert.notStrictEqual(actual, expected, [message])",
        "kind": "f"
      },
      {
        "word": "ok(",
        "info": "assert(value, message), assert.ok(value, [message])",
        "kind": "f"
      },
      {
        "word": "strictEqual(",
        "info": "assert.strictEqual(actual, expected, [message])",
        "kind": "f"
      },
      {
        "word": "throws(",
        "info": "assert.throws(block, [error], [message])",
        "kind": "f"
      }
    ],
    "buffer": [
      {
        "word": "INSPECT_MAX_BYTES",
        "kind": "m"
      }
    ],
    "child_process": [
      {
        "word": "exec(",
        "info": "child_process.exec(command, [options], callback)",
        "kind": "f"
      },
      {
        "word": "execFile(",
        "info": "child_process.execFile(file, args, options, callback)",
        "kind": "f"
      },
      {
        "word": "fork(",
        "info": "child\\_process.fork(modulePath, [args], [options])",
        "kind": "f"
      },
      {
        "word": "spawn(",
        "info": "child_process.spawn(command, [args], [options])",
        "kind": "f"
      }
    ],
    "cluster": [
      {
        "word": "disconnect(",
        "info": "cluster.disconnect([callback])",
        "kind": "f"
      },
      {
        "word": "fork(",
        "info": "cluster.fork([env])",
        "kind": "f"
      },
      {
        "word": "isMaster",
        "kind": "m"
      },
      {
        "word": "isWorker",
        "kind": "m"
      },
      {
        "word": "settings",
        "kind": "m"
      },
      {
        "word": "setupMaster(",
        "info": "cluster.setupMaster([settings])",
        "kind": "f"
      },
      {
        "word": "worker",
        "kind": "m"
      },
      {
        "word": "workers",
        "kind": "m"
      }
    ],
    "crypto": [
      {
        "word": "createCipher(",
        "info": "crypto.createCipher(algorithm, password)",
        "kind": "f"
      },
      {
        "word": "createCipheriv(",
        "info": "crypto.createCipheriv(algorithm, key, iv)",
        "kind": "f"
      },
      {
        "word": "createCredentials(",
        "info": "crypto.createCredentials(details)",
        "kind": "f"
      },
      {
        "word": "createDecipher(",
        "info": "crypto.createDecipher(algorithm, password)",
        "kind": "f"
      },
      {
        "word": "createDecipheriv(",
        "info": "crypto.createDecipheriv(algorithm, key, iv)",
        "kind": "f"
      },
      {
        "word": "createDiffieHellman(",
        "info": "crypto.createDiffieHellman(prime, [encoding])",
        "kind": "f"
      },
      {
        "word": "createDiffieHellman(",
        "info": "crypto.createDiffieHellman(prime_length)",
        "kind": "f"
      },
      {
        "word": "createHash(",
        "info": "crypto.createHash(algorithm)",
        "kind": "f"
      },
      {
        "word": "createHmac(",
        "info": "crypto.createHmac(algorithm, key)",
        "kind": "f"
      },
      {
        "word": "createSign(",
        "info": "crypto.createSign(algorithm)",
        "kind": "f"
      },
      {
        "word": "createVerify(",
        "info": "crypto.createVerify(algorithm)",
        "kind": "f"
      },
      {
        "word": "getDiffieHellman(",
        "info": "crypto.getDiffieHellman(group_name)",
        "kind": "f"
      },
      {
        "word": "pbkdf2(",
        "info": "crypto.pbkdf2(password, salt, iterations, keylen, callback)",
        "kind": "f"
      },
      {
        "word": "randomBytes(",
        "info": "crypto.randomBytes(size, [callback])",
        "kind": "f"
      }
    ],
    "dgram": [
      {
        "word": "createSocket(",
        "info": "dgram.createSocket(type, [callback])",
        "kind": "f"
      }
    ],
    "dns": [
      {
        "word": "lookup(",
        "info": "dns.lookup(domain, [family], callback)",
        "kind": "f"
      },
      {
        "word": "resolve(",
        "info": "dns.resolve(domain, [rrtype], callback)",
        "kind": "f"
      },
      {
        "word": "resolve4(",
        "info": "dns.resolve4(domain, callback)",
        "kind": "f"
      },
      {
        "word": "resolve6(",
        "info": "dns.resolve6(domain, callback)",
        "kind": "f"
      },
      {
        "word": "resolveCname(",
        "info": "dns.resolveCname(domain, callback)",
        "kind": "f"
      },
      {
        "word": "resolveMx(",
        "info": "dns.resolveMx(domain, callback)",
        "kind": "f"
      },
      {
        "word": "resolveNs(",
        "info": "dns.resolveNs(domain, callback)",
        "kind": "f"
      },
      {
        "word": "resolveSrv(",
        "info": "dns.resolveSrv(domain, callback)",
        "kind": "f"
      },
      {
        "word": "resolveTxt(",
        "info": "dns.resolveTxt(domain, callback)",
        "kind": "f"
      },
      {
        "word": "reverse(",
        "info": "dns.reverse(ip, callback)",
        "kind": "f"
      }
    ],
    "domain": [
      {
        "word": "create(",
        "info": "domain.create()",
        "kind": "f"
      }
    ],
    "fs": [
      {
        "word": "appendFile(",
        "info": "fs.appendFile(filename, data, encoding='utf8', [callback])",
        "kind": "f"
      },
      {
        "word": "appendFileSync(",
        "info": "fs.appendFileSync(filename, data, encoding='utf8')",
        "kind": "f"
      },
      {
        "word": "chmod(",
        "info": "fs.chmod(path, mode, [callback])",
        "kind": "f"
      },
      {
        "word": "chmodSync(",
        "info": "fs.chmodSync(path, mode)",
        "kind": "f"
      },
      {
        "word": "chown(",
        "info": "fs.chown(path, uid, gid, [callback])",
        "kind": "f"
      },
      {
        "word": "chownSync(",
        "info": "fs.chownSync(path, uid, gid)",
        "kind": "f"
      },
      {
        "word": "close(",
        "info": "fs.close(fd, [callback])",
        "kind": "f"
      },
      {
        "word": "closeSync(",
        "info": "fs.closeSync(fd)",
        "kind": "f"
      },
      {
        "word": "createReadStream(",
        "info": "fs.createReadStream(path, [options])",
        "kind": "f"
      },
      {
        "word": "createWriteStream(",
        "info": "fs.createWriteStream(path, [options])",
        "kind": "f"
      },
      {
        "word": "exists(",
        "info": "fs.exists(path, [callback])",
        "kind": "f"
      },
      {
        "word": "existsSync(",
        "info": "fs.existsSync(path)",
        "kind": "f"
      },
      {
        "word": "fchmod(",
        "info": "fs.fchmod(fd, mode, [callback])",
        "kind": "f"
      },
      {
        "word": "fchmodSync(",
        "info": "fs.fchmodSync(fd, mode)",
        "kind": "f"
      },
      {
        "word": "fchown(",
        "info": "fs.fchown(fd, uid, gid, [callback])",
        "kind": "f"
      },
      {
        "word": "fchownSync(",
        "info": "fs.fchownSync(fd, uid, gid)",
        "kind": "f"
      },
      {
        "word": "fstat(",
        "info": "fs.fstat(fd, [callback])",
        "kind": "f"
      },
      {
        "word": "fstatSync(",
        "info": "fs.fstatSync(fd)",
        "kind": "f"
      },
      {
        "word": "fsync(",
        "info": "fs.fsync(fd, [callback])",
        "kind": "f"
      },
      {
        "word": "fsyncSync(",
        "info": "fs.fsyncSync(fd)",
        "kind": "f"
      },
      {
        "word": "futimes(",
        "info": "fs.futimes(fd, atime, mtime, [callback])",
        "kind": "f"
      },
      {
        "word": "futimesSync(",
        "info": "fs.futimesSync(fd, atime, mtime)",
        "kind": "f"
      },
      {
        "word": "lchmod(",
        "info": "fs.lchmod(path, mode, [callback])",
        "kind": "f"
      },
      {
        "word": "lchmodSync(",
        "info": "fs.lchmodSync(path, mode)",
        "kind": "f"
      },
      {
        "word": "lchown(",
        "info": "fs.lchown(path, uid, gid, [callback])",
        "kind": "f"
      },
      {
        "word": "lchownSync(",
        "info": "fs.lchownSync(path, uid, gid)",
        "kind": "f"
      },
      {
        "word": "link(",
        "info": "fs.link(srcpath, dstpath, [callback])",
        "kind": "f"
      },
      {
        "word": "linkSync(",
        "info": "fs.linkSync(srcpath, dstpath)",
        "kind": "f"
      },
      {
        "word": "lstat(",
        "info": "fs.lstat(path, [callback])",
        "kind": "f"
      },
      {
        "word": "lstatSync(",
        "info": "fs.lstatSync(path)",
        "kind": "f"
      },
      {
        "word": "mkdir(",
        "info": "fs.mkdir(path, [mode], [callback])",
        "kind": "f"
      },
      {
        "word": "mkdirSync(",
        "info": "fs.mkdirSync(path, [mode])",
        "kind": "f"
      },
      {
        "word": "open(",
        "info": "fs.open(path, flags, [mode], [callback])",
        "kind": "f"
      },
      {
        "word": "openSync(",
        "info": "fs.openSync(path, flags, [mode])",
        "kind": "f"
      },
      {
        "word": "read(",
        "info": "fs.read(fd, buffer, offset, length, position, [callback])",
        "kind": "f"
      },
      {
        "word": "readdir(",
        "info": "fs.readdir(path, [callback])",
        "kind": "f"
      },
      {
        "word": "readdirSync(",
        "info": "fs.readdirSync(path)",
        "kind": "f"
      },
      {
        "word": "readFile(",
        "info": "fs.readFile(filename, [encoding], [callback])",
        "kind": "f"
      },
      {
        "word": "readFileSync(",
        "info": "fs.readFileSync(filename, [encoding])",
        "kind": "f"
      },
      {
        "word": "readlink(",
        "info": "fs.readlink(path, [callback])",
        "kind": "f"
      },
      {
        "word": "readlinkSync(",
        "info": "fs.readlinkSync(path)",
        "kind": "f"
      },
      {
        "word": "readSync(",
        "info": "fs.readSync(fd, buffer, offset, length, position)",
        "kind": "f"
      },
      {
        "word": "realpath(",
        "info": "fs.realpath(path, [cache], callback)",
        "kind": "f"
      },
      {
        "word": "realpathSync(",
        "info": "fs.realpathSync(path, [cache])",
        "kind": "f"
      },
      {
        "word": "rename(",
        "info": "fs.rename(oldPath, newPath, [callback])",
        "kind": "f"
      },
      {
        "word": "renameSync(",
        "info": "fs.renameSync(oldPath, newPath)",
        "kind": "f"
      },
      {
        "word": "rmdir(",
        "info": "fs.rmdir(path, [callback])",
        "kind": "f"
      },
      {
        "word": "rmdirSync(",
        "info": "fs.rmdirSync(path)",
        "kind": "f"
      },
      {
        "word": "stat(",
        "info": "fs.stat(path, [callback])",
        "kind": "f"
      },
      {
        "word": "statSync(",
        "info": "fs.statSync(path)",
        "kind": "f"
      },
      {
        "word": "symlink(",
        "info": "fs.symlink(srcpath, dstpath, [type], [callback])",
        "kind": "f"
      },
      {
        "word": "symlinkSync(",
        "info": "fs.symlinkSync(srcpath, dstpath, [type])",
        "kind": "f"
      },
      {
        "word": "truncate(",
        "info": "fs.truncate(fd, len, [callback])",
        "kind": "f"
      },
      {
        "word": "truncateSync(",
        "info": "fs.truncateSync(fd, len)",
        "kind": "f"
      },
      {
        "word": "unlink(",
        "info": "fs.unlink(path, [callback])",
        "kind": "f"
      },
      {
        "word": "unlinkSync(",
        "info": "fs.unlinkSync(path)",
        "kind": "f"
      },
      {
        "word": "unwatchFile(",
        "info": "fs.unwatchFile(filename, [listener])",
        "kind": "f"
      },
      {
        "word": "utimes(",
        "info": "fs.utimes(path, atime, mtime, [callback])",
        "kind": "f"
      },
      {
        "word": "utimesSync(",
        "info": "fs.utimesSync(path, atime, mtime)",
        "kind": "f"
      },
      {
        "word": "watch(",
        "info": "fs.watch(filename, [options], [listener])",
        "kind": "f"
      },
      {
        "word": "watchFile(",
        "info": "fs.watchFile(filename, [options], listener)",
        "kind": "f"
      },
      {
        "word": "write(",
        "info": "fs.write(fd, buffer, offset, length, position, [callback])",
        "kind": "f"
      },
      {
        "word": "writeFile(",
        "info": "fs.writeFile(filename, data, [encoding], [callback])",
        "kind": "f"
      },
      {
        "word": "writeFileSync(",
        "info": "fs.writeFileSync(filename, data, [encoding])",
        "kind": "f"
      },
      {
        "word": "WriteStream",
        "kind": "m"
      },
      {
        "word": "writeSync(",
        "info": "fs.writeSync(fd, buffer, offset, length, position)",
        "kind": "f"
      }
    ],
    "http": [
      {
        "word": "ClientResponse",
        "kind": "m"
      },
      {
        "word": "createClient(",
        "info": "http.createClient([port], [host])",
        "kind": "f"
      },
      {
        "word": "createServer(",
        "info": "http.createServer([requestListener])",
        "kind": "f"
      },
      {
        "word": "get(",
        "info": "http.get(options, callback)",
        "kind": "f"
      },
      {
        "word": "globalAgent",
        "kind": "m"
      },
      {
        "word": "request(",
        "info": "http.request(options, callback)",
        "kind": "f"
      },
      {
        "word": "STATUS_CODES",
        "kind": "m"
      }
    ],
    "https": [
      {
        "word": "createServer(",
        "info": "https.createServer(options, [requestListener])",
        "kind": "f"
      },
      {
        "word": "get(",
        "info": "https.get(options, callback)",
        "kind": "f"
      },
      {
        "word": "globalAgent",
        "kind": "m"
      },
      {
        "word": "request(",
        "info": "https.request(options, callback)",
        "kind": "f"
      }
    ],
    "net": [
      {
        "word": "connect(",
        "info": "net.connect(options, [connectionListener])",
        "kind": "f"
      },
      {
        "word": "connect(",
        "info": "net.connect(port, [host], [connectListener])",
        "kind": "f"
      },
      {
        "word": "connect(",
        "info": "net.connect(path, [connectListener])",
        "kind": "f"
      },
      {
        "word": "createConnection(",
        "info": "net.createConnection(options, [connectionListener])",
        "kind": "f"
      },
      {
        "word": "createConnection(",
        "info": "net.createConnection(port, [host], [connectListener])",
        "kind": "f"
      },
      {
        "word": "createConnection(",
        "info": "net.createConnection(path, [connectListener])",
        "kind": "f"
      },
      {
        "word": "createServer(",
        "info": "net.createServer([options], [connectionListener])",
        "kind": "f"
      },
      {
        "word": "isIP(",
        "info": "net.isIP(input)",
        "kind": "f"
      },
      {
        "word": "isIPv4(",
        "info": "net.isIPv4(input)",
        "kind": "f"
      },
      {
        "word": "isIPv6(",
        "info": "net.isIPv6(input)",
        "kind": "f"
      }
    ],
    "os": [
      {
        "word": "arch(",
        "info": "os.arch()",
        "kind": "f"
      },
      {
        "word": "cpus(",
        "info": "os.cpus()",
        "kind": "f"
      },
      {
        "word": "EOL",
        "kind": "m"
      },
      {
        "word": "freemem(",
        "info": "os.freemem()",
        "kind": "f"
      },
      {
        "word": "hostname(",
        "info": "os.hostname()",
        "kind": "f"
      },
      {
        "word": "loadavg(",
        "info": "os.loadavg()",
        "kind": "f"
      },
      {
        "word": "networkInterfaces(",
        "info": "os.networkInterfaces()",
        "kind": "f"
      },
      {
        "word": "platform(",
        "info": "os.platform()",
        "kind": "f"
      },
      {
        "word": "release(",
        "info": "os.release()",
        "kind": "f"
      },
      {
        "word": "tmpDir(",
        "info": "os.tmpDir()",
        "kind": "f"
      },
      {
        "word": "totalmem(",
        "info": "os.totalmem()",
        "kind": "f"
      },
      {
        "word": "type(",
        "info": "os.type()",
        "kind": "f"
      },
      {
        "word": "uptime(",
        "info": "os.uptime()",
        "kind": "f"
      }
    ],
    "path": [
      {
        "word": "basename(",
        "info": "path.basename(p, [ext])",
        "kind": "f"
      },
      {
        "word": "dirname(",
        "info": "path.dirname(p)",
        "kind": "f"
      },
      {
        "word": "extname(",
        "info": "path.extname(p)",
        "kind": "f"
      },
      {
        "word": "join(",
        "info": "path.join([path1], [path2], [...])",
        "kind": "f"
      },
      {
        "word": "normalize(",
        "info": "path.normalize(p)",
        "kind": "f"
      },
      {
        "word": "relative(",
        "info": "path.relative(from, to)",
        "kind": "f"
      },
      {
        "word": "resolve(",
        "info": "path.resolve([from ...], to)",
        "kind": "f"
      },
      {
        "word": "sep",
        "kind": "m"
      }
    ],
    "punycode": [
      {
        "word": "decode(",
        "info": "punycode.decode(string)",
        "kind": "f"
      },
      {
        "word": "encode(",
        "info": "punycode.encode(string)",
        "kind": "f"
      },
      {
        "word": "toASCII(",
        "info": "punycode.toASCII(domain)",
        "kind": "f"
      },
      {
        "word": "toUnicode(",
        "info": "punycode.toUnicode(domain)",
        "kind": "f"
      },
      {
        "word": "ucs2",
        "kind": "m"
      },
      {
        "word": "version",
        "kind": "m"
      }
    ],
    "querystring": [
      {
        "word": "escape",
        "kind": "m"
      },
      {
        "word": "parse(",
        "info": "querystring.parse(str, [sep], [eq], [options])",
        "kind": "f"
      },
      {
        "word": "stringify(",
        "info": "querystring.stringify(obj, [sep], [eq])",
        "kind": "f"
      },
      {
        "word": "unescape",
        "kind": "m"
      }
    ],
    "readline": [
      {
        "word": "createInterface(",
        "info": "readline.createInterface(options)",
        "kind": "f"
      }
    ],
    "repl": [
      {
        "word": "start(",
        "info": "repl.start(options)",
        "kind": "f"
      }
    ],
    "timers": [
      {
        "word": "clearInterval(",
        "info": "clearInterval(intervalId)",
        "kind": "f"
      },
      {
        "word": "clearTimeout(",
        "info": "clearTimeout(timeoutId)",
        "kind": "f"
      },
      {
        "word": "setInterval(",
        "info": "setInterval(callback, delay, [arg], [...])",
        "kind": "f"
      },
      {
        "word": "setTimeout(",
        "info": "setTimeout(callback, delay, [arg], [...])",
        "kind": "f"
      }
    ],
    "tls": [
      {
        "word": "connect(",
        "info": "tls.connect(options, [callback])",
        "kind": "f"
      },
      {
        "word": "connect(",
        "info": "tls.connect(port, [host], [options], [callback])",
        "kind": "f"
      },
      {
        "word": "createSecurePair(",
        "info": "tls.createSecurePair([credentials], [isServer], [requestCert], [rejectUnauthorized])",
        "kind": "f"
      },
      {
        "word": "createServer(",
        "info": "tls.createServer(options, [secureConnectionListener])",
        "kind": "f"
      }
    ],
    "tty": [
      {
        "word": "isatty(",
        "info": "tty.isatty(fd)",
        "kind": "f"
      },
      {
        "word": "setRawMode(",
        "info": "tty.setRawMode(mode)",
        "kind": "f"
      }
    ],
    "url": [
      {
        "word": "format(",
        "info": "url.format(urlObj)",
        "kind": "f"
      },
      {
        "word": "parse(",
        "info": "url.parse(urlStr, [parseQueryString], [slashesDenoteHost])",
        "kind": "f"
      },
      {
        "word": "resolve(",
        "info": "url.resolve(from, to)",
        "kind": "f"
      }
    ],
    "util": [
      {
        "word": "debug(",
        "info": "util.debug(string)",
        "kind": "f"
      },
      {
        "word": "error(",
        "info": "util.error([...])",
        "kind": "f"
      },
      {
        "word": "format(",
        "info": "util.format(format, [...])",
        "kind": "f"
      },
      {
        "word": "inherits(",
        "info": "util.inherits(constructor, superConstructor)",
        "kind": "f"
      },
      {
        "word": "inspect(",
        "info": "util.inspect(object, [showHidden], [depth], [colors])",
        "kind": "f"
      },
      {
        "word": "isArray(",
        "info": "util.isArray(object)",
        "kind": "f"
      },
      {
        "word": "isDate(",
        "info": "util.isDate(object)",
        "kind": "f"
      },
      {
        "word": "isError(",
        "info": "util.isError(object)",
        "kind": "f"
      },
      {
        "word": "isRegExp(",
        "info": "util.isRegExp(object)",
        "kind": "f"
      },
      {
        "word": "log(",
        "info": "util.log(string)",
        "kind": "f"
      },
      {
        "word": "print(",
        "info": "util.print([...])",
        "kind": "f"
      },
      {
        "word": "pump(",
        "info": "util.pump(readableStream, writableStream, [callback])",
        "kind": "f"
      },
      {
        "word": "puts(",
        "info": "util.puts([...])",
        "kind": "f"
      }
    ],
    "vm": [
      {
        "word": "createContext(",
        "info": "vm.createContext([initSandbox])",
        "kind": "f"
      },
      {
        "word": "createScript(",
        "info": "vm.createScript(code, [filename])",
        "kind": "f"
      },
      {
        "word": "runInContext(",
        "info": "vm.runInContext(code, context, [filename])",
        "kind": "f"
      },
      {
        "word": "runInNewContext(",
        "info": "vm.runInNewContext(code, [sandbox], [filename])",
        "kind": "f"
      },
      {
        "word": "runInThisContext(",
        "info": "vm.runInThisContext(code, [filename])",
        "kind": "f"
      }
    ],
    "zlib": [
      {
        "word": "createDeflate(",
        "info": "zlib.createDeflate([options])",
        "kind": "f"
      },
      {
        "word": "createDeflateRaw(",
        "info": "zlib.createDeflateRaw([options])",
        "kind": "f"
      },
      {
        "word": "createGunzip(",
        "info": "zlib.createGunzip([options])",
        "kind": "f"
      },
      {
        "word": "createGzip(",
        "info": "zlib.createGzip([options])",
        "kind": "f"
      },
      {
        "word": "createInflate(",
        "info": "zlib.createInflate([options])",
        "kind": "f"
      },
      {
        "word": "createInflateRaw(",
        "info": "zlib.createInflateRaw([options])",
        "kind": "f"
      },
      {
        "word": "createUnzip(",
        "info": "zlib.createUnzip([options])",
        "kind": "f"
      },
      {
        "word": "deflate(",
        "info": "zlib.deflate(buf, callback)",
        "kind": "f"
      },
      {
        "word": "deflateRaw(",
        "info": "zlib.deflateRaw(buf, callback)",
        "kind": "f"
      },
      {
        "word": "gunzip(",
        "info": "zlib.gunzip(buf, callback)",
        "kind": "f"
      },
      {
        "word": "gzip(",
        "info": "zlib.gzip(buf, callback)",
        "kind": "f"
      },
      {
        "word": "inflate(",
        "info": "zlib.inflate(buf, callback)",
        "kind": "f"
      },
      {
        "word": "inflateRaw(",
        "info": "zlib.inflateRaw(buf, callback)",
        "kind": "f"
      },
      {
        "word": "unzip(",
        "info": "zlib.unzip(buf, callback)",
        "kind": "f"
      }
    ]
  },
  "vars": [
    {
      "word": "__dirname",
      "kind": "v"
    },
    {
      "word": "__filename",
      "kind": "v"
    },
    {
      "word": "Buffer",
      "kind": "v"
    },
    {
      "word": "clearInterval(",
      "info": "clearInterval(t)",
      "kind": "f"
    },
    {
      "word": "console",
      "kind": "v"
    },
    {
      "word": "console",
      "kind": "v"
    },
    {
      "word": "exports",
      "kind": "v"
    },
    {
      "word": "global",
      "kind": "v"
    },
    {
      "word": "module",
      "kind": "v"
    },
    {
      "word": "process",
      "kind": "v"
    },
    {
      "word": "process",
      "kind": "v"
    },
    {
      "word": "require(",
      "info": "require()",
      "kind": "f"
    }
  ]
}