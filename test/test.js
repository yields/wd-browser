
var parse = require('..');

describe('parse', function(){
  it('ie6', function(){
    var ret = parse('ie6');
    ret.length.should.eql(1);
    ret.should.eql([['internet explorer', 6, 'Windows XP']]);
  })

  it('ie6..11', function(){
    var ret = parse('ie6...11');
    ret.length.should.eql(6);
    ret.should.eql([
      ['internet explorer', 6, 'Windows XP'],
      ['internet explorer', 7, 'Windows XP'],
      ['internet explorer', 8, 'Windows XP'],
      ['internet explorer', 9, 'Windows 7'],
      ['internet explorer', 10, 'Windows 8'],
      ['internet explorer', 11, 'Windows 8.1'],
    ]);
  })

  it('ie10..11', function(){
    var ret = parse('ie10...11');
    ret.should.eql([
      ['internet explorer', 10, 'Windows 8'],
      ['internet explorer', 11, 'Windows 8.1']
    ])
  })

  it('safari', function(){
    var ret = parse('safari');
    ret.should.eql([
      ['safari', '', 'OSX 10.9']
    ]);
  })

  it('safari7', function(){
    var ret = parse('safari7');
    ret.should.eql([
      ['safari', '7', 'OSX 10.9']
    ]);
  })
})
