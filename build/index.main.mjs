// Automatically generated with Reach 0.1.10 (9f925e05)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (9f925e05)';
export const _backendVersion = 14;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v303 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v304 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v304, v303],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:56:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v304, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v308, v309], secs: v311, time: v310, didSend: v52, from: v307 } = txn1;
      
      sim_r.txns.push({
        amt: v308,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v320 = stdlib.add(v310, v309);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v308, v309], secs: v311, time: v310, didSend: v52, from: v307 } = txn1;
  ;
  const v320 = stdlib.add(v310, v309);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v320],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v307, v308, v309, v320],
      evt_cnt: 0,
      funcNum: 2,
      lct: v310,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v483, time: v482, didSend: v259, from: v481 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v308,
          kind: 'from',
          to: v307,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v483, time: v482, didSend: v259, from: v481 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:48:29:application',
      fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:21:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:46:28:function exp)', 'at ./index.rsh:62:71:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v326, time: v325, didSend: v61, from: v324 } = txn2;
    const v328 = stdlib.add(v308, v308);
    ;
    let v329 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v330 = v325;
    let v337 = v328;
    
    while (await (async () => {
      const v345 = stdlib.eq(v329, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v345;})()) {
      const v352 = stdlib.add(v330, v309);
      const v356 = stdlib.protect(ctc0, await interact.getCount(), {
        at: './index.rsh:70:40:application',
        fs: ['at ./index.rsh:69:11:application call to [unknown function] (defined at: ./index.rsh:69:15:function exp)'],
        msg: 'getCount',
        who: 'Alice'
        });
      const v357 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:53:31:application',
        fs: ['at ./index.rsh:71:58:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:69:11:application call to [unknown function] (defined at: ./index.rsh:69:15:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v358 = stdlib.digest(ctc1, [v357, v356]);
      const v360 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:74:40:application',
        fs: ['at ./index.rsh:69:11:application call to [unknown function] (defined at: ./index.rsh:69:15:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      const v361 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:53:31:application',
        fs: ['at ./index.rsh:75:58:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:69:11:application call to [unknown function] (defined at: ./index.rsh:69:15:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v362 = stdlib.digest(ctc1, [v361, v360]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v307, v308, v309, v324, v337, v352, v358, v362],
        evt_cnt: 2,
        funcNum: 4,
        lct: v330,
        onlyIf: true,
        out_tys: [ctc2, ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:78:7:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v365, v366], secs: v368, time: v367, didSend: v93, from: v364 } = txn3;
          
          ;
          const v369 = stdlib.addressEq(v307, v364);
          ;
          const v376 = stdlib.add(v367, v309);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v352],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v307, v308, v309, v324, v337, v352],
          evt_cnt: 0,
          funcNum: 5,
          lct: v330,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v449, time: v448, didSend: v210, from: v447 } = txn4;
            
            ;
            const v450 = stdlib.addressEq(v307, v447);
            const v451 = stdlib.addressEq(v324, v447);
            const v452 = v450 ? true : v451;
            ;
            sim_r.txns.push({
              amt: v337,
              kind: 'from',
              to: v324,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v449, time: v448, didSend: v210, from: v447 } = txn4;
        ;
        const v450 = stdlib.addressEq(v307, v447);
        const v451 = stdlib.addressEq(v324, v447);
        const v452 = v450 ? true : v451;
        stdlib.assert(v452, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:79:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:48:29:application',
          fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:21:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:46:28:function exp)', 'at ./index.rsh:79:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v365, v366], secs: v368, time: v367, didSend: v93, from: v364 } = txn3;
        ;
        const v369 = stdlib.addressEq(v307, v364);
        stdlib.assert(v369, {
          at: './index.rsh:78:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v376 = stdlib.add(v367, v309);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v376],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v307, v308, v309, v324, v337, v376],
            evt_cnt: 0,
            funcNum: 7,
            lct: v367,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v431, time: v430, didSend: v176, from: v429 } = txn5;
              
              ;
              const v432 = stdlib.addressEq(v307, v429);
              const v433 = stdlib.addressEq(v324, v429);
              const v434 = v432 ? true : v433;
              ;
              sim_r.txns.push({
                amt: v337,
                kind: 'from',
                to: v307,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v431, time: v430, didSend: v176, from: v429 } = txn5;
          ;
          const v432 = stdlib.addressEq(v307, v429);
          const v433 = stdlib.addressEq(v324, v429);
          const v434 = v432 ? true : v433;
          stdlib.assert(v434, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:88:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:48:29:application',
            fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:21:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:46:28:function exp)', 'at ./index.rsh:88:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v383, v384], secs: v386, time: v385, didSend: v105, from: v382 } = txn4;
          ;
          const v387 = stdlib.addressEq(v324, v382);
          stdlib.assert(v387, {
            at: './index.rsh:87:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v394 = stdlib.add(v385, v309);
          const txn5 = await (ctc.sendrecv({
            args: [v307, v308, v309, v324, v337, v383, v384, v394, v356, v357, v360, v361],
            evt_cnt: 4,
            funcNum: 8,
            lct: v385,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:99:7:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v399, v400, v401, v402], secs: v404, time: v403, didSend: v117, from: v398 } = txn5;
              
              ;
              const v405 = stdlib.addressEq(v307, v398);
              ;
              let v406;
              const v407 = stdlib.add(v399, v383);
              const v408 = stdlib.eq(v401, v384);
              if (v408) {
                v406 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                const v409 = stdlib.eq(v407, v401);
                if (v409) {
                  v406 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                else {
                  const v410 = stdlib.eq(v407, v384);
                  if (v410) {
                    v406 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  else {
                    v406 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  }
                }
              const cv329 = v406;
              const cv330 = v403;
              const cv337 = v337;
              
              await (async () => {
                const v329 = cv329;
                const v330 = cv330;
                const v337 = cv337;
                
                if (await (async () => {
                  const v345 = stdlib.eq(v329, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v345;})()) {
                  const v352 = stdlib.add(v330, v309);
                  sim_r.isHalt = false;
                  }
                else {
                  const v465 = stdlib.eq(v329, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  const v468 = stdlib.mul(v308, stdlib.checkedBigNumberify('./index.rsh:106:20:decimal', stdlib.UInt_max, '2'));
                  const v470 = v465 ? v307 : v324;
                  sim_r.txns.push({
                    amt: v468,
                    kind: 'from',
                    to: v470,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v394],
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v307, v308, v309, v324, v337, v383, v384, v394],
              evt_cnt: 0,
              funcNum: 9,
              lct: v385,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v413, time: v412, didSend: v142, from: v411 } = txn6;
                
                ;
                const v414 = stdlib.addressEq(v307, v411);
                const v415 = stdlib.addressEq(v324, v411);
                const v416 = v414 ? true : v415;
                ;
                sim_r.txns.push({
                  amt: v337,
                  kind: 'from',
                  to: v324,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v413, time: v412, didSend: v142, from: v411 } = txn6;
            ;
            const v414 = stdlib.addressEq(v307, v411);
            const v415 = stdlib.addressEq(v324, v411);
            const v416 = v414 ? true : v415;
            stdlib.assert(v416, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:100:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:48:29:application',
              fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:21:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:46:28:function exp)', 'at ./index.rsh:100:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v399, v400, v401, v402], secs: v404, time: v403, didSend: v117, from: v398 } = txn5;
            ;
            const v405 = stdlib.addressEq(v307, v398);
            stdlib.assert(v405, {
              at: './index.rsh:99:7:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            let v406;
            const v407 = stdlib.add(v399, v383);
            const v408 = stdlib.eq(v401, v384);
            if (v408) {
              v406 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v409 = stdlib.eq(v407, v401);
              if (v409) {
                v406 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                const v410 = stdlib.eq(v407, v384);
                if (v410) {
                  v406 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                  }
                else {
                  v406 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                }
              }
            const cv329 = v406;
            const cv330 = v403;
            const cv337 = v337;
            
            v329 = cv329;
            v330 = cv330;
            v337 = cv337;
            
            continue;}
          
          }
        
        }
      
      }
    const v465 = stdlib.eq(v329, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v468 = stdlib.mul(v308, stdlib.checkedBigNumberify('./index.rsh:106:20:decimal', stdlib.UInt_max, '2'));
    const v470 = v465 ? v307 : v324;
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v329), {
      at: './index.rsh:110:24:application',
      fs: ['at ./index.rsh:109:7:application call to [unknown function] (defined at: ./index.rsh:109:19:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v308, v309], secs: v311, time: v310, didSend: v52, from: v307 } = txn1;
  ;
  const v320 = stdlib.add(v310, v309);
  stdlib.protect(ctc1, await interact.acceptWager(v308), {
    at: './index.rsh:60:25:application',
    fs: ['at ./index.rsh:59:9:application call to [unknown function] (defined at: ./index.rsh:59:13:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v307, v308, v309, v320],
    evt_cnt: 0,
    funcNum: 1,
    lct: v310,
    onlyIf: true,
    out_tys: [],
    pay: [v308, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v326, time: v325, didSend: v61, from: v324 } = txn2;
      
      const v328 = stdlib.add(v308, v308);
      sim_r.txns.push({
        amt: v308,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v329 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v330 = v325;
      const v337 = v328;
      
      if (await (async () => {
        const v345 = stdlib.eq(v329, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v345;})()) {
        const v352 = stdlib.add(v330, v309);
        sim_r.isHalt = false;
        }
      else {
        const v465 = stdlib.eq(v329, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v468 = stdlib.mul(v308, stdlib.checkedBigNumberify('./index.rsh:106:20:decimal', stdlib.UInt_max, '2'));
        const v470 = v465 ? v307 : v324;
        sim_r.txns.push({
          amt: v468,
          kind: 'from',
          to: v470,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v320],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v307, v308, v309, v320],
      evt_cnt: 0,
      funcNum: 2,
      lct: v310,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v483, time: v482, didSend: v259, from: v481 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v308,
          kind: 'from',
          to: v307,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v483, time: v482, didSend: v259, from: v481 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:48:29:application',
      fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:21:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:46:28:function exp)', 'at ./index.rsh:62:71:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v326, time: v325, didSend: v61, from: v324 } = txn2;
    const v328 = stdlib.add(v308, v308);
    ;
    let v329 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v330 = v325;
    let v337 = v328;
    
    while (await (async () => {
      const v345 = stdlib.eq(v329, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v345;})()) {
      const v352 = stdlib.add(v330, v309);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v352],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v307, v308, v309, v324, v337, v352],
          evt_cnt: 0,
          funcNum: 5,
          lct: v330,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v449, time: v448, didSend: v210, from: v447 } = txn4;
            
            ;
            const v450 = stdlib.addressEq(v307, v447);
            const v451 = stdlib.addressEq(v324, v447);
            const v452 = v450 ? true : v451;
            ;
            sim_r.txns.push({
              amt: v337,
              kind: 'from',
              to: v324,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v449, time: v448, didSend: v210, from: v447 } = txn4;
        ;
        const v450 = stdlib.addressEq(v307, v447);
        const v451 = stdlib.addressEq(v324, v447);
        const v452 = v450 ? true : v451;
        stdlib.assert(v452, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:79:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:48:29:application',
          fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:21:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:46:28:function exp)', 'at ./index.rsh:79:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v365, v366], secs: v368, time: v367, didSend: v93, from: v364 } = txn3;
        ;
        const v369 = stdlib.addressEq(v307, v364);
        stdlib.assert(v369, {
          at: './index.rsh:78:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v376 = stdlib.add(v367, v309);
        const v380 = stdlib.protect(ctc0, await interact.getCount(), {
          at: './index.rsh:84:50:application',
          fs: ['at ./index.rsh:83:11:application call to [unknown function] (defined at: ./index.rsh:83:15:function exp)'],
          msg: 'getCount',
          who: 'Bob'
          });
        const v381 = stdlib.protect(ctc0, await interact.getGuess(), {
          at: './index.rsh:85:50:application',
          fs: ['at ./index.rsh:83:11:application call to [unknown function] (defined at: ./index.rsh:83:15:function exp)'],
          msg: 'getGuess',
          who: 'Bob'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v307, v308, v309, v324, v337, v376, v380, v381],
          evt_cnt: 2,
          funcNum: 6,
          lct: v367,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:87:7:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v383, v384], secs: v386, time: v385, didSend: v105, from: v382 } = txn4;
            
            ;
            const v387 = stdlib.addressEq(v324, v382);
            ;
            const v394 = stdlib.add(v385, v309);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v376],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v307, v308, v309, v324, v337, v376],
            evt_cnt: 0,
            funcNum: 7,
            lct: v367,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v431, time: v430, didSend: v176, from: v429 } = txn5;
              
              ;
              const v432 = stdlib.addressEq(v307, v429);
              const v433 = stdlib.addressEq(v324, v429);
              const v434 = v432 ? true : v433;
              ;
              sim_r.txns.push({
                amt: v337,
                kind: 'from',
                to: v307,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v431, time: v430, didSend: v176, from: v429 } = txn5;
          ;
          const v432 = stdlib.addressEq(v307, v429);
          const v433 = stdlib.addressEq(v324, v429);
          const v434 = v432 ? true : v433;
          stdlib.assert(v434, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:88:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:48:29:application',
            fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:21:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:46:28:function exp)', 'at ./index.rsh:88:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v383, v384], secs: v386, time: v385, didSend: v105, from: v382 } = txn4;
          ;
          const v387 = stdlib.addressEq(v324, v382);
          stdlib.assert(v387, {
            at: './index.rsh:87:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v394 = stdlib.add(v385, v309);
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v394],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v307, v308, v309, v324, v337, v383, v384, v394],
              evt_cnt: 0,
              funcNum: 9,
              lct: v385,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v413, time: v412, didSend: v142, from: v411 } = txn6;
                
                ;
                const v414 = stdlib.addressEq(v307, v411);
                const v415 = stdlib.addressEq(v324, v411);
                const v416 = v414 ? true : v415;
                ;
                sim_r.txns.push({
                  amt: v337,
                  kind: 'from',
                  to: v324,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v413, time: v412, didSend: v142, from: v411 } = txn6;
            ;
            const v414 = stdlib.addressEq(v307, v411);
            const v415 = stdlib.addressEq(v324, v411);
            const v416 = v414 ? true : v415;
            stdlib.assert(v416, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:100:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:48:29:application',
              fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:21:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:46:28:function exp)', 'at ./index.rsh:100:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v399, v400, v401, v402], secs: v404, time: v403, didSend: v117, from: v398 } = txn5;
            ;
            const v405 = stdlib.addressEq(v307, v398);
            stdlib.assert(v405, {
              at: './index.rsh:99:7:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            let v406;
            const v407 = stdlib.add(v399, v383);
            const v408 = stdlib.eq(v401, v384);
            if (v408) {
              v406 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v409 = stdlib.eq(v407, v401);
              if (v409) {
                v406 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                const v410 = stdlib.eq(v407, v384);
                if (v410) {
                  v406 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                  }
                else {
                  v406 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                }
              }
            const cv329 = v406;
            const cv330 = v403;
            const cv337 = v337;
            
            v329 = cv329;
            v330 = cv330;
            v337 = cv337;
            
            continue;}
          
          }
        
        }
      
      }
    const v465 = stdlib.eq(v329, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v468 = stdlib.mul(v308, stdlib.checkedBigNumberify('./index.rsh:106:20:decimal', stdlib.UInt_max, '2'));
    const v470 = v465 ? v307 : v324;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v329), {
      at: './index.rsh:110:24:application',
      fs: ['at ./index.rsh:109:7:application call to [unknown function] (defined at: ./index.rsh:109:19:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiANAAFQCAUJWCAHAihoMCYCAQAAIjUAMRhBBLopZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQQMQAJUSSEIDEABY0klDEABDUkhBQxAAFMhBRJEIQU0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gASiBWaOsDIGNAMhC1sPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0ID1UghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/gWBbNf5JNQVJSiJbNf0lWzX8gRBbNfuBGFs1+oAEf6I7UjT9FlA0/BZQNPsWUDT6FlCwMgY0AyELWwxENP8xABJENP00AyEGWwg1+DT7NP4SQQAGIzX5QgAgNPg0+xJBAAYiNflCABI0+DT+EkEAByEJNflCAAMjNfk0/zQDIQdbNAMhCls0A1cwIDT5MgY0AyRbQgLBSCEINAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AE4huzqbAyBjQDIQZbD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCAtJJgQYMQACTSCEINAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEHWzX+IQpbNf1XMCA1/CRbNftJNQVJIls1+iVbNfmABEohy/w0+hZQNPkWULAyBjQDIQZbDEQ0/DEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+hZQNPkWUDT4FlAoSwFXAHBnSCEFNQEyBjUCQgJUSCEENAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEzJmSXLAyBjQDIQZbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCAehJIQkMQADTSYEEDEAAi0ghBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hB1s1/iEKWzX9VzAgNfwkWzX7STUFSVcAIDX6VyAgNfmABGBdpCs0+lA0+VCwMgY0AyEGWwxENP8xABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPgWUChLAVcAYGdIIQg1ATIGNQJCAWshCRJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEMWw9EsSKyATQDIQdbsggjshA0A1cAILIHs0IBDkkjDEAASEgjNAESRDQESSISTDQCEhFEKGRJNQMhB1s1/4AEmouRdLAyBjQDIQxbDEQ0/4gBMTQDVwAgNP80AyEKWzEAIzIGNP9JCEIAX0giNAESRDQESSISTDQCEhFESTUFSSJbNf8lWzX+gASs0R/DNP8WUDT+FlCwgaCNBogA5jT/iADhMgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgB9Nf81/jX9Nfw1+zX6Nfk0/SMSQQAvNP40+wg1+DT5NPoWUDT7FlA0/FA0/xZQNPgWUChLAVcAYGdIIQQ1ATIGNQJCADmxIrIBNPohCQuyCCOyEDT8NPk0/SISTbIHs0IAADEZIQQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 112,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v308",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v309",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v308",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v309",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v365",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v366",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v383",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v384",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v399",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v400",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v401",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v402",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v365",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v366",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v383",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v384",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v399",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v400",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v401",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v402",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001a8b38038062001a8b83398101604081905262000026916200024b565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f903414600762000144565b6020808301510151620000b39043620002ab565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013a92600292909101906200016e565b505050506200030f565b816200016a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017c90620002d2565b90600052602060002090601f016020900481019282620001a05760008555620001eb565b82601f10620001bb57805160ff1916838001178555620001eb565b82800160010185558215620001eb579182015b82811115620001eb578251825591602001919060010190620001ce565b50620001f9929150620001fd565b5090565b5b80821115620001f95760008155600101620001fe565b604080519081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025f57600080fd5b6200026962000214565b835181526040601f19830112156200028057600080fd5b6200028a62000214565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002cd57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e757607f821691505b602082108114156200030957634e487b7160e01b600052602260045260246000fd5b50919050565b61176c806200031f6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063ab53f2c614610128578063bf2c5b241461014b578063cc923b291461015e578063de73699814610171578063ebdbfdcc1461018457005b80631e93b0f1146100a357806321642639146100c75780632c10a159146100da5780637eea518c146100ed578063832307571461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d5366004611364565b610197565b6100a16100e8366004611387565b610437565b6100a16100fb366004611387565b6105ce565b34801561010c57600080fd5b506001546100b4565b6100a1610123366004611387565b61074c565b34801561013457600080fd5b5061013d6108e7565b6040516100be929190611399565b6100a1610159366004611387565b610984565b6100a161016c3660046113f6565b610b1b565b6100a161017f366004611387565b610d78565b6100a1610192366004611364565b610ed2565b6101a7600760005414601c6110b4565b6101c1813515806101ba57506001548235145b601d6110b4565b6000808055600280546101d390611408565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff90611408565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b505050505080602001905181019061026491906114ed565b905061027c6040518060200160405280600081525090565b61028d8260a001514310601e6110b4565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f33846040516102be929190611509565b60405180910390a16102d23415601a6110b4565b60608201516102ed906001600160a01b03163314601b6110b4565b60408201516102fc9043611550565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e0840152600960005543600155905161040c9183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b6040516020818303038152906040526002908051906020019061043092919061121d565b5050505050565b61044760016000541460096110b4565b6104618135158061045a57506001548235145b600a6110b4565b60008080556002805461047390611408565b80601f016020809104026020016040519081016040528092919081815260200182805461049f90611408565b80156104ec5780601f106104c1576101008083540402835291602001916104ec565b820191906000526020600020905b8154815290600101906020018083116104cf57829003601f168201915b50505050508060200190518101906105049190611568565b905061051781606001514310600b6110b4565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516105489291906115e1565b60405180910390a16105618160200151341460086110b4565b6105696112a1565b815181516001600160a01b0390911690526020808301805183518301526040808501518451909101528251336060909101528183018051600190525143920191909152516105b79080611550565b6020820151604001526105c9816110d9565b505050565b6105de600160005414600d6110b4565b6105f8813515806105f157506001548235145b600e6110b4565b60008080556002805461060a90611408565b80601f016020809104026020016040519081016040528092919081815260200182805461063690611408565b80156106835780601f1061065857610100808354040283529160200191610683565b820191906000526020600020905b81548152906001019060200180831161066657829003601f168201915b505050505080602001905181019061069b9190611568565b90506106af8160600151431015600f6110b4565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516106e09291906115e1565b60405180910390a16106f43415600c6110b4565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610731573d6000803e3d6000fd5b5060008080556001819055610748906002906112fa565b5050565b61075c60056000541460176110b4565b6107768135158061076f57506001548235145b60186110b4565b60008080556002805461078890611408565b80601f01602080910402602001604051908101604052809291908181526020018280546107b490611408565b80156108015780601f106107d657610100808354040283529160200191610801565b820191906000526020600020905b8154815290600101906020018083116107e457829003601f168201915b505050505080602001905181019061081991906114ed565b905061082d8160a0015143101560196110b4565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161085e9291906115e1565b60405180910390a1610872341560156110b4565b80516108a6906001600160a01b0316331461089c5760608201516001600160a01b0316331461089f565b60015b60166110b4565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610731573d6000803e3d6000fd5b6000606060005460028080546108fc90611408565b80601f016020809104026020016040519081016040528092919081815260200182805461092890611408565b80156109755780601f1061094a57610100808354040283529160200191610975565b820191906000526020600020905b81548152906001019060200180831161095857829003601f168201915b50505050509050915091509091565b61099460076000541460216110b4565b6109ae813515806109a757506001548235145b60226110b4565b6000808055600280546109c090611408565b80601f01602080910402602001604051908101604052809291908181526020018280546109ec90611408565b8015610a395780601f10610a0e57610100808354040283529160200191610a39565b820191906000526020600020905b815481529060010190602001808311610a1c57829003601f168201915b5050505050806020019051810190610a5191906114ed565b9050610a658160a0015143101560236110b4565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a969291906115e1565b60405180910390a1610aaa3415601f6110b4565b8051610ade906001600160a01b03163314610ad45760608201516001600160a01b03163314610ad7565b60015b60206110b4565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610731573d6000803e3d6000fd5b610b2b60096000541460266110b4565b610b4581351580610b3e57506001548235145b60276110b4565b600080805560028054610b5790611408565b80601f0160208091040260200160405190810160405280929190818152602001828054610b8390611408565b8015610bd05780601f10610ba557610100808354040283529160200191610bd0565b820191906000526020600020905b815481529060010190602001808311610bb357829003601f168201915b5050505050806020019051810190610be8919061161e565b9050610c07604051806040016040528060008152602001600081525090565b610c188260e00151431060286110b4565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c8b341560246110b4565b8151610ca3906001600160a01b0316331460256110b4565b60a0820151610cb6906020850135611550565b602082015260c082015160608401351415610cd45760018152610d0b565b602081015160608401351415610ced5760008152610d0b565b8160c0015181602001511415610d065760028152610d0b565b600181525b610d136112a1565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551941693019290925283518184018051919091528051439201919091526080850151905190910152610d72816110d9565b50505050565b610d88600960005414602b6110b4565b610da281351580610d9b57506001548235145b602c6110b4565b600080805560028054610db490611408565b80601f0160208091040260200160405190810160405280929190818152602001828054610de090611408565b8015610e2d5780601f10610e0257610100808354040283529160200191610e2d565b820191906000526020600020905b815481529060010190602001808311610e1057829003601f168201915b5050505050806020019051810190610e45919061161e565b9050610e598160e00151431015602d6110b4565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051610e8a9291906115e1565b60405180910390a1610e9e341560296110b4565b80516108a6906001600160a01b03163314610ec85760608201516001600160a01b03163314610ecb565b60015b602a6110b4565b610ee260056000541460126110b4565b610efc81351580610ef557506001548235145b60136110b4565b600080805560028054610f0e90611408565b80601f0160208091040260200160405190810160405280929190818152602001828054610f3a90611408565b8015610f875780601f10610f5c57610100808354040283529160200191610f87565b820191906000526020600020905b815481529060010190602001808311610f6a57829003601f168201915b5050505050806020019051810190610f9f91906114ed565b9050610fb76040518060200160405280600081525090565b610fc88260a00151431060146110b4565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a3384604051610ff9929190611509565b60405180910390a161100d341560106110b4565b8151611025906001600160a01b0316331460116110b4565b60408201516110349043611550565b81526040805160c081018252600080825260208083018281528385018381526060808601858152608080880187815260a089018881528c516001600160a01b039081168b528d8901519097528c8b0151909552928b0151909416905291880151909152855190526007909155436001559151909161040c918391016116ca565b816107485760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080516020810190915260008152602082015151600114156111ba57815160400151602080840151015161110e9190611550565b81526040805160c0810182526000808252602080830182815283850183815260608086018581526080870186815260a088018781528b51516001600160a01b039081168a528c518801519096528b518a01519094528a5190920151909316909252878301518601519091528551905260059091554360015591519091611196918391016116ca565b60405160208183030381529060405260029080519060200190610d7292919061121d565b602082015151156111d0578151606001516111d4565b8151515b6001600160a01b03166108fc60028460000151602001516111f59190611717565b6040518115909202916000818181858888f19350505050158015610731573d6000803e3d6000fd5b82805461122990611408565b90600052602060002090601f01602090048101928261124b5760008555611291565b82601f1061126457805160ff1916838001178555611291565b82800160010185558215611291579182015b82811115611291578251825591602001919060010190611276565b5061129d929150611337565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016112f560405180606001604052806000815260200160008152602001600081525090565b905290565b50805461130690611408565b6000825580601f10611316575050565b601f0160209004906000526020600020908101906113349190611337565b50565b5b8082111561129d5760008155600101611338565b60006060828403121561135e57600080fd5b50919050565b60006060828403121561137657600080fd5b611380838361134c565b9392505050565b60006040828403121561135e57600080fd5b82815260006020604081840152835180604085015260005b818110156113cd578581018301518582016060015282016113b1565b818111156113df576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561135e57600080fd5b600181811c9082168061141c57607f821691505b6020821081141561135e57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461145457600080fd5b919050565b600060c0828403121561146b57600080fd5b60405160c0810181811067ffffffffffffffff8211171561149c57634e487b7160e01b600052604160045260246000fd5b6040529050806114ab8361143d565b815260208301516020820152604083015160408201526114cd6060840161143d565b60608201526080830151608082015260a083015160a08201525092915050565b600060c082840312156114ff57600080fd5b6113808383611459565b6001600160a01b03831681526080810161138060208301848035825260208082013590830152604090810135910152565b634e487b7160e01b600052601160045260246000fd5b600082198211156115635761156361153a565b500190565b60006080828403121561157a57600080fd5b6040516080810181811067ffffffffffffffff821117156115ab57634e487b7160e01b600052604160045260246000fd5b6040526115b78361143d565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461160f57600080fd5b80604085015250509392505050565b600061010080838503121561163257600080fd5b6040519081019067ffffffffffffffff8211818310171561166357634e487b7160e01b600052604160045260246000fd5b816040526116708461143d565b815260208401516020820152604084015160408201526116926060850161143d565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0918201519181019190915260c00190565b60008160001904831182151516156117315761173161153a565b50029056fea2646970667358221220285d9ef6ee1bfe023def57cf2b500be8525accd2b292d52aae97a12d6bb5f50164736f6c634300080c0033`,
  BytecodeLen: 6795,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:57:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:62:71:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:107:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:67:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:79:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:80:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:88:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:90:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:100:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
