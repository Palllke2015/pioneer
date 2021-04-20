/*! For license information please see main.5abd7a2d1545ecdf45b0.js.LICENSE.txt */
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: min-content 24px 18px;
  grid-column-gap: 12px;
  grid-template-areas:
    'accountphoto accounttype'
    'accountphoto accountname'
    'accountphoto accountaddress';
  align-items: center;
  width: 100%;
  justify-self: start;

  & ${o.BadgeViolet} {
    grid-area: accounttype;
  }
`,f=a.default.div`
  display: flex;
  grid-area: accountphoto;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  align-self: center;
  height: 40px;
  width: 40px;
  background-color: ${u.Colors.Blue[500]};
  border-radius: ${u.BorderRad.full};
  overflow: hidden;
`,g=a.default.h5`
  grid-area: accountname;
  max-width: 100%;
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${u.Colors.Black[900]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,p=({active:e,address:t})=>e&&e.rootAccount===t||e.controllerAccount===t?i.default.createElement(o.BadgeViolet,null,e.rootAccount===t?"Root account":"Controller account"):null,h=a.default(s.CopyComponent)`
  grid-area: accountaddress;
`},91381:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.OptionAccount=void 0;const r=n(A(2784)),i=A(85577),a=A(31604),o=A(88345),s=A(41469);t.OptionAccount=({option:e})=>{const t=o.useBalance(e.address);return r.default.createElement(r.default.Fragment,null,r.default.createElement(s.AccountInfo,{account:e}),r.default.createElement(i.BalanceInfoInRow,null,r.default.createElement(i.InfoTitle,null,"Transferable balance"),r.default.createElement(i.InfoValue,null,r.default.createElement(a.TokenValue,{value:t?.transferable}))))}},90938:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.OptionListAccount=void 0;const r=n(A(2784)),i=A(52019),a=A(91381);t.OptionListAccount=r.default.memo((({options:e,onChange:t})=>r.default.createElement(i.OptionsListComponent,null,e.map((e=>r.default.createElement(i.Option,{key:e.address,onClick:()=>t&&t(e)},r.default.createElement(a.OptionAccount,{option:e})))))))},67738:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.SelectAccount=t.filterAccount=void 0;const a=i(A(2784)),o=A(52019),s=A(87795),u=A(42482),c=A(3307),l=A(85079),d=A(15838),f=A(91381),g=A(90938);t.filterAccount=e=>{const t="string"==typeof e?e:e?.address;return e?e=>e.address!==t:()=>!0},t.SelectAccount=a.default.memo((({onChange:e,filter:t,selected:A})=>{const{allAccounts:n}=u.useAccounts(),r=n.filter(t||(()=>!0)),[i,p]=a.useState(A),[h,m]=a.useState(""),y=a.useMemo((()=>d.filterByText(r,h)),[h,r]),I=s.useKeyring();return a.useEffect((()=>{0===y.length&&l.isValidAddress(h,I)&&(!i||i.address!==h)&&p(c.accountOrNamed(n,h,"Unsaved account"))}),[y,h,i]),a.default.createElement(o.Select,{selected:i,onChange:e,disabled:!1,renderSelected:e=>a.default.createElement(f.OptionAccount,{option:e}),placeholder:"Select account or paste account address",renderList:e=>a.default.createElement(g.OptionListAccount,{onChange:e,options:y}),onSearch:e=>m(e)})}))},64297:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SelectedAccount=void 0;const r=n(A(2784)),i=A(55017),a=A(24895),o=A(85577),s=A(31604),u=A(88345),c=A(41469);t.SelectedAccount=({account:e})=>{const{transferable:t}=u.useBalance(e.address)||{};return r.default.createElement(o.LockedAccount,null,r.default.createElement(c.AccountInfo,{account:e}),r.default.createElement(o.BalanceInfoInRow,null,r.default.createElement(o.InfoTitle,null,"Transferable balance"),r.default.createElement(o.InfoValue,null,r.default.createElement(s.TokenValue,{value:t}))),r.default.createElement(i.ToggleButton,{className:"ui-toggle",disabled:!0},r.default.createElement(a.Arrow,{direction:"down"})))}},15838:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterByText=void 0,t.filterByText=function(e,t){return e.filter((e=>e.name?.toLocaleLowerCase().includes(t.toLocaleLowerCase())||e.address.includes(t)))}},11679:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(67738),t),r(A(64297),t)},89300:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TransferButtonStyled=t.TransferButton=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(86096),o=A(67312),s=A(12101),u=A(19221);t.TransferButton=function({from:e,to:t,disabled:A}){const{showModal:n}=u.useModal(),i=!e&&!t,a=i?"transfer":e&&!i?"send":"receive",s=!!A;return r.default.createElement(c,{size:"medium",square:!0,onClick:()=>n({modal:"TransferTokens",data:{from:e,to:t}}),disabled:s},r.default.createElement(o.PickedTransferIcon,{type:a}))},t.TransferButtonStyled=function(){const{showModal:e}=u.useModal();return r.default.createElement(l,{size:"small",square:!0,onClick:()=>e({modal:"TransferTokens",data:{}})},r.default.createElement(o.PickedTransferIcon,{type:"transfer"}))};const c=i.default(a.ButtonGhost)`
  svg {
    color: ${s.Colors.Black[900]};
  }
`,l=i.default(a.ButtonPrimary)`
  width: 32px;
  height: 32px;
  grid-area: balancetransfer;
  justify-self: end;
`},42482:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useAccounts=void 0;const n=A(2784),r=A(6846);t.useAccounts=function(){return n.useContext(r.AccountsContext)}},88345:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useBalance=t.toBalances=void 0;const r=n(A(62197)),i=A(1361),a=A(28443);function o(e){const{lockedBalance:t,availableBalance:A}=e;return{total:A.add(t),transferable:A,locked:t,recoverable:new r.default(0)}}t.toBalances=o,t.useBalance=e=>{const{api:t}=i.useApi(),A=a.useObservable(e?t?.derive.balances.all(e):void 0,[t,e]);return void 0===A?null:o(A)}},6908:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useBalances=void 0;const n=A(24496),r=A(56276),i=A(1361),a=A(28443),o=A(42482),s=A(88345);t.useBalances=function(){const{hasAccounts:e,allAccounts:t}=o.useAccounts(),{isConnected:A,api:u}=i.useApi(),c=t.map((e=>e.address)),l=u?c.map((e=>u.derive.balances.all(e).pipe(r.map(s.toBalances)))):[],d=a.useObservable(n.combineLatest(l),[u,JSON.stringify(c)]);return e&&A&&d?d.reduce(((e,t,A)=>({[c[A]]:t,...e})),{}):{}}},40531:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTotalBalances=t.zeroBalance=void 0;const r=n(A(62197)),i=A(6908);t.zeroBalance=()=>({recoverable:new r.default(0),locked:new r.default(0),transferable:new r.default(0),total:new r.default(0)});const a=(e,t)=>({recoverable:e.recoverable.add(t.recoverable),locked:e.locked.add(t.locked),transferable:e.transferable.add(t.transferable),total:e.total.add(t.total)});t.useTotalBalances=function(){const e=i.useBalances();return[...Object.values(e)].reduce(a,t.zeroBalance())}},48592:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useTransactionFee=void 0;const n=A(2784),r=A(28443),i=A(88345);t.useTransactionFee=function(e,t){const A=r.useObservable(t?.paymentInfo(e||""),[t,e]),a=i.useBalance(e);return n.useMemo((()=>a&&A?{transactionFee:A.partialFee,canAfford:a.transferable.gte(A.partialFee)}:void 0),[a,A])}},38611:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TransferFormModal=void 0;const o=a(A(62197)),s=i(A(2784)),u=a(A(82740)),c=A(86096),l=A(85534),d=A(67312),f=A(85577),g=A(65639),p=A(69051),h=A(11679),m=A(88345);t.TransferFormModal=function({from:e,to:t,onClose:A,onAccept:n,title:r}){const[i,a]=s.useState(t),[u,E]=s.useState(e),[B,C]=g.useNumberInput(0),v=m.useBalance(u?.address),b=s.useCallback(h.filterAccount(i),[i]),w=v?.transferable??new o.default(0),Q=s.useCallback(h.filterAccount(u),[u]),k=new o.default(B).lte(new o.default(0)),M=new o.default(B).gt(w||0),S=k||M||!i,D=!u;return s.default.createElement(f.Modal,{modalSize:"m",onClose:A},s.default.createElement(f.ModalHeader,{onClick:A,title:r,icon:s.default.createElement(d.PickedTransferIcon,{type:e?"send":t?"receive":"transfer"})}),s.default.createElement(f.ModalBody,null,s.default.createElement(f.Row,null,s.default.createElement(l.InputComponent,{required:!0,inputSize:"l",label:"From",id:"transfer-from-input",disabled:!!e,borderless:!!e},e?s.default.createElement(h.SelectedAccount,{account:e}):s.default.createElement(h.SelectAccount,{filter:b,onChange:E}))),s.default.createElement(f.TransactionAmount,null,s.default.createElement(l.InputComponent,{label:"Number of tokens",id:"amount-input",disabled:D,required:!0,inputWidth:"s",units:"JOY"},s.default.createElement(l.InputNumber,{id:"amount-input",value:p.formatTokenValue(new o.default(B)),onChange:e=>C(e.target.value),disabled:D,placeholder:"0"})),s.default.createElement(y,null,s.default.createElement(I,{size:"small",onClick:()=>C(w.div(new o.default(2)).toString()),disabled:D},"Use half"),s.default.createElement(I,{size:"small",onClick:()=>C(w.toString()),disabled:D},"Use max"))),s.default.createElement(f.Row,null,s.default.createElement(l.InputComponent,{required:!0,inputSize:"l",label:"Destination account",id:"transfer-to-input",disabled:!!t,borderless:!!t},t?s.default.createElement(h.SelectedAccount,{account:t}):s.default.createElement(h.SelectAccount,{filter:Q,onChange:a})))),s.default.createElement(f.ModalFooter,null,s.default.createElement(c.ButtonPrimary,{size:"medium",onClick:()=>{B&&i&&u&&n(new o.default(B),u,i)},disabled:S},"Transfer tokens")))};const y=u.default.div`
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  width: fit-content;
  height: 46px;
  align-items: center;
`,I=u.default(c.ButtonGhost)`
  height: 26px;
  padding: 4px 6px;
  font-size: 10px;
  line-height: 16px;
  text-transform: uppercase;
`},62291:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TransferModal=void 0;const o=a(A(62197)),s=i(A(2784)),u=A(15912),c=A(31604),l=A(19221),d=A(38611),f=A(90997),g=A(7283);t.TransferModal=function(){const{hideModal:e,modalData:t}=l.useModal(),{from:A,to:n}=t,[r,i]=s.useState("PREPARE"),[a,p]=s.useState(new o.default(0)),[h,m]=s.useState(new o.default(0)),[y,I]=s.useState(A),[E,B]=s.useState(n),C=A||n?A?"Send tokens":"Receive tokens":"Transfer tokens";return"PREPARE"!==r&&E&&y?"AUTHORIZE"===r?s.default.createElement(f.TransferSignModal,{onClose:e,from:y,amount:a,to:E,onDone:(e,t,A)=>{i(e?"SUCCESS":"ERROR"),m(A)}}):"SUCCESS"===r?s.default.createElement(g.TransferSuccessModal,{onClose:e,from:y,to:E,amount:a,fee:h}):s.default.createElement(u.FailureModal,{onClose:e},"You haven’t transferred ",s.default.createElement(c.TokenValue,{value:a})," stake from “",y.name,"” account to “",E.name,"” destination."):s.default.createElement(d.TransferFormModal,{onClose:e,from:y,to:E,onAccept:(e,t,A)=>{p(e),B(A),I(t),i("AUTHORIZE")},title:C})}},90997:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.TransferSignModal=void 0;const a=i(A(2784)),o=A(86096),s=A(76746),u=A(24895),c=A(85577),l=A(22807),d=A(31604),f=A(1361),g=A(28711),p=A(41469),h=A(88345);t.TransferSignModal=function({onClose:e,from:t,amount:A,to:n,onDone:r}){const i=n.address,m=t.address,y=h.useBalance(m),I=h.useBalance(i),{api:E}=f.useApi(),B=a.useMemo((()=>E?.tx?.balances?.transfer(i,A)),[i,A]),{paymentInfo:C,send:v,status:b}=g.useSignAndSendTransaction({transaction:B,signer:m,onDone:r});return a.default.createElement(l.TransactionModal,{status:b,onClose:e},a.default.createElement(c.ModalBody,null,a.default.createElement(c.SignTransferContainer,null,a.default.createElement(c.Row,null,a.default.createElement(d.TextMedium,{margin:"xl"},"You are transferring ",a.default.createElement(d.TokenValue,{value:A})," stake from “",t.name,"” account to “",n.name,"”"," ","destination."),a.default.createElement(c.LockedAccount,null,a.default.createElement(p.AccountInfo,{account:t}),a.default.createElement(c.BalanceInfoInRow,null,a.default.createElement(c.InfoTitle,null,"Transferable balance"),a.default.createElement(c.InfoValue,null,a.default.createElement(d.TokenValue,{value:y?.transferable}))))),a.default.createElement(c.TransactionAmountInfo,null,a.default.createElement(u.ArrowDownExpandedIcon,null),a.default.createElement(c.TransactionAmountInfoText,null,"Transferring ",a.default.createElement(d.TokenValue,{value:A}))),a.default.createElement(c.Row,null,a.default.createElement(c.LockedAccount,null,a.default.createElement(p.AccountInfo,{account:n}),a.default.createElement(c.BalanceInfoInRow,null,a.default.createElement(c.InfoTitle,null,"Transferable balance"),a.default.createElement(c.InfoValue,null,a.default.createElement(d.TokenValue,{value:I?.transferable}))))))),a.default.createElement(c.ModalFooter,null,a.default.createElement(c.TransactionInfo,null,a.default.createElement(c.BalanceInfoNarrow,null,a.default.createElement(c.InfoTitle,null,"Amount:"),a.default.createElement(c.InfoValue,null,a.default.createElement(d.TokenValue,{value:A}))),a.default.createElement(c.BalanceInfoNarrow,null,a.default.createElement(c.InfoTitle,null,"Transaction fee:"),a.default.createElement(c.InfoValue,null,a.default.createElement(d.TokenValue,{value:C?.partialFee.toBn()})),a.default.createElement(s.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora mollitia necessitatibus, eos recusandae obcaecati facilis sed maiores. Impedit iusto expedita natus perspiciatis, perferendis totam commodi ad, illo, veritatis omnis beatae.Facilis natus recusandae, magni saepe hic veniam aliquid tempore quia assumenda voluptatum reprehenderit. Officiis provident nam corrupti, incidunt, repudiandae accusantium porro libero ipsam illo quae ratione. Beatae itaque quo quidem.",absolute:!0}))),a.default.createElement(o.ButtonPrimary,{size:"medium",onClick:v,disabled:"READY"!==b},"Sign transaction and Transfer")))}},7283:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TransferSuccessModal=void 0;const r=n(A(2784)),i=A(24895),a=A(85577),o=A(31604),s=A(41469),u=A(88345);t.TransferSuccessModal=function({onClose:e,from:t,to:A,amount:n,fee:c}){const l=u.useBalance(t.address),d=u.useBalance(A.address);if(!l||!d)return r.default.createElement(r.default.Fragment,null);const f=l.transferable,g=f.add(n).add(c),p=d.transferable,h=p.sub(n);return r.default.createElement(a.Modal,{modalSize:"m",modalHeight:"s",onClose:e},r.default.createElement(a.ModalHeader,{onClick:e,title:"Success",icon:r.default.createElement(i.SuccessIcon,null)}),r.default.createElement(a.SuccessModalBody,null,r.default.createElement(o.TextMedium,{margin:"l"},"You have just successfully transferred balance from"),r.default.createElement(a.LockedAccount,null,r.default.createElement(s.AccountInfo,{account:t}),r.default.createElement(a.BalanceInfo,null,r.default.createElement(a.InfoTitle,null,"Transferable balance before:"),r.default.createElement(a.InfoValue,null,r.default.createElement(o.TokenValue,{value:g})),r.default.createElement(a.InfoTitle,null,"Transferable balance after:"),r.default.createElement(a.InfoValue,null,r.default.createElement(o.TokenValue,{value:f})))),r.default.createElement(a.TransactionAmountInfo,null,r.default.createElement(i.ArrowDownExpandedIcon,null),r.default.createElement(a.TransactionAmountInfoText,null,"Transferred ",r.default.createElement(o.TokenValue,{value:n}))),r.default.createElement(a.LockedAccount,null,r.default.createElement(s.AccountInfo,{account:A}),r.default.createElement(a.BalanceInfo,null,r.default.createElement(a.InfoTitle,null,"Transferable balance before:"),r.default.createElement(a.InfoValue,null,r.default.createElement(o.TokenValue,{value:h})),r.default.createElement(a.InfoTitle,null,"Transferable balance after:"),r.default.createElement(a.InfoValue,null,r.default.createElement(o.TokenValue,{value:p}))))))}},10055:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(62291),t),r(A(28298),t)},28298:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},53892:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BalanceComparator=void 0;const r=n(A(62197)),i=A(19709);t.BalanceComparator=(e,t,A)=>(n,a)=>{const o=e[n.address]?.[t]||new r.default(0),s=e[a.address]?.[t]||new r.default(0);return i.applyOrder(o.cmp(s),A)}},3307:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.accountOrNamed=void 0,t.accountOrNamed=(e,t,A)=>e.find((e=>e.address===t))??{address:t,name:A}},86325:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.filterAccounts=void 0;const r=n(A(62197));t.filterAccounts=(e,t,A)=>t?e:e.filter((({address:e})=>A[e]&&A[e].total.gt(new r.default(0))))},85079:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isValidAddress=void 0,t.isValidAddress=function(e,t){try{t.encodeAddress(t.decodeAddress(e))}catch(e){return!1}return!0}},89905:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setOrder=t.sortAccounts=void 0;const n=A(19709),r=A(53892);t.sortAccounts=function(e,t,A,i=!1){return"name"===A?e.sort(n.Comparator(i,A).string):e.sort(r.BalanceComparator(t,A,i))},t.setOrder=function(e,t,A,n,r){e===t?r(!n):(r("name"!==e),A(e))}},6846:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AccountsContext=void 0;const n=A(2784);t.AccountsContext=n.createContext({hasAccounts:!1,allAccounts:[]})},32415:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.AccountsContextProvider=void 0;const a=A(2028),o=i(A(2784)),s=A(87795),u=A(28443),c=A(6846);t.AccountsContextProvider=e=>{const t=s.useKeyring(),[A,n]=o.useState(!1),[r,i]=o.useState(!1);var l,d;o.useEffect((l=()=>n(!0),d=()=>i(!0),()=>{let e=0;const t=setInterval((()=>{Object.keys(window.injectedWeb3).length?(clearInterval(t),l()):(e+=20,e>=1e3&&(clearInterval(t),d()))}),20);return()=>clearInterval(t)}),[]),o.useEffect((()=>{A&&(async e=>{await a.web3Enable("Pioneer");const t=(await a.web3Accounts()).map((({address:e,meta:t})=>({address:e,meta:{...t,name:`${t.name} (${t.source})`}})));(function(e){try{return!!e.keyring}catch{return!1}})(e)||e.loadAll({isDevelopment:!0},t)})(t).catch(console.error)}),[A]);const f=u.useObservable(t.accounts.subject.asObservable(),[t]),g=[];f&&g.push(...Object.values(f).map((e=>({address:e.json.address,name:e.json.meta.name}))));const p={allAccounts:g,hasAccounts:0!==g.length};return r&&(p.error="EXTENSION"),o.default.createElement(c.AccountsContext.Provider,{value:p},e.children)}},96646:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const r=n(A(2784)),i=A(12424),a=A(27544),o=A(11667),s=A(2040),u=A(17554),c=A(60740),l=A(89797),d=A(45187),f=A(41152),g=A(83269),p=A(58430),h=A(9818),m=A(26837),y=A(50695);t.App=()=>r.default.createElement(y.Providers,null,r.default.createElement(o.Page,null,r.default.createElement(u.SideBar,null),r.default.createElement(i.Switch,null,r.default.createElement(i.Route,{exact:!0,path:"/profile",component:l.MyAccounts}),r.default.createElement(i.Route,{exact:!0,path:"/profile/memberships",component:d.MyMemberships}),r.default.createElement(i.Route,{exact:!0,path:"/working-groups",component:m.WorkingGroupsOpenings}),r.default.createElement(i.Route,{exact:!0,path:"/working-groups/working-groups",component:h.WorkingGroups}),r.default.createElement(i.Route,{exact:!0,path:"/working-groups/my-applications",component:f.MyApplications}),r.default.createElement(i.Route,{exact:!0,path:"/working-groups/my-roles",component:g.MyRoles}),r.default.createElement(i.Route,{exact:!0,path:"/working-groups/grouppreview/:id",component:p.WorkingGroup}),r.default.createElement(i.Redirect,{exact:!0,from:"/",to:"/profile"}))),r.default.createElement(a.ConnectionStatus,null),r.default.createElement(s.ExtensionWarning,null),r.default.createElement(c.GlobalModals,null))},60740:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalModals=void 0;const r=n(A(2784)),i=A(10055),a=A(19221),o=A(8182),s=A(50291),u=A(26885),c=A(89509);t.GlobalModals=()=>{const{modal:e}=a.useModal();switch(e){case"Member":return r.default.createElement(o.MemberProfile,null);case"BuyMembership":return r.default.createElement(s.BuyMembershipModal,null);case"TransferInvites":return r.default.createElement(u.TransferInviteModal,null);case"TransferTokens":return r.default.createElement(i.TransferModal,null);case"ApplyForRoleModal":return r.default.createElement(c.ApplyForRoleModal,null);default:return null}}},50695:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Providers=void 0;const r=A(73059),i=n(A(2784)),a=A(12424),o=A(32415),s=A(26129),u=A(97136),c=A(71458),l=A(27813),d=A(61999),f=A(20184),g=A(52905),p=A(86693),h=g.makeServer(),m=new r.ApolloClient({uri:"http://localhost:8081/graphql",cache:new r.InMemoryCache});t.Providers=e=>i.default.createElement(u.KeyringContextProvider,null,i.default.createElement(o.AccountsContextProvider,null,i.default.createElement(s.ApiContextProvider,null,i.default.createElement(l.ServerContextProvider,{value:h},i.default.createElement(r.ApolloProvider,{client:m},i.default.createElement(d.MembershipContextProvider,null,i.default.createElement(a.HashRouter,null,i.default.createElement(c.ModalContextProvider,null,i.default.createElement(f.Mocks,null),i.default.createElement(p.GlobalStyle,null),e.children))))))))},86810:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PageContainer=t.AppPage=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12510),o=A(31294);t.AppPage=({children:e,crumbs:A})=>r.default.createElement(a.PageContent,null,r.default.createElement(o.Breadcrumbs,{crumbs:A}),r.default.createElement(t.PageContainer,null,e)),t.PageContainer=i.default.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 24px;
  width: 100%;
`},2040:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.ExtensionWarning=void 0;const a=i(A(2784)),o=A(42482),s=A(46020);t.ExtensionWarning=function(){const{error:e}=o.useAccounts(),[t,A]=a.useState(!1);return a.useEffect((()=>{"EXTENSION"===e&&A(!0)}),[e]),a.useEffect((()=>{if(!t)return;const e=setTimeout((()=>A(!1)),1e4);return()=>clearTimeout(e)}),[t]),t?a.default.createElement(s.SideNotification,{onClick:()=>A(!1),title:"Extension unavailable",message:"You need a Polkadot.js extension to use this site.",isError:!0}):null}},17554:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SideBar=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(35442),o=A(97426),s=A(20389),u=A(20828),c=A(84432),l=A(36085),d=A(47105),f=A(55805);t.SideBar=()=>r.default.createElement(u.Navigation,null,r.default.createElement(c.NavigationHeader,null,r.default.createElement(s.LogoLink,null)),r.default.createElement(g,null,r.default.createElement(p,null,r.default.createElement(l.NavigationLink,{to:"/profile"},r.default.createElement(a.MyProfileIcon,null),"My profile")),r.default.createElement(p,null,r.default.createElement(l.NavigationLink,{to:"/working-groups"},r.default.createElement(o.WorkingGroupsIcon,null),"Working Groups"))),r.default.createElement(f.ProfileComponent,null),r.default.createElement(d.Version,null));const g=i.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-area: barlinks;
  margin: 0;
  padding: 0;
  list-style: none;
`,p=i.default.li`
  display: flex;
  flex-direction: column;
  flex-basis: 48px;
  flex-shrink: 0;
  width: 100%;
`},39716:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.usePageTabs=void 0;const n=A(2784),r=A(12424);t.usePageTabs=e=>{const t=r.useHistory();return n.useMemo((()=>e.map((([e,A])=>({title:e,active:A===t.location.pathname,onClick:()=>t.push(A)})))),[JSON.stringify(e)])}},81495:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(96646),t)},89797:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MyAccounts=void 0;const r=n(A(2784)),i=A(40531),a=A(10686),o=A(209),s=A(62523),u=A(86810),c=A(59101),l=A(83446);t.MyAccounts=function(){const{total:e,transferable:t,locked:A,recoverable:n}=i.useTotalBalances();return r.default.createElement(u.AppPage,{crumbs:[{href:"#",text:"My Profile"},{href:"#",text:"My Accounts"}]},r.default.createElement(a.PageHeader,null,r.default.createElement(o.PageTitle,null,"My Profile"),r.default.createElement(l.MyProfileTabs,null)),r.default.createElement(s.Statistics,null,r.default.createElement(s.TokenValueStat,{title:"Total balance",helperText:"Lorem ipsum...",value:e}),r.default.createElement(s.TokenValueStat,{title:"Total transferable balance",helperText:"Lorem ipsum...",value:t}),r.default.createElement(s.TokenValueStat,{title:"Total locked balance",helperText:"Lorem ipsum...",value:A}),r.default.createElement(s.TokenValueStat,{title:"Total recoverable",helperText:"Lorem ipsum...",value:n})),r.default.createElement(c.Accounts,null))}},45187:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MyMemberships=void 0;const r=n(A(2784)),i=A(10686),a=A(209),o=A(86810),s=A(86001),u=A(83446);t.MyMemberships=()=>r.default.createElement(o.AppPage,{crumbs:[{href:"#",text:"My Profile"},{href:"#",text:"My Memberships"}]},r.default.createElement(i.PageHeader,null,r.default.createElement(a.PageTitle,null,"My Profile"),r.default.createElement(u.MyProfileTabs,null)),r.default.createElement(s.Memberships,null))},33498:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AccountItem=void 0;const r=n(A(62197)),i=n(A(2784)),a=n(A(82740)),o=A(41469),s=A(89300),u=A(88345),c=A(55017),l=A(31604),d=A(12101);t.AccountItem=({account:e})=>{const t=e.address,A=u.useBalance(t),n=!A?.transferable||!A.transferable.gt(new r.default(0));return i.default.createElement(c.ToggleableItem,null,(r=>i.default.createElement("div",null,i.default.createElement(f,{key:t},i.default.createElement(o.AccountInfo,{account:e}),i.default.createElement(g,null,i.default.createElement(l.TokenValue,{value:A?.total})),i.default.createElement(g,null,i.default.createElement(l.TokenValue,{value:A?.locked})),i.default.createElement(g,null,i.default.createElement(l.TokenValue,{value:A?.recoverable})),i.default.createElement(g,null,i.default.createElement(l.TokenValue,{value:A?.transferable})),i.default.createElement(p,null,i.default.createElement(s.TransferButton,{to:e}),i.default.createElement(s.TransferButton,{from:e,disabled:n}))),r&&i.default.createElement("div",null,"I'm Open!"))))};const f=a.default.div`
  display: grid;
  grid-template-columns: 276px repeat(4, 128px) 136px;
  grid-template-rows: 1fr;
  justify-content: space-between;
  justify-items: end;
  align-items: center;
  width: 100%;
  height: ${d.Sizes.accountHeight};
  padding: 16px 0 16px 14px;
`,g=a.default.p``,p=a.default.div`
  display: grid;
  grid-template-columns: repeat(2, 40px);
  grid-template-rows: 40px;
  grid-column-gap: 8px;
`},59101:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Accounts=void 0;const o=i(A(2784)),s=a(A(82740)),u=A(42482),c=A(6908),l=A(86325),d=A(89905),f=A(55003),g=A(65944),p=A(12510),h=A(89451),m=A(69490),y=A(12101),I=A(33498);t.Accounts=function(){const{allAccounts:e,hasAccounts:t}=u.useAccounts(),[A,n]=o.useState(!0),r=c.useBalances(),[i,a]=o.useState("name"),[s,y]=o.useState(!1),v=o.useMemo((()=>l.filterAccounts(e,A,r)),[e,A,t]),b=o.useMemo((()=>d.sortAccounts(v,r,i,s)),[v,r,i,s]);if(!t)return o.default.createElement(g.Loading,null);const w=({children:e,sortKey:t})=>{return o.default.createElement(C,{onClick:(A=t,()=>d.setOrder(A,i,a,s,y))},o.default.createElement(h.HeaderText,null,e,i===t&&(s?o.default.createElement(h.SortIconDown,null):o.default.createElement(h.SortIconUp,null))));var A},Q=[{title:"All accounts",onClick:()=>!A&&n(!0),active:A},{title:"Transferable balance",onClick:()=>A&&n(!1),active:!A}];return o.default.createElement(p.ContentWithTabs,null,o.default.createElement(m.Tabs,{tabsSize:"xs",tabs:Q}),o.default.createElement(E,null,o.default.createElement(B,null,o.default.createElement(w,{sortKey:"name"},"Account"),o.default.createElement(w,{sortKey:"total"},"Total balance"),o.default.createElement(w,{sortKey:"locked"},"Locked balance"),o.default.createElement(w,{sortKey:"recoverable"},"Recoverable balance"),o.default.createElement(w,{sortKey:"transferable"},"Transferable balance")),o.default.createElement(f.List,null,b.map((e=>o.default.createElement(f.ListItem,{key:e.address},o.default.createElement(I.AccountItem,{account:e})))))))};const E=s.default.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 16px auto;
  grid-template-areas:
    'accountstablenav'
    'accountslist';
  grid-row-gap: 5px;
  width: 100%;
`,B=s.default.div`
  display: grid;
  grid-area: accountstablenav;
  grid-template-rows: 1fr;
  grid-template-columns: 276px repeat(4, 128px) 136px;
  justify-content: space-between;
  width: 100%;
  padding-left: 16px;
`,C=s.default.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  justify-self: end;
  width: fit-content;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  color: ${y.Colors.Black[400]};
  text-transform: uppercase;
  text-align: right;
  user-select: none;
  cursor: pointer;

  &:first-child {
    text-align: left;
    justify-self: start;
  }
`},86001:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Memberships=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(86096),o=A(65944),s=A(12510),u=A(31604),c=A(17129),l=A(3363),d=A(26359),f=A(54065);t.Memberships=function(){const{count:e,isLoading:t,members:A,active:n}=f.useMyMemberships(),i=!!e;if(t)return r.default.createElement(o.Loading,null);if(!i)return r.default.createElement(p,null,r.default.createElement(h,null,r.default.createElement("h3",null,"You have no active membership"),r.default.createElement(u.TextMedium,null,"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.")),r.default.createElement(g,null,"Create a membership"));const a=A.filter((e=>!n||n.handle!==e.handle));return r.default.createElement(m,null,r.default.createElement(y,null,r.default.createElement(l.InviteMemberButton,{size:"medium"},"Invite a member"),r.default.createElement(c.AddMembershipButton,{size:"medium"},"Add Membership")),!!n&&r.default.createElement(d.MembersSection,{title:"Active membership",members:[n]}),!!a.length&&r.default.createElement(d.MembersSection,{title:"Other memberships",members:a}))};const g=i.default(c.AddMembershipButton)`
  grid-area: none;
  margin-top: 24px;
`,p=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 420px;
  margin: 124px auto 0;
`,h=i.default.div`
  width: 100%;

  ${u.TextMedium} {
    margin-top: 16px;
  }
`,m=i.default(s.MainPanel)`
  position: relative;
  grid-row-gap: 28px;
  padding-top: 8px;
`,y=i.default(a.ButtonsGroup)`
  position: absolute;
  right: 0;
  top: 0;
`},83446:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MyProfileTabs=void 0;const r=n(A(2784)),i=A(69490),a=A(39716);t.MyProfileTabs=()=>{const e=a.usePageTabs([["My Accounts","/profile"],["My Memberships","/profile/memberships"]]);return r.default.createElement(i.Tabs,{tabs:e})}},41152:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.MyApplications=void 0;const a=i(A(2784)),o=A(12510),s=A(10686),u=A(209),c=A(31604),l=A(50081),d=A(48064),f=A(86810),g=A(96875);t.MyApplications=()=>{const e=a.useMemo((()=>[{href:"#",text:"Working Groups"},{href:"#",text:"My Applications"}]),[]),{applications:t}=d.useMyApplications();return a.default.createElement(f.AppPage,{crumbs:e},a.default.createElement(s.PageHeader,null,a.default.createElement(u.PageTitle,null,"Working Groups"),a.default.createElement(g.WorkingGroupsTabs,null)),a.default.createElement(c.TextBig,null,"My Applications"),a.default.createElement(o.MainPanel,null,a.default.createElement(c.Label,null,"CURRENT APPLICATIONS"),a.default.createElement(l.ApplicationsList,{applications:t?.filter((e=>"ApplicationStatusPending"==e.status))??[]}),a.default.createElement(c.Label,null,"PAST APPLICATIONS"),a.default.createElement(l.ApplicationsList,{applications:t?.filter((e=>"ApplicationStatusPending"!=e.status))??[]})))}},83269:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MyRoles=void 0;const r=n(A(2784)),i=A(10686),a=A(209),o=A(31604),s=A(86810),u=A(96875);t.MyRoles=()=>r.default.createElement(s.AppPage,{crumbs:[{href:"#",text:"Working Groups"},{href:"#",text:"My Roles"}]},r.default.createElement(i.PageHeader,null,r.default.createElement(a.PageTitle,null,"Working Groups"),r.default.createElement(u.WorkingGroupsTabs,null)),r.default.createElement(o.TextBig,null,"My roles"))},98702:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AboutTab=void 0;const r=n(A(2784)),i=A(12510),a=A(60536),o=A(27470),s=A(51610);t.AboutTab=({workingGroup:e})=>{const{member:t}=a.useMember(e.leaderId??""),{workers:A}=s.useWorkers(e.id??"");return r.default.createElement(i.ContentWithSidepanel,null,r.default.createElement(i.MainPanel,null,r.default.createElement("h4",null,"Welcome"),r.default.createElement("div",null,e.description),r.default.createElement("h4",null,"Status"),r.default.createElement("div",null,e.statusMessage),r.default.createElement("h4",null,"About"),r.default.createElement("div",null,e.about)),r.default.createElement(i.SidePanel,null,r.default.createElement(o.WorkersList,{leader:t,workers:A})))}},41536:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.HistoryTab=void 0;const r=n(A(2784)),i=A(12424),a=A(12510),o=A(78843);t.HistoryTab=function(){const{id:e}=i.useParams();return o.useWorkingGroup(e),r.default.createElement(a.ContentWithSidepanel,null,r.default.createElement(a.MainPanel,null,"main"),r.default.createElement(a.SidePanel,null,"side"))}},76365:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.OpeningsTab=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(65944),o=A(12510),s=A(62523),u=A(31604),c=A(60536),l=A(72367),d=A(27470),f=A(14073),g=A(51610);t.OpeningsTab=({workingGroup:e})=>{const{isLoading:t,openings:A}=f.useOpenings({groupId:e.id}),{member:n}=c.useMember(e.leaderId),{workers:i}=g.useWorkers(e.id??"");return r.default.createElement(o.ContentWithSidepanel,null,r.default.createElement(o.MainPanel,null,r.default.createElement(s.Statistics,null,r.default.createElement(s.TokenValueStat,{title:"Current budget",helperText:"Lorem ipsum...",value:e.budget}),r.default.createElement(s.TokenValueStat,{title:"Working Group dept",helperText:"Lorem ipsum...",value:-200}),r.default.createElement(s.TokenValueStat,{title:"Avg stake",helperText:"Lorem ipsum...",value:1e5})),t?r.default.createElement(a.Loading,null):r.default.createElement(p,null,r.default.createElement(h,null,r.default.createElement(u.Label,null,"Openings"),r.default.createElement(l.OpeningsList,{openings:A})))),r.default.createElement(o.SidePanel,null,r.default.createElement(d.WorkersList,{leader:n,workers:i})))};const p=i.default.div`
  display: grid;
  grid-row-gap: 24px;
  width: 100%;
`,h=i.default.div`
  display: grid;
  grid-row-gap: 16px;
  width: 100%;
`},85952:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.WorkingGroup=void 0;const a=i(A(2784)),o=A(12424),s=A(65944),u=A(10686),c=A(209),l=A(39408),d=A(69490),f=A(78843),g=A(86810),p=A(98702),h=A(41536),m=A(76365);t.WorkingGroup=function(){const[e,t]=a.useState("OPENINGS"),{id:A}=o.useParams(),{isLoading:n,group:r}=f.useWorkingGroup(A),i=[{href:"#",text:"Working Groups"},{href:"#",text:"Working Groups"},{href:"#",text:r?.name??"Group"}],y=[{title:"Openings",active:"OPENINGS"===e,onClick:()=>t("OPENINGS")},{title:"About",active:"ABOUT"===e,onClick:()=>t("ABOUT")},{title:"History",active:"HISTORY"===e,onClick:()=>t("HISTORY")}];return n||!r?a.default.createElement(s.Loading,null):a.default.createElement(g.AppPage,{crumbs:i},a.default.createElement(u.PageHeader,null,a.default.createElement(l.PreviousPage,null,a.default.createElement(c.PageTitle,null,r?.name)),a.default.createElement(d.Tabs,{tabs:y})),"OPENINGS"===e&&a.default.createElement(m.OpeningsTab,{workingGroup:r}),"ABOUT"===e&&a.default.createElement(p.AboutTab,{workingGroup:r}),"HISTORY"===e&&a.default.createElement(h.HistoryTab,null))}},58430:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(85952),t)},9818:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.WorkingGroups=void 0;const a=i(A(2784)),o=A(65944),s=A(10686),u=A(209),c=A(18414),l=A(17595),d=A(86810),f=A(96875);t.WorkingGroups=()=>{const{isLoading:e,groups:t}=l.useWorkingGroups(),A=a.useMemo((()=>[{href:"#",text:"Working Groups"},{href:"#",text:"Working Groups"}]),[]);return e?a.default.createElement(o.Loading,null):a.default.createElement(d.AppPage,{crumbs:A},a.default.createElement(s.PageHeader,null,a.default.createElement(u.PageTitle,null,"Working Groups"),a.default.createElement(f.WorkingGroupsTabs,null)),a.default.createElement(c.WorkingGroupsList,{groups:t}))}},26837:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WorkingGroupsOpenings=void 0;const o=a(A(62197)),s=i(A(2784)),u=A(40531),c=A(79386),l=A(65944),d=A(12510),f=A(10686),g=A(209),p=A(62523),h=A(69490),m=A(31604),y=A(41090),I=A(1054),E=A(54065),B=A(72367),C=A(14073),v=A(86810),b=A(96875);t.WorkingGroupsOpenings=()=>{const{isLoading:e,openings:t}=C.useOpenings(),A=y.useActivities(),{active:n}=E.useMyMemberships(),{locked:r}=u.useTotalBalances(),i={day:new o.default(200),month:new o.default(102e3)},a=s.useMemo((()=>[{href:"#",text:"Working Groups"},{href:"#",text:"Openings"}]),[]),[w,Q]=s.useState("OPENINGS"),k=[{title:"Openings",active:"OPENINGS"===w,onClick:()=>Q("OPENINGS"),count:t.length},{title:"Upcoming openings",active:"UPCOMING"===w,onClick:()=>Q("UPCOMING"),count:0}];return s.default.createElement(v.AppPage,{crumbs:a},s.default.createElement(f.PageHeader,null,s.default.createElement(g.PageTitle,null,"Working Groups"),s.default.createElement(b.WorkingGroupsTabs,null)),s.default.createElement(d.ContentWithSidepanel,null,s.default.createElement(d.MainPanel,null,s.default.createElement(p.Statistics,null,s.default.createElement(p.StatisticItem,{title:"My Roles"},n?s.default.createElement(I.MemberRoles,{member:n,size:"l",max:6}):s.default.createElement(m.TextMedium,null,"Select membership")),s.default.createElement(p.TokenValueStat,{title:"Currently staking",value:r}),s.default.createElement(p.MultiTokenValueStat,{title:"Earned in past",values:[{label:"24 hours",value:i.day},{label:"Month",value:i.month}]})),s.default.createElement(d.ContentWithTabs,null,s.default.createElement(h.Tabs,{tabsSize:"xs",tabs:k}),e?s.default.createElement(l.Loading,null):s.default.createElement(B.OpeningsList,{openings:"OPENINGS"===w?t:[]}))),s.default.createElement(d.SidePanel,null,s.default.createElement(m.Label,null,"Working group activities"),s.default.createElement(c.Activities,{activities:A}))))}},96875:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WorkingGroupsTabs=void 0;const r=n(A(2784)),i=A(69490),a=A(39716);t.WorkingGroupsTabs=()=>{const e=a.usePageTabs([["Openings","/working-groups"],["Working Groups","/working-groups/working-groups"],["My Applications","/working-groups/my-applications"],["My Roles","/working-groups/my-roles"]]);return r.default.createElement(i.Tabs,{tabs:e})}},86693:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalStyle=void 0;const r=A(82740),i=A(12101),a=n(A(48874)),o=n(A(36749)),s=n(A(28791)),u=n(A(82382));t.GlobalStyle=r.createGlobalStyle`
  @font-face {
    font-family: "Inter";
    src: url(${o.default}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Inter";
    src: url(${a.default}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Grotesk";
    src: url(${u.default}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Grotesk";
    src: url(${s.default}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
  *::selection, *:before::selection, *:after::selection {
    color: ${i.Colors.Blue[50]};
    background-color: ${i.Colors.Blue[500]};
  }

  body, html {
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: ${i.Colors.White};
    font-family: ${i.Fonts.Grotesk};
    font-size: 14px;
    color: ${i.Colors.Black[900]};
    overscroll-behavior-y: none;
    overflow: hidden;
  }
  body > #app {
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  button {
    font-family: ${i.Fonts.Grotesk};
    font-size: 1rem;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
    font-family: ${i.Fonts.Inter};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${i.Fonts.Grotesk};
    margin: 0;
    padding: 0;
    font-weight: 700;
  }

  h1 {
    font-size: 40px;
    line-height: 48px
  }
  h2 {
    font-size: 32px;
    line-height: 40px
  }
  h3 {
    font-size: 24px;
    line-height: 32px
  }
  h4 {
    font-size: 20px;
    line-height: 28px
  }
  h5 {
    font-size: 16px;
    line-height: 24px
  }
  h6 {
    font-size: 14px;
    line-height: 20px
  }
  a {
    text-decoration: none;
    font-family: ${i.Fonts.Grotesk};
  }
  input {
    font-family: ${i.Fonts.Grotesk};

    &::placeholder {
      font-family: ${i.Fonts.Inter};
    }
  }

  h1, h2, h3, h4, h5, h6, p, span, ul, ol, li, a, div, i, button, input {
    &::selection {
      color: ${i.Colors.Blue[50]};
      background-color: ${i.Colors.Blue[500]};
      -webkit-text-stroke-color: ${i.Colors.Blue[50]};
    }
  }
`},28068:(e,t)=>{"use strict";var A,n,r,i,a,o,s,u,c;Object.defineProperty(t,"__esModule",{value:!0}),t.PayoutType=t.ApplicationFormQuestionType=t.WorkingGroupOpeningType=t.EventType=t.Network=t.MembershipSystemOrderByInput=t.MembershipOrderByInput=t.MembershipEntryMethod=t.BlockOrderByInput=void 0,(c=t.BlockOrderByInput||(t.BlockOrderByInput={})).CreatedAtAsc="createdAt_ASC",c.CreatedAtDesc="createdAt_DESC",c.UpdatedAtAsc="updatedAt_ASC",c.UpdatedAtDesc="updatedAt_DESC",c.DeletedAtAsc="deletedAt_ASC",c.DeletedAtDesc="deletedAt_DESC",c.BlockAsc="block_ASC",c.BlockDesc="block_DESC",c.ExecutedAtAsc="executedAt_ASC",c.ExecutedAtDesc="executedAt_DESC",c.NetworkAsc="network_ASC",c.NetworkDesc="network_DESC",(u=t.MembershipEntryMethod||(t.MembershipEntryMethod={})).Paid="PAID",u.Invited="INVITED",u.Genesis="GENESIS",(s=t.MembershipOrderByInput||(t.MembershipOrderByInput={})).CreatedAtAsc="createdAt_ASC",s.CreatedAtDesc="createdAt_DESC",s.UpdatedAtAsc="updatedAt_ASC",s.UpdatedAtDesc="updatedAt_DESC",s.DeletedAtAsc="deletedAt_ASC",s.DeletedAtDesc="deletedAt_DESC",s.HandleAsc="handle_ASC",s.HandleDesc="handle_DESC",s.NameAsc="name_ASC",s.NameDesc="name_DESC",s.AvatarUriAsc="avatarUri_ASC",s.AvatarUriDesc="avatarUri_DESC",s.AboutAsc="about_ASC",s.AboutDesc="about_DESC",s.ControllerAccountAsc="controllerAccount_ASC",s.ControllerAccountDesc="controllerAccount_DESC",s.RootAccountAsc="rootAccount_ASC",s.RootAccountDesc="rootAccount_DESC",s.RegisteredAtBlockIdAsc="registeredAtBlockId_ASC",s.RegisteredAtBlockIdDesc="registeredAtBlockId_DESC",s.RegisteredAtTimeAsc="registeredAtTime_ASC",s.RegisteredAtTimeDesc="registeredAtTime_DESC",s.EntryAsc="entry_ASC",s.EntryDesc="entry_DESC",s.IsVerifiedAsc="isVerified_ASC",s.IsVerifiedDesc="isVerified_DESC",s.InviteCountAsc="inviteCount_ASC",s.InviteCountDesc="inviteCount_DESC",s.InvitedByIdAsc="invitedById_ASC",s.InvitedByIdDesc="invitedById_DESC",s.ReferredByIdAsc="referredById_ASC",s.ReferredByIdDesc="referredById_DESC",(o=t.MembershipSystemOrderByInput||(t.MembershipSystemOrderByInput={})).CreatedAtAsc="createdAt_ASC",o.CreatedAtDesc="createdAt_DESC",o.UpdatedAtAsc="updatedAt_ASC",o.UpdatedAtDesc="updatedAt_DESC",o.DeletedAtAsc="deletedAt_ASC",o.DeletedAtDesc="deletedAt_DESC",o.DefaultInviteCountAsc="defaultInviteCount_ASC",o.DefaultInviteCountDesc="defaultInviteCount_DESC",o.MembershipPriceAsc="membershipPrice_ASC",o.MembershipPriceDesc="membershipPrice_DESC",o.ReferralCutAsc="referralCut_ASC",o.ReferralCutDesc="referralCut_DESC",o.InvitedInitialBalanceAsc="invitedInitialBalance_ASC",o.InvitedInitialBalanceDesc="invitedInitialBalance_DESC",(a=t.Network||(t.Network={})).Babylon="BABYLON",a.Alexandria="ALEXANDRIA",a.Rome="ROME",a.Olympia="OLYMPIA",(i=t.EventType||(t.EventType={})).MembershipBought="MembershipBought",i.MemberInvited="MemberInvited",i.MemberProfileUpdated="MemberProfileUpdated",i.MemberAccountsUpdated="MemberAccountsUpdated",i.MemberVerificationStatusUpdated="MemberVerificationStatusUpdated",i.ReferralCutUpdated="ReferralCutUpdated",i.InvitesTransferred="InvitesTransferred",i.MembershipPriceUpdated="MembershipPriceUpdated",i.InitialInvitationBalanceUpdated="InitialInvitationBalanceUpdated",i.LeaderInvitationQuotaUpdated="LeaderInvitationQuotaUpdated",i.InitialInvitationCountUpdated="InitialInvitationCountUpdated",i.StakingAccountAddedEvent="StakingAccountAddedEvent",i.StakingAccountConfirmed="StakingAccountConfirmed",i.StakingAccountRemoved="StakingAccountRemoved",(r=t.WorkingGroupOpeningType||(t.WorkingGroupOpeningType={})).Regular="REGULAR",r.Leader="LEADER",(n=t.ApplicationFormQuestionType||(t.ApplicationFormQuestionType={})).Text="TEXT",n.Textarea="TEXTAREA",(A=t.PayoutType||(t.PayoutType={})).StandardReward="STANDARD_REWARD",A.ReturnMissed="RETURN_MISSED"},93395:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(28068),t)},39449:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Activities=void 0;const r=n(A(2784)),i=A(31604),a=A(8537);t.Activities=({activities:e})=>r.default.createElement("div",null,e.map((e=>r.default.createElement(a.ActivityComponent,{key:e.id,type:e.type,category:e.category,timestamp:e.time},r.default.createElement(i.TextMedium,null,e.text)))))},8537:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityComponent=void 0;const r=n(A(2784)),i=A(62022),a=A(94515);t.ActivityComponent=({timestamp:e,category:t,type:A,children:n})=>r.default.createElement("div",null,r.default.createElement(a.ActivityIcon,{icon:t,variant:A}),r.default.createElement("div",null,i.relativeTime(e)),r.default.createElement("div",null,n))},94515:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityIcon=void 0;const r=n(A(2784)),i=A(24895);t.ActivityIcon=({icon:e})=>"closed"===e?r.default.createElement(i.ArrowInsideIcon,null):r.default.createElement(i.CopyIcon,null)},79386:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(39449),t)},32916:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BadgeViolet=void 0;const r=n(A(82740)),i=A(12101);t.BadgeViolet=r.default.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 16px;
  padding: 0 8px;
  background-color: ${i.Colors.Blue[200]};
  border-radius: ${i.BorderRad.l};
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  color: ${i.Colors.White};
  text-transform: uppercase;
  ${i.Overflow.Dots}
`},27544:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.ConnectionStatus=void 0;const a=i(A(2784)),o=A(1361),s=A(46020);t.ConnectionStatus=()=>{const{isConnected:e,api:t}=o.useApi(),[A,n]=a.useState(!1);return a.useEffect((()=>{if(!t)return;const e=()=>{t.once("disconnected",A),n(!0)},A=()=>{t.once("connected",e),n(!0)};return t.once("disconnected",A),t.once("connected",e),()=>{t.off("connected",e),t.off("disconnected",A)}}),[t]),a.useEffect((()=>{if(!A)return;const e=setTimeout((()=>n(!1)),5e3);return()=>clearTimeout(e)}),[A]),A?e?a.default.createElement(s.SideNotification,{onClick:()=>n(!1),title:"Connected to network"}):a.default.createElement(s.SideNotification,{isError:!0,onClick:()=>n(!1),title:"Disconnected from network"}):null}},800:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CopyText=t.CopyGroup=t.CopyComponent=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101),o=A(86096);t.CopyComponent=r.default.memo((({altText:e,copyText:A,disabled:n,className:i})=>r.default.createElement(t.CopyGroup,{className:i,disabled:n},r.default.createElement(t.CopyText,null,!e&&A,e&&e),r.default.createElement(o.CopyButton,{textToCopy:A,disabled:n})))),t.CopyGroup=i.default.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-column-gap: 8px;
  width: fit-content;
  height: fit-content;
  font-family: ${a.Fonts.Inter};
  font-size: 12px;
  line-height: 18px;
  color: ${({disabled:e})=>e?a.Colors.Black[300]:a.Colors.Black[400]};
  transition: ${a.Transitions.all};
`,t.CopyText=i.default.span`
  max-width: 100%;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-feature-settings: 'tnum';
`},24068:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CountBadge=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101),o=A(31604);t.CountBadge=r.default.memo((({count:e,className:t})=>r.default.createElement(s,{className:t},e)));const s=i.default(o.Badge)`
  color: ${a.Colors.Blue[500]};
  background-color: ${a.Colors.Blue[50]};
  -webkit-text-stroke-width: 0;
  -webkit-text-stroke-color: transparent;
`},15912:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FailureModal=void 0;const r=n(A(2784)),i=A(33939),a=A(85577);t.FailureModal=({children:e,onClose:t})=>r.default.createElement(a.Modal,{modalSize:"xs",modalHeight:"s",onClose:t},r.default.createElement(a.ModalHeader,{title:"",onClick:t,modalHeaderSize:"s"}),r.default.createElement(a.ResultModalBody,null,r.default.createElement(i.FailureIcon,null),r.default.createElement(a.ModalTitle,{as:"h4"},r.default.createElement("span",{className:"red-title"},"Oh no!")," Failure"),r.default.createElement(a.ResultText,null,e)))},76746:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.HelpContainer=t.HelpComponent=t.HelperLink=t.HelperText=t.HelpPopupTitle=t.Help=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101),o=A(24895),s=A(27070);t.Help=r.default.memo((({helperText:e,helperTitle:A,helperLinkText:n,helperLinkURL:i,icon:a,memberRole:c,size:l,className:d,absolute:f})=>r.default.createElement(t.HelpContainer,{absolute:f},r.default.createElement(t.HelpComponent,{size:l,className:d,memberRole:c},!c&&a&&a,!c&&!a&&r.default.createElement(o.QuestionIcon,null),c&&!a&&c),r.default.createElement(u,{size:l},A&&r.default.createElement(t.HelpPopupTitle,null,A),r.default.createElement(t.HelperText,null,e),i&&r.default.createElement(t.HelperLink,{href:i,target:"_blank"},n||"Link",r.default.createElement(s.LinkSymbol,null))))));const u=i.default.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: ${({size:e})=>{switch(e){case"l":return"28px";case"m":default:return"20px"}}};
  left: ${({size:e})=>{switch(e){case"l":return"-12px";case"m":default:return"-16px"}}};
  width: max-content;
  min-width: 160px;
  max-width: 304px;
  padding: 16px 24px;
  border: 1px solid ${a.Colors.Black[900]};
  background-color: ${a.Colors.Black[700]};
  border-radius: ${a.BorderRad.m};
  transition: ${a.Transitions.all};
  visibility: hidden;
  z-index: 55;
  ${a.Animations.showHelperTooltip};

  &:after {
    content: '';
    position: absolute;
    left: 19px;
    top: -4px;
    width: 8px;
    height: 8px;
    background-color: ${a.Colors.Black[700]};
    border: 1px solid ${a.Colors.Black[900]};
    transform: rotate(45deg);
    clip-path: polygon(100% 0, 0 0, 0 100%);
    z-index: 1;
  }
  &:before {
    content: '';
    position: absolute;
    left: -8px;
    top: -8px;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    z-index: -1;
  }
  &:hover {
    display: flex;
  }
`;t.HelpPopupTitle=i.default.h6`
  color: ${a.Colors.Black[900]};
  margin-bottom: 10px;
  color: ${a.Colors.White};
`,t.HelperText=i.default.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  color: ${a.Colors.Black[500]};
  color: ${a.Colors.Black[400]};
`,t.HelperLink=i.default.a`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  align-items: center;
  width: fit-content;
  margin-top: 10px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: ${a.Colors.Black[400]};
  transition: ${a.Transitions.all};

  ${s.LinkSymbolStyle} {
    width: 12px;
    height: 12px;
    .blackPart,
    .primaryPart {
      fill: ${a.Colors.Black[300]};
    }
  }

  &:hover {
    color: ${a.Colors.Blue[500]};

    ${s.LinkSymbolStyle} {
      .blackPart,
      .primaryPart {
        fill: ${a.Colors.Blue[500]};
      }
    }
  }
`,t.HelpComponent=i.default.span`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: ${({size:e})=>{switch(e){case"l":return"24px";case"m":default:return"16px"}}};
  height: ${({size:e})=>{switch(e){case"l":return"24px";case"m":default:return"16px"}}};
  border: 1px solid ${({memberRole:e})=>e?"transparent":a.Colors.Black[300]};
  border-radius: ${a.BorderRad.round};
  background-color: transparent;
  color: ${a.Colors.Black[500]};
  font-size: ${({size:e})=>{switch(e){case"l":return"10px";case"m":default:return"6px"}}};
  line-height: 1;
  font-family: ${a.Fonts.Inter};
  font-weight: 700;
  cursor: pointer;
  transition: ${a.Transitions.all};
  z-index: 5;

  svg {
    width: 100%;
    height: 100%;
    position: static;
  }
`,t.HelpContainer=i.default.div`
  display: flex;
  position: ${({absolute:e})=>e?"absolute":"relative"};
  right: ${({absolute:e})=>e?"-24px":"auto"};
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  text-transform: none;

  &:hover,
  &:focus {
    ${t.HelpComponent} {
      color: ${a.Colors.Blue[500]};
      background-color: ${a.Colors.Black[100]};
    }
    ${u} {
      display: flex;
    }
  }
`},18850:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LinkStyles=t.Link=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101);t.Link=({href:e,className:A,children:n})=>r.default.createElement(t.LinkStyles,{href:e,target:"_blank",className:A},n),t.LinkStyles=i.default.a`
  color: ${a.Colors.Blue[400]};
  text-decoration: underline;
  text-underline-offset: 1px;
  transition: ${a.Transitions.all};
  cursor: pointer;

  &:hover,
  &:focus,
  &:focus-within {
    color: ${a.Colors.Blue[500]};
  }
  &:active {
    color: ${a.Colors.Blue[600]};
  }
`},55003:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ListItem=t.List=void 0;const r=n(A(82740)),i=A(12101);t.List=r.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`,t.ListItem=r.default.li`
  display: grid;
  border: 1px solid ${i.Colors.Black[100]};
  border-radius: ${i.BorderRad.s};
  background-color: ${i.Colors.White};
  transition: ${i.Transitions.all};

  & + & {
    margin-top: -1px;
  }
`},65944:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=void 0;const r=n(A(2784));t.Loading=()=>r.default.createElement("h3",null,"Loading...")},54508:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ResultTextWhite=t.ResultText=t.ModalTitle=t.SignTransferContainer=t.SuccessModalBody=t.ResultModalBody=t.ScrolledModalContainer=t.ScrolledModalBody=t.ScrolledModal=t.ModalHeaderIcon=t.ModalWrap=t.ModalFooterGroup=t.ModalFooter=t.ModalBody=t.ModalTopBar=t.ModalGlass=t.Modal=t.ModalHeader=void 0;const r=n(A(2784)),i=n(A(28316)),a=n(A(82740)),o=A(12101),s=A(86096),u=A(31604);t.ModalHeader=r.default.memo((({onClick:e,title:A,icon:n,modalHeaderSize:i,className:a})=>r.default.createElement(t.ModalTopBar,{columns:n?3:2,modalHeaderSize:i,className:a},n?r.default.createElement(t.ModalHeaderIcon,null,n):null,r.default.createElement(t.ModalTitle,null,A),r.default.createElement(s.CloseButton,{onClick:e})))),t.Modal=({onClose:e,modalHeight:A="m",children:n,modalSize:a,isDark:o,className:s})=>i.default.createPortal(r.default.createElement(t.ModalGlass,{modalHeight:A,modalSize:a,isDark:o,onClick:function(t){t.target===t.currentTarget&&e()},onClose:e},r.default.createElement(t.ModalWrap,{modalMaxSize:a,modalHeight:A,isDark:o,role:"modal",className:s},n)),document.body),t.ModalGlass=a.default.div`
  display: flex;
  justify-content: center;
  align-items: ${({modalHeight:e})=>{switch(e){case"s":return"center"}}};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: ${({modalHeight:e})=>{switch(e){case"s":return"0px";case"m":return"64px";case"l":return"48px"}}};
  background-color: ${o.Colors.Black[700.85]};
  color: ${o.Colors.Black[900]};
  z-index: 100000;
  ${o.Animations.showModalBackground};
`,t.ModalTopBar=a.default.header`
  display: grid;
  position: relative;
  grid-auto-flow: column;
  grid-area: modalheader;
  grid-template-columns: ${e=>e.columns>2?"24px 1fr 20px":"1fr 20px"};
  justify-content: start;
  grid-column-gap: 8px;
  align-items: center;
  height: ${({modalHeaderSize:e})=>{switch(e){case"s":return"48px";case"m":case void 0:default:return"56px"}}};
  padding: ${({modalHeaderSize:e})=>{switch(e){case"s":return"24px 24px 0px";case"m":case void 0:default:return"16px 24px"}}};
  border-radius: 2px 2px 0 0;
`,t.ModalBody=a.default.div`
  display: grid;
  grid-area: modalbody;
  grid-row-gap: 16px;
  padding: 24px 24px 24px;
  background-color: ${o.Colors.Black[50]};
  border-top: 1px solid ${o.Colors.Black[200]};
  border-bottom: 1px solid ${o.Colors.Black[200]};
`,t.ModalFooter=a.default.footer`
  display: inline-grid;
  grid-area: modalfooter;
  grid-template-columns: ${({twoColumns:e})=>e?"1fr auto":"1fr"};
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  grid-column-gap: 40px;
  justify-self: end;
  justify-items: end;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 8px 24px;
  border-radius: 0 0 2px 2px;
`,t.ModalFooterGroup=a.default.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  width: fit-content;
  height: 100%;
  justify-self: ${({left:e})=>e?"start":"end"};
  grid-column-gap: 40px;
  justify-items: ${({left:e})=>e?"start":"end"};
  justify-content: ${({left:e})=>e?"start":"end"};
`,t.ModalWrap=a.default.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'modalheader'
    'modalbody'
    'modalfooter';
  grid-area: modal;
  position: relative;
  background-color: ${o.Colors.White};
  width: 100%;
  max-width: ${({modalMaxSize:e})=>{switch(e){case"xs":return"400px";case"s":return"720px";case"m":return"904px";case"l":return"1240px"}}};
  height: min-content;
  border-radius: ${o.BorderRad.s};
  box-shadow: ${o.Shadows.common};
  ${o.Animations.showModalBlock};
  &,
  ${t.ModalBody}, ${t.ModalTopBar}, ${t.ModalFooter} {
    ${({isDark:e})=>{switch(e){case!0:return`\n          background-color: ${o.Colors.Black[800]};\n          color: ${o.Colors.White};\n          `}}};
  }
  ${t.ModalBody} {
    ${({isDark:e})=>{switch(e){case!0:return`\n          border-color: ${o.Colors.Black[800]};\n          `}}};
  }
`,t.ModalHeaderIcon=a.default.div`
  display: grid;
  justify-items: center;
  align-items: center;
  height: 24px;
  width: 24px;

  svg {
    height: 100%;
    width: auto;
    object-fit: contain;
  }
`,t.ScrolledModal=a.default(t.Modal)`
  &${t.ModalWrap} {
    max-height: calc(100% - 128px);
    grid-template-rows: auto 1fr auto;
  }
`,t.ScrolledModalBody=a.default(t.ModalBody)`
  display: flex;
  flex-direction: column;
  grid-row-gap: 0;
  width: 100%;
  height: 100%;
  max-height: 100%;
  padding: 0;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,t.ScrolledModalContainer=a.default.div`
  display: grid;
  grid-row-gap: 16px;
  width: 100%;
  height: 100%;
  padding: 24px 24px 20px;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    visibility: hidden;
  }
`,t.ResultModalBody=a.default(t.ModalBody)`
  position: relative;
  grid-row-gap: 16px;
  padding: 8px 40px 40px;
  justify-items: center;
  border: none;
  background-color: ${o.Colors.White};
`,t.SuccessModalBody=a.default(t.ModalBody)`
  grid-row-gap: 8px;
  background-color: ${o.Colors.White};
  border: none;
  padding: 12px 24px 40px;
`,t.SignTransferContainer=a.default.div`
  display: grid;
  grid-row-gap: 8px;
  width: 100%;
  height: 100%;
`,t.ModalTitle=a.default.h5`
  .red-title {
    color: ${o.Colors.Red[400]};
  }
`,t.ResultText=a.default(u.TextMedium)`
  text-align: center;

  ${u.ValueInJoys} {
    font-family: ${o.Fonts.Inter};
    font-weight: 700;
    color: ${o.Colors.Black[700]};
    &:after {
      font-family: ${o.Fonts.Inter};
      font-weight: 700;
      color: ${o.Colors.Black[700]};
    }
  }
`,t.ResultTextWhite=a.default(t.ResultText)`
  color: ${o.Colors.Black[400]};
`},97377:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TransactionAmountInfoText=t.TransactionAmountInfo=t.InfoValue=t.InfoTitle=t.BalanceInfoNarrow=t.BalanceInfoInRow=t.BalanceInfo=t.TransactionInfo=t.TransactionAmount=t.LockedAccount=t.AccountRow=t.Row=void 0;const r=n(A(82740)),i=A(12101),a=A(24895),o=A(31604);t.Row=r.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`,t.AccountRow=r.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  min-height: ${i.Sizes.accountHeight};
  max-height: ${i.Sizes.accountHeight};
  padding: 8px 72px 8px 14px;
  border: 1px solid ${i.Colors.Black[300]};
  border-radius: ${i.BorderRad.s};
  background-color: ${i.Colors.White};
`,t.LockedAccount=r.default(t.AccountRow)`
  padding: 8px 0 8px 16px;
  grid-template-columns: 1fr 1fr 48px;
  height: ${i.Sizes.selectHeight};
  min-height: ${i.Sizes.selectHeight};
  max-height: ${i.Sizes.selectHeight};
  background-color: ${i.Colors.Black[75]};
  border: 1px solid ${i.Colors.Black[200]};
`,t.TransactionAmount=r.default.div`
  display: grid;
  grid-template-columns: 320px auto;
  grid-template-rows: 1fr;
  grid-column-gap: 12px;
  align-items: end;
`,t.TransactionInfo=r.default.div`
  display: grid;
`,t.BalanceInfo=r.default.div`
  display: inline-grid;
  position: relative;
  grid-template-columns: 1fr 168px;
  grid-template-rows: 1fr;
  align-items: center;

  & + & {
    margin-top: 4px;
  }
`,t.BalanceInfoInRow=r.default(t.BalanceInfo)`
  justify-self: end;
`,t.BalanceInfoNarrow=r.default(t.BalanceInfo)`
  grid-template-columns: 1fr 128px;
  width: auto;
`,t.InfoTitle=r.default.span`
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: right;
  color: ${i.Colors.Black[400]};
`,t.InfoValue=r.default.span`
  text-align: right;
  line-height: 20px;
`,t.TransactionAmountInfo=r.default.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 12px;
  width: fit-content;
  justify-self: center;
  align-items: center;
  color: ${i.Colors.Black[700]};

  ${a.Icon.type} {
    width: 16px;
    height: 16px;
  }
`,t.TransactionAmountInfoText=r.default.span`
  padding: 4px 6px;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  color: ${i.Colors.Black[700]};
  text-transform: uppercase;
  border-radius: ${i.BorderRad.m};
  background-color: ${i.Colors.Blue[100]};

  ${o.ValueInJoys}, ${o.ValueInJoys}:after {
    font-size: 10px;
    line-height: 16px;
    font-weight: 700;
    color: ${i.Colors.Black[700]};
  }
`},85577:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(54508),t),r(A(97377),t)},69231:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationComponent=t.Notification=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101),o=A(21578);t.Notification=function({hasNotification:e}){return r.default.createElement(t.NotificationComponent,{hasNotification:e},r.default.createElement(o.NotificationIcon,null))},t.NotificationComponent=i.default.div`
  display: flex;
  position: relative;
  width: 16px;
  height: 16px;
  color: ${a.Colors.Black[500]};
  transition: ${a.Transitions.all};

  &:after {
    content: '';
    position: absolute;
    top: 1px;
    right: 0;
    width: 6px;
    height: 6px;
    border-radius: ${a.BorderRad.round};
    background-color: ${a.Colors.Red[400]};
    transform: ${e=>!0===e.hasNotification?"translateY(0)":"translateY(-6px)"};
    opacity: ${e=>!0===e.hasNotification?"1":"0"};
    transition: ${a.Transitions.all};
  }
`},89451:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderText=t.SortIconUp=t.SortIconDown=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101),o=A(24895);t.SortIconDown=function(){return r.default.createElement(s,null,r.default.createElement(o.Arrow,{direction:"down"}))},t.SortIconUp=function(){return r.default.createElement(u,null,r.default.createElement(o.Arrow,{direction:"down"}))},t.HeaderText=i.default.span`
  display: inline-flex;
  position: relative;
  align-items: center;
  width: fit-content;
`;const s=i.default.span`
  display: inline-flex;
  position: absolute;
  left: calc(100% + 4px);
  width: fit-content;
  height: fit-content;
  transition: ${a.Transitions.all};

  ${o.Icon.type} {
    width: 12px;
    height: 12px;
    color: ${a.Colors.Black[600]};
    animation: sortArrowFlip ${a.Transitions.duration} ease;

    @keyframes sortArrowFlip {
      from {
        opacity: 0;
        transform: scaleY(-1);
      }
      to {
        opacity: 1;
        transform: scaleY(1);
      }
    }
  }
`,u=i.default(s)`
  transform: rotate(180deg);
`},76550:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.StepperWrap=t.Stepper=void 0;const o=a(A(2784)),s=i(A(82740)),u=A(12101);t.Stepper=({steps:e,active:A=0})=>{const n=((e,t)=>{let A=1;return e.map(((e,n)=>({...e,number:e.isBabyStep?null:A++,isActive:n===t,isPast:n<t})))})(e,A);return o.default.createElement(t.StepperWrap,null,n.map((e=>{return o.default.createElement(c,{key:e.title},o.default.createElement(l,Object.assign({},e),(t=e).isBabyStep?null:t.isActive?"▶":t.isPast?"✔":t.number),e.title);var t})))},t.StepperWrap=s.default.div`
  background-color: ${u.Colors.Black[800]};
  color: ${u.Colors.White};
  padding: 14px;
`;const c=s.default.div`
  margin: 5px 0;
  display: flex;
`,l=s.default.div`
  display: inline-block;
  border-radius: 20px;
  width: 30px;
  height: 30px;
  border: 2px solid ${u.Colors.White};
  line-height: 30px;
  text-align: center;
  margin-right: 4px;

  ${({isBabyStep:e})=>e&&s.css`
      border-width: 4px;
      border-radius: 4px;
      max-height: 0;
      max-width: 0;
    `}

  ${({isActive:e})=>e&&s.css`
      background-color: ${u.Colors.LogoPurple};
      border-color: ${u.Colors.LogoPurple};
    `}

  ${({isPast:e})=>e&&s.css`
      background-color: ${u.Colors.Black[500]};
      border-color: ${u.Colors.Black[500]};
    `}
`},2717:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.StepperBody=t.StepDescriptionColumn=t.StepperModalBody=t.StepperModalWrapper=void 0;const r=n(A(82740)),i=A(12101),a=A(85577);t.StepperModalWrapper=r.default.div`
  display: grid;
  grid-template-columns: 184px 336px 1fr;
  min-height: 200px;
`,t.StepperModalBody=r.default(a.ModalBody)`
  padding: 0;
`,t.StepDescriptionColumn=r.default.div`
  background-color: ${i.Colors.Black[100]};
  padding: 14px;
`,t.StepperBody=r.default.div`
  padding: 14px;
`},69490:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Tabs=void 0;const o=a(A(2784)),s=i(A(82740)),u=A(12101),c=A(24068);t.Tabs=({tabs:e,className:t,tabsSize:A})=>o.default.createElement(d,{className:t,tabsSize:A},o.default.createElement(g,{tabsSize:A},e.map((({active:e,onClick:t,title:A,count:n})=>o.default.createElement(l,{key:A,active:e,onClick:t,title:A,count:n})))));const l=({active:e,onClick:t,title:A,count:n})=>o.default.createElement(f,{active:e,onClick:t},A,void 0!==n&&o.default.createElement(c.CountBadge,{count:n})),d=s.default.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  z-index: 2;

  ${({tabsSize:e})=>{if("xs"!==e)return s.css`
        &:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: calc(100% + 24px);
          height: 1px;
          background-color: ${u.Colors.Black[200]};
          z-index: -1;
        }
      `}}
`,f=s.default.a`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  position: relative;
  align-items: center;
  width: fit-content;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${({active:e})=>e?u.Colors.Black[900]:u.Colors.Black[500]};
  text-transform: capitalize;
  -webkit-text-stroke-width: 0.05em;
  -webkit-text-stroke-color: ${({active:e})=>e?u.Colors.Black[900]:"transparent"};
  cursor: pointer;
  transition: ${u.Transitions.all};
  text-decoration: none;

  &:before {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: ${u.Colors.Blue[500]};
    transform: scaleX(0);
    transition: ${u.Transitions.all};
    animation: hideTabUnderline ${u.Transitions.duration};

    @keyframes hideTabUnderline {
      from {
        transform: scaleX(1);
        background: ${u.Colors.Blue[500]};
      }
      to {
        transform: scaleX(0);
      }
    }
  }

  &:hover {
    color: ${u.Colors.Blue[500]};
    -webkit-text-stroke-color: ${({active:e})=>e?u.Colors.Blue[500]:"transparent"};
  }

  ${({active:e})=>e&&s.css`
      &:before {
        content: '';
        position: absolute;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background: ${u.Colors.Blue[500]};
        transform: scaleX(1);
        transition: ${u.Transitions.all};
        animation: showTabUnderline ${u.Transitions.duration};

        @keyframes showTabUnderline {
          from {
            transform: scaleX(0);
            background: ${u.Colors.Blue[500]};
          }
          to {
            transform: scaleX(1);
          }
        }
      }
    `}
`,g=s.default.nav`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 40px;
  width: fit-content;
  align-items: center;
  justify-items: start;
  z-index: 1;

  ${f} {
    font-size: ${({tabsSize:e})=>{switch(e){case"xs":return"14px";case"s":default:return"16px"}}};
    line-height: ${({tabsSize:e})=>{switch(e){case"xs":return"20px";case"s":default:return"24px"}}};
  }
`},22807:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TransactionModal=void 0;const r=n(A(2784)),i=A(85577),a=A(84878);t.TransactionModal=({status:e,onClose:t,children:A})=>"READY"===e?r.default.createElement(i.Modal,{modalSize:"m",modalHeight:"s",onClose:t},r.default.createElement(i.ModalHeader,{onClick:t,title:"Authorize transaction"}),A):"EXTENSION"===e?r.default.createElement(a.WaitModal,{onClose:t,title:"Waiting for the extension",description:"Please, sign the transaction using external signer app."}):"PENDING"===e?r.default.createElement(a.WaitModal,{onClose:t,title:"Pending transaction",description:"We are waiting for your transaction to be mined. It can takes Lorem ipsum deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."}):null},84878:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WaitModal=void 0;const r=n(A(2784)),i=A(24895),a=A(70921),o=A(85577);t.WaitModal=({onClose:e,title:t,description:A})=>r.default.createElement(o.Modal,{modalSize:"xs",modalHeight:"s",isDark:!0,onClose:e},r.default.createElement(o.ModalHeader,{icon:r.default.createElement(i.Loader,null),title:"",onClick:e,modalHeaderSize:"s"}),r.default.createElement(o.ResultModalBody,null,r.default.createElement(a.WaitingIcon,null),r.default.createElement(o.ModalTitle,{as:"h4"},t),r.default.createElement(o.ResultTextWhite,null,A)))},60879:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonsGroup=t.ButtonGhostStyles=t.ButtonSecondaryStyles=t.ButtonPrimaryStyles=t.ButtonGhost=t.ButtonSecondary=t.ButtonPrimary=void 0;const o=a(A(2784)),s=i(A(82740)),u=A(12101),c={large:"48px",medium:"40px",small:"32px"},l=e=>c[e.size||"large"];t.ButtonPrimary=function({className:e,children:A,size:n,square:r,disabled:i,onClick:a}){return o.default.createElement(t.ButtonPrimaryStyles,{className:e,size:n,square:r,disabled:i,onClick:a},A)},t.ButtonSecondary=function({className:e,children:A,size:n,square:r,disabled:i,onClick:a}){return o.default.createElement(t.ButtonSecondaryStyles,{className:e,size:n,square:r,disabled:i,onClick:a},A)},t.ButtonGhost=function({className:e,children:A,size:n,square:r,disabled:i,onClick:a}){return o.default.createElement(t.ButtonGhostStyles,{className:e,size:n,square:r,disabled:i,onClick:a},A)};const d=s.css`
  display: inline-grid;
  position: relative;
  grid-auto-flow: column;
  grid-column-gap: ${({size:e})=>"small"==e?"4px":"8px"};
  justify-items: center;
  align-items: center;
  width: fit-content;
  min-width: ${l};
  ${e=>{if(e.square)return s.css`
        max-width: ${l(e)};
      `}};
  height: ${l};
  padding: ${e=>"small"==e.size?e.square?"6px":"4px 8px":"medium"==e.size?e.square?"8px":"4px 16px":e.square?"8px":"8px 16px"};
  border: 1px solid transparent;
  border-radius: ${u.BorderRad.s};
  font-family: ${u.Fonts.Grotesk};
  font-size: ${e=>"small"===e.size?"14px":"16px"};
  line-height: ${e=>"small"===e.size?"20px":"24px"};
  font-weight: 700;
  text-transform: capitalize;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  transition: ${u.Transitions.all};
  z-index: 1;

  & > svg {
    z-index: 2;
    transition: ${u.Transitions.all};
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 150%;
    height: 150%;
    border-radius: ${u.BorderRad.full};
    transform: translate(-150%, -50%);
    transition: ${u.Transitions.all};
    z-index: -1;
    pointer-events: none;
  }

  &:hover,
  &:focus {
    &:before {
      transform: translate(-50%, -50%);
    }
  }
  &:active {
    transform: scale(0.96);
    &:after {
      transform: translate(-50%, -50%);
    }
  }
  &:disabled {
    cursor: not-allowed;

    &:hover,
    &:focus,
    &:active {
      transform: scale(1);
      &:after,
      &:before {
        transform: translate(-150%, -50%);
      }
    }
  }
`;t.ButtonPrimaryStyles=s.default.button`
  ${d};

  color: ${u.Colors.White};
  border-color: ${u.Colors.Blue[500]};
  background-color: ${u.Colors.Blue[500]};

  & > svg {
    color: ${u.Colors.White};
  }

  &:before {
    background-color: ${u.Colors.Blue[400]};
  }
  &:after {
    background-color: ${u.Colors.Blue[700]};
  }

  &:hover,
  &:focus {
    border-color: ${u.Colors.Blue[400]};
  }

  &:active {
    border-color: ${u.Colors.Blue[700]};
  }

  &:disabled {
    border-color: ${u.Colors.Blue[100]};
    background-color: ${u.Colors.Blue[100]};
  }
`,t.ButtonSecondaryStyles=s.default.button`
  ${d};

  border-color: ${u.Colors.Black[75]};
  background-color: ${u.Colors.Black[75]};

  & > svg {
    color: ${u.Colors.Black[400]};
  }

  &:before {
    background-color: ${u.Colors.Black[50]};
  }
  &:after {
    background-color: ${u.Colors.Black[100]};
  }

  &:hover,
  &:focus {
    border-color: ${u.Colors.Black[50]};
    color: ${u.Colors.Blue[500]};

    & > svg {
      color: ${u.Colors.Blue[500]};
    }
  }

  &:active {
    border-color: ${u.Colors.Black[100]};
  }

  &:disabled {
    & > svg {
      color: ${u.Colors.Black[300]};
    }
    color: ${u.Colors.Black[300]};
    border-color: ${u.Colors.Black[50]};
    background-color: ${u.Colors.Black[50]};
  }
`,t.ButtonGhostStyles=s.default.button`
  ${d};

  color: ${u.Colors.Black[900]};
  border-color: ${u.Colors.Black[200]};
  background-color: ${u.Colors.White};

  & > svg {
    color: ${u.Colors.Black[400]};
  }

  &:before {
    background-color: ${u.Colors.White};
    border: 1px solid ${u.Colors.Blue[100]};
  }
  &:after {
    background-color: ${u.Colors.Blue[50]};
  }

  &:hover,
  &:focus {
    border-color: ${u.Colors.Blue[100]};
    color: ${u.Colors.Blue[500]};
    & > svg {
      color: ${u.Colors.Blue[500]};
    }
  }

  &:active {
    border-color: ${u.Colors.Blue[100]};
  }

  &:disabled {
    & > svg {
      color: ${u.Colors.Black[300]};
    }
    color: ${u.Colors.Black[300]};
    border-color: ${u.Colors.Black[200]};
    background-color: ${u.Colors.White};
  }
`,t.ButtonsGroup=s.default.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  align-items: center;
  width: fit-content;
  justify-self: ${({align:e})=>{switch(e){case"left":default:return"start";case"center":return"center";case"right":return"end"}}};
`},21982:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Close=t.CloseButton=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101),o=A(24895);t.CloseButton=r.default.memo((e=>r.default.createElement(t.Close,Object.assign({},e),r.default.createElement(o.CrossIcon,null)))),t.Close=i.default.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 0;
  border: none;
  color: ${a.Colors.Black[400]};
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: ${a.Transitions.all};

  &:hover {
    color: ${a.Colors.Blue[500]};
  }

  &:focus,
  &:active {
    color: ${a.Colors.Blue[600]};
  }

  &:disabled {
    color: ${a.Colors.Black[300]};
    cursor: not-allowed;
  }
`},48441:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CopyButtonIcon=t.CopyButton=void 0;const o=i(A(2784)),s=a(A(82740)),u=A(12101),c=A(24895),l=A(27070);t.CopyButton=function({textToCopy:e,className:A,disabled:n}){const[r,i]=o.useState(!1),[a,s]=o.useState(!1);return o.default.createElement(t.CopyButtonIcon,{disabled:n,onClick:()=>{if(e&&!n)try{navigator.clipboard.writeText(e),i(!r)}catch(e){s(!a)}else null==e&&s(!a)},className:A},!r&&!a&&o.default.createElement(c.CopyIcon,null),r&&setTimeout((function(){i(!r)}),1e3)&&o.default.createElement(d,null,o.default.createElement(l.SuccessSymbol,null)),a&&setTimeout((function(){s(!a)}),1e3)&&o.default.createElement(d,null,o.default.createElement(l.FailureSymbol,null)))},t.CopyButtonIcon=s.default.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  padding: 0;
  border: none;
  color: ${u.Colors.Black[400]};
  outline: none;
  background-color: transparent;
  cursor: ${({disabled:e})=>e?"not-allowed":"copy"};
  transition: ${u.Transitions.all};

  &:hover,
  &:focus {
    color: ${u.Colors.Blue[500]};
  }
  &:active {
    color: ${u.Colors.Blue[600]};
  }
  &:disabled {
    color: ${u.Colors.Black[300]};
    border-color: ${u.Colors.Black[50]};
  }
`;const d=s.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  ${u.Animations.showResultSymbol};
`},55017:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Toggle=t.ToggleButton=t.ToggleableItem=void 0;const o=a(A(2784)),s=i(A(82740)),u=A(12101),c=A(53050),l=A(72571),d=A(24895),f=A(60879);t.ToggleableItem=({children:e,absoluteToggle:A})=>{const[n,r]=c.useToggle();return o.default.createElement(t.Toggle,{isOpen:n,absoluteToggle:A},l.isFunction(e)?e(n):e,o.default.createElement(t.ToggleButton,{onClick:r,absoluteToggle:A,isOpen:n,size:"small"},o.default.createElement(d.Arrow,{direction:"down"})))};const g=s.css`
  position: absolute;
  top: 8px;
  right: 8px;
`;t.ToggleButton=s.default(f.ButtonPrimary)`
  ${({absoluteToggle:e})=>{if(e)return g}};
  width: 32px;
  height: 32px;
  background-color: transparent;
  color: ${u.Colors.Black[900]};
  &,
  &:hover,
  &:focus,
  &:active,
  &:disabled {
    background-color: transparent;
    border: 1px solid transparent;
  }
  &:hover,
  &:focus {
    color: ${u.Colors.Blue[500]};
  }
  &:active {
    color: ${u.Colors.Blue[600]};
  }
  &:disabled {
    cursor: not-allowed;
    color: ${u.Colors.Black[400]};
  }
  &:before,
  &:after {
    display: none;
  }

  & > svg {
    color: inherit;
  }

  ${d.Icon.type} {
    transition: ${u.Transitions.all};
    transform: scaleY(${({isOpen:e})=>e?"-1":"1"});
  }
`;const p=s.css`
  position: relative;
`,h=s.css`
  grid-template-columns: 1fr 32px;
  padding-right: 8px;
  grid-column-gap: 4px;
`;t.Toggle=s.default.div`
  display: grid;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border-radius: ${u.BorderRad.s};
  background-color: ${({disabled:e})=>e?u.Colors.Black[75]:u.Colors.White};
  transition: ${u.Transitions.all};
  ${({absoluteToggle:e})=>e?p:h};

  &:focus-within,
  &:active,
  &:focus {
    border-color: ${u.Colors.Blue[300]};
  }

  &:hover,
  &:focus {
    ${t.ToggleButton} {
      color: ${u.Colors.Blue[500]};
    }
  }
  &:active {
    ${t.ToggleButton} {
      color: ${u.Colors.Blue[600]};
    }
  }
`},86096:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(60879),t),r(A(21982),t),r(A(48441),t)},19071:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CheckboxNative=t.CheckboxLabel=t.CheckboxStyled=t.CheckboxSideText=t.Checkbox=void 0;const o=i(A(2784)),s=a(A(82740)),u=A(12101),c=A(17929);t.Checkbox=function({id:e,isRequired:A,children:n,enabled:r=!0,isChecked:i=!1,onChange:a}){const[s,u]=o.useState(i);return o.default.createElement(t.CheckboxLabel,{htmlFor:e,onClick:e=>{e.preventDefault(),!1!==r&&(u(!s),a&&a(!s))},isLabelEnabled:r,isCheckboxChecked:s},o.default.createElement(t.CheckboxNative,{type:"checkbox",id:e,name:e,required:A,checked:s,disabled:!r,onChange:e=>u(e.target.checked)}),o.default.createElement(t.CheckboxStyled,{disabled:!r},o.default.createElement(c.CheckboxIcon,null)),o.default.createElement(t.CheckboxSideText,null,n))},t.CheckboxSideText=s.default.span`
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
`,t.CheckboxStyled=s.default.span`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  margin: 4px;
  border: 2px solid ${u.Colors.Black[300]};
  border-radius: ${u.BorderRad.m};
  background-color: ${({disabled:e})=>e?u.Colors.Black[75]:"transparent"};
  color: ${u.Colors.Black[300]};
  transition: ${u.Transitions.all};
  pointer-events: none;
  overflow: hidden;

  ${c.CheckboxIconStyles} {
    width: 16px;
    height: 16px;
    position: absolute;
    transform: translateY(-100%);
    transition: transform ${u.Transitions.duration} ease;
  }
`,t.CheckboxLabel=s.default.label`
  display: inline-grid;
  position: relative;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
  width: fit-content;
  color: ${e=>!1===e.isCheckboxChecked?u.Colors.Black[600]:!0===e.isCheckboxChecked?u.Colors.Black[900]:0==e.isLabelEnabled?u.Colors.Black[600]:u.Colors.Black[900]};
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  font-family: ${u.Fonts.Inter};
  opacity: ${e=>0==e.isLabelEnabled?"0.4":"1"};
  cursor: ${e=>0==e.isLabelEnabled?"not-allowed":"pointer"};
  user-select: none;
  transition: ${u.Transitions.all};

  &:hover,
  &:focus-within {
    color: ${e=>0==e.isLabelEnabled?u.Colors.Black[600]:u.Colors.Blue[500]};

    ${t.CheckboxStyled} {
      border: 2px solid ${u.Colors.Blue[400]};
      color: ${u.Colors.Blue[500]};
    }
  }
`,t.CheckboxNative=s.default.input`
  position: absolute;
  width: 1px;
  max-width: 1px;
  height: 1px;
  max-height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  outline: none;

  &:focus + ${t.CheckboxStyled}, &:hover + ${t.CheckboxStyled} {
    border: 2px solid ${u.Colors.Black[300]};
    color: ${u.Colors.Black[400]};
  }

  &:checked + ${t.CheckboxStyled} {
    border: 2px solid ${u.Colors.Blue[500]};
    color: ${u.Colors.Black[900]};
    ${c.CheckboxIconStyles} {
      transform: translateY(0);
    }
  }
  &:checked&:focus + ${t.CheckboxStyled}, &:checked&:hover + ${t.CheckboxStyled} {
    border: 2px solid ${u.Colors.Blue[400]};
    color: ${u.Colors.Blue[500]};
  }
  &:focus + ${t.CheckboxStyled}, &:hover + ${t.CheckboxStyled} {
    border: 2px solid ${u.Colors.Blue[400]};
  }
  &:disabled&:focus + ${t.CheckboxStyled}, &:disabled&:hover + ${t.CheckboxStyled} {
    border: 2px solid ${u.Colors.Black[300]};
    color: ${u.Colors.Black[400]};
  }
`},20018:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hasError=t.getErrorMessage=t.getError=void 0,t.getError=(e,t)=>t.find((t=>t.path===e)),t.getErrorMessage=(e,A)=>t.getError(e,A)?.message,t.hasError=(e,A)=>!!t.getError(e,A)?.message},49569:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Input=t.InputTextarea=t.InputNumber=t.InputText=t.InputComponent=void 0;const o=a(A(2784)),s=i(A(82740)),u=A(12101),c=A(86096),l=A(76746),d=A(27070),f=A(31604),g=A(85534);t.InputComponent=({id:e,label:t,required:A,validation:n,disabled:r,value:i,inputSize:a,inputWidth:s,icon:u,copy:c,textToCopy:f,units:g,message:p,helperText:h,helperTitle:m,helperLinkText:y,helperLinkURL:I,className:E,children:B,borderless:O})=>o.default.createElement(C,{className:E,inputSize:a,inputWidth:s},t&&o.default.createElement(v,{htmlFor:e,isRequired:A,disabled:r},t,h&&o.default.createElement(l.Help,{helperText:h,helperTitle:m,helperLinkText:y,helperLinkURL:I})),o.default.createElement(b,{copy:c,units:g,icon:u,validation:n,disabled:r,inputSize:a,borderless:O},u&&o.default.createElement(w,null,u),o.default.createElement(Q,null,B),(g||c)&&o.default.createElement(k,null,g&&o.default.createElement(S,null,g),c&&o.default.createElement(M,{textToCopy:f||i,disabled:r}))),p&&o.default.createElement(D,{validation:n},"invalid"===n&&o.default.createElement(_,null,o.default.createElement(d.AlertSymbol,null)),"warning"===n&&o.default.createElement(_,null,o.default.createElement(d.AlertSymbol,null)),"valid"===n&&o.default.createElement(_,null,o.default.createElement(d.SuccessSymbol,null)),o.default.createElement(N,null,p))),t.InputText=({id:e,value:A,required:n,validation:r,placeholder:i,disabled:a,onChange:s})=>o.default.createElement(t.Input,{id:e,name:e,type:"text",value:A,required:n,validation:r,placeholder:i,disabled:a,onChange:s,autoComplete:"off"}),t.InputNumber=({id:e,value:t,required:A,validation:n,placeholder:r,disabled:i,onChange:a})=>o.default.createElement(E,{id:e,name:e,type:"number",value:t,required:A,validation:n,placeholder:r,disabled:i,onChange:a,autoComplete:"off"}),t.InputTextarea=({id:e,value:t,required:A,validation:n,placeholder:r,disabled:i,onChange:a})=>o.default.createElement(B,{id:e,name:e,value:t,required:A,validation:n,placeholder:r,disabled:i,onChange:a,autoComplete:"off"});const p=s.css`
  padding: 0 16px 1px 16px;
`,h=s.css`
  padding: 0 16px 1px 36px;
`,m=s.css`
  padding: 0 0 1px 16px;
`,y=s.css`
  padding: 0 0 1px 36px;
`,I=s.css`
  width: 100%;
  height: 100%;
  outline: none;
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: ${u.BorderRad.s};
  font-family: ${u.Fonts.Inter};
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${u.Colors.Black[900]};
  transition: ${u.Transitions.all};

  &::placeholder {
    font-weight: 400;
    color: ${u.Colors.Black[400]};
  }
`;t.Input=s.default.input`
  ${I};
  &[type='number'] {
    text-align: right;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;const E=s.default(t.Input)`
  text-align: right;
`,B=s.default.textarea`
  ${I} {
    resize: none;
  }
`,C=s.default.div`
  display: grid;
  grid-row-gap: 4px;
  align-items: center;
  width: 100%;
  min-width: ${({inputWidth:e})=>"s"===e?"320px":"400px"};
`,v=s.default(g.Label)`
  margin-bottom: 0;
  color: ${({disabled:e})=>e?u.Colors.Black[500]:u.Colors.Black[900]};
`,b=s.default.div`
  display: grid;
  position: relative;
  grid-template-columns: ${e=>e.copy||e.units?"1fr auto":"1fr"};
  align-items: center;
  width: 100%;
  height: ${({inputSize:e})=>{switch(e){case"l":return"80px";case"m":default:return"48px"}}};
  border: 1px solid
    ${({validation:e})=>{switch(e){case"invalid":return u.Colors.Red[400];case"valid":return u.Colors.Green[500];case"warning":return u.Colors.Orange[500];case void 0:default:return u.Colors.Black[200]}}};
  border: ${({borderless:e})=>{if(e)return"none"}};
  border-color: ${({disabled:e})=>{if(e)return u.Colors.Black[200]}};
  border-radius: ${u.BorderRad.s};
  background-color: ${({disabled:e})=>e?u.Colors.Black[75]:u.Colors.White};
  box-shadow: ${u.Shadows.transparent};
  transition: ${u.Transitions.all};
  & input,
  & textarea {
    ${e=>e.icon||e.units||e.copy?null:p}
    ${e=>!e.icon||e.units||e.copy?null:h}
    ${e=>!e.units&&!e.copy||e.icon?null:m}
    ${e=>(e.units||e.copy)&&e.icon?y:null}
  }
  & textarea {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  &:hover,
  &:focus,
  &:focus-within {
    border-color: ${({validation:e})=>{switch(e){case"invalid":return u.Colors.Red[400];case"valid":return u.Colors.Green[500];case"warning":return u.Colors.Orange[500];default:return u.Colors.Blue[400]}}};
    border-color: ${({disabled:e})=>{if(e)return u.Colors.Black[200]}};
    box-shadow: ${({validation:e})=>{switch(e){case"invalid":return u.Shadows.focusInvalid;case"valid":return u.Shadows.focusValid;case"warning":return u.Shadows.focusWarning;default:return u.Shadows.focusDefault}}};
    box-shadow: ${({disabled:e})=>{if(e)return"none"}};
  }
`,w=s.default.div`
  display: flex;
  position: absolute;
  left: 16px;
  width: 16px;
  height: 16px;
  pointer-events: none;
  color: inherit;
  transition: ${u.Transitions.all};
`,Q=s.default.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`,k=s.default.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
  width: fit-content;
  height: 100%;
  padding: 0 12px 0 8px;
`,M=s.default(c.CopyButton)`
  width: 24px;
  height: 24px;
  padding: 0 4px;
  color: ${({disabled:e})=>e?u.Colors.Black[400]:u.Colors.Black[900]};
`,S=s.default.span`
  font-family: ${u.Fonts.Grotesk};
  font-size: 14px;
  line-height: 1.5;
  font-weight: 700;
  color: ${u.Colors.Black[400]};
  text-transform: uppercase;
`,D=s.default.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
  width: fit-content;
  color: ${({validation:e})=>{switch(e){case"invalid":return u.Colors.Red[400];case"valid":return u.Colors.Green[500];case"warning":return u.Colors.Orange[500];case void 0:default:return u.Colors.Black[400]}}};
`,_=s.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  color: inherit;

  .blackPart,
  .primaryPart {
    fill: currentColor;
  }
`,N=s.default(f.TextSmall)`
  color: inherit;
`},91584:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Label=void 0;const r=n(A(82740)),i=A(12101),a=A(76746);t.Label=r.default.label`
  display: inline-flex;
  align-items: center;
  align-content: center;
  width: fit-content;
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${i.Colors.Black[900]};
  position: relative;

  &:after {
    ${({isRequired:e})=>{switch(e){case!0:return`\n            content: '*';\n            color: ${i.Colors.Black[400]};\n            font-size: 14px;\n            line-height: 14px;\n            font-family: inherit;\n            margin-left: 4px;\n            transform: translateY(2px);\n          `}}};
  }

  ${a.HelpContainer} {
    position: relative;
    display: inline;
    transform: unset;
    right: unset;
    margin-left: 4px;
  }
`},59551:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Link=t.LabelLink=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101);t.LabelLink=function({href:e,target:A,children:n,className:i}){return r.default.createElement(t.Link,{onClick:e=>e.stopPropagation(),href:e,target:A,className:i},n)},t.Link=i.default.a`
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  font-style: inherit;
  font-family: inherit;
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    color: ${a.Colors.Blue[500]};
  }
  &:active,
  &:focus {
    outline: none;
    color: ${a.Colors.Blue[600]};
  }
`},6696:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.InlineToggleWrap=t.ToggleCheckbox=void 0;const o=a(A(2784)),s=i(A(82740)),u=A(12101),c=A(91584);t.ToggleCheckbox=function({isRequired:e,disabled:t,checked:A,onChange:n,trueLabel:r,falseLabel:i}){const a=e=>()=>{!0!==t&&n(e)};return o.default.createElement(h,{groupDisabled:t},o.default.createElement(l,{onClick:a(!0)},r),o.default.createElement(g,{isChecked:A},o.default.createElement(d,{type:"checkbox",disabled:t,checked:A,onChange:e=>n(e.currentTarget.checked),required:e})),o.default.createElement(l,{onClick:a(!1)},i))};const l=s.default.button`
  outline: none;
  font-family: ${u.Fonts.Inter};
  font-size: 14px;
  line-height: 20px;
  color: ${u.Colors.Black[900]};
  cursor: pointer;
`,d=s.default.input`
  position: absolute;
  height: 0;
  z-index: -1;
  opacity: 0;
  outline: none;
`,f=s.css`
  background-color: ${u.Colors.Blue[500]};

  &:hover,
  &:focus {
    background-color: ${u.Colors.Blue[400]};
  }
  &:after {
    transform: translateX(0%);
  }
`,g=s.default.label`
  display: flex;
  align-items: center;
  width: 48px;
  height: 24px;
  margin: 0 10px;
  position: relative;
  border-radius: ${u.BorderRad.full};
  background-color: ${u.Colors.Black[300]};
  cursor: pointer;
  transition: ${u.Transitions.all};

  &:hover,
  &:focus {
    background-color: ${u.Colors.Black[200]};
  }

  &:after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border: 2px solid transparent;
    border-radius: ${u.BorderRad.round};
    background-color: ${u.Colors.White};
    background-clip: content-box;
    transform: translateX(100%);
    transition: ${u.Transitions.all};
  }

  ${e=>e.isChecked&&f};
`,p=s.css`
  opacity: 0.5;
  cursor: not-allowed;

  ${g},
  ${l} {
    cursor: not-allowed;
  }
`,h=s.default.div`
  display: flex;
  align-items: center;
  width: fit-content;
  ${e=>e.groupDisabled&&p};
`;t.InlineToggleWrap=s.default.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;

  ${c.Label} {
    line-height: 20px;
    margin-bottom: 0;
  }

  ${h} {
    margin-left: 12px;
  }
`},85534:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(91584),t),r(A(59551),t),r(A(19071),t),r(A(6696),t),r(A(49569),t)},8728:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ArrowDownExpandedIcon=void 0;const r=n(A(2784)),i=A(51669);t.ArrowDownExpandedIcon=r.default.memo((()=>r.default.createElement(i.Icon,{size:"24",viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},r.default.createElement("path",{d:"M11.1421 12.1049V3.58594H13.2718V12.1049H11.1421Z",fill:"currentColor"}),r.default.createElement("path",{d:"M12.207 16.9882L5.50595 10.2871L4 11.7931L12.207 20.0001L20.4141 11.7931L18.9081 10.2871L12.207 16.9882Z",fill:"currentColor"}))))},27728:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Arrow=void 0;const r=A(77439),i=n(A(2784)),a=A(51669);t.Arrow=function({className:e,direction:t}){return i.default.createElement(o,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e,direction:t},i.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.13804 9.3253L3.67065 4.85791L2.66669 5.86187L8.13804 11.3332L13.6094 5.86187L12.6054 4.85791L8.13804 9.3253Z",fill:"currentColor"}))};const o=r.styled(a.Icon)`
  transform: ${({direction:e})=>{switch(e){case"up":return"rotate(180deg)";case"right":return"rotate(270deg)";case"left":return"rotate(90deg)";case"down":default:return"rotate(0deg)"}}};
`},7527:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ArrowInsideIcon=void 0;const r=n(A(2784)),i=A(51669);t.ArrowInsideIcon=function(){return r.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},r.default.createElement("path",{d:"M13.8281 12.1874H2.57812C2.50937 12.1874 2.45312 12.2436 2.45312 12.3124V13.2499C2.45312 13.3186 2.50937 13.3749 2.57812 13.3749H13.8281C13.8969 13.3749 13.9531 13.3186 13.9531 13.2499V12.3124C13.9531 12.2436 13.8969 12.1874 13.8281 12.1874ZM6.25 8.03472H7.40469V2.74878C7.40469 2.68003 7.46094 2.62378 7.52969 2.62378H8.46719C8.53594 2.62378 8.59219 2.68003 8.59219 2.74878V8.03472H9.75C9.85469 8.03472 9.9125 8.15503 9.84844 8.23628L8.09844 10.4519C8.08674 10.4668 8.07181 10.4789 8.05475 10.4872C8.03769 10.4955 8.01897 10.4999 8 10.4999C7.98103 10.4999 7.96231 10.4955 7.94525 10.4872C7.92819 10.4789 7.91326 10.4668 7.90156 10.4519L6.15156 8.23784C6.0875 8.15503 6.14531 8.03472 6.25 8.03472Z",fill:"currentColor"}))}},63104:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ArrowOutsideIcon=void 0;const r=n(A(2784)),i=A(51669);t.ArrowOutsideIcon=function(){return r.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},r.default.createElement("path",{d:"M13.8281 12.1874H2.57812C2.50937 12.1874 2.45312 12.2436 2.45312 12.3124V13.2499C2.45312 13.3186 2.50937 13.3749 2.57812 13.3749H13.8281C13.8969 13.3749 13.9531 13.3186 13.9531 13.2499V12.3124C13.9531 12.2436 13.8969 12.1874 13.8281 12.1874ZM6.25 5.08893H7.40469V10.3749C7.40469 10.4436 7.46094 10.4999 7.52969 10.4999H8.46719C8.53594 10.4999 8.59219 10.4436 8.59219 10.3749V5.08893H9.75C9.85469 5.08893 9.9125 4.96862 9.84844 4.88737L8.09844 2.67174C8.08674 2.6568 8.0718 2.64472 8.05475 2.63641C8.03769 2.6281 8.01897 2.62378 8 2.62378C7.98103 2.62378 7.96231 2.6281 7.94525 2.63641C7.92819 2.64472 7.91326 2.6568 7.90156 2.67174L6.15156 4.8858C6.0875 4.96862 6.14531 5.08893 6.25 5.08893Z",fill:"currentColor"}))}},72618:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BlockIcon=void 0;const r=n(A(2784)),i=A(51669);t.BlockIcon=()=>r.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},r.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 1L14 4.75V11.5094L8 14.8844L2 11.5094V4.75L8 1ZM3.33333 6.2594L7.33333 8.5094V12.9796L3.33333 10.7296V6.2594ZM8.66667 12.9796L12.6667 10.7296V5.489L8 2.57233L3.97283 5.08931L7.99397 7.35121L11.0927 5.54365L11.7645 6.69535L8.66667 8.50241V12.9796Z",fill:"currentColor"}))},17929:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CheckboxIconStyles=t.CheckboxIcon=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(51669);t.CheckboxIcon=function(){return r.default.createElement(t.CheckboxIconStyles,{size:"24",viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},r.default.createElement("path",{d:"M20 7.5975L9.90608 18L4 12.735L5.78463 11.0132L9.77205 14.5679L18.0857 6L20 7.5975Z",fill:"currentColor"}))},t.CheckboxIconStyles=i.default(a.Icon)``},56535:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CopyIcon=void 0;const r=n(A(2784)),i=A(51669);t.CopyIcon=r.default.memo((({className:e})=>r.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e},r.default.createElement("path",{d:"M10.6667 1.33325H2.66671C1.93004 1.33325 1.33337 1.92992 1.33337 2.66659V11.9999H2.66671V2.66659H10.6667V1.33325ZM12.6667 3.99992H5.33337C4.59671 3.99992 4.00004 4.59659 4.00004 5.33325V13.3333C4.00004 14.0699 4.59671 14.6666 5.33337 14.6666H12.6667C13.4034 14.6666 14 14.0699 14 13.3333V5.33325C14 4.59659 13.4034 3.99992 12.6667 3.99992ZM12.6667 13.3333H5.33337V5.33325H12.6667V13.3333Z",fill:"currentColor"}))))},3771:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CrossIcon=void 0;const r=n(A(2784)),i=A(51669);t.CrossIcon=r.default.memo((({className:e})=>r.default.createElement(i.Icon,{size:"20",viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e},r.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.4095 12.1366L20.273 19L19.0002 20.2728L12.1367 13.4094L5.27331 20.2728L4.00051 19L10.864 12.1366L4.00018 5.27279L5.27297 4L12.1367 10.8638L19.0005 4L20.2733 5.27279L13.4095 12.1366Z",fill:"currentColor"}))))},33939:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FailureIcon=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101),o=A(51669);t.FailureIcon=function(){return r.default.createElement(s,{width:"80",height:"82",viewBox:"0 0 80 82",fill:"none"},r.default.createElement("rect",{y:"0.75",width:"80",height:"80",rx:"40",fill:a.Colors.Black[100]}),r.default.createElement("g",{clipPath:"url(#clip0)"},r.default.createElement("path",{d:"M43.0837 47.9011C42.2724 47.0489 40.8063 47.048 39.9938 47.8991L33.3112 54.6177C32.7033 55.2299 31.8828 55.5051 31.0801 55.4217C33.7426 53.1277 33.9923 51.1119 31.2461 48.7388C29.1178 46.8157 27.0866 48.0727 25.5141 49.9287C25.3827 49.0693 25.6515 48.1672 26.2925 47.5198L32.9881 40.7893C33.8282 39.9449 33.8294 38.5685 32.9904 37.7208C31.5732 36.4673 29.6051 33.2171 27.4661 35.2637C21.819 41.294 12.6395 46.9549 19.258 56.1845L14.5348 60.9077C13.6647 61.7548 15.0117 63.0997 15.8575 62.2303L28.0265 50.0613C28.5257 49.5408 29.4242 49.5407 29.9233 50.0614C30.6948 50.774 31.9702 51.8917 30.9108 52.9458L13.428 70.4289C12.3731 71.4882 11.2561 70.2123 10.5436 69.4412C9.10208 68.0525 11.9714 66.3362 12.6834 65.4046C13.5562 64.5589 12.2048 63.2119 11.361 64.0821C9.45044 65.9221 6.7947 68.0554 9.22105 70.764C10.0804 71.6649 11.1165 72.7803 12.4797 72.692C14.4549 73.3255 23.3366 62.6849 24.7688 61.7332C33.9145 68.3558 39.5877 59.0187 45.5143 53.4224C47.532 51.3283 44.3114 49.3048 43.0837 47.9011ZM21.268 44.1519L28.7924 36.5826C28.9644 36.4542 29.0565 36.4544 29.2285 36.5826L31.6618 39.0372C31.7805 39.1572 31.7807 39.3514 31.6623 39.4705L24.9652 46.2026C23.5891 47.5922 23.2418 49.6829 24.0224 51.4207L20.5913 54.8517C18.1561 51.6724 18.3857 47.0568 21.268 44.1519ZM44.188 52.104C39.1037 56.5795 33.9437 65.9696 26.1011 60.4008L29.5629 56.9389C31.2675 57.6553 33.3006 57.2828 34.6377 55.9362L41.3196 49.2182C41.4885 49.0878 41.5944 49.0925 41.7558 49.2182L44.1886 51.6724C44.3066 51.7914 44.3065 51.9849 44.188 52.104Z",fill:a.Colors.Black[500]}),r.default.createElement("path",{d:"M72.1978 12.9739C72.2823 11.6153 71.1761 10.5686 70.2694 9.71528C69.0739 8.46942 66.923 8.46942 65.7274 9.71528L55.6903 19.7525C46.4529 13.133 40.7989 22.3179 34.769 27.9611C32.724 30.094 35.9729 32.0722 37.2271 33.4855C38.0737 34.3237 39.45 34.3228 40.2949 33.4826L47.024 26.7884C47.6724 26.1462 48.5746 25.8772 49.4344 26.0086C47.5778 27.5827 46.3213 29.6113 48.2444 31.7406C50.618 34.4879 52.6359 34.2351 54.9272 31.5747C55.0105 32.3773 54.7353 33.1978 54.1228 33.8061L47.4046 40.4882C45.3593 42.6208 48.6066 44.5977 49.8608 46.0108C50.7069 46.8503 52.0829 46.8493 52.928 46.0089L60.5093 38.4726C63.0035 36.0006 64.0028 32.3596 63.1173 28.9705C62.9867 28.4708 62.4758 28.1714 61.9761 28.302C61.4764 28.4326 61.1771 28.9436 61.3076 29.4432C63.4381 35.4704 54.8605 40.9098 51.6094 44.6828C51.4904 44.801 51.2969 44.801 51.1778 44.6829L48.7242 42.2506C48.5981 42.089 48.5933 41.9835 48.7237 41.8142L55.4413 35.1328C56.7884 33.7951 57.1608 31.762 56.4445 30.0575C57.2067 28.7785 73.2783 14.5659 72.1978 12.9739ZM45.7066 25.4608L38.976 32.1564C38.8569 32.2748 38.6625 32.2747 38.5433 32.1566L36.0885 29.7228C35.96 29.551 35.9599 29.4588 36.0879 29.2869L43.6569 21.7627C46.5623 18.8797 51.1781 18.6502 54.3572 21.0854L50.9262 24.5165C49.1884 23.7358 47.0975 24.0833 45.7066 25.4608ZM69.9345 13.9223L52.4513 31.4055C52.1981 31.6589 51.8611 31.7984 51.5028 31.7984C50.7494 31.8835 50.0577 30.8369 49.5668 30.4179C49.0467 29.9185 49.0461 29.0204 49.5669 28.5211L67.05 11.038C67.549 10.5175 68.4478 10.5175 68.9467 11.038C69.7184 11.7505 70.9936 12.8681 69.9345 13.9223Z",fill:a.Colors.Black[500]}),r.default.createElement("path",{d:"M20.2025 31.5112L22.9347 32.5447C23.405 32.7265 23.9579 32.4889 24.1401 32.001C24.3228 31.518 24.0794 30.9782 23.5964 30.7955L20.8642 29.762C19.7369 29.316 19.0605 31.0985 20.2025 31.5112Z",fill:a.Colors.Red[400]}),r.default.createElement("path",{d:"M26.4211 27.1377C27.2559 28.0175 28.6201 26.6869 27.7592 25.8308C27.7594 25.8308 25.6346 23.655 25.6346 23.655C25.2738 23.2855 24.6817 23.2784 24.312 23.6393C23.9426 24.0002 23.9355 24.5922 24.2963 24.9618L26.4211 27.1377Z",fill:a.Colors.Red[400]}),r.default.createElement("path",{d:"M31.5609 23.5214C31.8595 24.7041 33.6946 24.2097 33.3693 23.0448L32.613 20.1752C32.4814 19.6758 31.9699 19.3776 31.4705 19.5093C30.9711 19.6409 30.6729 20.1524 30.8046 20.6517L31.5609 23.5214Z",fill:a.Colors.Red[400]})),r.default.createElement("rect",{x:"48",y:"49.25",width:"32",height:"32",rx:"16",fill:a.Colors.Red[400]}),r.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M53.8461 65.25C53.8461 59.6422 58.3922 55.0961 64 55.0961C69.6078 55.0961 74.1538 59.6422 74.1538 65.25C74.1538 66.8763 73.7714 68.4133 73.0917 69.776L74.5134 71.0397C75.4608 69.323 75.9999 67.3494 75.9999 65.25C75.9999 58.6226 70.6274 53.25 64 53.25C57.3726 53.25 52 58.6226 52 65.25C52 71.8774 57.3726 77.2499 64 77.2499C65.3687 77.2499 66.6839 77.0208 67.9092 76.5987L66.934 74.9734C66.0051 75.2533 65.0201 75.4038 64 75.4038C58.3922 75.4038 53.8461 70.8578 53.8461 65.25Z",fill:a.Colors.White}),r.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M68.3164 74.4434C69.9745 73.6636 71.3873 72.4485 72.4076 70.9453L73.7975 72.1808C72.6397 73.8145 71.0835 75.1459 69.2706 76.0336L68.3164 74.4434Z",fill:a.Colors.White}),r.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M68.4036 68.4026L65.2512 65.2502L68.4037 62.0976L67.1523 60.8462L63.9998 63.9987L60.6255 60.6243L59.374 61.8758L62.7484 65.2502L59.3742 68.6244L60.6256 69.8759L63.9998 66.5016L67.1521 69.654L68.4036 68.4026Z",fill:a.Colors.White}),r.default.createElement("defs",null,r.default.createElement("clipPath",{id:"clip0"},r.default.createElement("rect",{width:"64",height:"64",fill:a.Colors.White,transform:"translate(8.25 8.75)"}))))};const s=i.default(o.Icon)`
  margin-bottom: 8px;
`},19464:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FounderMemberIcon=void 0;const r=n(A(2784)),i=A(51669);t.FounderMemberIcon=r.default.memo((()=>r.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},r.default.createElement("path",{className:"memberInner",d:"M11.9026 5.15556L10.6558 6.66667L11.9026 8.17778C11.9569 8.24384 11.99 8.32234 11.9981 8.4045C12.0061 8.48666 11.9889 8.56925 11.9483 8.64303C11.9078 8.71682 11.8454 8.77889 11.7682 8.8223C11.6911 8.86572 11.6022 8.88877 11.5114 8.88889H5.64449V12H4.66666V4.44444C4.66666 4.32657 4.71817 4.21352 4.80986 4.13017C4.90155 4.04683 5.02591 4 5.15558 4C5.28524 4 5.4096 4.04683 5.50129 4.13017C5.59298 4.21352 5.64449 4.32657 5.64449 4.44444H11.5114C11.6022 4.44456 11.6911 4.46761 11.7682 4.51103C11.8454 4.55445 11.9078 4.61652 11.9483 4.6903C11.9889 4.76408 12.0061 4.84667 11.9981 4.92883C11.99 5.01099 11.9569 5.08949 11.9026 5.15556Z",fill:"currentColor"}))))},51669:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=void 0;const r=n(A(2784)),i=n(A(82740));t.Icon=r.default.memo(i.default.svg`
  height: ${e=>e.size}px;
  width: ${e=>e.size}px;
  position: relative;
`)},7941:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LoaderComponent=t.Loader=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101);t.Loader=function(){return r.default.createElement(t.LoaderComponent,{viewBox:"0 0 24 24",fill:"none"},r.default.createElement("path",{d:"M22.9092 11.4546H18.5455C17.9431 11.4546 17.4546 11.9431 17.4546 12.5455C17.4546 13.1479 17.9431 13.6364 18.5455 13.6364H22.9092C23.5116 13.6364 24.0001 13.1479 24.0001 12.5455C24.0001 11.9431 23.5117 11.4546 22.9092 11.4546Z",fill:a.Colors.Black[500]}),r.default.createElement("path",{d:"M18.9423 4.06013L15.8566 7.14579C15.4306 7.57171 15.4306 8.26246 15.8566 8.6885C16.0696 8.90158 16.3488 9.00811 16.6279 9.00811C16.9072 9.00811 17.1864 8.90169 17.3994 8.6885L20.485 5.60285C20.9111 5.17692 20.9111 4.48617 20.485 4.06013C20.0591 3.63409 19.3683 3.63409 18.9423 4.06013Z",fill:a.Colors.Black[500]}),r.default.createElement("path",{opacity:"0.9",d:"M12.0001 0.54541C11.3977 0.54541 10.9092 1.03389 10.9092 1.63632V5.99998C10.9092 6.60242 11.3977 7.0909 12.0001 7.0909C12.6025 7.0909 13.091 6.60242 13.091 5.99998V1.63632C13.091 1.03389 12.6025 0.54541 12.0001 0.54541Z",fill:a.Colors.Black[500]}),r.default.createElement("path",{opacity:"0.8",d:"M5.05756 4.06013C4.63163 3.63409 3.94088 3.63409 3.51484 4.06013C3.0888 4.48617 3.0888 5.17681 3.51484 5.60285L6.60038 8.6885C6.81335 8.90158 7.09257 9.00811 7.3718 9.00811C7.65091 9.00811 7.93025 8.90158 8.1431 8.6885C8.56914 8.26258 8.56914 7.57182 8.1431 7.14579L5.05756 4.06013Z",fill:a.Colors.Black[500]}),r.default.createElement("path",{opacity:"0.7",d:"M5.45457 11.4546H1.09091C0.488476 11.4546 0 11.9431 0 12.5455C0 13.1479 0.488476 13.6364 1.09091 13.6364H5.45457C6.05701 13.6364 6.54549 13.1479 6.54549 12.5455C6.54549 11.9431 6.05701 11.4546 5.45457 11.4546Z",fill:a.Colors.Black[500]}),r.default.createElement("path",{opacity:"0.5",d:"M6.5999 16.4024L3.51435 19.4881C3.08831 19.9141 3.08831 20.6047 3.51435 21.0308C3.72732 21.2437 4.00654 21.3503 4.28577 21.3503C4.56499 21.3503 4.84422 21.2437 5.05707 21.0308L8.14261 17.9451C8.56865 17.5191 8.56865 16.8285 8.14261 16.4024C7.71669 15.9764 7.02593 15.9764 6.5999 16.4024Z",fill:a.Colors.Black[500]}),r.default.createElement("path",{opacity:"0.4",d:"M11.9996 19.0909C11.3972 19.0909 10.9087 19.5794 10.9087 20.1819V22.3637C10.9087 22.9661 11.3972 23.4546 11.9996 23.4546C12.602 23.4546 13.0905 22.9661 13.0905 22.3637V20.1819C13.0905 19.5794 12.602 19.0909 11.9996 19.0909Z",fill:a.Colors.Black[500]}))},t.LoaderComponent=i.default.svg`
  width: 24px;
  height: 24px;
  border-radius: ${a.BorderRad.round};
  animation: spinLoader 1s infinite linear;
  justify-self: start;

  @keyframes spinLoader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`},21578:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationIcon=void 0;const r=n(A(2784)),i=A(51669);t.NotificationIcon=function(){return r.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},r.default.createElement("path",{d:"M3.33336 5.33329C3.33336 2.75596 5.4227 0.666626 8.00003 0.666626C10.5774 0.666626 12.6667 2.75596 12.6667 5.33329C12.6667 7.5684 13.1447 8.95638 13.5853 9.76406C13.8065 10.1696 14.0219 10.4356 14.1715 10.5935C14.2465 10.6727 14.3054 10.7252 14.3409 10.7547C14.3586 10.7695 14.3705 10.7786 14.3757 10.7824C14.3782 10.7843 14.3791 10.7849 14.3782 10.7843L14.3754 10.7824L14.373 10.7807L14.3715 10.7797L14.3707 10.7792C14.3706 10.7791 14.3705 10.7791 14.369 10.7812L14 12H2.00003L1.63101 10.7812C1.62951 10.7791 1.62944 10.7791 1.62937 10.7792L1.62857 10.7797L1.62709 10.7807L1.62466 10.7824L1.62188 10.7843C1.62095 10.7849 1.62183 10.7843 1.62439 10.7824C1.62953 10.7786 1.64143 10.7695 1.65918 10.7547C1.69465 10.7252 1.75358 10.6727 1.82856 10.5935C1.97818 10.4356 2.19357 10.1696 2.41476 9.76406C2.85532 8.95638 3.33336 7.5684 3.33336 5.33329ZM3.43291 10.6666H12.5671C12.5164 10.5835 12.4655 10.4955 12.4148 10.4025C11.8553 9.37687 11.3334 7.76485 11.3334 5.33329C11.3334 3.49234 9.84098 1.99996 8.00003 1.99996C6.15908 1.99996 4.66669 3.49234 4.66669 5.33329C4.66669 7.76485 4.14474 9.37687 3.58529 10.4025C3.53456 10.4955 3.48363 10.5835 3.43291 10.6666Z",fill:"currentColor"}),r.default.createElement("path",{d:"M8 15.3333C6.89543 15.3333 6 14.4378 6 13.3333H7.33333C7.33333 13.7014 7.63181 13.9999 8 13.9999C8.36819 13.9999 8.66667 13.7014 8.66667 13.3333H10C10 14.4378 9.10457 15.3333 8 15.3333Z",fill:"currentColor"}))}},81884:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.QuestionIcon=void 0;const r=n(A(2784)),i=A(51669);t.QuestionIcon=function(){return r.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},r.default.createElement("path",{d:"M9.55266 8.11325L10.1527 7.49991C10.5327 7.11991 10.7727 6.58658 10.7727 5.99992C10.7727 4.52658 9.57933 3.33325 8.106 3.33325C6.63266 3.33325 5.43933 4.52658 5.43933 5.99992H6.77266C6.77266 5.26658 7.37266 4.66658 8.106 4.66658C8.83933 4.66658 9.43933 5.26658 9.43933 5.99992C9.43933 6.36658 9.29266 6.69991 9.046 6.93991L8.21933 7.77991C7.73933 8.26658 7.43933 8.93324 7.43933 9.66658V9.99991H8.77266C8.77266 8.99991 9.07266 8.59991 9.55266 8.11325ZM7.43911 12.6666H8.77245V11.3333H7.43911V12.6666Z",fill:"currentColor"}))}},95987:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SuccessIcon=void 0;const r=n(A(2784)),i=A(12101),a=A(51669);t.SuccessIcon=function({className:e}){return r.default.createElement(a.Icon,{size:"24",viewBox:"0 0 24 24",fill:"none",className:e},r.default.createElement("path",{d:"M9.66667 3.66679H10.3333V4.33346C10.3333 4.70159 10.6318 5.00012 11 5.00012C11.3682 5.00012 11.6667 4.70159 11.6667 4.33346V3.66679H12.3333C12.7015 3.66679 13 3.36826 13 3.00012C13 2.63199 12.7015 2.33346 12.3333 2.33346H11.6667V1.66679C11.6667 1.29866 11.3682 1.00012 11 1.00012C10.6318 1.00012 10.3333 1.29866 10.3333 1.66679V2.33346H9.66667C9.29847 2.33346 9 2.63199 9 3.00012C9 3.36832 9.29847 3.66679 9.66667 3.66679Z",fill:i.Colors.Black[900],className:"blackPart"}),r.default.createElement("path",{d:"M23.3333 17.3335H22.6667V16.6668C22.6667 16.2987 22.3681 16.0001 22 16.0001C21.6319 16.0001 21.3333 16.2987 21.3333 16.6668V17.3335H20.6667C20.2985 17.3335 20 17.632 20 18.0001C20 18.3683 20.2985 18.6668 20.6667 18.6668H21.3333V19.3335C21.3333 19.7016 21.6319 20.0001 22 20.0001C22.3681 20.0001 22.6667 19.7016 22.6667 19.3335V18.6668H23.3333C23.7015 18.6668 24 18.3683 24 18.0001C24 17.632 23.7015 17.3335 23.3333 17.3335Z",fill:i.Colors.Blue[500],className:"primaryPart"}),r.default.createElement("path",{d:"M5.30469 4.48157C6.08009 4.48157 6.71094 3.85073 6.71094 3.07532C6.71094 2.29991 6.08009 1.66907 5.30469 1.66907C4.52928 1.66907 3.89844 2.29991 3.89844 3.07532C3.89844 3.85073 4.52928 4.48157 5.30469 4.48157ZM5.30469 2.60657C5.56316 2.60657 5.77344 2.81685 5.77344 3.07532C5.77344 3.33379 5.56316 3.54407 5.30469 3.54407C5.04622 3.54407 4.83594 3.33379 4.83594 3.07532C4.83594 2.8169 5.04622 2.60657 5.30469 2.60657Z",fill:i.Colors.Blue[500],className:"primaryPart"}),r.default.createElement("path",{d:"M21.0557 13.7842C21.0557 13.526 20.8451 13.3154 20.5869 13.3154C20.3287 13.3154 20.1182 13.526 20.1182 13.7842C20.1182 14.0424 20.3287 14.2529 20.5869 14.2529C20.8451 14.2529 21.0557 14.0423 21.0557 13.7842Z",fill:i.Colors.Black[900],className:"blackPart"}),r.default.createElement("path",{d:"M15.7119 4.4563C15.9701 4.4563 16.1807 4.24574 16.1807 3.98755C16.1807 3.72936 15.9701 3.5188 15.7119 3.5188C15.4537 3.5188 15.2432 3.72936 15.2432 3.98755C15.2432 4.24569 15.4538 4.4563 15.7119 4.4563Z",fill:i.Colors.Black[900],className:"blackPart"}),r.default.createElement("path",{d:"M21.2446 5.00634C20.9284 5.05486 20.7088 5.36839 20.7542 5.70674C20.7707 5.83134 20.7843 5.9524 20.7963 6.07185C20.9338 7.4375 20.7691 8.4727 20.2938 9.22662C19.7767 10.0466 18.818 10.5276 17.9083 10.4233C17.6957 10.3988 17.4864 10.3426 17.2864 10.2589C17.323 10.1914 17.3569 10.1222 17.3879 10.0518C17.5552 9.67265 17.6246 9.23629 17.5975 8.80316C17.5767 8.4727 17.4999 8.14435 17.3667 7.84436C17.1009 7.246 16.6533 6.83689 16.1062 6.69229C15.5027 6.53287 14.8372 6.9623 14.6226 7.64948C14.4826 8.09792 14.5195 8.61085 14.7323 9.17391C14.909 9.64186 15.1679 10.0644 15.4867 10.4232C15.1988 10.5874 14.8603 10.7067 14.4882 10.7696C14.1727 10.8229 13.9573 11.1399 14.0072 11.4776C14.052 11.7825 14.298 12 14.5776 12C14.6076 12 14.638 11.9976 14.6684 11.9924C15.3595 11.8756 15.977 11.6049 16.467 11.2192C16.8742 11.4498 17.321 11.6009 17.7851 11.6541C17.9115 11.6686 18.0377 11.6757 18.1639 11.6757C19.3799 11.6757 20.5622 11.0136 21.2523 9.91912C21.937 8.83314 22.1485 7.39785 21.8989 5.53136C21.8536 5.19301 21.5604 4.95782 21.2446 5.00634ZM15.7195 8.04183C15.743 7.96671 15.8079 7.9082 15.8397 7.89723C16.1082 7.9738 16.257 8.22914 16.3222 8.37599C16.4826 8.73691 16.4904 9.18729 16.3422 9.52338C16.3362 9.53708 16.3299 9.55079 16.3234 9.56433C16.1031 9.31657 15.9242 9.02706 15.8044 8.70982C15.6993 8.4316 15.67 8.20061 15.7195 8.04183Z",fill:i.Colors.Black[900],className:"blackPart"}),r.default.createElement("path",{d:"M18.9031 14.9377C18.9031 14.4492 18.5117 14.0533 18.0288 14.0533C17.5458 14.0533 17.1543 14.4492 17.1543 14.9377C17.1543 15.4261 17.5458 15.822 18.0288 15.822C18.5117 15.822 18.9031 15.4261 18.9031 14.9377Z",fill:i.Colors.Black[900],className:"blackPart"}),r.default.createElement("path",{d:"M12.6541 8.4223C12.6541 7.93396 12.2626 7.53809 11.7796 7.53809C11.2968 7.53809 10.9053 7.93396 10.9053 8.4223C10.9053 8.91064 11.2968 9.30652 11.7796 9.30652C12.2626 9.30652 12.6541 8.91064 12.6541 8.4223Z",fill:i.Colors.Black[900],className:"blackPart"}),r.default.createElement("path",{d:"M20.2109 3.8891C20.2109 3.40076 19.8193 3.00488 19.3364 3.00488C18.8534 3.00488 18.4619 3.40076 18.4619 3.8891C18.4619 4.37762 18.8534 4.7735 19.3364 4.7735C19.8193 4.7735 20.2109 4.37762 20.2109 3.8891Z",fill:i.Colors.Black[900],className:"blackPart"}),r.default.createElement("path",{d:"M7.08999 6.49108C6.82742 6.20489 6.38265 6.18566 6.09646 6.44805C5.81027 6.71062 5.79122 7.15538 6.05361 7.44158L6.32937 7.74224L0.164758 22.034C-0.0600956 22.5556 0.0413448 23.1374 0.429528 23.5521C0.703088 23.8441 1.06838 23.9996 1.44778 23.9996C1.6069 23.9996 1.76876 23.9721 1.92696 23.9159L16.4348 18.7591L16.636 18.9785C16.7748 19.1297 16.9643 19.2063 17.1544 19.2063C17.3243 19.2063 17.4944 19.1451 17.6295 19.0213C17.9157 18.7588 17.9348 18.314 17.6724 18.028L7.08999 6.49108ZM6.52438 20.7894L4.41024 15.7419L6.37606 11.1846L9.89663 19.5908L6.52438 20.7894ZM1.45602 22.5908L3.6368 17.5351L5.19723 21.2611L1.45602 22.5908ZM11.2236 19.1191L7.1495 9.39146L7.36776 8.88573L15.3944 17.6365L11.2236 19.1191Z",fill:i.Colors.Black[900],className:"blackPart"}))}},68081:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TransferIcon=void 0;const r=n(A(2784)),i=A(51669);t.TransferIcon=r.default.memo((({className:e})=>r.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e},r.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.01061 8.34823L5.31143 9.82643L4.61945 10.9626L1.33337 8.85138L1.38734 7.68413L13.7408 1.33325L14.6667 2.09081L11.7309 14.4869L10.7512 14.8967L7.67263 12.9206L6.09552 15.3683L4.89904 14.9986V11.9833H6.20386V12.7718L6.93528 11.6366L7.82513 11.4382L10.6765 13.2685L13.0662 3.17867L3.01061 8.34823Z",fill:"currentColor",className:"blackPart"}),r.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.1579 5.80433L7.28517 11.1581L6.24561 10.196L10.1183 4.84229L11.1579 5.80433Z",fill:"currentColor",className:"primaryPart"}))))},67312:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PickedTransferIcon=void 0;const r=n(A(2784)),i=A(24895);t.PickedTransferIcon=function({type:e}){switch(e){case"transfer":return r.default.createElement(i.TransferIcon,null);case"send":return r.default.createElement(i.ArrowOutsideIcon,null);case"receive":return r.default.createElement(i.ArrowInsideIcon,null);default:return null}}},66667:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VerifiedMemberIcon=void 0;const r=n(A(2784)),i=A(51669);t.VerifiedMemberIcon=r.default.memo((()=>r.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor"},r.default.createElement("path",{className:"memberInner",d:"M12.8889 5.30975L6.72039 11.6668L3.11112 8.44931L4.20173 7.39713L6.63848 9.56941L11.7191 4.3335L12.8889 5.30975Z",fill:"currentColor"}))))},70921:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WaitingIcon=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101),o=A(51669);t.WaitingIcon=function(){return r.default.createElement(s,{width:"132",height:"108",viewBox:"0 0 132 108",fill:"none"},r.default.createElement("rect",{x:"11",width:"108",height:"108",rx:"54",fill:a.Colors.Black[700]}),r.default.createElement("path",{d:"M67.9276 79.837C65.9311 79.8425 63.9346 79.8468 61.9381 79.85C61.2671 79.8511 60.5961 79.852 59.9252 79.8524C58.7093 79.8533 57.8901 79.6044 57.6177 78.2404C57.3874 77.0871 55.7878 77.2421 55.4769 78.2404C54.7088 80.7065 53.4383 79.7403 52.7266 78.0814C52.0166 76.4265 51.8346 74.5743 51.5245 72.8131C51.2966 71.5189 49.3775 71.8817 49.344 73.1141C49.2999 74.737 49.1513 76.3341 48.7474 77.9081C48.3308 79.5321 47.7063 81.0928 47.0864 82.6445C46.5461 83.9972 48.6949 84.5791 49.2272 83.2465C49.7765 81.8716 50.3265 80.4892 50.7359 79.0629C51.4967 80.9287 53.0706 83.0391 55.3134 81.7954C55.7306 81.564 56.1203 81.235 56.4624 80.8514C57.6287 82.226 59.3647 82.1177 60.9891 82.1157C63.302 82.1127 65.615 82.1075 67.9279 82.1014C69.3561 82.0976 69.3587 79.8332 67.9276 79.837Z",fill:a.Colors.White}),r.default.createElement("path",{d:"M38.0703 104L50.4233 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),r.default.createElement("path",{d:"M34.1177 104L46.4706 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),r.default.createElement("path",{d:"M42.0234 104L54.3764 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),r.default.createElement("path",{d:"M45.9766 104L58.3295 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),r.default.createElement("path",{d:"M49.9297 104L62.2826 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),r.default.createElement("path",{d:"M53.8828 104L66.2358 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),r.default.createElement("path",{d:"M57.835 104L70.1879 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),r.default.createElement("path",{d:"M61.7881 104L74.141 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),r.default.createElement("path",{d:"M65.7412 104L78.0942 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),r.default.createElement("path",{d:"M69.6943 104L82.0473 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),r.default.createElement("path",{d:"M73.647 104L85.9999 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),r.default.createElement("path",{d:"M77.6001 104L89.953 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),r.default.createElement("path",{d:"M81.5527 104L93.9057 91.6268",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),r.default.createElement("path",{d:"M15.8359 12.439L5.68408 22.6074",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),r.default.createElement("path",{d:"M11.8824 12.439L2 22.3375",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),r.default.createElement("path",{d:"M17.1096 15.1222L9.54346 22.7007",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),r.default.createElement("path",{d:"M18.8 17.3882L13.3647 22.8324",stroke:a.Colors.Blue[500],strokeWidth:"0.5"}),r.default.createElement("path",{d:"M10.8941 12.439C4.17412 12.439 2.16471 19.038 2 22.3375H19.7882M10.8941 12.439C17.6141 12.439 54.2118 12.439 71.6706 12.439C74.3059 12.6039 79.5765 14.8146 79.5765 22.3375C79.5765 24.6393 79.5765 30.1197 79.5765 37.1852M10.8941 12.439C18.0094 12.439 19.7882 19.038 19.7882 22.3375M79.5765 91.132H93.9059C93.2471 95.4213 89.4588 104 79.5765 104C71.2504 104 46.4394 104 29.6706 104M79.5765 91.132C79.5765 84.817 79.5765 77.2469 79.5765 68.3261M79.5765 91.132H40.5412C40.5412 102.614 32.6353 104 29.6706 104M19.7882 22.3375V45.5989C19.7882 45.5989 19.7882 55.2515 19.7882 61.4365C19.7882 71.8736 19.7882 88.1624 19.7882 88.1624V91.132C19.7882 101.426 26.3765 104 29.6706 104M32.6353 28.7715H67.2235M32.6353 40.1547H67.2235M32.6353 51.0431H67.2235M32.6353 62.4263H53.3882M79.5765 37.1852L75.6235 44.1141L77.1059 55.0025L72.6588 51.0431C69.5294 55.4974 65.1482 65.7918 72.6588 71.335M79.5765 37.1852L91.4353 16.8933C96.0471 9.46943 109.816 -2.60673 128 8.47958C119.699 19.5659 98.1882 47.7436 88.4706 60.4466C86.6588 63.0862 80.96 68.9593 72.6588 71.335M72.6588 71.335C69.4965 77.2741 68.0471 80.4086 67.7176 81.2335L72.6588 71.335ZM72.6588 71.335C83.5294 55.0025 106.654 21.0507 112.188 15.9034",stroke:a.Colors.Blue[500],strokeWidth:"3"}))};const s=i.default(o.Icon)`
  margin-bottom: 8px;
`},24895:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(8728),t),r(A(27728),t),r(A(7527),t),r(A(63104),t),r(A(72618),t),r(A(17929),t),r(A(56535),t),r(A(3771),t),r(A(33939),t),r(A(19464),t),r(A(51669),t),r(A(7941),t),r(A(21578),t),r(A(81884),t),r(A(95987),t),r(A(68081),t),r(A(66667),t),r(A(70921),t)},37062:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Symbol=t.AlertSymbol=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101);t.AlertSymbol=function({className:e}){return r.default.createElement(t.Symbol,{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e||"symbol"},r.default.createElement("path",{className:"blackPart",fillRule:"evenodd",clipRule:"evenodd",d:"M10.9515 1.57408L12.5286 1.55859L23.7844 21.5586L23.0001 22.9H1.00011L0.207275 21.5741L10.9515 1.57408ZM11.7626 3.86763L2.50525 21.1H21.4609L11.7626 3.86763Z",fill:a.Colors.Black[900]}),r.default.createElement("path",{className:"primaryPart",d:"M10.875 18.375C10.875 18.6734 10.9935 18.9595 11.2045 19.1705C11.4155 19.3815 11.7016 19.5 12 19.5C12.2984 19.5 12.5845 19.3815 12.7955 19.1705C13.0065 18.9595 13.125 18.6734 13.125 18.375C13.125 18.0766 13.0065 17.7905 12.7955 17.5795C12.5845 17.3685 12.2984 17.25 12 17.25C11.7016 17.25 11.4155 17.3685 11.2045 17.5795C10.9935 17.7905 10.875 18.0766 10.875 18.375ZM11.4375 15.75H12.5625C12.6656 15.75 12.75 15.6656 12.75 15.5625V9.1875C12.75 9.08437 12.6656 9 12.5625 9H11.4375C11.3344 9 11.25 9.08437 11.25 9.1875V15.5625C11.25 15.6656 11.3344 15.75 11.4375 15.75Z",fill:a.Colors.Blue[500]}))},t.Symbol=i.default.svg`
  height: 16px;
  width: 16px;
  position: relative;

  .blackPart {
    fill: ${a.Colors.Black[900]};
    transition: ${a.Transitions.all};
  }
  .primaryPart {
    fill: ${a.Colors.Blue[500]};
    transition: ${a.Transitions.all};
  }
`},54494:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.EditSymbol=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101);t.EditSymbol=function({className:e}){return r.default.createElement(o,{viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e},r.default.createElement("path",{className:"primaryPart",d:"M10.9564 8.37713L7.62305 5.0438L8.37729 4.28955L11.7106 7.62288L10.9564 8.37713Z",fill:a.Colors.Blue[500]}),r.default.createElement("path",{className:"blackPart",d:"M2.96633 10.0354L2.63315 13.3672L5.96494 13.034L13.8657 5.13331L10.867 2.1347L2.96633 10.0354ZM2.02191 9.37706L10.4664 0.932617H11.2677L15.0677 4.73262V5.534L6.62329 13.9784L6.27899 14.1416L2.05676 14.5638L1.43652 13.9436L1.85875 9.72137L2.02191 9.37706Z",fill:a.Colors.Black[900]}))};const o=i.default.svg`
  height: 16px;
  width: 16px;
  position: relative;

  .blackPart {
    fill: ${a.Colors.Black[900]};
    transition: ${a.Transitions.all};
  }
  .primaryPart {
    fill: ${a.Colors.Blue[500]};
    transition: ${a.Transitions.all};
  }
`},50404:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FailureSymbol=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101);t.FailureSymbol=function({className:e}){return r.default.createElement(o,{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e},r.default.createElement("path",{className:"blackPart",d:"M1.84615 12C1.84615 6.39216 6.39216 1.84615 12 1.84615C17.6078 1.84615 22.1538 6.39216 22.1538 12C22.1538 13.6263 21.7714 15.1633 21.0917 16.526L22.5134 17.7897C23.4608 16.073 23.9999 14.0994 23.9999 12C23.9999 5.37256 18.6274 0 12 0C5.37256 0 0 5.37256 0 12C0 18.6274 5.37256 23.9999 12 23.9999C13.3687 23.9999 14.6839 23.7708 15.9092 23.3487L14.934 21.7234C14.0051 22.0033 13.0201 22.1538 12 22.1538C6.39216 22.1538 1.84615 17.6078 1.84615 12Z",fill:a.Colors.Black[900]}),r.default.createElement("path",{className:"primaryPart",d:"M16.3162 21.1934C17.9742 20.4136 19.3871 19.1985 20.4073 17.6953L21.7973 18.9308C20.6394 20.5645 19.0833 21.8959 17.2703 22.7836L16.3162 21.1934Z",fill:a.Colors.Blue[500]}),r.default.createElement("path",{className:"blackPart",d:"M16.4038 15.1526L13.2515 12.0002L16.404 8.8476L15.1525 7.59616L12 10.7487L8.62571 7.37433L7.37427 8.62577L10.7486 12.0002L7.37443 15.3744L8.62587 16.6259L12 13.2516L15.1524 16.404L16.4038 15.1526Z",fill:a.Colors.Black[900]}))};const o=i.default.svg`
  height: 16px;
  width: 16px;
  position: relative;

  .blackPart {
    fill: ${a.Colors.Black[900]};
    transition: ${a.Transitions.all};
  }
  .primaryPart {
    fill: ${a.Colors.Blue[500]};
    transition: ${a.Transitions.all};
  }
`},23289:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.HomeSymbol=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101);t.HomeSymbol=function({className:e}){return r.default.createElement(o,{viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e},r.default.createElement("path",{className:"blackPart",d:"M2.19526 6.86165L7.5286 1.52832H8.4714L13.8047 6.86165L14 7.33306V13.9997L13.3333 14.6664H2.66667L2 13.9997V7.33306L2.19526 6.86165ZM3.33333 7.6092V13.3331H12.6667V7.6092L8 2.94253L3.33333 7.6092Z",fill:a.Colors.Black[900]}),r.default.createElement("path",{className:"primaryPart",d:"M5.33337 7.33301H10.6667V11.9997H9.33337V8.66634H6.66671V11.9997H5.33337V7.33301Z",fill:a.Colors.Blue[500]}))};const o=i.default.svg`
  height: 16px;
  width: 16px;
  position: relative;

  .blackPart {
    fill: ${a.Colors.Black[900]};
    transition: ${a.Transitions.all};
  }
  .primaryPart {
    fill: ${a.Colors.Blue[500]};
    transition: ${a.Transitions.all};
  }
`},30208:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LinkSymbolStyle=t.LinkSymbol=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101);t.LinkSymbol=function({className:e}){return r.default.createElement(t.LinkSymbolStyle,{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e},r.default.createElement("path",{className:"blackPart",d:"M1.1001 3.99998L2.0001 3.09998H12.8001V4.89998H2.9001V21.1H19.1001V11.2H20.9001V22L20.0001 22.9H2.0001L1.1001 22V3.99998Z",fill:a.Colors.Black[900]}),r.default.createElement("path",{className:"primaryPart",d:"M15.4999 1.09998H21.9999L22.8999 1.99998V8.49998H21.0999V4.17277L10.6363 14.6364L9.36353 13.3636L19.8271 2.89998H15.4999V1.09998Z",fill:a.Colors.Blue[500]}))},t.LinkSymbolStyle=i.default.svg`
  height: 16px;
  width: 16px;
  position: relative;

  .blackPart {
    fill: ${a.Colors.Black[900]};
    transition: ${a.Transitions.all};
  }
  .primaryPart {
    fill: ${a.Colors.Blue[500]};
    transition: ${a.Transitions.all};
  }
`},81835:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SuccessSymbol=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101);t.SuccessSymbol=function({className:e}){return r.default.createElement(o,{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e},r.default.createElement("path",{className:"blackPart",d:"M12 1.84615C6.39216 1.84615 1.84615 6.39216 1.84615 12C1.84615 17.6078 6.39216 22.1538 12 22.1538C17.6078 22.1538 22.1538 17.6078 22.1538 12C22.1538 6.39216 17.6078 1.84615 12 1.84615ZM0 12C0 5.37256 5.37256 0 12 0C18.6274 0 23.9999 5.37256 23.9999 12C23.9999 18.6274 18.6274 23.9999 12 23.9999C5.37256 23.9999 0 18.6274 0 12Z",fill:a.Colors.Black[900]}),r.default.createElement("path",{className:"primaryPart",d:"M17.734 8.60827L10.4977 16.6497L6.26367 12.5797L7.54306 11.2487L10.4016 13.9965L16.3616 7.37335L17.734 8.60827Z",fill:a.Colors.Blue[500]}))};const o=i.default.svg`
  height: 16px;
  width: 16px;
  position: relative;

  .blackPart {
    fill: ${a.Colors.Black[900]};
    transition: ${a.Transitions.all};
  }
  .primaryPart {
    fill: ${a.Colors.Blue[500]};
    transition: ${a.Transitions.all};
  }
`},31621:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TransferSymbol=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101);t.TransferSymbol=function({className:e}){return r.default.createElement(o,{viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:e},r.default.createElement("path",{className:"blackPart",d:"M3.01061 8.34823L5.31143 9.82643L4.61945 10.9626L1.33337 8.85138L1.38734 7.68413L13.7408 1.33325L14.6667 2.09081L11.7309 14.4869L10.7512 14.8967L7.67263 12.9206L6.09552 15.3683L4.89904 14.9986V11.9833H6.20386V12.7718L6.93528 11.6366L7.82513 11.4382L10.6765 13.2685L13.0662 3.17867L3.01061 8.34823Z",fill:a.Colors.Black[900]}),r.default.createElement("path",{className:"primaryPart",d:"M11.1579 5.80433L7.28517 11.1581L6.24561 10.196L10.1183 4.84229L11.1579 5.80433Z",fill:a.Colors.Blue[500]}))};const o=i.default.svg`
  height: 16px;
  width: 16px;
  position: relative;

  .blackPart {
    fill: ${a.Colors.Black[900]};
    transition: ${a.Transitions.all};
  }
  .primaryPart {
    fill: ${a.Colors.Blue[500]};
    transition: ${a.Transitions.all};
  }
`},27070:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(37062),t),r(A(54494),t),r(A(50404),t),r(A(23289),t),r(A(30208),t),r(A(81835),t),r(A(31621),t)},11667:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Page=void 0;const r=n(A(82740));t.Page=r.default.div`
  display: grid;
  position: relative;
  grid-template-columns: 226px 1fr 0;
  grid-template-rows: auto;
  grid-template-areas:
    'navbar page .'
    'navbar page .';
  grid-column-gap: 24px;
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  min-height: 100vh;
`},12510:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ContentWithTabs=t.SidePanel=t.MainPanel=t.ContentWithSidepanel=t.PageContent=void 0;const r=n(A(82740));t.PageContent=r.default.main`
  position: relative;
  width: 100%;
  height: 100%;
  grid-area: page;
  padding: 40px 0;
`,t.ContentWithSidepanel=r.default.div`
  display: grid;
  grid-template-columns: 1fr 256px;
  grid-column-gap: 24px;
  width: 100%;
`,t.MainPanel=r.default.div`
  display: grid;
  grid-row-gap: 24px;
  width: 100%;
  height: fit-content;
`,t.SidePanel=r.default.aside`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 256px;
  height: fit-content;
`,t.ContentWithTabs=r.default(t.MainPanel)`
  grid-row-gap: 16px;
`},10686:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PageHeader=void 0;const r=n(A(82740));t.PageHeader=r.default.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px auto;
  grid-row-gap: 16px;
`},209:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PageTitle=void 0;const r=n(A(82740));t.PageTitle=r.default.h2`
  text-transform: capitalize;
`},39408:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PreviousPage=void 0;const r=n(A(2784)),i=A(12424),a=n(A(82740)),o=A(86096),s=A(24895);t.PreviousPage=({children:e})=>{const t=i.useHistory();return r.default.createElement(u,null,r.default.createElement(c,{onClick:()=>t.goBack(),size:"small",square:!0},r.default.createElement(l,{direction:"left"})),e)};const u=a.default.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  align-items: center;
  width: fit-content;
`,c=a.default(o.ButtonGhost)`
  min-height: unset;
  min-width: unset;
  padding: 0;
  width: 16px;
  height: 16px;
  border: none;

  &:before,
  &:after {
    content: unset;
  }
`,l=a.default(s.Arrow)`
  width: 100%;
  height: 100%;
`},46020:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SideNotification=void 0;const r=n(A(2784)),i=n(A(28316)),a=n(A(82740)),o=A(12101),s=A(86096),u=A(24895),c=A(27070),l=A(18850),d=A(31604);t.SideNotification=({title:e,message:t,link:A,onClick:n,isError:a})=>i.default.createPortal(r.default.createElement(f,{isError:a},r.default.createElement(h,{onClick:n}),r.default.createElement(g,{isError:a},a?r.default.createElement(y,null):r.default.createElement(I,null),r.default.createElement(p,null,e)),r.default.createElement(m,null,t,A&&" ",A&&r.default.createElement(l.Link,{href:A},"See details"))),document.body);const f=a.default.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 8px;
  right: 8px;
  width: 100%;
  max-width: 438px;
  padding: 16px 24px 20px 20px;
  background-color: ${o.Colors.Black[800]};
  border-left: 4px solid ${({isError:e})=>e?o.Colors.Red[400]:o.Colors.Blue[500]};
  border-radius: ${o.BorderRad.m};
  box-shadow: ${o.Shadows.common};
  ${o.Animations.showNotification};
`,g=a.default.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  align-items: center;
  width: fit-content;
  color: ${({isError:e})=>e?o.Colors.Red[400]:o.Colors.White};
  margin-bottom: 16px;
`,p=a.default.h5`
  color: ${o.Colors.White};
`,h=a.default(s.CloseButton)`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
`,m=a.default(d.TextMedium)`
  color: ${o.Colors.Black[400]};
`,y=a.default(c.FailureSymbol)`
  width: 24px;
  height: 24px;

  .blackPart,
  .primaryPart {
    fill: ${o.Colors.Red[400]};
  }
`,I=a.default(u.SuccessIcon)`
  width: 24px;
  height: 24px;

  .blackPart {
    fill: ${o.Colors.White};
  }
`},31294:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Breadcrumbs=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(60224),o=A(95593);t.Breadcrumbs=r.default.memo((({crumbs:e})=>r.default.createElement(s,null,r.default.createElement(o.HomeLink,null),r.default.createElement(a.BreadcrumbsList,{crumbs:e}))));const s=i.default.nav`
  display: inline-flex;
  align-items: center;
  position: absolute;
  top: 6px;
  left: 0;
`},9638:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BreadcrumbsItem=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101);t.BreadcrumbsItem=function({href:e,text:t}){return r.default.createElement(s,null,r.default.createElement(o,{href:e},t))};const o=i.default.a`
  font-size: 10px;
  line-height: 16px;
  color: ${a.Colors.Black[500]};
  transition: ${a.Transitions.all};
  text-decoration: none;
  font-family: ${a.Fonts.Inter};

  &:hover {
    color: ${a.Colors.Blue[500]};
  }
`,s=i.default.li`
  display: inline-flex;
  position: relative;
  align-items: center;
  margin-left: 26px;
  color: ${a.Colors.Black[500]};

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -16px;
    width: 4px;
    height: 4px;
    border-top: 1px solid ${a.Colors.Black[300]};
    border-right: 1px solid ${a.Colors.Black[300]};
    transform: translate(0, -50%) rotate(45deg);
  }

  &:last-child {
    ${o} {
      color: ${a.Colors.Black[400]};
    }
  }
`},60224:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BreadcrumbsList=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(9638);t.BreadcrumbsList=function({crumbs:e}){return r.default.createElement(o,null,e.map((({href:e,text:t},A)=>r.default.createElement(a.BreadcrumbsItem,{key:A,href:e,text:t}))))};const o=i.default.ul`
  display: inline-flex;
  align-items: center;
  margin: 0;
  padding: 0;
`},95593:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.HomeLink=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101),o=A(27070);t.HomeLink=function(){return r.default.createElement(s,{href:"#"},r.default.createElement(o.HomeSymbol,null))};const s=i.default.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    .blackPart {
      fill: ${a.Colors.Blue[500]};
    }
    .primaryPart {
      fill: ${a.Colors.Black[900]};
    }
  }
`},35442:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MyProfileIcon=void 0;const r=n(A(2784)),i=A(24895);t.MyProfileIcon=()=>r.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:"nav-icon"},r.default.createElement("path",{className:"whitePart",d:"M1.23076 7.99997C1.23076 4.26144 4.26144 1.23076 7.99997 1.23076C11.7385 1.23076 14.7692 4.26144 14.7692 7.99997C14.7692 9.08417 14.5143 10.1088 14.0612 11.0173L15.0089 11.8598C15.6405 10.7153 15.9999 9.39961 15.9999 7.99997C15.9999 3.58171 12.4182 0 7.99997 0C3.58171 0 0 3.58171 0 7.99997C0 12.4182 3.58171 15.9999 7.99997 15.9999C8.91244 15.9999 9.78923 15.8472 10.6062 15.5658L9.95603 14.4823C9.33676 14.6689 8.68008 14.7692 7.99997 14.7692C4.26144 14.7692 1.23076 11.7385 1.23076 7.99997Z",fill:"currentColor"}),r.default.createElement("path",{className:"primaryPart",d:"M10.8774 14.1289C11.9828 13.6091 12.9247 12.799 13.6049 11.7969L14.5315 12.6205C13.7596 13.7096 12.7222 14.5973 11.5135 15.1891L10.8774 14.1289Z",fill:"currentColor"}),r.default.createElement("path",{className:"whitePart",d:"M9.50009 5.60023C9.50009 6.33661 8.90314 6.93356 8.16676 6.93356C7.43038 6.93356 6.83342 6.33661 6.83342 5.60023C6.83342 4.86385 7.43038 4.26689 8.16676 4.26689C8.90314 4.26689 9.50009 4.86385 9.50009 5.60023ZM9.63224 7.66691C10.2785 7.20784 10.7001 6.45327 10.7001 5.60023C10.7001 4.20111 9.56588 3.06689 8.16676 3.06689C6.76763 3.06689 5.63342 4.20111 5.63342 5.60023C5.63342 6.45325 6.05503 7.2078 6.70123 7.66687C6.01079 7.93715 5.4991 8.39353 5.13882 8.91797C4.58096 9.72999 4.40002 10.6789 4.40002 11.3003V11.6711L4.7317 11.8369C5.2342 12.0882 6.55022 12.5336 8.16669 12.5336C9.78317 12.5336 11.0992 12.0882 11.6017 11.8369L11.9334 11.6711V11.3003C11.9334 10.6789 11.7524 9.72999 11.1946 8.91797C10.8343 8.39355 10.3226 7.93718 9.63224 7.66691ZM8.16669 11.3336C7.07498 11.3336 6.15422 11.0989 5.63005 10.9124C5.68859 10.5097 5.83834 10.019 6.1279 9.59746C6.49833 9.05826 7.11031 8.60682 8.16669 8.60682C9.22308 8.60682 9.83505 9.05826 10.2055 9.59746C10.495 10.019 10.6448 10.5097 10.7033 10.9124C10.1792 11.0989 9.2584 11.3336 8.16669 11.3336Z",fill:"currentColor"}))},97426:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WorkingGroupsIcon=void 0;const r=n(A(2784)),i=A(24895);t.WorkingGroupsIcon=()=>r.default.createElement(i.Icon,{size:"16",viewBox:"0 0 16 16",preserveAspectRatio:"xMidYMid meet",fill:"none",color:"currentColor",className:"nav-icon"},r.default.createElement("path",{className:"whitePart",d:"M4.90905 2.66667L5.57572 2H10.4242L11.0909 2.66667V3.77778H15.3333V7.7037L14.6666 8.37037H11V7.03704H14V5.11111H9.75753V3.33333H6.24238V5.11111H1.99996V7.03704H4.99996V8.37037H1.33329L0.666626 7.7037V3.77778H4.90905V2.66667ZM0.666626 13.3333V8.88889H1.99996V12.6667H14V8.88889H15.3333V13.3333L14.6666 14H1.33329L0.666626 13.3333Z",fill:"currentColor"}),r.default.createElement("path",{className:"primaryPart",d:"M6 9.33301H7.33333V9.99967H8.66667V9.33301H10V11.333H6V9.33301Z",fill:"currentColor"}),r.default.createElement("path",{className:"whitePart",d:"M6 8.66699H7.33333V8.00033H8.66667V8.66699H10V6.66699H6V8.66699Z",fill:"currentColor"}))},66137:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Logo=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101);t.Logo=()=>r.default.createElement(o,{viewBox:"0 0 114 24",preserveAspectRatio:"xMidYMid meet"},r.default.createElement("path",{d:"M24.5582 21.4241V19.5354H27.5464V7.49545H29.644V19.6935C29.6434 20.1525 29.4598 20.5925 29.1333 20.9171C28.8068 21.2417 28.3642 21.4243 27.9025 21.4248H24.5582V21.4241ZM32.3746 16.3288C31.3654 15.3255 30.851 14.0661 30.851 12.5715C30.851 11.0761 31.3654 9.81678 32.3746 8.81345C33.3838 7.81012 34.6506 7.29878 36.154 7.29878C37.6582 7.29878 38.9048 7.81012 39.9341 8.81345C40.9434 9.81678 41.4577 11.0761 41.4577 12.5715C41.4577 14.0661 40.9434 15.3255 39.9341 16.3288C38.9249 17.3321 37.6582 17.8435 36.154 17.8435C34.6305 17.8435 33.3838 17.3321 32.3746 16.3288ZM33.8982 10.0928C33.3242 10.7021 33.0472 11.5288 33.0472 12.5515C33.0472 13.5748 33.3242 14.4008 33.8988 15.0108C34.4722 15.6208 35.2239 15.9355 36.1346 15.9355C37.0446 15.9355 37.797 15.6208 38.3703 15.0108C38.9444 14.4008 39.222 13.5748 39.222 12.5515C39.222 11.5288 38.9444 10.7021 38.3703 10.0928C37.797 9.48278 37.0446 9.16745 36.1346 9.16745C35.2239 9.18745 34.4722 9.48278 33.8982 10.0928ZM41.6167 7.49545H43.8128L46.009 15.6601H47.0974L49.492 7.49545H51.6889L47.4937 21.4241H45.2968L46.4838 17.6468H45.7126C44.9408 17.6468 44.248 17.1355 44.0495 16.3881L41.6167 7.49545ZM51.4897 14.4601H53.7858C53.8059 14.4995 53.8254 14.5581 53.8649 14.6175L54.1023 14.9715C54.221 15.1488 54.3793 15.3061 54.5382 15.4241C54.6958 15.5615 54.9533 15.6795 55.2497 15.7775C55.5826 15.8825 55.9298 15.9358 56.2791 15.9355C57.0113 15.9355 57.5451 15.8175 57.8818 15.6008C58.2184 15.3848 58.3767 15.0895 58.3767 14.7548C58.3767 14.4401 58.1587 14.1841 57.7235 14.0075C57.2059 13.8035 56.669 13.6518 56.1208 13.5548C55.4852 13.4346 54.8573 13.277 54.2405 13.0828C53.629 12.8999 53.0764 12.5608 52.6378 12.0995C52.2019 11.6268 51.9846 11.0368 51.9846 10.2895C51.9846 9.50278 52.3407 8.79412 53.073 8.20412C53.8053 7.61345 54.7749 7.31878 55.9625 7.31878C56.7143 7.31878 57.3674 7.43678 57.9609 7.65278C58.5544 7.86945 58.9903 8.14478 59.2867 8.43945C59.5837 8.75478 59.8211 9.06945 60.0189 9.38412C60.2168 9.69878 60.3354 9.95478 60.3945 10.1908L60.4743 10.5055H58.2774C58.254 10.4614 58.2342 10.4154 58.2184 10.3681C58.1983 10.3088 58.1192 10.2108 58.0005 10.0528C57.8891 9.90276 57.7557 9.77018 57.6048 9.65945C57.4466 9.54145 57.2293 9.44345 56.9517 9.34478C56.6747 9.24678 56.3381 9.20745 55.982 9.20745C55.3885 9.20745 54.9533 9.30545 54.6361 9.52212C54.3397 9.73812 54.1815 9.99412 54.1815 10.3088C54.1815 10.5648 54.3397 10.8008 54.6562 10.9775C54.9728 11.1548 55.3684 11.2928 55.8432 11.3708C56.3186 11.4501 56.833 11.5681 57.3869 11.7255C57.9104 11.8757 58.4257 12.053 58.9306 12.2568C59.4072 12.4549 59.8184 12.782 60.1175 13.2008C60.4347 13.6341 60.5936 14.1648 60.5936 14.7741C60.5936 15.6208 60.2168 16.3488 59.4449 16.9581C58.6737 17.5681 57.6249 17.8635 56.2985 17.8635C55.5072 17.8635 54.8145 17.7455 54.2009 17.5095C53.588 17.2735 53.1125 16.9975 52.796 16.6628C52.5022 16.3532 52.2373 16.0175 52.0047 15.6601C51.8069 15.3255 51.6681 15.0501 51.6091 14.8335L51.4897 14.4601ZM60.9692 9.38412V7.49545H62.1561V5.31212H64.2537V7.49545H67.3605V9.38412H64.2738V15.7581H67.4591V17.6468H63.8983C63.4365 17.6464 62.9936 17.4639 62.667 17.1393C62.3404 16.8147 62.1566 16.3746 62.1561 15.9155V9.38412H60.9692ZM70.745 9.38412V17.6468H68.6467V9.01078C68.6467 8.60889 68.8073 8.22346 69.0932 7.93928C69.379 7.6551 69.7667 7.49545 70.171 7.49545H74.8416V9.38412H70.7457H70.745ZM76.2659 16.3288C75.2762 15.3061 74.7618 14.0468 74.7618 12.5715C74.7618 11.0961 75.2762 9.83678 76.2659 8.81345C77.2752 7.79078 78.5017 7.29878 79.9468 7.29878C81.3913 7.29878 82.6178 7.81012 83.627 8.81345C84.6362 9.83678 85.1311 11.0761 85.1311 12.5715V13.2601H76.8594C76.9982 14.0868 77.3738 14.7355 77.9283 15.2268C78.5017 15.7188 79.175 15.9548 79.9468 15.9548C80.5798 15.9548 81.1136 15.8368 81.6085 15.6015C82.084 15.3648 82.4199 15.1288 82.5782 14.8928L82.8357 14.5581H85.0325C85.0124 14.6568 84.9534 14.7748 84.8937 14.9121C84.8341 15.0501 84.6563 15.3255 84.3794 15.6988C84.1117 16.0699 83.7994 16.4071 83.4493 16.7028C83.1127 16.9781 82.6178 17.2535 81.9847 17.4895C81.3517 17.7255 80.6784 17.8435 79.9267 17.8435C78.5017 17.8435 77.2752 17.3321 76.2653 16.3288H76.2659ZM77.2356 11.5681H83.2119C83.1127 10.9188 82.7961 10.3481 82.2617 9.89612C81.7279 9.42345 81.0546 9.18745 80.2231 9.18745C79.5275 9.17967 78.8503 9.40882 78.3039 9.83678C77.75 10.2701 77.3939 10.8401 77.2356 11.5681ZM87.0906 16.3881C86.1799 15.4041 85.7246 14.1255 85.7246 12.5715C85.7246 11.0175 86.1806 9.73812 87.0906 8.75478C88.0006 7.77078 89.1486 7.29878 90.5139 7.29878C91.147 7.29878 91.721 7.41678 92.2555 7.67212C92.7892 7.92812 93.1654 8.16412 93.3834 8.40078L93.6999 8.77412H93.7985V7.47612H95.8961V17.6268H93.7985V16.2301H93.6999C93.6798 16.2695 93.6208 16.3281 93.5611 16.4068C93.5021 16.4855 93.3633 16.6035 93.1654 16.8001C92.9681 16.9808 92.7564 17.1454 92.5324 17.2921C92.3145 17.4301 91.9979 17.5481 91.6419 17.6655C91.2773 17.7818 90.8968 17.8416 90.5139 17.8428C89.1681 17.8428 88.0207 17.3514 87.0906 16.3875V16.3881ZM97.7167 17.6468V7.49545H99.8143V8.89278H99.9136C99.9337 8.85278 99.9726 8.79412 100.013 8.71545C100.052 8.63678 100.151 8.51878 100.329 8.32212C100.507 8.14478 100.685 7.96745 100.903 7.83012C101.101 7.69212 101.398 7.57412 101.754 7.45678C102.124 7.33739 102.512 7.27753 102.902 7.27945C103.376 7.27945 103.832 7.33812 104.227 7.47612C104.643 7.61345 104.96 7.77078 105.178 7.94812C105.415 8.12545 105.613 8.32145 105.771 8.49878C105.929 8.67612 106.028 8.83345 106.088 8.97078L106.187 9.16745H106.285C106.306 9.10878 106.345 9.04945 106.404 8.95145C106.444 8.87278 106.583 8.71545 106.78 8.49878C106.978 8.28278 107.195 8.10545 107.434 7.92812C107.671 7.77078 108.007 7.61345 108.423 7.47612C108.863 7.33256 109.324 7.25943 109.788 7.25945C110.955 7.25945 111.886 7.63278 112.559 8.38078C113.231 9.12878 113.568 10.1708 113.568 11.5481V17.6081H111.47V11.6661C111.47 10.0141 110.738 9.18745 109.274 9.18745C108.561 9.18745 107.948 9.46278 107.434 9.99412C106.919 10.5448 106.681 11.2335 106.681 12.0595V17.6275H104.584V11.6661C104.584 10.0141 103.851 9.18745 102.387 9.18745C101.675 9.18745 101.061 9.46278 100.547 9.99412C100.032 10.5448 99.7949 11.2335 99.7949 12.0595V17.6275H97.7167V17.6475V17.6468ZM27.5658 3.62012V5.70545H29.6634V3.62012H27.5658ZM88.4955 10.0928C87.9221 10.7021 87.6452 11.5288 87.6452 12.5515C87.6452 13.5748 87.9221 14.4008 88.4961 15.0108C89.0702 15.6208 89.8219 15.9355 90.7319 15.9355C91.6425 15.9355 92.3949 15.6208 92.9683 15.0108C93.5423 14.4008 93.8193 13.5748 93.8193 12.5515C93.8193 11.5288 93.5423 10.7021 92.9683 10.0928C92.3943 9.48278 91.6425 9.16745 90.7319 9.16745C89.8219 9.18745 89.0702 9.48278 88.4961 10.0928H88.4955Z",fill:a.Colors.White}),r.default.createElement("path",{d:"M16.6621 0H18.8194V6.15733C18.8201 8.528 17.9469 10.8167 16.365 12.5907C16.5635 11.764 16.6621 10.9187 16.6621 10.0333V0ZM5.81801 17.568C5.75833 17.6273 5.71876 17.686 5.65975 17.7453L5.60007 17.804C5.54106 17.8633 5.50149 17.922 5.44181 17.9613L5.36268 18.04C5.30135 18.104 5.23522 18.1633 5.16486 18.2173C5.08573 18.296 5.0066 18.3553 4.92747 18.434C4.85043 18.5102 4.76389 18.5763 4.66996 18.6307L4.43257 18.8073C4.23475 18.9253 4.03693 19.0433 3.8391 19.142C3.79887 19.162 3.75997 19.182 3.70029 19.2007C3.64128 19.2207 3.60172 19.2407 3.56215 19.26C3.50247 19.28 3.4629 19.3 3.40389 19.3193C3.30465 19.3587 3.20607 19.398 3.08737 19.4373H3.06726C2.96801 19.4767 2.86943 19.496 2.77019 19.516H2.75007C2.65149 19.536 2.55292 19.5747 2.45367 19.5947C2.33497 19.6147 2.19683 19.6533 2.07814 19.6533C2.0379 19.6533 1.99901 19.6733 1.95877 19.6733H1.93933C1.82063 19.6933 1.72139 19.6933 1.60269 19.6933H1.16748L1.82063 17.5487H5.81734V17.5687L5.81801 17.568ZM14.9206 0V10.0333C14.9206 10.1907 14.9206 10.368 14.9005 10.5253C14.9005 10.604 14.9005 10.6827 14.881 10.7613C14.881 10.84 14.8609 10.9187 14.8609 10.9973C14.8609 11.076 14.8414 11.1547 14.8414 11.2333C14.8414 11.2927 14.8213 11.3713 14.8213 11.43V11.4893C14.8019 11.568 14.8019 11.6467 14.7824 11.7053C14.7623 11.784 14.7623 11.8627 14.7422 11.922V11.942C14.7228 12.0007 14.7228 12.0593 14.7033 12.1187V12.1587C14.6436 12.394 14.5846 12.65 14.5055 12.8853C14.4854 12.9453 14.4652 13.024 14.4458 13.0827C14.4283 13.1578 14.4018 13.2306 14.3667 13.2993C14.3466 13.378 14.3077 13.4367 14.2875 13.496C14.2674 13.5747 14.2285 13.6333 14.2084 13.6927C14.1883 13.7713 14.1487 13.83 14.1293 13.8893C14.1092 13.948 14.0696 14.0273 14.03 14.086C14.0052 14.1552 13.9721 14.2213 13.9315 14.2827C13.8912 14.342 13.8718 14.4207 13.8322 14.4793C13.8121 14.5387 13.7732 14.578 13.7531 14.6367C13.6946 14.7524 13.6285 14.8642 13.5553 14.9713C13.5005 15.0659 13.4412 15.1578 13.3776 15.2467C13.343 15.3197 13.296 15.3862 13.2387 15.4433C13.2186 15.4833 13.1797 15.522 13.1596 15.542C13.1006 15.6207 13.0604 15.6793 13.0014 15.7387C12.9417 15.8173 12.8827 15.876 12.8431 15.9547L12.487 16.368L12.546 16.132C12.5661 16.0727 12.5661 16.014 12.5863 15.9547V15.896C12.6057 15.8173 12.6057 15.7387 12.6252 15.66C12.6453 15.5613 12.6654 15.4633 12.6654 15.3847C12.6654 15.3253 12.6848 15.2667 12.6848 15.2273C12.6848 15.168 12.705 15.1287 12.705 15.0693C12.7244 14.9713 12.7244 14.8727 12.7438 14.7547V14.676C12.7438 14.5973 12.764 14.5387 12.764 14.46V0H14.9206Z",fill:a.Colors.LogoPurple}),r.default.createElement("path",{d:"M11.0225 0V13.9087C11.0225 14.2433 11.0023 14.558 10.9822 14.8727C10.9627 15.1441 10.9232 15.4137 10.8642 15.6793C10.7455 16.3093 10.5671 16.9193 10.3297 17.4893C10.1849 17.846 10.0197 18.1941 9.83485 18.532C9.28286 19.5114 8.57443 20.3952 7.73725 21.1487C5.95964 22.7347 3.65459 23.6107 1.26607 23.608H0L0.653153 21.4633H1.28619C3.06907 21.4668 4.79495 20.8391 6.15466 19.6927C6.86555 19.1088 7.45661 18.3942 7.89551 17.588C8.0142 17.3913 8.11345 17.1747 8.21202 16.958C8.37095 16.6047 8.48965 16.25 8.58822 15.876C8.71038 15.4596 8.78351 15.0305 8.80616 14.5973C8.82628 14.3813 8.82628 14.1647 8.82628 13.948V0H11.0225Z",fill:a.Colors.LogoPurple}),r.default.createElement("path",{d:"M7.1243 13.6926V13.9086C7.1243 14.0859 7.1243 14.2632 7.10418 14.4206C7.06462 14.7546 7.02506 15.0892 6.92648 15.4039C6.88624 15.5612 6.84668 15.7186 6.78767 15.8566H2.33496L2.98811 13.7119H7.1243V13.6919V13.6926Z",fill:a.Colors.LogoPurple}));const o=i.default.svg`
  height: 24px;
  width: auto;
  position: relative;
`},20389:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LogoLink=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(66137);t.LogoLink=function(){return r.default.createElement(o,{href:"#"},r.default.createElement(a.Logo,null))};const o=i.default.a`
  display: flex;
  max-height: 24px;
`},20828:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Navigation=void 0;const r=n(A(82740)),i=A(12101);t.Navigation=r.default.nav`
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  grid-template-columns: 1fr;
  grid-template-rows: 76px 1fr 176px 10px 20px;
  grid-row-gap: 8px;
  grid-template-areas:
    'barheader'
    'barlinks'
    'barmember'
    'barnetwork'
    'barversion';
  grid-area: navbar;
  width: 100%;
  max-width: 226px;
  height: 100vh;
  z-index: 10;
  background: ${i.Colors.Black[900]};
  color: ${i.Colors.White};
`},84432:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NavigationHeader=void 0;const r=n(A(82740));t.NavigationHeader=r.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px 0;
  grid-area: barheader;
`},36085:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NavigationLink=void 0;const r=n(A(2784)),i=A(12424),a=n(A(82740)),o=A(12101);t.NavigationLink=({children:e,exact:t,className:A,to:n})=>r.default.createElement(s,{exact:t,to:n,className:A,activeClassName:"active-page"},e);const s=a.default(i.NavLink)`
  display: grid;
  position: relative;
  grid-auto-flow: column;
  grid-column-gap: 12px;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 12px 12px 12px 24px;
  border-radius: 0 ${o.BorderRad.s} ${o.BorderRad.s} 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  -webkit-text-stroke-width: 0.05em;
  -webkit-text-stroke-color: transparent;
  color: ${o.Colors.Black[200]};
  text-transform: capitalize;
  text-decoration: none;
  overflow: hidden;
  transition: ${o.Transitions.all};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background-color: transparent;
    transition: ${o.Transitions.all};
  }
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    opacity: 0.16;
    transition: ${o.Transitions.all};
    z-index: -1;
  }

  .nav-icon {
    color: ${o.Colors.Black[300]};
    transition: ${o.Transitions.all};
  }

  &:hover {
    color: ${o.Colors.White};
    &:after {
      background-color: ${o.Colors.Blue[700]};
    }
    .nav-icon {
      color: ${o.Colors.Blue[500]};
    }
  }

  &.active-page {
    color: ${o.Colors.White};
    background-color: ${o.Colors.Black[700]};
    -webkit-text-stroke-color: ${o.Colors.White};

    &:before {
      background-color: ${o.Colors.Blue[500]};
    }
  }
  &.active-page .nav-icon {
    color: ${o.Colors.White};
  }
`},47105:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Version=void 0;const r=n(A(2784)),i=n(A(82740));t.Version=function(){return r.default.createElement(a,null,"Version: ","aa41527"," ")};const a=i.default.div`
  display: grid;
  grid-area: barversion;
  justify-content: center;
  align-items: center;
`},37001:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.OptionsListComponent=t.OptionHeaderComponent=t.OptionComponent=t.OptionComponentContainer=t.SelectComponent=t.EmptyOption=t.SelectedOption=t.OptionSectionHeader=t.Option=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101);t.Option=({children:e,onClick:A})=>r.default.createElement(t.OptionComponentContainer,{onClick:A},r.default.createElement(t.OptionComponent,null,e)),t.OptionSectionHeader=({children:e})=>r.default.createElement(t.OptionComponentContainer,null,r.default.createElement(t.OptionHeaderComponent,null,e)),t.SelectedOption=i.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  padding: 10px 28px 10px 16px;
`,t.EmptyOption=i.default.input`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${a.Colors.Black[900]};
  width: 100%;
  height: 100%;
  padding: 16px;
  border: none;
  outline: none;
  background-color: transparent;

  &::placeholder {
    font-size: 14px;
    line-height: 78px;
    font-weight: 400;
    color: ${a.Colors.Black[400]};
  }
  &:disabled {
    cursor: not-allowed;
  }
`,t.SelectComponent=i.default.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
`,t.OptionComponentContainer=i.default.li`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid ${a.Colors.Black[300]};
  border-radius: ${a.BorderRad.s};
  background-color: transparent;
`,t.OptionComponent=i.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  background: ${a.Colors.White};
  cursor: pointer;
  border-radius: ${a.BorderRad.s};
  transition: ${a.Transitions.all};
  min-height: ${a.Sizes.selectHeight};
  max-height: ${a.Sizes.selectHeight};
  padding: 10px 72px 10px 16px;

  &:active,
  &:focus {
    outline: none;
  }
`,t.OptionHeaderComponent=i.default(t.OptionComponent)`
  min-height: auto;
`,t.OptionsListComponent=i.default.ul`
  display: grid;
  grid-template-columns: 1fr;
  position: absolute;
  left: 50%;
  top: 100%;
  width: calc(100% + 2px);
  height: auto;
  max-height: calc(${a.Sizes.selectHeight} * 2.5);
  margin: 0;
  border-radius: ${a.BorderRad.s};
  border: 1px solid ${a.Colors.Black[300]};
  background-color: ${a.Colors.White};
  box-shadow: ${a.Shadows.select};
  overflow-y: scroll;
  transform: translateX(-50%);
  transition: ${a.Transitions.all};
  animation: showOptions 0.25s ease;
  cursor: auto;
  z-index: 10;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes showOptions {
    from {
      opacity: 0;
      max-height: 0;
    }
  }

  ${t.OptionComponentContainer} {
    border-left: none;
    border-right: none;
    border-radius: 0;

    &:first-child {
      border-top: none;
    }

    &:last-child {
      border-bottom: none;
    }

    ${t.OptionComponent} {
      border-radius: 0;
    }
  }

  ${t.OptionComponentContainer} + ${t.OptionComponentContainer} {
    margin-top: -1px;
  }
`},52019:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(37001),t),r(A(12055),t),r(A(25133),t)},25133:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Select=void 0;const a=i(A(2784)),o=A(53050),s=A(55017),u=A(24895),c=A(37001);t.Select=({disabled:e,placeholder:t,selected:A,onChange:n,onSearch:r,renderSelected:i,renderList:l})=>{const[d,f]=a.useState(""),g=d,[p,h]=o.useToggle(),[m,y]=a.useState(A),I=a.useRef(null),E=a.useRef(null);a.useEffect((()=>{r(g)}),[g]);const B=a.useCallback((e=>{h(),y(e),n(e),f("")}),[h]);return a.useEffect((()=>{A&&(y(A),n(A))}),[A]),a.useEffect((()=>{const e=e=>{p&&I.current&&!e.composedPath().includes(I.current)&&(h(),f(""))};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)}),[p]),a.useEffect((()=>{const e=e=>{p&&"Escape"===e.key&&(h(),f(""))};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[p]),a.useEffect((()=>{p&&E.current?.focus()}),[p]),a.default.createElement(c.SelectComponent,{ref:I},a.default.createElement(s.Toggle,{onClick:()=>{!p&&!e&&h()},isOpen:p,disabled:e},m&&!p&&a.default.createElement(c.SelectedOption,null,i(m)),(!m||p)&&a.default.createElement(c.EmptyOption,{ref:E,type:"text",placeholder:t,autoComplete:"off",value:d,disabled:e,onChange:e=>f(e.target.value)}),a.default.createElement(s.ToggleButton,{isOpen:p,className:"ui-toggle",disabled:e},a.default.createElement(u.Arrow,{direction:"down"}))),p&&l(B))}},12055:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},17197:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MultiTokenValueStat=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(30120),o=A(3262);t.MultiTokenValueStat=({title:e,values:t})=>r.default.createElement(s,{title:e},t.map((({label:e,value:t})=>r.default.createElement(a.StatisticItemSpacedContent,null,r.default.createElement(a.StatisticLabel,null,e),r.default.createElement(o.TotalValue,{value:t})))));const s=i.default(a.StatisticItem)`
  padding: 12px 16px 4px;
`},30120:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.StatiscticContentColumn=t.TwoColumnsStatistic=t.StatisticLabel=t.StatisticItemSpacedContent=t.StatsBlock=t.StatisticItem=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101),o=A(76746),s=A(31604);t.StatisticItem=({title:e,helperText:A,className:n,children:i,helperTitle:a,helperLinkText:s,helperLinkURL:d})=>r.default.createElement(t.StatsBlock,{key:e,className:n},r.default.createElement(u,null,r.default.createElement(c,null,e,A&&r.default.createElement(o.Help,{helperText:A,helperTitle:a,helperLinkText:s,helperLinkURL:d}))),r.default.createElement(l,null,i)),t.StatsBlock=i.default.li`
  display: grid;
  position: relative;
  align-content: ${({centered:e})=>e?"stretch":"space-between"};
  ${({centered:e})=>e?"align-items: center;":null};
  flex-basis: 240px;
  flex-grow: 1;
  height: ${({size:e})=>{switch(e){case"s":return"auto";case"m":return"88px";case"l":default:return"100px"}}};
  padding: ${({centered:e})=>e?"20px 16px":"12px 16px 20px"};
  border-radius: ${a.BorderRad.m};
  background-color: ${a.Colors.White};
  box-shadow: ${a.Shadows.light};

  & + & {
    margin-left: ${({spacing:e})=>{switch(e){case"s":return"16px";case"m":default:return"24px"}}};
  }
`;const u=i.default.div`
  display: grid;
  grid-auto-flow: column;
  width: 100%;
  justify-content: space-between;
  align-items: start;
`,c=i.default(s.Label)`
  position: relative;
`,l=i.default.div`
  margin-top: auto;
`;t.StatisticItemSpacedContent=i.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,t.StatisticLabel=i.default(s.TextSmall)`
  color: ${a.Colors.Black[500]};
`,t.TwoColumnsStatistic=i.default.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 16px;
  height: 100%;
`,t.StatiscticContentColumn=i.default.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`},39425:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Statistics=void 0;const r=n(A(82740));t.Statistics=r.default.ul`
  display: flex;
  width: 100%;
  justify-items: flex-start;
  ${({withMargin:e})=>e?"margin-top: 8px;":null};
`},3262:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TotalValue=t.TokenValueStat=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(31604),o=A(30120);t.TokenValueStat=e=>r.default.createElement(o.StatisticItem,Object.assign({},e),r.default.createElement(t.TotalValue,{value:e.value}),e.children),t.TotalValue=i.default(a.TokenValue)`
  font-size: 20px;
  line-height: 28px;
`},62523:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(39425),t),r(A(30120),t),r(A(3262),t),r(A(17197),t)},95711:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Badge=void 0;const r=n(A(82740)),i=A(12101);t.Badge=r.default.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: ${i.BorderRad.round};
  background-color: ${i.Colors.Black[500]};
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  color: ${i.Colors.White};
`},94567:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Label=void 0;const r=n(A(82740)),i=A(12101);t.Label=r.default.span`
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  width: fit-content;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  color: ${i.Colors.Black[400]};
  text-transform: uppercase;
`},73105:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AboutLabel=t.MembershipLabel=void 0;const r=n(A(2784)),i=n(A(82740));t.MembershipLabel=r.default.memo((({text:e,className:A})=>r.default.createElement(t.AboutLabel,{title:e,className:A},e))),t.AboutLabel=i.default.h6`
  width: fit-content;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
`},40823:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Subscription=void 0;const r=n(A(82740)),i=A(12101),a=A(61378);t.Subscription=r.default(a.TextInlineSmall)`
  color: ${i.Colors.Black[500]};
  font-family: ${i.Fonts.Inter};
`},61378:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.TextInlineBig=t.TextInlineMedium=t.TextInlineSmall=t.TextBig=t.TextMedium=t.TextSmall=void 0;const a=i(A(82740)),o=A(12101),s=a.css`
  font-family: ${o.Fonts.Grotesk};
`,u=a.css`
  font-weight: 700;
`,c=a.css`
  font-weight: 700;
`,l=a.css`
  color: ${o.Colors.Black[700]};
`,d=a.css`
  color: ${o.Colors.Black[400]};
`,f=a.css`
  color: ${o.Colors.Black[500]};
`,g=a.css`
  margin-bottom: ${({margin:e})=>{switch(e){case"s":return"8px";case"m":return"16px";case"l":return"24px";case"xl":return"32px";case void 0:default:return"0px"}}};
`,p=a.css`
  ${e=>{if(!0===e.bold)return u}};
  ${e=>{if(!0===e.italic)return c}};
  ${e=>{if(!0===e.dark)return l}};
  ${e=>{if(!0===e.lighter)return d}};
  ${e=>{if(!0===e.light)return f}};
  ${e=>{if(!0===e.value)return s}};
  ${g};
`;t.TextSmall=a.default.p`
  font-size: 12px;
  line-height: 18px;
  ${p}
`,t.TextMedium=a.default.p`
  font-size: 14px;
  line-height: 20px;
  ${p}
`,t.TextBig=a.default.p`
  font-size: 16px;
  line-height: 24px;
  ${p}
`,t.TextInlineSmall=a.default.span`
  font-size: 12px;
  line-height: 18px;
  ${p}
`,t.TextInlineMedium=a.default.span`
  font-size: 14px;
  line-height: 20px;
  ${p}
`,t.TextInlineBig=a.default.span`
  font-size: 16px;
  line-height: 24px;
  ${p}
`},21249:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ValueInJoys=t.TokenValue=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101),o=A(69051);t.TokenValue=r.default.memo((({className:e,value:A})=>A?r.default.createElement(t.ValueInJoys,{className:e},o.formatTokenValue(A)):r.default.createElement("span",null,"-"))),t.ValueInJoys=i.default.span`
  display: inline-grid;
  position: relative;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: baseline;
  width: fit-content;
  font-weight: 700;
  color: ${a.Colors.Black[900]};
  font-family: ${a.Fonts.Grotesk};

  &:after {
    content: 'JOY';
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: ${a.Colors.Black[400]};
    text-transform: uppercase;
    font-family: ${a.Fonts.Grotesk};
  }
`},31604:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(95711),t),r(A(94567),t),r(A(61378),t),r(A(21249),t)},12101:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(14245),t)},14245:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Overflow=t.Animations=t.Transitions=t.Fonts=t.Shadows=t.Sizes=t.BorderRad=t.Colors=void 0,t.Colors={White:"#FFFFFF",Grey:"#8C96A6",LogoPurple:"#4038FF",Black:{900:"#000000",800:"#131519",700:"#1F252E",600:"#404B5A",500:"#5D6B80",400:"#8C96A6",300:"#C4CCD6",200:"#DDE2EB",100:"#E8EDF6",75:"#EFF3FA",50:"#F6F8FC",25:"#F9FAFC",900.25:"#00000040",900.1:"#0000001A",700.85:"#1F252ED9"},Blue:{900:"#001AE4",800:"#0027EA",700:"#002CEF",600:"#2734F8",500:"#3F38FF",400:"#6C6CFF",300:"#817EFF",200:"#A7AAFF",100:"#D3DAFF",50:"#E7EBFF",300.4:"#817EFF66"},Green:{500:"#3DCFB3",400:"#62E1CA",400.4:"#62E1CA66",300:"#8EE6D6",200:"#B0EFE4",100:"#CEF5EE",50:"#DDF9F4"},Red:{500:"#F42E55",400:"#FF3960",400.4:"#FF396066",300:"#FF6D87",200:"#F695A4",100:"#FFCBD9",50:"#FEEAF1"},Orange:{500:"#FFAA02",400:"#FFBB33",400.4:"#FFBB3366",300:"#FFC654",200:"#FFDC98",100:"#FFEFCE",50:"#FFFAF0"}},t.BorderRad={s:"2px",m:"4px",l:"8px",full:"1000px",round:"50%"},t.Sizes={selectHeight:"80px",accountHeight:"94px"},t.Shadows={transparent:"0px 0px 0px rgba(0, 0, 0, 0)",focusDefault:`0px 0px 8px ${t.Colors.Blue[300.4]}`,focusInvalid:`0px 0px 8px ${t.Colors.Red[400.4]}`,focusWarning:`0px 0px 8px ${t.Colors.Orange[400.4]}`,focusValid:`0px 0px 8px ${t.Colors.Green[400.4]}`,common:`0px 12px 28px ${t.Colors.Black[900.25]}`,light:"0px 0px 28px #D6D8E780",select:`0px 8px 16px ${t.Colors.Black[900.1]}`},t.Fonts={Grotesk:'"Grotesk", sans-serif',Inter:'"Inter", sans-serif'},t.Transitions={all:"all 0.25s ease",duration:"0.25s",showResult:"1s"},t.Animations={showSymbol:`\n    animation: showSymbol ${t.Transitions.duration} ease;\n\n    @keyframes showSymbol {\n      from {\n        opacity: 0;\n      }\n      to {\n        opacity: 1;\n      }\n    }\n  `,showResultSymbol:`\n    animation: showSymbol ${t.Transitions.showResult} ease;\n\n    @keyframes showSymbol {\n      0% {\n        opacity: 0;\n      }\n      25% {\n        opacity: 1;\n      }\n      75% {\n        opacity: 1;\n      }\n      100% {\n        opacity: 0;\n      }\n    }\n  `,showSidePane:`\n    animation: showSidePane ${t.Transitions.duration} ease;\n\n    @keyframes showSidePane {\n      0% {\n        opacity: 0;\n        transform: translateX(100%);\n      }\n      25% {\n        opacity: 1;\n      }\n      100% {\n        transform: translateX(0%);\n      }\n    }\n  `,showModalBackground:`\n    animation: showModalBackground ${t.Transitions.duration} ease;\n\n    @keyframes showModalBackground {\n      from {\n        background-color: transparent;\n      }\n      to {}\n    }\n  `,showModalBlock:`\n    animation: showModalBlock ${t.Transitions.duration} ease;\n\n    @keyframes showModalBlock {\n      from {\n        opacity: 0;\n        transform: translateY(-24px);\n      }\n      to {}\n    }\n  `,showHelperTooltip:"\n    animation: showHelperTooltip 0.25s ease;\n    animation-delay: 0.25s;\n    animation-fill-mode: forwards;\n\n    @keyframes showHelperTooltip {\n      from {\n        opacity: 0;\n        transform: translateY(8px);\n        visibility: hidden;\n      }\n      to {\n        visibility: visible;\n      }\n    }\n  ",showNotification:`\n    animation: showNotification ${t.Transitions.duration} ease;\n\n    @keyframes showNotification {\n      from {\n        opacity: 0;\n        transform: translateX(120%);\n      }\n      to {\n        opactiy: 1;\n        transform: translateX(0%);\n      }\n    }\n  `},t.Overflow={DotsTwoLine:"\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    -moz-box-orient: vertical;\n    overflow: hidden;\n  ",Dots:"\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "}},41090:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useActivities=void 0,t.useActivities=()=>[{id:"1",time:"2021-03-09T10:28:04.155Z",text:'Opening "Became a Forum Moderator has been closed by the Working Group Leader',category:"closed"},{id:"2",time:"2021-03-09T10:28:04.155Z",text:"Jennifer_123 has been hired as a Storage Working Group Leader",category:"welcome"},{id:"3",time:"2021-03-09T10:28:04.155Z",text:"Jennifer_123 has been hired as a Storage Working Group Leader",category:"closed",type:"error"},{id:"4",time:"2021-03-09T10:28:04.155Z",text:"Jennifer_123 has been hired as a Storage Working Group Leader",category:"welcome",type:"ok"},{id:"5",time:"2021-03-09T10:28:04.155Z",text:'Opening "Became a Forum Moderator has been closed by the Working Group Leader',category:"closed"},{id:"6",time:"2021-03-09T10:28:04.155Z",text:"Jennifer_123 has been hired as a Storage Working Group Leader",category:"welcome"},{id:"7",time:"2021-03-09T10:28:04.155Z",text:"Jennifer_123 has been hired as a Storage Working Group Leader",category:"closed",type:"error"},{id:"8",time:"2021-03-09T10:28:04.155Z",text:"Jennifer_123 has been hired as a Storage Working Group Leader",category:"welcome",type:"ok"}]},1361:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useApi=void 0;const n=A(2784),r=A(24793);t.useApi=()=>({...n.useContext(r.ApiContext)})},42814:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDebounce=void 0;const n=A(2784);t.useDebounce=function(e,t){const[A,r]=n.useState(e);return n.useEffect((()=>{const A=setTimeout((()=>{r(e)}),t);return()=>{clearTimeout(A)}}),[e,t]),A}},97120:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useForm=void 0;const n=A(2784),r=A(71046);t.useForm=(e,t)=>{const[A,i]=n.useReducer(((e,t)=>({...e,[t.type]:t.value})),t),{isValid:a,errors:o,validate:s}=r.useFormValidation(e);return{state:A,dispatch:i,isValid:a,errors:o,validate:s}}},71046:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useFormValidation=void 0;const n=A(2784);t.useFormValidation=e=>{const[t,A]=n.useState(!1),[r,i]=n.useState([]),[a,o]=n.useState(),[s,u]=n.useState();return n.useEffect((()=>{let t=!0;return A(!1),e.validate(a,{abortEarly:!1,stripUnknown:!0,context:s}).then((()=>{t&&(A(!0),i([]))})).catch((e=>{t&&(A(!1),i(e.inner))})),()=>{t=!1}}),[a,s]),{isValid:t,errors:r,validate:(e,t)=>{o(e),u(t)}}}},87795:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useKeyring=void 0;const n=A(2784),r=A(14648);t.useKeyring=()=>n.useContext(r.KeyringContext)},19221:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useModal=void 0;const n=A(2784),r=A(64774);t.useModal=()=>n.useContext(r.ModalContext)},65639:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useNumberInput=void 0;const n=A(2784),r=/^\d*(\.\d*)?$/;function i(e,t){if(e.includes(".")){const[A,n]=e.split("."),r=n.substring(0,t);return 0!==t?`${A}.${r}`:A}return e}t.useNumberInput=function(e=6){const[t,A]=n.useState("");return n.useEffect((()=>{A(i(t,e))}),[e]),[t,function(t){t=function(e){return e.replace(/,/g,"")}(t),r.test(t)&&A(i(function(e){return""===e||((e=e.replace(/^0*/,"")).startsWith(".")||""===e)&&(e="0"+e),e}(t),e))}]}},28443:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useObservable=void 0;const n=A(2784);t.useObservable=function(e,t){const[A,r]=n.useState(void 0);return n.useEffect((()=>{const t=e?.subscribe(r);return()=>t&&t.unsubscribe()}),t),A}},28711:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useSignAndSendTransaction=void 0;const r=A(2028),i=n(A(62197)),a=A(2784),o=A(1361),s=A(87795),u=A(28443),c=(e,t,A)=>{e.subscribe((e=>{const{status:n,events:r}=e;console.log(`Current transaction status: ${n.type}`),n.isReady&&t("PENDING"),n.isInBlock&&(console.log("Included at block hash",JSON.stringify(n.asInBlock)),console.log("Events:"),r.forEach((({event:{data:e,method:t,section:A},phase:n})=>{console.log("\t",JSON.stringify(n),`: ${A}.${t}`,JSON.stringify(e))})),console.log(JSON.stringify(r)),A(r),t((e=>e.find((({event:{method:e}})=>"ExtrinsicFailed"===e||"BatchInterrupted"===e)))(r)?"ERROR":"SUCCESS"))}),(()=>t("ERROR")))};t.useSignAndSendTransaction=({transaction:e,signer:t,onDone:A})=>{const n=s.useKeyring(),{api:l}=o.useApi(),d=u.useObservable(e?.paymentInfo(t),[e,t]),[f,g]=a.useState("READY"),[p,h]=a.useState([]);return a.useEffect((()=>{if("SIGN"!==f||!e)return;const A=n.getPair(t);A.meta.isInjected?(g("EXTENSION"),r.web3FromAddress(t).then((A=>{c(e.signAndSend(t,{signer:A.signer}),g,h)}))):(g("PENDING"),c(e.signAndSend(A),g,h))}),[l,f]),a.useEffect((()=>{"SUCCESS"!==f&&"ERROR"!==f||A("SUCCESS"===f,p,d?.partialFee.toBn()||new i.default(0))}),[f]),{send:()=>g("SIGN"),paymentInfo:d,status:f}}},53050:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useToggle=void 0;const n=A(2784);t.useToggle=(e=!1)=>n.useReducer((e=>!e),e)},19709:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Comparator=t.applyOrder=void 0;const r=n(A(62197));t.applyOrder=(e,t)=>e*(t?-1:1),t.Comparator=(e,A)=>({string:(n,r)=>{const i=n[A]||"",a=r[A]||"";return t.applyOrder(i.localeCompare(a),e)},bigNumber:(n,i)=>{const a=n[A]||new r.default(0),o=i[A]||new r.default(0);return t.applyOrder(a.cmp(o),e)},number:(n,r)=>{const i=n[A]||0,a=r[A]||0;return t.applyOrder(i-a,e)}})},69051:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.formatDateString=t.shortenAddress=t.formatTokenValue=void 0;const r=n(A(62197)),i=/\B(?=(\d{3})+(?!\d))/g;t.formatTokenValue=e=>new r.default(e||0).toString().replace(i,","),t.shortenAddress=function(e,t=18){return t>=e.length?e:e.substring(0,Math.ceil(t/2))+"..."+e.substring(e.length-Math.floor(t/2),e.length)};const a=Intl.DateTimeFormat("en",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0,timeZoneName:"short"});t.formatDateString=e=>a.format(new Date(e))},97538:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.percentTimeLeft=void 0,t.percentTimeLeft=(e,t,A=new Date)=>{const n=new Date(e).valueOf(),r=new Date(t).valueOf(),i=A.valueOf();if(n<i)return 0;if(r>i)return 100;const a=n-r,o=n-i;return Math.round(100*o/a)}},62022:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.relativeTime=void 0;const A=[{scale:2592e3,unit:"month"},{scale:604800,unit:"week"},{scale:86400,unit:"day"},{scale:3600,unit:"hour"},{scale:60,unit:"minute"}];t.relativeTime=function(e,t=Date.now()){const n=new Date(e).valueOf(),r=new Intl.RelativeTimeFormat("en"),i=Math.floor((n-t)/1e3);for(const{scale:e,unit:t}of A)if(Math.abs(i)>=e){const A=i>0?Math.floor:Math.ceil;return r.format(A(i/e),t)}return i>0?"soon":"a short while ago"}},24793:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ApiContext=void 0;const n=A(2784);t.ApiContext=n.createContext({isConnected:!1,api:void 0})},26129:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ApiContextProvider=void 0;const o=A(23355);A(67445),A(87957);const s=A(6706),u=a(A(39764)),c=i(A(2784)),l=A(24793);t.ApiContextProvider=e=>{const[t,A]=c.useState(!1),[n,r]=c.useState(void 0);return c.useEffect((()=>{const e=new s.WsProvider("ws://127.0.0.1:9944/");s.ApiRx.create({provider:e,rpc:u.default,types:o.types,registry:o.registry}).subscribe((e=>{r(e),A(!0),e.on("connected",(()=>A(!0))),e.on("disconnected",(()=>A(!1)))}))}),[]),c.default.createElement(l.ApiContext.Provider,{value:{isConnected:t,api:n}},e.children)}},14648:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.KeyringContext=void 0;const n=A(2784);t.KeyringContext=n.createContext({})},97136:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.KeyringContextProvider=void 0;const o=A(2028),s=a(A(71134)),u=i(A(2784)),c=A(14648);t.KeyringContextProvider=e=>{const[t,A]=u.useState(!1);var n;return u.useEffect((n=()=>A(!0),()=>{const e=setInterval((()=>{Object.keys(window.injectedWeb3).length&&(clearInterval(e),n())}),20);return()=>clearInterval(e)}),[]),u.useEffect((()=>{t&&(async()=>{await o.web3Enable("Pioneer");const e=(await o.web3Accounts()).map((({address:e,meta:t})=>({address:e,meta:{...t,name:`${t.name} (${t.source})`}})));(function(){try{return!!s.default.keyring}catch{return!1}})()||s.default.loadAll({isDevelopment:!0},e)})().catch(console.error)}),[t]),u.default.createElement(c.KeyringContext.Provider,{value:s.default},e.children)}},64774:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ModalContext=void 0;const n=A(2784);t.ModalContext=n.createContext({modal:null,modalData:null,showModal:()=>{},hideModal:()=>{}})},71458:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.ModalContextProvider=void 0;const a=i(A(2784)),o=A(64774);t.ModalContextProvider=e=>{const[t,A]=a.useState(null),[n,r]=a.useState(),i={showModal:e=>{A(e.modal),e.data&&r(e.data)},hideModal:()=>{A(null),r(null)},modal:t,modalData:n};return a.default.createElement(o.ModalContext.Provider,{value:i},e.children)}},87039:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ServerContext=void 0;const n=A(2784);t.ServerContext=n.createContext(void 0)},27813:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ServerContextProvider=void 0;const n=A(87039);t.ServerContextProvider=n.ServerContext.Provider},72571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isFunction=void 0,t.isFunction=e=>"function"==typeof e},92629:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AppPage=void 0;const r=n(A(2784)),i=n(A(28316)),a=A(81495);i.default.render(r.default.createElement(a.App,null),document.getElementById("app"));var o=A(86810);Object.defineProperty(t,"AppPage",{enumerable:!0,get:function(){return o.AppPage}})},20680:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AvatarPlaceholder=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101);t.AvatarPlaceholder=({className:e})=>r.default.createElement(o,{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",className:e},r.default.createElement("rect",{fill:a.Colors.Blue[50],x:"0",y:"0",width:"40",height:"40"}),r.default.createElement("rect",{x:"0",y:"19.5",transform:"matrix(0.7070976 -0.7071159 0.7071159 0.7070976 -8.2842712 20.0003643)",fill:a.Colors.Blue[100],width:"40",height:"1"}),r.default.createElement("rect",{x:"19.5",y:"0",transform:"matrix(0.7070976 -0.7071159 0.7071159 0.7070976 -8.2842712 20.0003643)",fill:a.Colors.Blue[100],width:"1",height:"40"}),r.default.createElement("rect",{x:"11",y:"11",fill:a.Colors.Blue[50],width:"18",height:"18"}),r.default.createElement("path",{fill:a.Colors.Blue[500],d:"M25,12v7.6500244c0,0.6799927-0.0700073,1.3199463-0.210022,1.9499512 C25.9299927,20.25,26.5599976,18.5,26.5599976,16.6900024V12H25z M14.3099976,25.3800049l-0.3200073,1.1099854 l-0.1499634,0.5300293h0.3099976c0.0899658,0,0.1599731,0,0.25-0.0200195h0.0099487 c0.0300293,0,0.0599976-0.0200195,0.0900269-0.0200195c0.0800171,0,0.1799927-0.0199585,0.2700195-0.039978 c0.0700073-0.0200195,0.1399536-0.039978,0.2099609-0.0599976H15c0.0700073-0.0200195,0.1400146-0.0300293,0.210022-0.0599976 h0.0099487c0.0900269-0.0300293,0.1600342-0.0599976,0.2300415-0.0900269 c0.039978-0.0100098,0.0700073-0.0299683,0.1199951-0.0499878c0.0200195-0.0100098,0.0499878-0.0299683,0.0999756-0.039978 c0.0400391-0.0100098,0.0700073-0.0300293,0.1000366-0.0499878c0.1399536-0.0700073,0.2799683-0.1600342,0.4199829-0.25 l0.1699829-0.1400146c0.0700073-0.0400391,0.1300049-0.0900269,0.1900024-0.1400146l0.1699829-0.1699829 c0.0500488-0.0400391,0.1000366-0.0900269,0.1400146-0.1400146l0.0599976-0.0599976 c0.0400391-0.0300293,0.0700073-0.0700073,0.1100464-0.1199951l0.0499878-0.039978 c0.039978-0.0500488,0.0700073-0.0900269,0.1099854-0.1400146v-0.0100098H14.3099976z M22.1900024,12v11.0300293 c0,0.0599976-0.0100098,0.0999756-0.0100098,0.1599731V23.25c-0.0100098,0.0900269-0.0100098,0.1599731-0.0299683,0.2399902 c0,0.0400391-0.0100098,0.0700073-0.0100098,0.1199951c0,0.0300293-0.0200195,0.0700073-0.0200195,0.1199951 c0,0.0599976-0.0100098,0.1300049-0.0299683,0.210022C22.0800171,24,22.0800171,24.0599976,22.0700073,24.1199951v0.039978 C22.0499878,24.210022,22.0499878,24.25,22.039978,24.2999878l-0.0499878,0.1799927L22.25,24.1599731 C22.2800293,24.0999756,22.3200073,24.0599976,22.3599854,24c0.0499878-0.0499878,0.0800171-0.0900269,0.1199951-0.1500244 c0.0100098-0.0199585,0.0400391-0.039978,0.0599976-0.0799561c0.0400391-0.0400391,0.0700073-0.0900269,0.1000366-0.1500244 c0.039978-0.0599976,0.0799561-0.1300049,0.1199951-0.210022c0.0200195-0.0299683,0.0499878-0.0699463,0.0700073-0.0999756 c0.0299683-0.0499878,0.0499878-0.0999756,0.0799561-0.1500244c0.0100098-0.0499878,0.0400391-0.0699463,0.0500488-0.1199951 C22.9899902,23,23.0100098,22.9400024,23.0300293,22.8900146c0.0299683-0.0499878,0.0599976-0.1000366,0.0799561-0.1500244 c0.0100098-0.0200195,0.0200195-0.0499878,0.0300293-0.0800171c0.0199585-0.0199585,0.0299683-0.0499878,0.039978-0.0699463 c0.0100098-0.0500488,0.039978-0.0900269,0.0499878-0.1500244C23.25,22.3900146,23.2800293,22.3499756,23.289978,22.289978 c0.0200195-0.0499878,0.0400391-0.0899658,0.0599976-0.1499634c0.0200195-0.0499878,0.0400391-0.1099854,0.0599976-0.1700439 c0.0100098-0.039978,0.0200195-0.0999756,0.0400391-0.1499634c0.0599976-0.1699829,0.0999756-0.3699951,0.1400146-0.5499878 v-0.0300293c0.0099487-0.0499878,0.0099487-0.0899658,0.0299683-0.1300049v-0.0199585 c0.0100098-0.0500488,0.0100098-0.1100464,0.0300293-0.1700439c0.0099487-0.039978,0.0099487-0.0999756,0.0299683-0.1599731 V20.710022c0-0.0400391,0.0100098-0.1000366,0.0100098-0.1500244c0-0.0599976,0.0100098-0.1199951,0.0100098-0.1699829 c0-0.0599976,0.0199585-0.1300049,0.0199585-0.1900024c0.0100098-0.0499878,0.0100098-0.1099854,0.0100098-0.1699829 C23.75,19.9099731,23.75,19.7700195,23.75,19.6500244V12H22.1900024z"}),r.default.createElement("path",{fill:a.Colors.Blue[500],d:"M20.9393997,12v10.6047001c0,0.2551994-0.0144997,0.4951-0.0289993,0.7350006 c-0.014101,0.2068996-0.0424995,0.4124985-0.085001,0.615099c-0.0854988,0.4803009-0.2139988,0.9454002-0.3850002,1.3800011 c-0.1042995,0.2719002-0.223299,0.5373993-0.3563995,0.7950001c-0.3976002,0.7467995-0.9078999,1.420599-1.5109005,1.9951 C17.2926998,29.3341007,15.6323996,30.0021,13.9118996,30H13l0.4705-1.6352005h0.4559002 c1.2841997,0.0027008,2.5274-0.4758987,3.5068007-1.3500996c0.5119991-0.4451008,0.9376984-0.9899998,1.2538986-1.6047001 c0.0855007-0.1499004,0.1570015-0.3150997,0.2280006-0.480299c0.114399-0.2694016,0.1998997-0.5398006,0.2709007-0.8250008 c0.0879993-0.3174992,0.1406994-0.6445999,0.1569996-0.9748993c0.0144997-0.1647015,0.0144997-0.3299007,0.0144997-0.4951V12 H20.9393997z"}),r.default.createElement("path",{fill:a.Colors.Blue[500],d:"M18.1315994,22.4400005v0.1646996c0,0.1352005,0,0.2703991-0.0144997,0.3903008 c-0.0284996,0.2546997-0.0569992,0.5098991-0.1280003,0.7497997c-0.0289993,0.1198997-0.0574989,0.2398987-0.1000004,0.3450985 H14.6819l0.4703999-1.6351986h2.9792995v-0.0151997V22.4400005z"}));const o=i.default.svg`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: contain;
`},17129:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AddMembershipButton=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(86096),o=A(19221);t.AddMembershipButton=({className:e,children:t,size:A})=>{const{showModal:n}=o.useModal();return r.default.createElement(s,{size:A,onClick:()=>n({modal:"BuyMembership"}),className:e},t)};const s=i.default(a.ButtonPrimary)`
  justify-self: center;
  align-self: center;
`},53842:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AddMembershipButtonSwitch=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(35442),o=A(31604),s=A(12101);t.AddMembershipButtonSwitch=({onClick:e})=>r.default.createElement(r.default.Fragment,null,r.default.createElement(d,{onClick:e},r.default.createElement(u,null,r.default.createElement(a.MyProfileIcon,null)),r.default.createElement(c,null,"New Member"),r.default.createElement(l,null,"Create a New Membership")));const u=i.default.span`
  display: flex;
  grid-area: createicon;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: ${s.BorderRad.round};
  background-color: ${s.Colors.Black[700]};
  color: ${s.Colors.Black[75]};
  transition: ${s.Transitions.all};

  .nav-icon {
    .whitePart {
      transition: ${s.Transitions.all};
    }
    .primaryPart {
      fill: ${s.Colors.Blue[500]};
      transition: ${s.Transitions.all};
    }
  }
`,c=i.default.h6`
  grid-area: createtitle;
  color: ${s.Colors.Black[75]};
  transition: ${s.Transitions.all};
`,l=i.default(o.TextSmall)`
  grid-area: createtext;
  color: ${s.Colors.Black[400]};
  transition: ${s.Transitions.all};
`,d=i.default.button`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: 20px 18px;
  grid-template-areas:
    'createicon createtitle'
    'createicon createtext';
  grid-column-gap: 8px;
  grid-row-gap: 4px;
  justify-content: start;
  justify-items: start;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  border-radius: ${s.BorderRad.s};
  transition: ${s.Transitions.all};
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${s.Colors.Black[600]};

    ${u} {
      background-color: ${s.Colors.Black[500]};
      color: ${s.Colors.Black[50]};
    }
    ${c} {
      color: ${s.Colors.Black[50]};
    }
    ${l} {
      color: ${s.Colors.Black[300]};
    }
  }
`},32964:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AvatarPlaceholderImage=t.AvatarImg=t.Avatar=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(12101),o=A(20680);t.Avatar=r.default.memo((({avatarUri:e,className:A})=>e?r.default.createElement(t.AvatarImg,{src:e,className:A}):r.default.createElement(t.AvatarPlaceholderImage,null))),t.AvatarImg=i.default.img`
  border-radius: ${a.BorderRad.round};
  overflow: hidden;
`,t.AvatarPlaceholderImage=i.default(o.AvatarPlaceholder)`
  width: 100%;
  height: 100%;
`},3546:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CurrentMember=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(60956),o=A(24895),s=A(12101),u=A(19221),c=A(53050),l=A(54065),d=A(17129),f=A(18481);t.CurrentMember=()=>{const{count:e,active:t}=l.useMyMemberships(),[A,n]=c.useToggle(),{showModal:i}=u.useModal();return e<1?r.default.createElement(d.AddMembershipButton,null,"Create membership"):r.default.createElement(r.default.Fragment,null,r.default.createElement(a.MembershipsCount,{count:e}),r.default.createElement(p,{onClick:n},t&&r.default.createElement(a.MemberInfo,{member:t,isOnDark:!0,maxRoles:4}),!t&&r.default.createElement(r.default.Fragment,null,"Select membership"),r.default.createElement(g,null,r.default.createElement(o.ArrowDownExpandedIcon,null))),A&&r.default.createElement(f.SwitchMemberModal,{onClose:n,onCreateMember:()=>i({modal:"BuyMembership"})}))};const g=i.default.span`
  width: 16px;
  height: 16px;

  ${o.Icon.type} {
    width: 100%;
    height: 100%;
    color: ${s.Colors.Black[400]};
    transform: rotate(-90deg);
    transition: ${s.Transitions.all};
  }
`,p=i.default.div`
  display: grid;
  grid-template-columns: 1fr 16px;
  grid-column-gap: 8px;
  align-items: center;
  grid-area: memberaccount;
  padding: 12px 8px;
  background-color: ${s.Colors.Black[700]};
  border-radius: ${s.BorderRad.s};
  transition: ${s.Transitions.all};
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    background: ${s.Colors.Black[600]};

    ${a.MemberDarkHover}
  }
`},18481:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SwitchMemberModal=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(60956),o=A(85577),s=A(69231),u=A(12101),c=A(54065),l=A(53842);t.SwitchMemberModal=({onClose:e,onCreateMember:t})=>{const{count:A,members:n,setActive:i,active:u}=c.useMyMemberships();return r.default.createElement(o.Modal,{modalSize:"xs",modalHeight:"s",isDark:!0,onClose:e},r.default.createElement(d,{title:"Select Membership",onClick:e,modalHeaderSize:"s"}),r.default.createElement(f,null,r.default.createElement(a.MembershipsCount,{count:A}),r.default.createElement(p,null,n.map((t=>r.default.createElement(h,{key:t.handle,onClick:()=>(t=>{i(t),e()})(t),isMemberActive:u?.handle===t.handle},r.default.createElement(a.MemberInfo,{member:t,isOnDark:!0}),r.default.createElement(s.Notification,null)))))),r.default.createElement(g,null,r.default.createElement(l.AddMembershipButtonSwitch,{onClick:()=>{e(),t()}})))};const d=i.default(o.ModalHeader)`
  padding: 16px 16px 0;
`,f=i.default(o.ModalBody)`
  position: relative;
  padding: 16px;
  grid-row-gap: 16px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: calc(100% - 32px);
    height: 1px;
    background-color: ${u.Colors.Black[700]};
    transform: translateX(-50%);
  }
`,g=i.default(o.ModalFooter)`
  width: 100%;
  height: auto;
  padding: 16px;
`,p=i.default.ul`
  display: flex;
  flex-direction: column;
  width: calc(100% + 16px);
  height: 100%;
  max-height: 192px;
  margin-left: -16px;
  padding-left: 16px;
  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,h=i.default.li`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 16px;
  grid-column-gap: 8px;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 64px;
  padding: 12px 16px;
  border-radius: ${u.BorderRad.s};
  transition: ${u.Transitions.all};
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${u.Colors.Black[600]};

    ${s.NotificationComponent} {
      color: ${u.Colors.White};
    }
    ${a.MemberDarkHover}
  }

  &:before {
    content: '';
    display: ${({isMemberActive:e})=>e?"block":"none"};
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: ${u.Colors.Blue[500]};
    transform: translateX(-16px);
  }
`},14325:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(3546),t)},20843:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.EditMembershipButton=void 0;const r=n(A(2784)),i=A(86096),a=A(53050),o=A(34657);t.EditMembershipButton=({className:e,children:t,member:A})=>{const[n,s]=a.useToggle();return r.default.createElement(r.default.Fragment,null,r.default.createElement(i.ButtonGhost,{size:"small",onClick:s,className:e,square:!0},t),n&&r.default.createElement(o.UpdateMembershipModal,{onClose:s,member:A}))}},3363:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.InviteMemberButton=void 0;const r=n(A(2784)),i=A(86096),a=A(53050),o=A(37773);t.InviteMemberButton=({className:e,children:t,size:A})=>{const[n,s]=a.useToggle();return r.default.createElement(r.default.Fragment,null,r.default.createElement(i.ButtonGhost,{size:A,onClick:s,className:e},t),n&&r.default.createElement(o.InviteMemberModal,{onClose:s}))}},43900:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MemberInfo=void 0;const r=n(A(2784)),i=A(19464),a=A(66667),o=A(32964),s=A(2738),u=A(1054);t.MemberInfo=r.default.memo((({member:e,onClick:t,isOnDark:A,showId:n,memberSize:c,size:l,className:d,maxRoles:f})=>r.default.createElement(s.MemberInfoWrap,{isOnDark:A,memberSize:c,className:d},r.default.createElement(s.MemberPhoto,null,r.default.createElement(o.Avatar,{avatarUri:e.avatar})),r.default.createElement(s.MemberHead,null,r.default.createElement(s.MemberHandle,{onClick:t},e.handle),r.default.createElement(s.MemberIcons,null,e.isVerified&&r.default.createElement(s.MemberStatusHelp,{icon:r.default.createElement(a.VerifiedMemberIcon,null),helperText:"Lorem fishy"}),e?.isFounder&&r.default.createElement(s.MemberStatusHelp,{icon:r.default.createElement(i.FounderMemberIcon,null),helperText:"Lorem fishy"}))),!n&&r.default.createElement(u.MemberRoles,{member:e,size:l,max:f}),n&&r.default.createElement(s.MemberId,null,"Worker ID: ",e.id))))},23620:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MemberListItem=void 0;const o=i(A(2784)),s=a(A(82740)),u=A(60956),c=A(27070),l=A(12101),d=A(19221),f=A(20843),g=A(1054),p=A(31968);t.MemberListItem=({member:e})=>{const{showModal:t}=d.useModal(),A=o.useCallback((()=>{t({modal:"Member",data:{id:e.id}})}),[e.id]);return o.default.createElement(m,null,o.default.createElement(y,null,o.default.createElement(u.MemberInfo,{member:e,onClick:A,showId:!0})),o.default.createElement(I,null,o.default.createElement(g.MemberRoles,{wrapable:!0,member:e,size:"l"})),o.default.createElement(y,null,o.default.createElement(h,null,"0 times")),o.default.createElement(y,null,o.default.createElement(h,null,"0 times")),o.default.createElement(y,null,o.default.createElement(h,null,e.inviteCount),o.default.createElement(p.TransferInviteButton,{member:e})),o.default.createElement(y,null,o.default.createElement(h,null,"0")),o.default.createElement(E,null,o.default.createElement(f.EditMembershipButton,{member:e,size:"small"},o.default.createElement(c.EditSymbol,null))))};const h=s.default.span`
  font-family: ${l.Fonts.Grotesk};
  font-weight: 700;
`,m=s.default.li`
  display: grid;
  grid-template-columns: 194px 200px 76px 76px 96px 76px 54px;
  grid-template-rows: 1fr;
  justify-content: space-between;
  justify-items: start;
  align-items: center;
  width: 100%;
  height: ${l.Sizes.accountHeight};
  padding: 16px 0 16px 14px;
  border: 1px solid ${l.Colors.Black[100]};
  border-radius: ${l.BorderRad.s};

  & + & {
    margin-top: -1px;
  }
`,y=s.default.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 12px;
  align-items: center;
  width: fit-content;
  max-width: 100%;
`,I=s.default(y)`
  width: 100%;
  max-width: 164px;
  max-height: 52px;
`,E=s.default.div``},52263:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MemberAccounts=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(41469),o=A(42482),s=A(3307),u=A(85577),c=A(73105);t.MemberAccounts=({member:e})=>{const{allAccounts:t}=o.useAccounts(),A=s.accountOrNamed(t,e.rootAccount,"Root Account"),n=s.accountOrNamed(t,e.controllerAccount,"Controller Account");return r.default.createElement(l,null,r.default.createElement(c.MembershipLabel,{text:"Root account"}),!!A&&r.default.createElement(u.AccountRow,null,r.default.createElement(a.AccountInfo,{account:A})),r.default.createElement(c.MembershipLabel,{text:"Controller account"}),!!n&&r.default.createElement(u.AccountRow,null,r.default.createElement(a.AccountInfo,{account:n})))};const l=i.default.div`
  display: grid;
  grid-row-gap: 16px;
  padding: 24px;
`},13201:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MemberDetails=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(85534),o=A(72618),s=A(27070),u=A(65944),c=A(31604),l=A(73105),d=A(12101),f=A(69051),g=A(60536),p=A(43900),h=A(31968),m=A(49894);t.MemberDetails=r.default.memo((({member:e})=>{const{member:t,isLoading:A}=g.useMember(e.id);if(A||!t)return r.default.createElement(m.EmptyBody,null,r.default.createElement(u.Loading,null));const n=t.registeredAtBlock;return r.default.createElement(I,null,r.default.createElement(E,null,r.default.createElement(l.MembershipLabel,{text:"About"}),r.default.createElement(C,null,t?.about||"")),r.default.createElement(B,null,r.default.createElement(l.MembershipLabel,{text:"Registered on"}),r.default.createElement(v,null,r.default.createElement(C,null,f.formatDateString(t.registeredAtTime)),r.default.createElement(y,{height:n.block,network:n.network}))),r.default.createElement(B,null,r.default.createElement(l.MembershipLabel,{text:"Member ID"}),r.default.createElement(C,null,e?.id)),r.default.createElement(B,null,r.default.createElement(l.MembershipLabel,{text:"Member Name"}),r.default.createElement(C,null,e?.name)),r.default.createElement(B,null,r.default.createElement(l.MembershipLabel,{text:"Invitations Left"}),r.default.createElement(k,null,r.default.createElement(C,null,e?.inviteCount),r.default.createElement(h.TransferInviteButton,{member:e,square:!1},r.default.createElement(s.TransferSymbol,null),"Transfer Invites"))),r.default.createElement(B,null,r.default.createElement(l.MembershipLabel,{text:"Invited"}),r.default.createElement(v,null,(t.invitees||[]).map((e=>r.default.createElement(p.MemberInfo,{member:e,key:e.handle}))))),r.default.createElement(B,null,r.default.createElement(l.MembershipLabel,{text:"Hired"}),r.default.createElement(C,null,"-"," times")),r.default.createElement(B,null,r.default.createElement(l.MembershipLabel,{text:"Applied"}),r.default.createElement(C,null,"-"," times")),r.default.createElement(B,null,r.default.createElement(l.MembershipLabel,{text:"Being A leader"}),r.default.createElement(C,null,"-"," times")),r.default.createElement(B,null,r.default.createElement(l.MembershipLabel,{text:"Being Council Member"}),r.default.createElement(C,null,"-"," times")),r.default.createElement(B,null,r.default.createElement(l.MembershipLabel,{text:"Slashed"}),r.default.createElement(C,null,"-"," times")),r.default.createElement(B,null,r.default.createElement(l.MembershipLabel,{text:"Terminated"}),r.default.createElement(C,null,"-"," times")),r.default.createElement(B,null,r.default.createElement(l.MembershipLabel,{text:"Initiating leaving"}),r.default.createElement(C,null,"-")),r.default.createElement(B,null,r.default.createElement(l.MembershipLabel,{text:"Blog posts"}),r.default.createElement(C,null,"-")))}));const y=r.default.memo((({height:e,network:t})=>r.default.createElement(b,null,r.default.createElement(o.BlockIcon,null),r.default.createElement(Q,null,f.formatTokenValue(e)),r.default.createElement(w,null,"on ",t," network")))),I=i.default.ul`
  display: grid;
  grid-row-gap: 24px;
  width: 100%;
  height: 100%;
  padding: 24px;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    visibility: hidden;
  }
`,E=i.default.li`
  display: grid;
  grid-row-gap: 8px;
  width: 100%;
  height: fit-content;
`,B=i.default.li`
  display: grid;
  grid-template-columns: 168px 1fr;
  grid-column-gap: 24px;
`,C=i.default(c.TextMedium)`
  color: ${d.Colors.Black[600]};
`,v=i.default.div`
  display: grid;
  grid-row-gap: 4px;
  width: 100%;
  height: fit-content;
`,b=i.default.span`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
  width: fit-content;
  height: fit-content;
  color: ${d.Colors.Black[400]};
`,w=i.default(c.TextSmall)`
  color: ${d.Colors.Black[400]};
`,Q=i.default(a.LabelLink)`
  font-size: inherit;
  line-height: inherit;
  transition: ${d.Transitions.all};
`,k=i.default.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`},49894:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyBody=t.SidePaneGlass=t.MemberProfile=void 0;const o=i(A(2784)),s=a(A(82740)),u=A(86096),c=A(27070),l=A(69490),d=A(12101),f=A(19221),g=A(60536),p=A(54065),h=A(2738),m=A(20843),y=A(43900),I=A(52263),E=A(13201);t.MemberProfile=o.default.memo((()=>{const[e,A]=o.useState("DETAILS"),{members:n,isLoading:r}=p.useMyMemberships(),{modalData:i,hideModal:a}=f.useModal(),{isLoading:s,member:d}=g.useMember(i.id),h=!r&&!!n.find((e=>e.id==d?.id)),Q=e=>{e.target===e.currentTarget&&a()};return s||!d?o.default.createElement(t.SidePaneGlass,{onClick:Q},o.default.createElement(B,null,o.default.createElement(w,null,o.default.createElement(t.EmptyBody,null,"Loading...")))):o.default.createElement(t.SidePaneGlass,{onClick:Q},o.default.createElement(B,null,o.default.createElement(C,null,o.default.createElement(v,null,o.default.createElement(b,null,"My Profile"),h&&"DETAILS"===e&&o.default.createElement(m.EditMembershipButton,{member:d},o.default.createElement(c.EditSymbol,null)),o.default.createElement(u.CloseButton,{onClick:a})),o.default.createElement(y.MemberInfo,{member:d,memberSize:"l",size:"l"}),o.default.createElement(l.Tabs,{tabs:[{title:"Member details",active:"DETAILS"===e,onClick:()=>A("DETAILS")},{title:"Accounts",active:"ACCOUNTS"===e,onClick:()=>A("ACCOUNTS")},{title:"Roles",active:"ROLES"===e,onClick:()=>A("ROLES")}],tabsSize:"xs"})),o.default.createElement(w,null,"DETAILS"===e&&o.default.createElement(E.MemberDetails,{member:d}),"ACCOUNTS"===e&&o.default.createElement(I.MemberAccounts,{member:d}),"ROLES"===e&&o.default.createElement(t.EmptyBody,null,"Roles"))))})),t.SidePaneGlass=s.default.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${d.Colors.Black[700.85]};
  color: ${d.Colors.Black[900]};
  z-index: 100000;
  ${d.Animations.showModalBackground};
`;const B=s.default.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(auto, 192px) 1fr;
  grid-template-areas:
    'sidepaneheader'
    'sidepanebody';
  grid-area: modal;
  position: relative;
  background-color: ${d.Colors.White};
  width: 100%;
  max-width: 552px;
  height: 100vh;
  overflow: hidden;
  ${d.Animations.showSidePane};
`,C=s.default.div`
  display: grid;
  grid-area: sidepaneheader;
  grid-row-gap: 20px;
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 200px;
  padding: 12px 24px 0;
  background-color: ${d.Colors.White};

  ${h.MemberInfoWrap} {
    padding-bottom: 4px;
  }
`,v=s.default.div`
  display: grid;
  grid-template-columns: 1fr 32px 20px;
  grid-column-gap: 14px;
  align-items: center;
  width: 100%;
`,b=s.default.h5``,w=s.default.div`
  display: flex;
  grid-area: sidepanebody;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: ${d.Colors.Black[50]};
  border-top: 1px solid ${d.Colors.Black[200]};
  border-bottom: 1px solid ${d.Colors.Black[200]};
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;t.EmptyBody=s.default.div`
  padding: 24px;
`},8182:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(49894),t),r(A(13201),t),r(A(81281),t)},81281:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},1054:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MemberRolesWrapper=t.MemberRolesWrapperWrapable=t.MemberRoleHelp=t.MemberRoles=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(76746),o=A(12101);t.MemberRoles=({size:e,max:A,wrapable:n})=>{const i=[{abbreviation:"SP",help:"Lorem ipsum..."},{abbreviation:"FM",help:"Lorem ipsum..."},{abbreviation:"FL",help:"Lorem ipsum..."},{abbreviation:"CC",help:"Lorem ipsum..."},{abbreviation:"SL",help:"Lorem ipsum..."},{abbreviation:"AA",help:"Lorem ipsum..."},{abbreviation:"BB",help:"Lorem ipsum..."}],a=A?i.slice(0,A):i,o=i.length-a.length;return r.default.createElement(r.default.Fragment,null,n?r.default.createElement(t.MemberRolesWrapperWrapable,null,a.map((({abbreviation:A,help:n})=>r.default.createElement(t.MemberRoleHelp,{key:A,memberRole:A,helperText:n,size:e}))),o>0&&r.default.createElement(s,{memberRole:`+${o}`,helperText:"",size:e})):r.default.createElement(t.MemberRolesWrapper,null,a.map((({abbreviation:A,help:n})=>r.default.createElement(t.MemberRoleHelp,{key:A,memberRole:A,helperText:n,size:e}))),o>0&&r.default.createElement(s,{memberRole:`+${o}`,helperText:"",size:e})))},t.MemberRoleHelp=i.default(a.Help)`
  background-color: ${o.Colors.Black[100]};
  color: ${o.Colors.Black[600]};
  border-color: ${o.Colors.Black[100]};

  &:hover,
  &:focus {
    background-color: ${o.Colors.Blue[500]};
    border-color: ${o.Colors.Blue[500]};
    color: ${o.Colors.Black[25]};
  }
`,t.MemberRolesWrapperWrapable=i.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16px, 24px));
  grid-row-gap: 4px;
  grid-column-gap: 4px;
`;const s=i.default(t.MemberRoleHelp)`
  background-color: ${o.Colors.White};
  color: ${o.Colors.Blue[500]};
  border-color: ${o.Colors.Blue[50]};
`;t.MemberRolesWrapper=i.default.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  width: fit-content;
  grid-column-gap: 4px;
`},26359:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MembersSection=void 0;const o=i(A(2784)),s=a(A(82740)),u=A(89451),c=A(12101),l=A(6395),d=A(23620);t.MembersSection=({title:e,members:t})=>{const[A,n]=o.useState("handle"),[r,i]=o.useState(!1),a=o.useMemo((()=>l.sortMemberships(t,A,r)),[t,A,r]),s=({children:e,sortKey:t})=>{return o.default.createElement(h,{onClick:t&&(a=t,()=>l.setOrder(a,A,n,r,i))},o.default.createElement(u.HeaderText,null,e,A===t&&(r?o.default.createElement(u.SortIconDown,null):o.default.createElement(u.SortIconUp,null))));var a},c=a.length>1;return o.default.createElement(o.default.Fragment,null,o.default.createElement(f,null,e),o.default.createElement(g,null,o.default.createElement(p,null,o.default.createElement(s,{sortKey:c?"handle":void 0},"Memeberships"),o.default.createElement(h,null,"Roles"),o.default.createElement(h,null,"Slashed"),o.default.createElement(h,null,"Terminated"),o.default.createElement(s,{sortKey:c?"inviteCount":void 0},"Invitations"),o.default.createElement(h,null,"Invited")),o.default.createElement(m,null,a.map((e=>o.default.createElement(d.MemberListItem,{member:e,key:e.handle}))))))};const f=s.default.h6`
  margin-top: 4px;
`,g=s.default.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 16px auto;
  grid-template-areas:
    'accountstablenav'
    'accountslist';
  grid-row-gap: 5px;
  width: 100%;
`,p=s.default.div`
  display: grid;
  grid-area: accountstablenav;
  grid-template-rows: 1fr;
  grid-template-columns: 194px 200px 76px 76px 96px 76px 54px;
  justify-content: space-between;
  width: 100%;
  padding-left: 16px;
`,h=s.default.span`
  display: flex;
  align-items: center;
  align-content: center;
  width: fit-content;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  color: ${c.Colors.Black[400]};
  text-transform: uppercase;
  text-align: left;
  user-select: none;
  cursor: pointer;

  &:first-child {
    justify-content: flex-start;
    text-align: left;
  }
  &:nth-child(2) {
    justify-content: flex-start;
    text-align: left;
  }
  &:last-child {
    position: relative;
  }
`,m=s.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`},61724:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Memberships=t.MembershipsCount=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(31604),o=A(12101);t.MembershipsCount=r.default.memo((({count:e})=>r.default.createElement(t.Memberships,null,"Memberships ",r.default.createElement(s,null,e)))),t.Memberships=i.default.span`
  display: inline-flex;
  position: relative;
  align-items: center;
  width: fit-content;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${o.Colors.Black[400]};
`;const s=i.default(a.Badge)`
  position: absolute;
  right: -24px;
`},55805:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileComponent=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(89300),o=A(40531),s=A(31604),u=A(12101),c=A(60956),l=A(14325);t.ProfileComponent=function(){const{total:e}=o.useTotalBalances();return r.default.createElement(d,null,r.default.createElement(l.CurrentMember,null),r.default.createElement(f,null,r.default.createElement(g,null,"Total Balance"),r.default.createElement(p,null,r.default.createElement(h,{value:e})),r.default.createElement(a.TransferButtonStyled,null)))};const d=i.default.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 16px 64px 56px;
  grid-template-areas:
    'memberships'
    'memberaccount'
    'memberbalance';
  grid-row-gap: 16px;
  grid-area: barmember;
  width: 100%;
  padding: 0 8px;

  ${c.Memberships} {
    margin-left: 8px;
  }
`,f=i.default.div`
  display: grid;
  grid-area: memberbalance;
  grid-template-columns: 1fr 32px;
  grid-template-rows: 16px 24px;
  grid-template-areas:
    'balancetitle balancetransfer'
    'balancevalue balancetransfer';
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  align-items: center;
  width: 100%;
  margin-top: 8px;
  padding-left: 8px;
`,g=i.default.span`
  grid-area: balancetitle;
  font-size: 10px;
  line-height: 16px;
  color: ${u.Colors.Black[400]};
  text-transform: uppercase;
  font-weight: 700;
`,p=i.default.span`
  display: inline-flex;
  align-items: baseline;
  position: relative;
  grid-area: balancevalue;
  width: fit-content;
  font-size: 16px;
  line-height: 24px;
  color: ${u.Colors.White};
  font-weight: 700;
`,h=i.default(s.TokenValue)`
  color: ${u.Colors.White};
`},56952:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.OptionMember=void 0;const r=n(A(2784)),i=A(43900);t.OptionMember=({member:e})=>r.default.createElement(i.MemberInfo,{member:e})},75567:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.OptionsListMember=void 0;const r=n(A(2784)),i=A(52019),a=A(56952);t.OptionsListMember=r.default.memo((({allMembers:e,onChange:t})=>r.default.createElement(i.OptionsListComponent,null,e.map((e=>r.default.createElement(i.Option,{key:e.handle,onClick:()=>t(e)},r.default.createElement(a.OptionMember,{member:e})))))))},67733:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.SelectMember=t.filterMember=void 0;const a=i(A(2784)),o=A(52019),s=A(42814),u=A(45470),c=A(84484),l=A(43900),d=A(75567);t.filterMember=e=>e?t=>t.handle!==e.handle:()=>!0,t.SelectMember=({onChange:e,filter:t,selected:A,disabled:n})=>{const r=t||(()=>!0),[i,f]=a.useState(""),g=s.useDebounce(i,400),{data:p}=u.useSearchMembersQuery({variables:{text:g,limit:10}}),h=(p?.memberships||[]).map(c.asMember),m=a.useMemo((()=>((e,t)=>{if(!t.length)return e;const A=t.toLocaleLowerCase();return e.filter((({handle:e,id:t,name:n})=>n?.toLocaleLowerCase().includes(A)||e?.toLocaleLowerCase().includes(A)||t.includes(A)))})(h.filter(r),g)),[g,h]);return a.default.createElement(o.Select,{selected:A,onChange:e,disabled:n,renderSelected:e=>a.default.createElement(l.MemberInfo,{member:e}),placeholder:"Select Member or type a member",renderList:e=>a.default.createElement(d.OptionsListMember,{allMembers:m,onChange:e}),onSearch:e=>f(e)})}},16260:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(67733),t)},31968:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TransferInviteButton=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(86096),o=A(24895),s=A(12101),u=A(19221);t.TransferInviteButton=function({member:e,square:t,children:A}){const n=e.inviteCount<=0,{showModal:i}=u.useModal();return r.default.createElement(a.ButtonGhost,{size:"small",square:t??!0,disabled:n,onClick:()=>i({modal:"TransferInvites",data:{memberId:e.id}})},A||r.default.createElement(c,null))};const c=i.default(o.TransferIcon)`
  & > .blackPart {
    fill: ${s.Colors.Black[900]};
  }
  & > .primaryPart {
    fill: ${s.Colors.Blue[500]};
  }
`},2738:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.MemberDarkHover=t.MemberInfoWrap=t.MemberStatusHelp=t.MemberPhoto=t.MemberId=t.MemberIcons=t.MemberHandle=t.MemberHead=void 0;const a=i(A(82740)),o=A(76746),s=A(31604),u=A(12101),c=A(32964),l=A(1054);t.MemberHead=a.default.div`
  display: grid;
  grid-area: memberhead;
  grid-auto-flow: column;
  align-items: center;
  grid-column-gap: 4px;
  width: fit-content;
`,t.MemberHandle=a.default.span`
  max-width: 100%;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  font-family: ${u.Fonts.Grotesk};
  color: ${u.Colors.Black[900]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: ${u.Transitions.all};

  &:hover {
    color: ${u.Colors.Black[700]};
  }
`,t.MemberIcons=a.default.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
  width: fit-content;
  height: fit-content;
`,t.MemberId=a.default(s.TextSmall)`
  grid-area: memberroles;
  color: ${u.Colors.Black[400]};
`,t.MemberPhoto=a.default.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  grid-area: memberphoto;
  border-radius: ${u.BorderRad.round};
  overflow: hidden;
  border: 1px solid ${u.Colors.Black[200]};

  ${c.AvatarImg} {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,t.MemberStatusHelp=a.default(o.Help)`
  background-color: transparent;
  color: ${u.Colors.Blue[500]};

  &:hover,
  &:focus {
    background-color: ${u.Colors.Blue[500]};
    border-color: ${u.Colors.Blue[500]};
    color: ${u.Colors.Black[25]};
  }
`,t.MemberInfoWrap=a.default.div`
  display: grid;
  grid-template-areas:
    'memberphoto memberhead memberhead'
    'memberphoto memberroles memberroles';
  align-items: center;
  width: 100%;
  justify-self: start;
  border-radius: ${u.BorderRad.s};
  transition: ${u.Transitions.all};

  ${t.MemberPhoto} {
    width: ${({memberSize:e})=>{switch(e){case"l":return"80px";case"m":default:return"40px"}}};
    height: ${({memberSize:e})=>{switch(e){case"l":return"80px";case"m":default:return"40px"}}};
  }

  ${l.MemberRolesWrapper} {
    align-self: ${({memberSize:e})=>{switch(e){case"l":return"start";case"m":default:return"center"}}};
  }

  ${t.MemberHandle} {
    font-size: ${({memberSize:e})=>{switch(e){case"l":return"20px";case"m":default:return"14px"}}};
    align-self: ${({memberSize:e})=>{switch(e){case"l":return"end";case"m":default:return"center"}}};
  }

  ${t.MemberIcons} {
    align-self: ${({memberSize:e})=>{switch(e){case"l":return"end";case"m":default:return"center"}}};
    padding: ${({memberSize:e})=>{switch(e){case"l":return"4px 0";case"m":default:return"0"}}};
  }

  ${({isOnDark:e})=>!0===e&&d}

  ${({memberSize:e})=>{switch(e){case"l":return f;case"m":default:return g}}}
`,t.MemberDarkHover=a.css`
  ${t.MemberInfoWrap} {
    ${t.MemberHandle} {
      color: ${u.Colors.Black[50]};
    }
    ${t.MemberStatusHelp} {
      border-color: ${u.Colors.Blue[400]};
      color: ${u.Colors.Blue[400]};
      background-color: transparent;

      &:hover,
      &:focus {
        background-color: ${u.Colors.Blue[500]};
        border-color: ${u.Colors.Blue[500]};
        color: ${u.Colors.Black[300]};
      }
    }
    ${l.MemberRoleHelp} {
      color: ${u.Colors.Black[200]};
      background-color: ${u.Colors.Black[500]};
      border-color: ${u.Colors.Black[500]};

      &:hover,
      &:focus {
        background-color: ${u.Colors.Blue[500]};
        border-color: ${u.Colors.Blue[500]};
        color: ${u.Colors.Black[300]};
      }
    }
  }
`;const d=a.css`
  ${t.MemberHandle} {
    color: ${u.Colors.Black[75]};
  }
  ${t.MemberStatusHelp} {
    color: ${u.Colors.Blue[500]};
    background-color: transparent;
    border-color: ${u.Colors.Blue[500]};

    &:hover {
      color: ${u.Colors.Black[300]};
      background-color: ${u.Colors.Blue[500]};
      border-color: ${u.Colors.Blue[500]};
    }
  }
  ${l.MemberRoleHelp} {
    color: ${u.Colors.Black[300]};
    background-color: ${u.Colors.Black[600]};
    border-color: ${u.Colors.Black[600]};

    &:hover {
      color: ${u.Colors.Black[300]};
      background-color: ${u.Colors.Blue[500]};
      border-color: ${u.Colors.Blue[500]};
    }
  }
`,f=a.css`
  grid-template-columns: 80px auto 1fr;
  grid-template-rows: 36px 38px;
  grid-column-gap: 12px;
  grid-row-gap: 6px;
`,g=a.css`
  grid-template-columns: 40px auto 1fr;
  grid-template-rows: 20px 16px;
  grid-column-gap: 8px;
  grid-row-gap: 4px;
`},60956:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),t.MemberRoleHelp=t.MemberRolesWrapper=void 0,r(A(2738),t),r(A(38460),t),r(A(43900),t),r(A(61724),t);var i=A(1054);Object.defineProperty(t,"MemberRolesWrapper",{enumerable:!0,get:function(){return i.MemberRolesWrapper}});var a=A(1054);Object.defineProperty(t,"MemberRoleHelp",{enumerable:!0,get:function(){return a.MemberRoleHelp}})},38460:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},60536:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMember=t.asMemberWithDetails=void 0;const n=A(45470),r=A(84484);t.asMemberWithDetails=e=>({...r.asMember(e),about:"",invitedBy:"",registeredAtBlock:r.asBlock(e.registeredAtBlock),registeredAtTime:e.registeredAtTime,invitees:[]}),t.useMember=function(e){const A={variables:{id:e??""}},{data:r,loading:i,error:a}=n.useGetMemberQuery(A);return a&&console.error(a),{member:r?.membership?t.asMemberWithDetails(r.membership):void 0,isLoading:i}}},54065:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMyMemberships=void 0;const n=A(2784),r=A(42482),i=A(74107),a=A(45470),o=A(84484);t.useMyMemberships=function(){const{allAccounts:e}=r.useAccounts(),t=e.map((e=>e.address)),A={variables:{rootAccount_in:t,controllerAccount_in:t},pollInterval:5e3},{data:s,loading:u,error:c}=a.useGetMembersQuery(A),{active:l,setActive:d}=n.useContext(i.MembershipContext);return c&&console.error(c),{count:s?.memberships.length??0,members:(s?.memberships??[]).map(o.asMember),isLoading:u,active:l,setActive:d}}},53526:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useTransferInviteFee=void 0;const n=A(2784),r=A(48592),i=A(1361);t.useTransferInviteFee=function(e){const{api:t}=i.useApi(),A=n.useMemo((()=>e?t?.tx?.members?.transferInvites(e.id,e.id,1):void 0),[e]);return r.useTransactionFee(e?.controllerAccount,A)}},55267:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.BuyMembershipFormModal=void 0;const a=A(52356),o=i(A(2784)),s=i(A(88253)),u=A(11679),c=A(86096),l=A(85534),d=A(20018),f=A(76746),g=A(85577),p=A(31604),h=A(1361),m=A(97120),y=A(28443),I=A(16260),E=A(67291),B=s.object().shape({rootAccount:E.AccountSchema.required(),controllerAccount:E.AccountSchema.required(),avatarUri:E.AvatarURISchema,name:s.string().required(),handle:E.HandleSchema.required(),hasTerms:s.boolean().required().oneOf([!0]),isReferred:s.boolean(),referrer:E.ReferrerSchema});t.BuyMembershipFormModal=({onClose:e,onSubmit:t,membershipPrice:A})=>{const{api:n}=h.useApi(),{state:r,dispatch:i,isValid:s,errors:E,validate:C}=m.useForm(B,{name:"",rootAccount:void 0,controllerAccount:void 0,handle:"",about:"",avatarUri:"",isReferred:!1,referrer:void 0,hasTerms:!1}),{rootAccount:v,controllerAccount:b,handle:w,name:Q,isReferred:k,avatarUri:M,about:S,referrer:D}=r,_=o.useCallback(u.filterAccount(b),[b]),N=o.useCallback(u.filterAccount(v),[v]),O=a.blake2AsHex(w),L=y.useObservable(n?.query.members.memberIdByHandleHash.size(O),[w]);o.useEffect((()=>{C(r,{size:L})}),[r,L]);const T=(e,t)=>{i({type:e,value:t})};return o.default.createElement(g.ScrolledModal,{modalSize:"m",modalHeight:"m",onClose:e},o.default.createElement(g.ModalHeader,{onClick:e,title:"Add membership"}),o.default.createElement(g.ScrolledModalBody,null,o.default.createElement(g.ScrolledModalContainer,null,o.default.createElement(g.Row,null,o.default.createElement(l.InlineToggleWrap,null,o.default.createElement(l.Label,null,"I was referred by a member: "),o.default.createElement(l.ToggleCheckbox,{trueLabel:"Yes",falseLabel:"No",onChange:e=>T("isReferred",e),checked:k??!1})),k&&o.default.createElement(l.InputComponent,{required:!0,inputSize:"l"},o.default.createElement(I.SelectMember,{onChange:e=>T("referrer",e),disabled:!k,selected:D}))),o.default.createElement(g.Row,null,o.default.createElement(p.TextMedium,{dark:!0},"Please fill in all the details below.")),o.default.createElement(g.Row,null,o.default.createElement(l.InputComponent,{label:"Root account",required:!0,inputSize:"l",helperText:"Something about root accounts"},o.default.createElement(u.SelectAccount,{filter:_,onChange:e=>T("rootAccount",e)}))),o.default.createElement(g.Row,null,o.default.createElement(l.InputComponent,{label:"Controller account",required:!0,inputSize:"l",helperText:"Something about controller account"},o.default.createElement(u.SelectAccount,{filter:N,onChange:e=>T("controllerAccount",e)}))),o.default.createElement(g.Row,null,o.default.createElement(l.InputComponent,{id:"member-name",label:"Member Name",required:!0},o.default.createElement(l.InputText,{id:"member-name",placeholder:"Type",value:Q,onChange:e=>T("name",e.target.value)}))),o.default.createElement(g.Row,null,o.default.createElement(l.InputComponent,{id:"membership-handle",label:"Membership handle",required:!0},o.default.createElement(l.InputText,{id:"membership-handle",placeholder:"Type",value:w,onChange:e=>T("handle",e.target.value)}))),o.default.createElement(g.Row,null,o.default.createElement(l.InputComponent,{id:"member-about",label:"About member",inputSize:"l"},o.default.createElement(l.InputTextarea,{id:"member-about",value:S,placeholder:"Type",onChange:e=>T("about",e.target.value)}))),o.default.createElement(g.Row,null,o.default.createElement(l.InputComponent,{id:"member-avatar",label:"Member Avatar",required:!0,value:M,validation:d.hasError("avatarUri",E)?"invalid":void 0,message:d.hasError("avatarUri",E)?d.getErrorMessage("avatarUri",E):"Paste an URL of your avatar image. Text lorem ipsum.",placeholder:"Image URL"},o.default.createElement(l.InputText,{id:"member-avatar",value:M,onChange:e=>T("avatarUri",e.target.value)}))))),o.default.createElement(g.ModalFooter,{twoColumns:!0},o.default.createElement(g.ModalFooterGroup,{left:!0},o.default.createElement(l.Checkbox,{id:"privacy-policy-agreement",onChange:e=>T("hasTerms",e)},o.default.createElement(p.TextMedium,{colorInherit:!0},"I agree to the"," ",o.default.createElement(l.LabelLink,{href:"http://example.com/",target:"_blank"},"Terms of Service")," ","and"," ",o.default.createElement(l.LabelLink,{href:"http://example.com/",target:"_blank"},"Privacy Policy"),"."))),o.default.createElement(g.ModalFooterGroup,null,o.default.createElement(g.BalanceInfoNarrow,null,o.default.createElement(g.InfoTitle,null,"Creation fee:"),o.default.createElement(g.InfoValue,null,o.default.createElement(p.TokenValue,{value:A?.toBn()})),o.default.createElement(f.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",absolute:!0})),o.default.createElement(c.ButtonPrimary,{size:"medium",onClick:()=>{b&&v&&t(r)},disabled:!s},"Create a Membership"))))}},85615:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.BuyMembershipModal=void 0;const a=i(A(2784)),o=A(15912),s=A(1361),u=A(19221),c=A(28443),l=A(87039),d=A(55267),f=A(47620),g=A(85348);t.BuyMembershipModal=()=>{const{hideModal:e}=u.useModal(),t=e,{api:A}=s.useApi(),n=c.useObservable(A?.query.members.membershipPrice(),[]),[r,i]=a.useState("PREPARE"),[p,h]=a.useState(),m=a.useContext(l.ServerContext),[y,I]=a.useState(),E=a.useMemo((()=>p?A?.tx?.members?.buyMembership({root_account:p.rootAccount?.address,controller_account:p.controllerAccount?.address,handle:p.handle,metadata:{name:p.name,avatar_uri:p.avatarUri,about:p.about},referrer_id:p.referrer?.id}):void 0),[JSON.stringify(p)]),B=a.useMemo((()=>p?(e,t)=>{const A=t.find((e=>"MemberRegistered"===e.event.method))?.event.data[0].toString();I(A),m&&A&&m.schema.create("Membership",{id:y,rootAccount:p.rootAccount?.address,controllerAccount:p.controllerAccount?.address,name:p.name,handle:p.handle,avatarUri:p.avatarUri,about:p.about,isVerified:!1,isFoundingMember:!1,inviteCount:"5",registeredAtBlockId:"block-3"}),i(e?"SUCCESS":"ERROR")}:()=>null),[p]);return"PREPARE"!==r&&p?"AUTHORIZE"===r?a.default.createElement(f.BuyMembershipSignModal,{onClose:t,membershipPrice:n,formData:p,onDone:B,transaction:E,initialSigner:p.controllerAccount}):"SUCCESS"===r?a.default.createElement(g.BuyMembershipSuccessModal,{onClose:t,member:p,memberId:y}):a.default.createElement(o.FailureModal,{onClose:t},"There was a problem with creating a membership for ",p.name,"."):a.default.createElement(d.BuyMembershipFormModal,{onClose:t,onSubmit:e=>{i("AUTHORIZE"),h(e)},membershipPrice:n})}},47620:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.BuyMembershipSignModal=void 0;const a=i(A(2784)),o=A(11679),s=A(42482),u=A(88345),c=A(3307),l=A(86096),d=A(85534),f=A(76746),g=A(85577),p=A(22807),h=A(31604),m=A(28711),y=A(66480);t.BuyMembershipSignModal=({onClose:e,membershipPrice:t,formData:A,onDone:n,transaction:r,initialSigner:i})=>{const{allAccounts:I}=s.useAccounts(),[E,B]=a.useState(i??c.accountOrNamed(I,A.invitor?.controllerAccount||"","Controller account")),C=E.address,{paymentInfo:v,send:b,status:w}=m.useSignAndSendTransaction({transaction:r,signer:C,onDone:n}),[Q,k]=a.useState(!1),M=u.useBalance(C);a.useEffect((()=>{if(M?.transferable&&v?.partialFee&&t){const e=v.partialFee.add(t),A=M.transferable.gte(e);k(A)}}),[C,M]);const S="READY"!==w||!Q;return a.default.createElement(p.TransactionModal,{status:w,onClose:e},a.default.createElement(g.ModalBody,null,a.default.createElement(h.TextMedium,null,"You intend to create a new membership."),a.default.createElement(h.TextMedium,null,"The creation of the new membership costs ",a.default.createElement(h.TokenValue,{value:t?.toBn()}),"."),a.default.createElement(h.TextMedium,null,"Fees of ",a.default.createElement(h.TokenValue,{value:v?.partialFee.toBn()})," will be applied to the transaction."),a.default.createElement(g.Row,null,a.default.createElement(d.InputComponent,{label:"Sending from account",inputSize:"l",validation:Q?void 0:"invalid",message:Q?void 0:y.getMessage(v?.partialFee)},i?a.default.createElement(o.SelectAccount,{selected:E,onChange:e=>B(e)}):a.default.createElement(o.SelectedAccount,{account:E})))),a.default.createElement(g.ModalFooter,null,a.default.createElement(g.BalanceInfoNarrow,null,a.default.createElement(g.InfoTitle,null,"Creation fee:"),a.default.createElement(g.InfoValue,null,a.default.createElement(h.TokenValue,{value:t?.toBn()})),a.default.createElement(f.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",absolute:!0}),a.default.createElement(g.InfoTitle,null,"Transaction fee:"),a.default.createElement(g.InfoValue,null,a.default.createElement(h.TokenValue,{value:v?.partialFee.toBn()})),a.default.createElement(f.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",absolute:!0})),a.default.createElement(l.ButtonPrimary,{size:"medium",onClick:b,disabled:S},"Sign and create a member")))}},85348:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BuyMembershipSuccessModal=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(86096),o=A(24895),s=A(85577),u=A(31604),c=A(12101),l=A(19221),d=A(60956);t.BuyMembershipSuccessModal=({onClose:e,member:t,memberId:A})=>{const{showModal:n}=l.useModal();return r.default.createElement(s.Modal,{modalSize:"m",modalHeight:"s",onClose:e},r.default.createElement(s.ModalHeader,{onClick:e,title:"Success",icon:r.default.createElement(o.SuccessIcon,null)}),r.default.createElement(s.ModalBody,null,r.default.createElement(u.TextMedium,null,"You have just successfully created a new membership"),r.default.createElement(f,null,r.default.createElement(d.MemberInfo,{member:t}))),r.default.createElement(s.ModalFooter,null,r.default.createElement(a.ButtonPrimary,{size:"medium",disabled:!A,onClick:()=>{e(),A&&n({modal:"Member",data:{id:A}})}},"View my profile")))};const f=i.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  min-height: ${c.Sizes.accountHeight};
  max-height: ${c.Sizes.accountHeight};
  padding: 8px 72px 8px 14px;
  border: 1px solid ${c.Colors.Black[300]};
  border-radius: ${c.BorderRad.s};
  background-color: ${c.Colors.White};
`},50291:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(85615),t),r(A(17025),t)},17025:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},8476:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.InviteMemberFormModal=void 0;const a=A(52356),o=i(A(2784)),s=i(A(88253)),u=A(86096),c=A(85534),l=A(20018),d=A(85577),f=A(31604),g=A(1361),p=A(97120),h=A(87795),m=A(28443),y=A(16260),I=A(67291),E=s.object().shape({invitor:I.MemberSchema.required(),rootAccount:I.NewAddressSchema("rootAccount"),controllerAccount:I.NewAddressSchema("controllerAccount"),avatarUri:I.AvatarURISchema,name:s.string().required(),handle:I.HandleSchema.required()});t.InviteMemberFormModal=({onClose:e,onSubmit:t})=>{const{api:A}=g.useApi(),n=h.useKeyring(),{state:r,dispatch:i,isValid:s,errors:I,validate:B}=p.useForm(E,{name:"",rootAccount:void 0,controllerAccount:void 0,handle:"",about:"",avatarUri:"",hasTerms:!1,invitor:void 0}),{rootAccount:C,controllerAccount:v,handle:b,name:w,avatarUri:Q,about:k}=r,M=a.blake2AsHex(b),S=m.useObservable(A?.query.members.memberIdByHandleHash.size(M),[b]);return o.useEffect((()=>{B(r,{size:S,keyring:n})}),[r,S]),o.default.createElement(d.ScrolledModal,{modalSize:"m",modalHeight:"m",onClose:e},o.default.createElement(d.ModalHeader,{onClick:e,title:"Invite a member"}),o.default.createElement(d.ScrolledModalBody,null,o.default.createElement(d.ScrolledModalContainer,null,o.default.createElement(c.InputComponent,{label:"Inviting member",inputSize:"l"},o.default.createElement(y.SelectMember,{onChange:e=>i({type:"invitor",value:e})})),o.default.createElement(d.Row,null,o.default.createElement(f.TextMedium,{dark:!0},"To invite a member please fill in all the details below.")),o.default.createElement(d.Row,null,o.default.createElement(c.InputComponent,{label:"Root account",id:"root-account",required:!0,helperText:"Something about root accounts",validation:l.hasError("rootAccount",I)?"invalid":void 0,message:l.hasError("rootAccount",I)?l.getErrorMessage("rootAccount",I):""},o.default.createElement(c.InputText,{id:"root-account",placeholder:"Type",value:C?.address??"",onChange:e=>i({type:"rootAccount",value:{name:void 0,address:e.target.value}})}))),o.default.createElement(d.Row,null,o.default.createElement(c.InputComponent,{label:"Controller account",id:"controller-account",required:!0,helperText:"Something about controller accounts",validation:l.hasError("controllerAccount",I)?"invalid":void 0,message:l.hasError("controllerAccount",I)?l.getErrorMessage("controllerAccount",I):""},o.default.createElement(c.InputText,{id:"controller-account",placeholder:"Type",value:v?.address??"",onChange:e=>i({type:"controllerAccount",value:{name:void 0,address:e.target.value}})}))),o.default.createElement(d.Row,null,o.default.createElement(c.InputComponent,{id:"member-name",label:"Member Name",required:!0},o.default.createElement(c.InputText,{id:"member-name",placeholder:"Type",value:w,onChange:e=>i({type:"name",value:e.target.value})}))),o.default.createElement(d.Row,null,o.default.createElement(c.InputComponent,{id:"member-handle",label:"Membership handle",required:!0,validation:l.hasError("handle",I)?"invalid":void 0,message:l.hasError("handle",I)?l.getErrorMessage("handle",I):"Do not use same handles"},o.default.createElement(c.InputText,{id:"member-handle",placeholder:"Type",value:b,onChange:e=>i({type:"handle",value:e.target.value})}))),o.default.createElement(d.Row,null,o.default.createElement(c.InputComponent,{id:"member-about",label:"About member",inputSize:"l"},o.default.createElement(c.InputTextarea,{id:"member-about",value:k,placeholder:"Type",onChange:e=>i({type:"about",value:e.target.value})}))),o.default.createElement(d.Row,null,o.default.createElement(c.InputComponent,{id:"member-avatar",label:"Member Avatar",required:!0,value:Q,validation:l.hasError("avatarUri",I)?"invalid":void 0,message:l.hasError("avatarUri",I)?l.getErrorMessage("avatarUri",I):"Paste an URL of your avatar image. Text lorem ipsum.",placeholder:"Image URL"},o.default.createElement(c.InputText,{id:"member-avatar",value:Q,onChange:e=>i({type:"avatarUri",value:e.target.value})}))))),o.default.createElement(d.ModalFooter,null,o.default.createElement(u.ButtonPrimary,{size:"medium",onClick:()=>t(r),disabled:!s},"Invite a Member")))}},75547:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.InviteMemberModal=void 0;const a=i(A(2784)),o=A(15912),s=A(84878),u=A(1361),c=A(28443),l=A(8476),d=A(38007),f=A(71547),g=A(63069);t.InviteMemberModal=function({onClose:e}){const{api:t}=u.useApi(),[A,n]=a.useState("REQUIREMENTS_CHECK"),[r,i]=a.useState(),p=a.useMemo((()=>r?t?.tx?.members?.inviteMember({inviting_member_id:r.invitor?.id,root_account:r.rootAccount?.address,controller_account:r.controllerAccount?.address,metadata:{name:r.name,avatar_uri:r.avatarUri,about:r.about},handle:r.handle}):void 0),[JSON.stringify(r)]),h=c.useObservable(t?.query.membershipWorkingGroup.budget(),[]),m=c.useObservable(t?.query.members.membershipPrice(),[]);return a.useEffect((()=>{if("REQUIREMENTS_CHECK"===A&&h&&m){const e=h.toBn().gte(m.toBn());n(e?"PREPARE":"REQUIREMENTS_FAIL")}}),[h,m]),"REQUIREMENTS_CHECK"===A?a.default.createElement(s.WaitModal,{onClose:e,title:"Loading...",description:""}):"REQUIREMENTS_FAIL"===A?a.default.createElement(d.InviteMemberRequirementsModal,{onClose:e}):"PREPARE"!=A&&r?"AUTHORIZE"===A?a.default.createElement(f.InviteMemberSignModal,{onClose:e,formData:r,signer:r.invitor?.controllerAccount,onDone:e=>n(e?"SUCCESS":"ERROR"),transaction:p}):"SUCCESS"===A?a.default.createElement(g.InviteMemberSuccessModal,{onClose:e,formData:r}):a.default.createElement(o.FailureModal,{onClose:e},"There was a problem with creating a membership for ",r.name,"."):a.default.createElement(l.InviteMemberFormModal,{onClose:e,onSubmit:e=>{n("AUTHORIZE"),i(e)}})}},38007:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.InviteMemberRequirementsModal=void 0;const r=n(A(2784)),i=A(85577),a=A(31604),o=A(1361),s=A(28443);t.InviteMemberRequirementsModal=({onClose:e})=>{const{api:t}=o.useApi(),A=s.useObservable(t?.query.membershipWorkingGroup.budget(),[]),n=s.useObservable(t?.query.members.membershipPrice(),[]);return r.default.createElement(i.Modal,{modalSize:"m",modalHeight:"s",onClose:e},r.default.createElement(i.ModalHeader,{onClick:e,title:"Insufficient Working Group budget"}),r.default.createElement(i.ModalBody,null,r.default.createElement(a.TextMedium,{margin:"s"},"Unfortunately, the Membership Working group budget is Lorem ipsum dolor sit enim. Please try again later."),r.default.createElement(a.TextMedium,null,"Current budget: ",r.default.createElement(a.TokenValue,{value:A?.toBn()})),r.default.createElement(a.TextMedium,null,"Working Group Dept: ",r.default.createElement(a.TokenValue,{value:n?.toBn()}))))}},71547:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.InviteMemberSignModal=void 0;const a=i(A(2784)),o=A(11679),s=A(42482),u=A(88345),c=A(3307),l=A(86096),d=A(85534),f=A(76746),g=A(85577),p=A(22807),h=A(31604),m=A(28711),y=A(66480);t.InviteMemberSignModal=({onClose:e,formData:t,onDone:A,transaction:n,signer:r})=>{const{allAccounts:i}=s.useAccounts(),I=c.accountOrNamed(i,r,"ControllerAccount"),{paymentInfo:E,send:B,status:C}=m.useSignAndSendTransaction({transaction:n,signer:r,onDone:A}),[v,b]=a.useState(!1),w=u.useBalance(r)?.transferable,Q=E?.partialFee;a.useEffect((()=>{w&&Q&&b(w.gte(Q))}),[Q?.toString(),w?.toString()]);const k="READY"!==C||!v;return a.default.createElement(p.TransactionModal,{status:C,onClose:e},a.default.createElement(g.ModalBody,null,a.default.createElement(h.TextMedium,null,"You intend to create a new membership."),a.default.createElement(h.TextMedium,null,"You are inviting this member. You have ",t.invitor?.inviteCount.toString()," invites left."),a.default.createElement(h.TextMedium,null,"Fees of ",a.default.createElement(h.TokenValue,{value:Q?.toBn()})," will be applied to the transaction."),a.default.createElement(g.Row,null,a.default.createElement(d.InputComponent,{label:"Sending from account",inputSize:"l",validation:v?void 0:"invalid",message:v?void 0:y.getMessage(Q)},a.default.createElement(o.SelectedAccount,{account:I})))),a.default.createElement(g.ModalFooter,null,a.default.createElement(g.BalanceInfoNarrow,null,a.default.createElement(g.InfoTitle,null,"Transaction fee:"),a.default.createElement(g.InfoValue,null,a.default.createElement(h.TokenValue,{value:Q?.toBn()})),a.default.createElement(f.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",absolute:!0})),a.default.createElement(l.ButtonPrimary,{size:"medium",onClick:B,disabled:k},"Sign and create a member")))}},63069:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.InviteMemberSuccessModal=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(24895),o=A(65944),s=A(85577),u=A(31604),c=A(12101),l=A(60956),d=A(60536),f=({onClose:e,children:t})=>r.default.createElement(s.Modal,{modalSize:"m",modalHeight:"s",onClose:e},r.default.createElement(s.ModalHeader,{onClick:e,title:"Success",icon:r.default.createElement(a.SuccessIcon,null)}),t);t.InviteMemberSuccessModal=function({onClose:e,formData:t}){const A=t.invitor?.id||"",{member:n,isLoading:i}=d.useMember(A),a=n?.inviteCount??0,c=n?.name,p=a>1;return r.default.createElement(f,{onClose:e},r.default.createElement(s.ModalBody,null,r.default.createElement(u.TextMedium,null,"You have just successfully invited a member."),r.default.createElement(g,null,r.default.createElement(l.MemberInfo,{member:t})),i&&r.default.createElement(o.Loading,null),!i&&a>0?r.default.createElement(u.TextMedium,null,"You still have ",a," invitation",p&&"s",' left on the "',c,'" membership.'):r.default.createElement(u.TextMedium,null,'You have no invitations left on the "',c,'" membership.')),r.default.createElement(s.ModalFooter,null))};const g=i.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  min-height: ${c.Sizes.accountHeight};
  max-height: ${c.Sizes.accountHeight};
  padding: 8px 72px 8px 14px;
  border: 1px solid ${c.Colors.Black[300]};
  border-radius: ${c.BorderRad.s};
  background-color: ${c.Colors.White};
`},37773:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(75547),t)},53620:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TransferInviteFormModal=void 0;const o=a(A(62197)),s=i(A(2784)),u=A(42482),c=A(86096),l=A(85534),d=A(85577),f=A(31604),g=A(65639),p=A(69051),h=A(16260);t.TransferInviteFormModal=function({onClose:e,onAccept:t,icon:A,member:n}){const[r,i]=s.useState(n),[a,m]=s.useState(),[y,I]=g.useNumberInput(0),E=s.useCallback(h.filterMember(r),[r]),B=u.useAccounts().allAccounts.find((e=>e.address===r?.controllerAccount)),C=!r||parseInt(y)<=r.inviteCount,v=!(y&&C&&r&&a),b=y&&!C;return s.default.createElement(d.Modal,{onClose:e,modalSize:"m"},s.default.createElement(d.ModalHeader,{onClick:e,title:"Transfer invites",icon:A}),s.default.createElement(d.ModalBody,null,s.default.createElement(d.Row,null,s.default.createElement(f.TextMedium,{margin:"s"},"Transfer Invites to a member.")),s.default.createElement(l.InputComponent,{label:"From",inputSize:"l",disabled:!!n},s.default.createElement(h.SelectMember,{onChange:i,disabled:!!n,selected:r})),s.default.createElement(d.TransactionAmount,null,s.default.createElement(l.InputComponent,{id:"amount-input",label:"Number of Invites",required:!0,validation:b?"invalid":void 0,message:b?`You only have ${r?.inviteCount} invites left.`:`You have ${r?.inviteCount} invites.`,inputWidth:"s"},s.default.createElement(l.InputNumber,{id:"amount-input",value:p.formatTokenValue(new o.default(y)),placeholder:"0",onChange:e=>I(e.target.value)}))),s.default.createElement(l.InputComponent,{label:"To",inputSize:"l",required:!0},s.default.createElement(h.SelectMember,{onChange:m,filter:E}))),s.default.createElement(d.ModalFooter,null,s.default.createElement(c.ButtonPrimary,{size:"medium",onClick:()=>r&&a&&B&&t(new o.default(y),r,a,B),disabled:v},"Transfer Invites")))}},87732:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TransferInviteModal=void 0;const o=a(A(62197)),s=i(A(2784)),u=A(15912),c=A(24895),l=A(84878),d=A(19221),f=A(60536),g=A(53526),p=A(53620),h=A(71265),m=A(97489),y=A(52022);t.TransferInviteModal=function(){const{hideModal:e,modalData:t}=d.useModal(),{isLoading:A,member:n}=f.useMember(t.memberId),[r,i]=s.useState("REQUIREMENTS_CHECK"),[a,I]=s.useState(new o.default(0)),[E,B]=s.useState(),[C,v]=s.useState(),b=g.useTransferInviteFee(n);s.useEffect((()=>{"REQUIREMENTS_CHECK"===r&&b&&i(b.canAfford?"PREPARE":"REQUIREMENTS_FAIL")}),[b]);return A||!n?null:"REQUIREMENTS_CHECK"===r?s.default.createElement(l.WaitModal,{onClose:e,title:"Loading...",description:""}):"REQUIREMENTS_FAIL"===r&&b?s.default.createElement(h.TransferInviteRequirementsModal,{onClose:e,address:n.controllerAccount,amount:b.transactionFee}):"PREPARE"!==r&&E&&C?"AUTHORIZE"===r?s.default.createElement(m.TransferInviteSignModal,{onClose:e,sourceMember:n,targetMember:E,signer:C,amount:a,onDone:e=>{i(e?"SUCCESS":"ERROR")}}):"SUCCESS"===r?s.default.createElement(y.TransferInviteSuccessModal,{onClose:e,recipient:E,amount:a}):s.default.createElement(u.FailureModal,{onClose:e},"There was a problem transferring your invites."):s.default.createElement(p.TransferInviteFormModal,{onClose:e,onAccept:(e,t,A,n)=>{I(e),B(A),v(n),i("AUTHORIZE")},icon:s.default.createElement(c.TransferIcon,null),member:n})}},71265:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TransferInviteRequirementsModal=void 0;const o=i(A(2784)),s=a(A(82740)),u=A(41469),c=A(42482),l=A(88345),d=A(86096),f=A(85577),g=A(31604),p=A(12101),h=A(19221);t.TransferInviteRequirementsModal=function({onClose:e,address:t,amount:A}){const{showModal:n}=h.useModal(),{allAccounts:r}=c.useAccounts(),i=o.useMemo((()=>r.find((e=>e.address==t))||{name:"Controller account",address:t}),[r]),{transferable:a}=l.useBalance(i.address)||{};return o.default.createElement(f.Modal,{modalSize:"m",modalHeight:"s",onClose:e},o.default.createElement(f.ModalHeader,{onClick:e,title:"Insufficient Funds"}),o.default.createElement(f.ModalBody,null,o.default.createElement(g.TextMedium,{margin:"s"},"Unfortunately, you don't have enough Tokens on your Controller account. You need at least"," ",o.default.createElement(g.TokenValue,{value:A})," for the transaction fee."),o.default.createElement(m,null,o.default.createElement(u.AccountInfo,{account:i}),o.default.createElement(f.BalanceInfoInRow,null,o.default.createElement(f.InfoTitle,null,"Transferable balance"),o.default.createElement(f.InfoValue,null,o.default.createElement(g.TokenValue,{value:a}))))),o.default.createElement(f.ModalFooter,null,o.default.createElement(d.ButtonPrimary,{size:"medium",onClick:()=>n({modal:"TransferTokens",data:{to:i}})},"Add JOY to Controller Account")))};const m=s.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  min-height: ${p.Sizes.accountHeight};
  max-height: ${p.Sizes.accountHeight};
  padding: 8px 72px 8px 14px;
  border: 1px solid ${p.Colors.Black[300]};
  border-radius: ${p.BorderRad.s};
  background-color: ${p.Colors.White};
`},97489:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TransferInviteSignModal=void 0;const o=a(A(62197)),s=i(A(2784)),u=A(11679),c=A(86096),l=A(85534),d=A(76746),f=A(85577),g=A(22807),p=A(31604),h=A(1361),m=A(28711),y=A(69051);t.TransferInviteSignModal=function({onClose:e,sourceMember:t,targetMember:A,amount:n,onDone:r,signer:i}){const{api:a}=h.useApi(),I=s.useMemo((()=>a?.tx?.members?.transferInvites(t.id,A.id,n)),[t.id,A.id,n]),E=i.address,{paymentInfo:B,send:C,status:v}=m.useSignAndSendTransaction({transaction:I,signer:E,onDone:r}),b=n.gt(new o.default(1)),w=A.name,Q=B?.partialFee.toBn();return s.default.createElement(g.TransactionModal,{status:v,onClose:e},s.default.createElement(f.ModalBody,null,s.default.createElement(f.SignTransferContainer,null,s.default.createElement(p.TextMedium,{margin:"m"},"You intend to transfer ",n.toString()," invite",b&&"s"," to ",w,". A fee of ",y.formatTokenValue(Q)," ","JOY will be applied to the transaction."),s.default.createElement(l.InputComponent,{required:!0,inputSize:"l",label:"Fee paid by account",disabled:!0,borderless:!0},s.default.createElement(u.SelectedAccount,{account:i})))),s.default.createElement(f.ModalFooter,null,s.default.createElement(f.TransactionInfo,null,s.default.createElement(f.BalanceInfoNarrow,null,s.default.createElement(f.InfoTitle,null,"Transaction fee:"),s.default.createElement(f.InfoValue,null,s.default.createElement(p.TokenValue,{value:Q})),s.default.createElement(d.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora mollitia necessitatibus, eos recusandae obcaecati facilis sed maiores. Impedit iusto expedita natus perspiciatis, perferendis totam commodi ad, illo, veritatis omnis beatae.Facilis natus recusandae, magni saepe hic veniam aliquid tempore quia assumenda voluptatum reprehenderit. Officiis provident nam corrupti, incidunt, repudiandae accusantium porro libero ipsam illo quae ratione. Beatae itaque quo quidem.",absolute:!0}))),s.default.createElement(c.ButtonPrimary,{size:"medium",onClick:C,disabled:"READY"!==v},"Sign and Send")))}},52022:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TransferInviteSuccessModal=void 0;const r=n(A(62197)),i=n(A(2784)),a=n(A(82740)),o=A(86096),s=A(24895),u=A(85577),c=A(31604),l=A(12101),d=A(60956);t.TransferInviteSuccessModal=function({onClose:e,recipient:t,amount:A}){const n=A.gt(new r.default(1)),a=t.name;return i.default.createElement(u.Modal,{modalSize:"m",modalHeight:"s",onClose:e},i.default.createElement(u.ModalHeader,{onClick:e,title:"Success",icon:i.default.createElement(s.SuccessIcon,null)}),i.default.createElement(u.ModalBody,null,i.default.createElement(c.TextMedium,{margin:"s"},"You have just successfully transferred ",A.toString()," invitation",n&&"s"," to ",a,"."),i.default.createElement(f,null,i.default.createElement(d.MemberInfo,{member:t}))),i.default.createElement(u.ModalFooter,null,i.default.createElement(o.ButtonPrimary,{size:"medium",disabled:!0},"View my profile")))};const f=a.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  min-height: ${l.Sizes.accountHeight};
  max-height: ${l.Sizes.accountHeight};
  padding: 8px 72px 8px 14px;
  border: 1px solid ${l.Colors.Black[300]};
  border-radius: ${l.BorderRad.s};
  background-color: ${l.Colors.White};
`},26885:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(87732),t),r(A(62088),t)},62088:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},82199:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.UpdateMembershipFormModal=void 0;const a=A(52356),o=i(A(2784)),s=i(A(88253)),u=A(11679),c=A(42482),l=A(3307),d=A(86096),f=A(85534),g=A(20018),p=A(85577),h=A(31604),m=A(1361),y=A(97120),I=A(28443),E=A(67291),B=A(50682),C=s.object().shape({avatarUri:E.AvatarURISchema.nullable(),handle:s.string().when("$isHandleChanged",((e,t)=>e?E.HandleSchema:t))});t.UpdateMembershipFormModal=({onClose:e,onSubmit:t,member:A})=>{const{api:n}=m.useApi(),{allAccounts:r}=c.useAccounts(),{state:i,dispatch:s,isValid:E,errors:v,validate:b}=y.useForm(C,{id:A.id,name:A.name||"",handle:A.handle||"",about:"",avatarUri:A.avatar||"",rootAccount:l.accountOrNamed(r,A.rootAccount,"Root Account"),controllerAccount:l.accountOrNamed(r,A.controllerAccount,"Controller Account")}),{handle:w,name:Q,avatarUri:k,about:M,controllerAccount:S,rootAccount:D}=i,_=o.useCallback(u.filterAccount(S),[S]),N=o.useCallback(u.filterAccount(D),[D]),O=a.blake2AsHex(w||""),L=I.useObservable(n?.query.members.memberIdByHandleHash.size(O),[w]),T=E&&B.hasAnyEdits(i,A);o.useEffect((()=>{b(i,{size:L,isHandleChanged:i.handle!==A.handle})}),[i,L]);const x=(e,t)=>{s({type:e,value:t})};return o.default.createElement(p.ScrolledModal,{modalSize:"m",modalHeight:"m",onClose:e},o.default.createElement(p.ModalHeader,{onClick:e,title:"Edit membership"}),o.default.createElement(p.ScrolledModalBody,null,o.default.createElement(p.ScrolledModalContainer,null,o.default.createElement(p.Row,null,o.default.createElement(h.TextMedium,{dark:!0},"Please fill in all the details below.")),o.default.createElement(p.Row,null,o.default.createElement(f.InputComponent,{label:"Root account",helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",required:!0,inputSize:"l"},o.default.createElement(u.SelectAccount,{filter:_,onChange:e=>x("rootAccount",e),selected:D}))),o.default.createElement(p.Row,null,o.default.createElement(f.InputComponent,{label:"Controller account",helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",required:!0,inputSize:"l"},o.default.createElement(u.SelectAccount,{filter:N,onChange:e=>x("controllerAccount",e),selected:S}))),o.default.createElement(p.Row,null,o.default.createElement(f.InputComponent,{id:"member-name",label:"Member Name",required:!0},o.default.createElement(f.InputText,{id:"member-name",placeholder:"Type",value:Q,onChange:e=>x("name",e.target.value)}))),o.default.createElement(p.Row,null,o.default.createElement(f.InputComponent,{id:"member-handle",label:"Membership handle",required:!0,validation:g.hasError("handle",v)?"invalid":void 0,message:g.hasError("handle",v)?g.getErrorMessage("handle",v):"Do not use same handles"},o.default.createElement(f.InputText,{id:"member-handle",placeholder:"Type",value:w,onChange:e=>x("handle",e.target.value)}))),o.default.createElement(p.Row,null,o.default.createElement(f.InputComponent,{id:"member-about",label:"About member",inputSize:"l"},o.default.createElement(f.InputTextarea,{id:"member-about",value:M,placeholder:"Type",onChange:e=>x("about",e.target.value)}))),o.default.createElement(p.Row,null,o.default.createElement(f.InputComponent,{id:"member-avatar",label:"Member Avatar",required:!0,value:k,validation:g.hasError("avatarUri",v)?"invalid":void 0,message:g.hasError("avatarUri",v)?g.getErrorMessage("avatarUri",v):"Paste an URL of your avatar image. Text lorem ipsum.",placeholder:"Image URL"},o.default.createElement(f.InputText,{id:"member-avatar",value:k,onChange:e=>x("avatarUri",e.target.value)}))))),o.default.createElement(p.ModalFooter,null,o.default.createElement(d.ButtonPrimary,{size:"medium",onClick:()=>{T&&t(B.changedOrNull(i,A))},disabled:!T},"Save changes")))}},56222:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.UpdateMembershipModal=void 0;const a=i(A(2784)),o=A(42482),s=A(15912),u=A(82199),c=A(31099),l=A(21598);t.UpdateMembershipModal=({onClose:e,member:t})=>{const[A,n]=a.useState("PREPARE"),[r,i]=a.useState(),{allAccounts:d}=o.useAccounts(),f=d.find((e=>t.controllerAccount===e.address));return"PREPARE"!==A&&r&&f?"AUTHORIZE"===A?a.default.createElement(c.UpdateMembershipSignModal,{onClose:e,transactionParams:r,member:t,signer:f,onDone:e=>n(e?"SUCCESS":"ERROR")}):"SUCCESS"===A?a.default.createElement(l.UpdateMembershipSuccessModal,{onClose:e,member:t}):a.default.createElement(s.FailureModal,{onClose:e},"There was a problem updating membership for ",t.name,"."):a.default.createElement(u.UpdateMembershipFormModal,{onClose:e,onSubmit:e=>{n("AUTHORIZE"),i(e)},member:t})}},31099:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.UpdateMembershipSignModal=void 0;const a=i(A(2784)),o=A(11679),s=A(86096),u=A(85534),c=A(76746),l=A(85577),d=A(22807),f=A(31604),g=A(1361),p=A(28711),h=(e,t)=>t.some((t=>!!e[t]));t.UpdateMembershipSignModal=({onClose:e,transactionParams:t,member:A,signer:n,onDone:r})=>{const{api:i}=g.useApi(),m=a.useMemo((()=>function(e,t,A){const n=h(e,["about","handle","avatarUri","name"]),r=h(e,["rootAccount","controllerAccount"]),i=[];if(t&&(n||r)){if(n){const n=t.tx.members.updateProfile(A.id,e.handle||null,{name:e.name||null,avatar_uri:e.avatarUri||null,about:e.about||null});i.push(n)}if(r){const n=t.tx.members.updateAccounts(A.id,e.rootAccount?.address||null,e.controllerAccount?.address||null);i.push(n)}return t.tx.utility.batch(i)}}(t,i,A)),[A.id]),{paymentInfo:y,send:I,status:E}=p.useSignAndSendTransaction({transaction:m,signer:n.address,onDone:r});return a.default.createElement(d.TransactionModal,{status:E,onClose:e},a.default.createElement(l.ModalBody,null,a.default.createElement(f.TextMedium,null,"You intend to update your membership. Fees of ",a.default.createElement(f.TokenValue,{value:y?.partialFee.toBn()})," will be applied to the transaction."),a.default.createElement(l.Row,null,a.default.createElement(u.Label,null,"Sending from account"),a.default.createElement(o.SelectedAccount,{account:n}))),a.default.createElement(l.ModalFooter,null,a.default.createElement(l.BalanceInfoNarrow,null,a.default.createElement(l.InfoTitle,null,"Transaction fee:"),a.default.createElement(l.InfoValue,null,a.default.createElement(f.TokenValue,{value:y?.partialFee.toBn()})),a.default.createElement(c.Help,{helperText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",absolute:!0})),a.default.createElement(s.ButtonPrimary,{size:"medium",onClick:I,disabled:"READY"!==E},"Sign and update a member")))}},21598:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.UpdateMembershipSuccessModal=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(86096),o=A(24895),s=A(85577),u=A(31604),c=A(12101),l=A(60956);t.UpdateMembershipSuccessModal=function({onClose:e,member:t}){return r.default.createElement(s.Modal,{modalSize:"m",modalHeight:"s",onClose:e},r.default.createElement(s.ModalHeader,{onClick:e,title:"Success",icon:r.default.createElement(o.SuccessIcon,null)}),r.default.createElement(s.ModalBody,null,r.default.createElement(u.TextMedium,null,"You have just successfully updated your membership"),r.default.createElement(d,null,r.default.createElement(l.MemberInfo,{member:t}))),r.default.createElement(s.ModalFooter,null,r.default.createElement(a.ButtonPrimary,{size:"medium",disabled:!0},"View my profile")))};const d=i.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  min-height: ${c.Sizes.accountHeight};
  max-height: ${c.Sizes.accountHeight};
  padding: 8px 72px 8px 14px;
  border: 1px solid ${c.Colors.Black[300]};
  border-radius: ${c.BorderRad.s};
  background-color: ${c.Colors.White};
`},34657:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(56222),t)},50682:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changedOrNull=t.getChangedFields=t.hasAnyEdits=void 0,t.hasAnyEdits=(e,A)=>!!t.getChangedFields(e,A).length,t.getChangedFields=(e,t)=>{const A=[];for(const n of Object.keys(e))(t[n]||"")!==(e[n]?.address??(e[n]||""))&&A.push(n);return A},t.changedOrNull=(e,A)=>{const n=t.getChangedFields(e,A);return Object.entries(e).reduce(((e,[t,A])=>({...e,[t]:n.includes(t)?A:null})),{})}},66480:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getMessage=void 0,t.getMessage=e=>`Insufficient funds to cover the membership creation. You need at least ${e?.toString()} JOY on your account for this action.`},6395:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setOrder=t.sortMemberships=void 0;const n=A(19709);t.sortMemberships=function(e,t,A=!1){return"handle"===t?e.sort(n.Comparator(A,t).string):"inviteCount"===t?e.sort(n.Comparator(A,t).number):e},t.setOrder=function(e,t,A,n,r){e===t?r(!n):(r("handle"!==e),A(e))}},67291:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NewAddressSchema=t.ReferrerSchema=t.HandleSchema=t.AvatarURISchema=t.MemberSchema=t.AccountSchema=void 0;const o=a(A(62197)),s=i(A(88253)),u=A(85079);t.AccountSchema=s.object(),t.MemberSchema=s.object(),t.AvatarURISchema=s.string().url(),t.HandleSchema=s.string().test("handle","This handle is already taken",((e,t)=>t?.options?.context?.size?.lte(new o.default(0))??!1)),t.ReferrerSchema=s.object().when("isReferred",((e,t)=>e?t.required():t)),t.NewAddressSchema=e=>s.object().shape({name:s.string(),address:s.string().required()}).test(e,"Address is invalid",((e,t)=>{const A=t?.options?.context?.keyring;return!e.address||u.isValidAddress(e.address,A)}))},74107:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MembershipContext=void 0;const n=A(2784);t.MembershipContext=n.createContext({active:void 0,setActive:()=>{}})},61999:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.MembershipContextProvider=void 0;const a=i(A(2784)),o=A(74107);t.MembershipContextProvider=e=>{const[t,A]=a.useState(),n={active:t,setActive:A};return a.default.createElement(o.MembershipContext.Provider,{value:n},e.children)}},22874:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.useSearchMembersLazyQuery=t.useSearchMembersQuery=t.SearchMembersDocument=t.useGetMemberLazyQuery=t.useGetMemberQuery=t.GetMemberDocument=t.useGetMembersLazyQuery=t.useGetMembersQuery=t.GetMembersDocument=t.MemberWithDetailsFragmentDoc=t.BlockFieldsFragmentDoc=t.MemberFieldsFragmentDoc=void 0;const a=A(73059),o=i(A(73059)),s={};t.MemberFieldsFragmentDoc=a.gql`
  fragment MemberFields on Membership {
    id
    rootAccount
    controllerAccount
    handle
    name
    about
    avatarUri
    isVerified
    isFoundingMember
    inviteCount
  }
`,t.BlockFieldsFragmentDoc=a.gql`
  fragment BlockFields on Block {
    id
    block
    network
  }
`,t.MemberWithDetailsFragmentDoc=a.gql`
  fragment MemberWithDetails on Membership {
    ...MemberFields
    registeredAtTime
    registeredAtBlock {
      ...BlockFields
    }
    invitees {
      ...MemberFields
    }
  }
  ${t.MemberFieldsFragmentDoc}
  ${t.BlockFieldsFragmentDoc}
`,t.GetMembersDocument=a.gql`
  query GetMembers($rootAccount_in: [String!], $controllerAccount_in: [String!]) {
    memberships(where: { rootAccount_in: $rootAccount_in, controllerAccount_in: $controllerAccount_in }) {
      ...MemberFields
    }
  }
  ${t.MemberFieldsFragmentDoc}
`,t.useGetMembersQuery=function(e){const A={...s,...e};return o.useQuery(t.GetMembersDocument,A)},t.useGetMembersLazyQuery=function(e){const A={...s,...e};return o.useLazyQuery(t.GetMembersDocument,A)},t.GetMemberDocument=a.gql`
  query GetMember($id: ID!) {
    membership(where: { id: $id }) {
      ...MemberWithDetails
    }
  }
  ${t.MemberWithDetailsFragmentDoc}
`,t.useGetMemberQuery=function(e){const A={...s,...e};return o.useQuery(t.GetMemberDocument,A)},t.useGetMemberLazyQuery=function(e){const A={...s,...e};return o.useLazyQuery(t.GetMemberDocument,A)},t.SearchMembersDocument=a.gql`
  query SearchMembers($text: String!, $limit: Int) {
    memberships(where: { name_contains: $text, handle_contains: $text }, limit: $limit) {
      ...MemberFields
    }
  }
  ${t.MemberFieldsFragmentDoc}
`,t.useSearchMembersQuery=function(e){const A={...s,...e};return o.useQuery(t.SearchMembersDocument,A)},t.useSearchMembersLazyQuery=function(e){const A={...s,...e};return o.useLazyQuery(t.SearchMembersDocument,A)}},45470:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(22874),t)},26798:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.asMember=t.asBlock=void 0,t.asBlock=e=>({...e}),t.asMember=e=>({id:e.id,handle:e.handle,name:e.name??void 0,avatar:e.avatarUri??void 0,inviteCount:e.inviteCount,isFoundingMember:e.isFoundingMember,isVerified:e.isVerified,rootAccount:e.rootAccount,controllerAccount:e.controllerAccount,roles:[]})},84484:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(41768),t),r(A(26798),t)},41768:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},20184:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Mocks=void 0;const n=A(81297),r=A(17832);t.Mocks=()=>(n.useMockMembers(),r.useSudoBudget(),null)},22965:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(44661),t),r(A(24353),t)},63747:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.seedApplications=void 0;const r=n(A(91070)).default.map((e=>({...e})));t.seedApplications=e=>r.forEach((t=>((e,t)=>{const A=function(e,t){switch(e){case"accepted":return t.schema.create("ApplicationStatusAccepted",{});case"rejected":return t.schema.create("ApplicationStatusRejected",{});case"withdrawn":return t.schema.create("ApplicationStatusWithdrawn",{});default:return t.schema.create("ApplicationStatusPending",{})}}(e.status,t),n={...e,status:A};t.schema.create("WorkingGroupApplication",n)})(t,e)))},24353:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.seedBlocks=t.mockBlocks=void 0;const r=A(93395),i=n(A(74765));t.mockBlocks=i.default.map((e=>({...e,network:r.Network.Olympia,__typename:"Block"}))),t.seedBlocks=e=>t.mockBlocks.reduce(((t,A)=>t.set(A.id,e.schema.create("Block",{...A}))),new Map)},44661:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.seedMembers=t.seedMember=t.mockMembers=void 0;const r=n(A(27143));t.mockMembers=r.default.map((e=>({...e,roles:[]}))),t.seedMember=(e,t)=>{const A={...e};return A.invitedById&&delete A.invitedById,t.schema.create("Membership",{...A})},t.seedMembers=e=>{t.mockMembers.map((A=>t.seedMember(A,e)))}},16526:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.seedOpeningStatuses=t.seedOpenings=t.openingsData=void 0;const r=n(A(76678));t.openingsData=r.default.map((e=>({...e})));const i=(e,t)=>{let A="OpeningStatusFilled";return"open"===e&&(A="OpeningStatusOpen"),"cancelled"===e&&(A="OpeningStatusCancelled"),t.schema.find(A,1)},a=(e,t)=>{const A=t.schema.create("WorkingGroupOpeningMetadata",e.metadata),n={...e,metadata:A,status:i(e.status,t)};return t.schema.create("WorkingGroupOpening",n)};t.seedOpenings=e=>{const A=e.schema.all("WorkingGroup").models.map((({id:e})=>e));t.openingsData.map((t=>{for(const n of A)a({...t,groupId:n},e)}))},t.seedOpeningStatuses=e=>{e.schema.create("OpeningStatusCancelled",{openingCancelledEventID:0}),e.schema.create("OpeningStatusFilled",{openingFilledEventID:0}),e.schema.create("OpeningStatusOpen",{_phantom:0})}},21470:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.seedWorkingGroups=t.mockWorkingGroups=void 0;const r=n(A(21413));t.mockWorkingGroups=r.default.map((e=>({...e}))),t.seedWorkingGroups=e=>t.mockWorkingGroups.map((t=>((e,t)=>{const A={...e,workers:null,status:t.schema.create("WorkingGroupStatus",e.status),leaderId:null},n=t.schema.create("WorkingGroup",A),r=new Map;for(const A of e.workers??[]){const e=t.schema.find("Membership",A),i=t.schema.create("Worker",{group:n,membership:e});r.set(A,i.id)}return e.leaderId&&(n.leaderId=r.get(e.leaderId),n.save()),n})(t,e)))},81297:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMockMembers=void 0;const n=A(2784),r=A(1361),i=A(28443),a=A(28711),o=A(45470);t.useMockMembers=function(){const{api:e,isConnected:t}=r.useApi(),{data:A,loading:s}=o.useGetMembersQuery(),u=A?.memberships,c=n.useMemo((()=>{if(!u||!e)return;const t=u.map((t=>e?.tx.members.buyMembership({handle:t.handle,metadata:{avatar_uri:t.avatarUri,name:t.name,about:t.about},root_account:t.rootAccount,controller_account:t.controllerAccount})));return e.tx.utility.batch(t)}),[e,u,s]),{send:l}=a.useSignAndSendTransaction({transaction:c,signer:"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",onDone:e=>console.log(e?"✅ Members created":"❗️Error processing batch transaction")}),d=i.useObservable(e?.query?.members.membershipById.size(0),[t])?.toNumber();n.useEffect((()=>{}),[t,u,d])}},17832:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useSudoBudget=void 0;const n=A(2784),r=A(42482),i=A(1361),a=A(28443),o=A(28711);t.useSudoBudget=function(){const{api:e,isConnected:t}=i.useApi(),{hasAccounts:A}=r.useAccounts(),s=a.useObservable(e?.query.membershipWorkingGroup.budget(),[t]);n.useMemo((()=>{void 0!==s&&console.log(`💸 Current Membership WG budget: ${s} JOY`)}),[JSON.stringify(s)]);const u=n.useMemo((()=>{if(e)return e.tx.sudo.sudo(e.tx.membershipWorkingGroup.setBudget(100))}),[e]),{send:c}=o.useSignAndSendTransaction({transaction:u,signer:"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",onDone:e=>{console.log(e?"💰 Budget increased to: 100 JOY":"❗️Error processing sudo transaction")}});n.useMemo((()=>{}),[t,A])}},37099:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getWorkingGroupApplicationsResolver=t.getWorkersResolver=t.getWorkingGroupOpeningsResolver=t.getWorkingGroupResolver=t.getWorkingGroupsResolver=t.searchMembersResolver=t.getMembersResolver=t.getMemberResolver=void 0;const n=A(80022),r=A(72690);t.getMemberResolver=(e,t,A,r)=>{const i={id:t.where.id};return n.mirageGraphQLFieldResolver(e,i,A,r)},t.getMembersResolver=(e,t,{mirageSchema:A})=>{const n=t.where.rootAccount_in,r=t.where.controllerAccount_in,{models:i}=n?A.where("Membership",(e=>n?.includes(e.rootAccount)||r?.includes(e.controllerAccount))):A.all("Membership");return i},t.searchMembersResolver=(e,{text:t,limit:A},{mirageSchema:n})=>{const r=(e=>{const t=new RegExp(e,"i");return e=>t.test(e||"")})(t),{models:i}=n.where("Membership",(e=>r(e.handle)||r(e.name)||r(e.id)));return A?i.slice(0,A):i},t.getWorkingGroupsResolver=(e,t,{mirageSchema:A})=>{const{models:n}=A.all("WorkingGroup");return r.adaptRecords(n)},t.getWorkingGroupResolver=(e,t,A,r)=>{const i={id:t.where.id};return n.mirageGraphQLFieldResolver(e,i,A,r)},t.getWorkingGroupOpeningsResolver=(e,t,{mirageSchema:A})=>{const{models:n}=t.where.group_eq?A.where("WorkingGroupOpening",{groupId:t.where.group_eq}):A.all("WorkingGroupOpening");return r.adaptRecords(n)},t.getWorkersResolver=(e,t,{mirageSchema:A})=>{const n=t.where.group_eq,{models:r}=n?A.where("Worker",(e=>n==e.groupId)):A.all("Worker");return r},t.getWorkingGroupApplicationsResolver=(e,t,{mirageSchema:A})=>{const n=t.where.applicant_in,{models:r}=n?A.where("WorkingGroupApplication",(e=>n.includes(e.applicantId))):A.all();return r}},52905:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.makeServer=t.fixAssociations=void 0;const r=A(80022),i=A(17019),a=n(A(56945)),o=A(22965),s=A(63747),u=A(16526),c=A(21470),l=A(37099);t.fixAssociations=e=>{const t=e.schema,A=t.modelFor("workingGroup");A.class.prototype.associations.workers.opts.inverse="group",A.class.prototype.associations.leader.opts.inverse="leader",t.modelFor("worker").class.prototype.associations.leaderGroups.opts.inverse="leaderGroups"},t.makeServer=(e="development")=>i.createServer({environment:e,routes(){this.post("http://localhost:8081/graphql",r.createGraphQLHandler(a.default,this.schema,{context:void 0,root:void 0,resolvers:{Query:{membership:l.getMemberResolver,memberships:l.getMembersResolver,searchMemberships:l.searchMembersResolver,workingGroups:l.getWorkingGroupsResolver,workingGroup:l.getWorkingGroupResolver,workingGroupOpenings:l.getWorkingGroupOpeningsResolver,workers:l.getWorkersResolver,workingGroupApplications:l.getWorkingGroupApplicationsResolver}}}))},seeds(e){t.fixAssociations(e),o.seedBlocks(e),o.seedMembers(e),c.seedWorkingGroups(e),u.seedOpeningStatuses(e),u.seedOpenings(e),s.seedApplications(e)}})},50081:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ApplicationsList=void 0;const r=n(A(62197)),i=n(A(2784)),a=n(A(82740)),o=A(55003),s=A(31604),u=A(80912);t.ApplicationsList=({applications:e})=>i.default.createElement(o.List,null,e.map((e=>i.default.createElement(o.ListItem,{key:e.id},i.default.createElement(c,{application:e})))));const c=({application:e})=>i.default.createElement(l,null,i.default.createElement("div",null,"id: ",e.id),i.default.createElement("h4",null,u.openingTitle(e)),i.default.createElement("div",null,i.default.createElement("h6",null,"6 days 23 minutes"),"Time left"),i.default.createElement("div",null,i.default.createElement(s.TokenValue,{value:e.opening?.reward}),i.default.createElement("br",null),"Reward per block"),i.default.createElement("div",null,"current / total Applications"),i.default.createElement("div",null,i.default.createElement(s.TokenValue,{value:new r.default(100)}),i.default.createElement("br",null),"Staked"),i.default.createElement("div",null,i.default.createElement("h6",null,"No"),"Hired")),l=a.default.div`
  grid-template-columns: 1fr 1fr 16px;
  grid-column-gap: 24px;
  padding: 16px;
`},78893:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.OpeningFormPreview=void 0;const r=n(A(2784)),i=A(32916),a=A(85577),o=A(31604),s=A(97538),u=A(62022);t.OpeningFormPreview=({opening:e})=>r.default.createElement(r.default.Fragment,null,r.default.createElement(a.Row,null,r.default.createElement(i.BadgeViolet,null,e.type)),r.default.createElement("h3",null,e.title),r.default.createElement("p",null,"Content Curators will one day be essential for ensuring that the petabytes of media items uploaded to Joystream are format..."),r.default.createElement("span",null,"Show more"),r.default.createElement(a.Row,null,r.default.createElement("label",null,"Time left"),u.relativeTime(e.expectedEnding),r.default.createElement(o.TextMedium,null,s.percentTimeLeft(e.expectedEnding,"2021-02-09T10:28:04.155Z"),"%")),r.default.createElement(a.Row,null,r.default.createElement("label",null,"Applicants"),r.default.createElement(o.TextMedium,null,e.hiring.total," / ",e.hiring.current)),r.default.createElement(a.Row,null,r.default.createElement("label",null,"Reward"),r.default.createElement(o.TextMedium,null,r.default.createElement(o.TokenValue,{value:e.reward.value})," per ",e.reward.interval," blocks")),r.default.createElement(a.Row,null,r.default.createElement("label",null,"Stake required"),r.default.createElement(o.TokenValue,{value:2e5})))},72367:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.OpeningsList=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(32916),o=A(86096),s=A(55017),u=A(24895),c=A(55003),l=A(62523),d=A(31604),f=A(40823),g=A(12101),p=A(19221),h=A(53050),m=A(62022),y=({opening:e})=>{const[t,A]=h.useToggle();return r.default.createElement(s.Toggle,{absoluteToggle:!0,isOpen:t},r.default.createElement(b,{isOpen:t},r.default.createElement(I,{opening:e}),r.default.createElement(E,{opening:e})),r.default.createElement(s.ToggleButton,{absoluteToggle:!0,isOpen:t,onClick:A},r.default.createElement(u.Arrow,{direction:"down"})))};t.OpeningsList=({openings:e})=>r.default.createElement(c.List,null,e.map((e=>r.default.createElement(c.ListItem,{key:e.id},r.default.createElement(y,{opening:e})))));const I=({opening:e})=>r.default.createElement(B,null,r.default.createElement(w,null,r.default.createElement(Q,null,r.default.createElement(f.Subscription,null,"ID: ",e.id),r.default.createElement(f.Subscription,null,"Ends ",m.relativeTime(e.expectedEnding)),"LEADER"===e.type?r.default.createElement(a.BadgeViolet,null,"LEAD"):null),r.default.createElement(M,null,e.title)),r.default.createElement(k,null,r.default.createElement(D,null,r.default.createElement(d.TextInlineBig,null,r.default.createElement(d.TokenValue,{value:e.reward.value})),r.default.createElement(_,null,"Reward per ",e.reward.interval," blocks.")),r.default.createElement(D,null,r.default.createElement(d.TextInlineBig,{lighter:!0},r.default.createElement(d.TextInlineBig,{dark:!0,bold:!0},e.applicants.current),"/",e.applicants.total),r.default.createElement(f.Subscription,null,"Applications")),r.default.createElement(D,null,r.default.createElement(d.TextInlineBig,{lighter:!0},r.default.createElement(d.TextInlineBig,{dark:!0,bold:!0},e.hiring.current),"/",e.hiring.total),r.default.createElement(f.Subscription,null,"Hiring")))),E=({opening:e})=>{const{showModal:t}=p.useModal();return r.default.createElement(C,null,r.default.createElement(v,null,r.default.createElement(N,null,r.default.createElement(f.Subscription,null,"Ends ",m.relativeTime(e.expectedEnding)),r.default.createElement(S,null,e.title)),r.default.createElement(d.TextBig,{light:!0},"Content Curators will one day be essential for ensuring that the petabytes of media items uploaded to Joystream are format..."),r.default.createElement(l.Statistics,{withMargin:!0},r.default.createElement(l.StatsBlock,{size:"m",centered:!0,spacing:"s"},r.default.createElement(d.TextBig,null,r.default.createElement(d.TokenValue,{value:e.reward.value})),r.default.createElement(f.Subscription,null,"Reward per ",e.reward.interval," blocks")),r.default.createElement(l.StatsBlock,{size:"m",centered:!0,spacing:"s"},r.default.createElement(l.TwoColumnsStatistic,null,r.default.createElement(l.StatiscticContentColumn,null,r.default.createElement(d.TextBig,{value:!0,bold:!0},e.applicants.total),r.default.createElement(f.Subscription,null,"Applicant limit")),r.default.createElement(l.StatiscticContentColumn,null,r.default.createElement(d.TextBig,{value:!0,bold:!0},e.hiring.total),r.default.createElement(f.Subscription,null,"Target no of Hires")))),r.default.createElement(l.StatsBlock,{size:"m",centered:!0,spacing:"s"},r.default.createElement(d.TextBig,null,r.default.createElement(d.TokenValue,{value:e.reward.value})),r.default.createElement(f.Subscription,null,"Minimum Stake Required"))),r.default.createElement(o.ButtonsGroup,{align:"right"},r.default.createElement(o.ButtonGhost,{size:"medium"},r.default.createElement(u.Arrow,{direction:"left"}),"Learn more"),r.default.createElement(o.ButtonPrimary,{size:"medium",onClick:()=>t({modal:"ApplyForRoleModal",data:{opening:e}})},"Apply now"))))},B=i.default.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 24px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 94px;
  padding: 16px 72px 16px 16px;
  background-color: ${g.Colors.White};
  transition: ${g.Transitions.all};
`,C=i.default.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: ${g.Transitions.all};
`,v=i.default.div`
  display: grid;
  grid-row-gap: 16px;
  width: 100%;
  max-height: 100%;
  padding: 16px;
  background-color: ${g.Colors.Black[50]};
  overflow: hidden;
  transition: ${g.Transitions.all};
`,b=i.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  transition: ${g.Transitions.all};

  ${B} {
    margin-top: ${({isOpen:e})=>e?"-94px":"0px"};
  }
  ${C} {
    max-height: ${({isOpen:e})=>e?"500px":"0px"};
  }
`,w=i.default.div`
  display: grid;
  grid-template-rows: 26px 24px;
  grid-row-gap: 4px;
  width: 100%;
  max-width: 342px;
  align-items: center;
`,Q=i.default.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-column-gap: 16px;
  width: fit-content;
  max-width: 100%;
`,k=i.default.div`
  display: grid;
  grid-auto-flow: column;
  width: 100%;
  grid-column-gap: 40px;
`,M=i.default.h5`
  ${g.Overflow.Dots}
`,S=i.default.h4`
  ${g.Overflow.Dots}
`,D=i.default.div`
  display: grid;
  grid-template-rows: 26px 24px;
  grid-row-gap: 4px;
  align-items: center;
`,_=i.default(f.Subscription)`
  min-width: 136px;
`,N=i.default.div`
  display: grid;
  grid-template-rows: 26px 28px;
  grid-row-gap: 8px;
  align-items: center;
`},27470:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WorkersList=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(32916),o=A(86096),s=A(24895),u=A(31604),c=A(60956),l=({member:e})=>r.default.createElement(d,null,r.default.createElement(c.MemberInfo,{member:e}),r.default.createElement(o.ButtonGhost,{square:!0,size:"small"},r.default.createElement(s.CopyIcon,null)));t.WorkersList=({leader:e,workers:t})=>r.default.createElement("div",null,r.default.createElement(u.Label,null,"Leader"),e&&r.default.createElement(l,{member:e}),r.default.createElement(u.Label,null,"Workers ",t?.length&&r.default.createElement(a.BadgeViolet,null,t?.length)),t&&t.map((e=>r.default.createElement(l,{key:e.handle,member:e}))));const d=i.default.div`
  display: grid;
  grid-template-columns: 1fr 20px;
  grid-column-gap: 4px;
  padding: 4px;
`},3055:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WorkingGroupListItem=void 0;const r=n(A(2784)),i=A(12424),a=n(A(82740)),o=A(31604),s=A(40823),u=A(12101),c=A(32964),l=A(60536);t.WorkingGroupListItem=function({group:e}){const t=i.useHistory(),{member:A}=l.useMember(e.leaderId);return r.default.createElement(d,null,r.default.createElement(p,{onClick:()=>t.push(`/working-groups/grouppreview/${e.id}`)},e.image?r.default.createElement(g,{src:e.image}):r.default.createElement(f,null)),r.default.createElement(h,null,r.default.createElement(m,{onClick:()=>t.push(`/working-groups/grouppreview/${e.id}`)},e.name),e.about&&r.default.createElement(y,null,e.about)),r.default.createElement(I,null,r.default.createElement(E,null,r.default.createElement(B,null,e.workers?.length??0),r.default.createElement(s.Subscription,null,"Workers")),r.default.createElement(E,null,r.default.createElement(B,null,r.default.createElement(o.ValueInJoys,null,e?.budget?.toString())),r.default.createElement(s.Subscription,null,"Current budget")),r.default.createElement(E,null,r.default.createElement(B,null,"1"),r.default.createElement(s.Subscription,null,"Openings")),r.default.createElement(E,null,r.default.createElement(B,null,A?r.default.createElement(C,null,r.default.createElement(c.Avatar,{avatarUri:A.avatar})):"None"),r.default.createElement(s.Subscription,null,"WG Leader"))))};const d=a.default.section`
  display: grid;
  grid-template-columns: 108px 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 24px;
  width: 100%;
  height: 100%;
  max-height: 108px;
  align-items: center;
  padding-right: 32px;
  border: 1px solid ${u.Colors.Black[100]};
  border-radius: ${u.BorderRad.s};
  background-color: ${u.Colors.White};
  overflow: hidden;
  transition: ${u.Transitions.all};

  &:hover,
  &:focus-within {
    border-color: ${u.Colors.Blue[100]};
  }
`,f=a.default(c.AvatarPlaceholderImage)`
  display: flex;
  position: absolute;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
  transform: scale(0.9);
  object-fit: cover;
  transition: ${u.Transitions.all};
`,g=a.default.img`
  display: flex;
  position: absolute;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
  transform: scale(0.9);
  object-fit: cover;
  transition: ${u.Transitions.all};
`,p=a.default.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-right: 1px solid ${u.Colors.Black[100]};
  overflow: hidden;
  cursor: pointer;
  transition: ${u.Transitions.all};

  &:hover {
    border-color: ${u.Colors.Blue[100]};

    ${f},
    ${g} {
      transform: scale(1);
    }
  }
`,h=a.default.article`
  display: grid;
  grid-template-rows: 24px 40px;
  grid-row-gap: 8px;
  width: 100%;
`,m=a.default.h5`
  max-width: 100%;
  ${u.Overflow.Dots};
  transition: ${u.Transitions.all};
  cursor: pointer;

  &:hover {
    color: ${u.Colors.Blue[500]};
  }
  &:active {
    color: ${u.Colors.Blue[600]};
  }
`,y=a.default(o.TextMedium)`
  hyphens: auto;
  height: fit-content;
  max-height: 100%;
  max-width: 100%;
  color: ${u.Colors.Black[500]};
  ${u.Overflow.DotsTwoLine};
`,I=a.default.div`
  display: grid;
  grid-template-columns: 64px 116px 64px 64px;
  justify-content: space-between;
  width: 100%;
  grid-column-gap: 8px;
`,E=a.default.div`
  display: grid;
  grid-row-gap: 10px;
`,B=a.default.span`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 12px;
  align-items: center;
  width: fit-content;
  font-family: ${u.Fonts.Grotesk};
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${u.Colors.Black[900]};
`,C=a.default.div`
  width: 24px;
  height: 24px;
  border-radius: ${u.BorderRad.round};
  overflow: hidden;
`},18414:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WorkingGroupsList=void 0;const r=n(A(2784)),i=n(A(82740)),a=A(3055);t.WorkingGroupsList=({groups:e})=>r.default.createElement(o,null,e.map((e=>r.default.createElement(a.WorkingGroupListItem,{key:e.name,group:e}))));const o=i.default.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 108px;
  grid-row-gap: 8px;
  width: 100%;
`},80912:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.openingTitle=void 0,t.openingTitle=function(e){const t="LEADER"==e.opening.type?"Leader":"Worker";return`${e.opening.groupName} ${t}`}},48064:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMyApplications=void 0;const n=A(2784),r=A(54065),i=A(87138),a=A(24982);t.useMyApplications=function(){const{members:e}=r.useMyMemberships(),t={variables:{applicant_in:e.map((e=>e.id))}},{loading:A,data:o}=i.useGetWorkingGroupApplicationsQuery(t);return{isLoading:A,applications:n.useMemo((()=>o?.workingGroupApplications?.map(a.asApplication)),[A,o])}}},14073:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useOpenings=void 0;const n=A(87138),r=A(62476);t.useOpenings=({groupId:e}={})=>{const{loading:t,data:A}=n.useGetWorkingGroupOpeningsQuery({variables:{group_eq:e}});return{isLoading:t,openings:(A?.workingGroupOpenings??[]).map(r.asWorkingGroupOpening)}}},51610:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useWorkers=void 0;const n=A(2784),r=A(84484),i=A(87138);t.useWorkers=e=>{const t={variables:{group_eq:e}},{data:A,loading:a}=i.useGetWorkersQuery(t);return{workers:n.useMemo((()=>A&&A.workers.map((({membership:e})=>r.asMember(e)))),[A,a]),isLoading:a}}},78843:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useWorkingGroup=void 0;const n=A(87138),r=A(62476);t.useWorkingGroup=function(e){const{data:t,loading:A}=n.useGetWorkingGroupQuery({variables:{id:e}}),i=t?.workingGroup;return{isLoading:A,group:i?r.asWorkingGroup(i):void 0}}},17595:(e,t,A)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useWorkingGroups=void 0;const n=A(87138),r=A(62476);t.useWorkingGroups=()=>{const{data:e,loading:t}=n.useGetWorkingGroupsQuery();return{isLoading:t,groups:(e?.workingGroups??[]).map(r.asWorkingGroup)}}},43609:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ApplyForRoleModal=void 0;const r=n(A(2784)),i=A(86096),a=A(85577),o=A(76550),s=A(2717),u=A(19221),c=A(78893),l=[{title:"Stake"},{title:"Form"},{title:"Submit application"}];t.ApplyForRoleModal=()=>{const{hideModal:e,modalData:{opening:t}}=u.useModal();return r.default.createElement(a.Modal,{onClose:e,modalSize:"l"},r.default.createElement(a.ModalHeader,{onClick:e,title:"Apply for role"}),r.default.createElement(s.StepperModalBody,null,r.default.createElement(s.StepperModalWrapper,null,r.default.createElement(o.Stepper,{steps:l,active:0}),r.default.createElement(s.StepDescriptionColumn,null,r.default.createElement(c.OpeningFormPreview,{opening:t})),r.default.createElement(s.StepperBody,null,"Form"))),r.default.createElement(a.ModalFooter,null,r.default.createElement(i.ButtonPrimary,null,"Next step")))}},89509:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(43609),t)},88458:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)"default"!==A&&Object.prototype.hasOwnProperty.call(e,A)&&n(t,e,A);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.useGetWorkingGroupApplicationsLazyQuery=t.useGetWorkingGroupApplicationsQuery=t.GetWorkingGroupApplicationsDocument=t.useGetWorkingGroupLazyQuery=t.useGetWorkingGroupQuery=t.GetWorkingGroupDocument=t.useGetWorkingGroupOpeningsLazyQuery=t.useGetWorkingGroupOpeningsQuery=t.GetWorkingGroupOpeningsDocument=t.useGetWorkersLazyQuery=t.useGetWorkersQuery=t.GetWorkersDocument=t.useGetWorkingGroupsLazyQuery=t.useGetWorkingGroupsQuery=t.GetWorkingGroupsDocument=t.WorkingGroupApplicationFieldsFragmentDoc=t.WorkingGroupOpeningFieldsFragmentDoc=t.WorkingGroupOpeningMetadataFieldsFragmentDoc=t.WorkingGroupFieldsFragmentDoc=t.WorkerFieldsFragmentDoc=t.WorkingGroupStatusFieldsFragmentDoc=void 0;const a=A(22874),o=A(73059),s=i(A(73059)),u={};t.WorkingGroupStatusFieldsFragmentDoc=o.gql`
  fragment WorkingGroupStatusFields on WorkingGroupStatus {
    name
    about
    description
    message
  }
`,t.WorkerFieldsFragmentDoc=o.gql`
  fragment WorkerFields on Worker {
    membership {
      ...MemberFields
    }
    group {
      id
    }
  }
  ${a.MemberFieldsFragmentDoc}
`,t.WorkingGroupFieldsFragmentDoc=o.gql`
  fragment WorkingGroupFields on WorkingGroup {
    id
    name
    budget
    status {
      ...WorkingGroupStatusFields
    }
    workers {
      ...WorkerFields
    }
    leader {
      membership {
        id
      }
    }
  }
  ${t.WorkingGroupStatusFieldsFragmentDoc}
  ${t.WorkerFieldsFragmentDoc}
`,t.WorkingGroupOpeningMetadataFieldsFragmentDoc=o.gql`
  fragment WorkingGroupOpeningMetadataFields on WorkingGroupOpeningMetadata {
    applicationDetails
    shortDescription
    hiringLimit
    expectedEnding
  }
`,t.WorkingGroupOpeningFieldsFragmentDoc=o.gql`
  fragment WorkingGroupOpeningFields on WorkingGroupOpening {
    id
    type
    stakeAmount
    rewardPerBlock
    metadata {
      ...WorkingGroupOpeningMetadataFields
    }
    applications {
      id
      status {
        __typename
      }
    }
  }
  ${t.WorkingGroupOpeningMetadataFieldsFragmentDoc}
`,t.WorkingGroupApplicationFieldsFragmentDoc=o.gql`
  fragment WorkingGroupApplicationFields on WorkingGroupApplication {
    id
    opening {
      group {
        name
      }
      type
      rewardPerBlock
    }
    applicant {
      ...MemberFields
    }
    status {
      __typename
    }
  }
  ${a.MemberFieldsFragmentDoc}
`,t.GetWorkingGroupsDocument=o.gql`
  query getWorkingGroups {
    workingGroups {
      ...WorkingGroupFields
    }
  }
  ${t.WorkingGroupFieldsFragmentDoc}
`,t.useGetWorkingGroupsQuery=function(e){const A={...u,...e};return s.useQuery(t.GetWorkingGroupsDocument,A)},t.useGetWorkingGroupsLazyQuery=function(e){const A={...u,...e};return s.useLazyQuery(t.GetWorkingGroupsDocument,A)},t.GetWorkersDocument=o.gql`
  query getWorkers($group_eq: ID) {
    workers(where: { group_eq: $group_eq }) {
      ...WorkerFields
    }
  }
  ${t.WorkerFieldsFragmentDoc}
`,t.useGetWorkersQuery=function(e){const A={...u,...e};return s.useQuery(t.GetWorkersDocument,A)},t.useGetWorkersLazyQuery=function(e){const A={...u,...e};return s.useLazyQuery(t.GetWorkersDocument,A)},t.GetWorkingGroupOpeningsDocument=o.gql`
  query getWorkingGroupOpenings($group_eq: ID) {
    workingGroupOpenings(where: { group_eq: $group_eq }) {
      ...WorkingGroupOpeningFields
    }
  }
  ${t.WorkingGroupOpeningFieldsFragmentDoc}
`,t.useGetWorkingGroupOpeningsQuery=function(e){const A={...u,...e};return s.useQuery(t.GetWorkingGroupOpeningsDocument,A)},t.useGetWorkingGroupOpeningsLazyQuery=function(e){const A={...u,...e};return s.useLazyQuery(t.GetWorkingGroupOpeningsDocument,A)},t.GetWorkingGroupDocument=o.gql`
  query GetWorkingGroup($id: ID!) {
    workingGroup(where: { id: $id }) {
      ...WorkingGroupFields
    }
  }
  ${t.WorkingGroupFieldsFragmentDoc}
`,t.useGetWorkingGroupQuery=function(e){const A={...u,...e};return s.useQuery(t.GetWorkingGroupDocument,A)},t.useGetWorkingGroupLazyQuery=function(e){const A={...u,...e};return s.useLazyQuery(t.GetWorkingGroupDocument,A)},t.GetWorkingGroupApplicationsDocument=o.gql`
  query GetWorkingGroupApplications($applicant_in: [ID!]) {
    workingGroupApplications(where: { applicant_in: $applicant_in }) {
      ...WorkingGroupApplicationFields
    }
  }
  ${t.WorkingGroupApplicationFieldsFragmentDoc}
`,t.useGetWorkingGroupApplicationsQuery=function(e){const A={...u,...e};return s.useQuery(t.GetWorkingGroupApplicationsDocument,A)},t.useGetWorkingGroupApplicationsLazyQuery=function(e){const A={...u,...e};return s.useLazyQuery(t.GetWorkingGroupApplicationsDocument,A)}},87138:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(88458),t)},26227:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.asWorkingGroup=void 0;const r=n(A(62197)),i=e=>({membership:e.membership});t.asWorkingGroup=e=>({id:e.id,image:void 0,name:e.name,about:e.status?.about??"",description:e.status?.description??"",statusMessage:e.status?.message??"",workers:e.workers?.map(i)??[],leaderId:e.leader?.membership.id,budget:new r.default(e.budget)})},24982:function(e,t,A){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.asApplication=void 0;const r=n(A(62197));t.asApplication=e=>({id:e.id,opening:{type:e.opening.type,groupName:e.opening.group.name,reward:new r.default(e.opening.rewardPerBlock)},status:e.status.__typename})},69435:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.asWorkingGroupOpening=void 0,t.asWorkingGroupOpening=e=>({id:e.id,applicants:{current:0,total:e.applications?.length||0},type:e.type,reward:{value:e.rewardPerBlock,interval:1},expectedEnding:e.metadata.expectedEnding,hiring:{current:0,total:e.metadata.hiringLimit},title:e.metadata.shortDescription})},62476:function(e,t,A){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,A,n){void 0===n&&(n=A),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[A]}})}:function(e,t,A,n){void 0===n&&(n=A),e[n]=t[A]}),r=this&&this.__exportStar||function(e,t){for(var A in e)"default"===A||Object.prototype.hasOwnProperty.call(t,A)||n(t,e,A)};Object.defineProperty(t,"__esModule",{value:!0}),r(A(26227),t),r(A(69435),t)},91070:e=>{"use strict";e.exports=JSON.parse('[{"id":"0","openingId":"0","applicantId":"0","roleAccount":"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY","rewardAccount":"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY","stakingAccount":"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY","answers":[],"status":"pending","createdAtBlockId":"block-1","createdAtTime":""},{"id":"1","openingId":"0","applicantId":"1","roleAccount":"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY","rewardAccount":"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY","stakingAccount":"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY","answers":[],"status":"accepted","createdAtBlockId":"block-1","createdAtTime":""},{"id":"2","openingId":"1","applicantId":"2","roleAccount":"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY","rewardAccount":"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY","stakingAccount":"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY","answers":[],"status":"rejected","createdAtBlockId":"block-1","createdAtTime":""}]')},74765:e=>{"use strict";e.exports=JSON.parse('[{"id":"block-1","network":"Babylon","block":321001,"timestamp":"2021-03-09T10:18:04.155Z"},{"id":"block-2","network":"Babylon","block":321002,"timestamp":"2021-03-09T10:28:04.155Z"},{"id":"block-3","network":"Babylon","block":321003,"timestamp":"2021-03-09T10:38:04.155Z"},{"id":"block-4","network":"Babylon","block":321004,"timestamp":"2021-03-10T10:38:04.155Z"}]')},27143:e=>{"use strict";e.exports=JSON.parse('[{"id":"0","rootAccount":"5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY","controllerAccount":"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY","name":"Alice Member","handle":"alice","about":"Pudding muffin toffee bear claw cake. Jelly-o lemon drops icing dessert powder chocolate biscuit. Soufflé jujubes cake powder.","isVerified":true,"isFoundingMember":true,"inviteCount":3,"registeredAtBlockId":"block-1","registeredAtTime":"2021-03-29 18:21:06.000000"},{"id":"1","rootAccount":"5HpG9w8EBLe5XCrbczpwq5TSXvedjrBGCwqxK1iQ7qUsSWFc","controllerAccount":"5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty","name":"Bob Member","handle":"bob","about":"Oat cake sesame snaps jelly-o jelly-o. Pudding muffin toffee bear claw cake. Croissant muffin bear claw biscuit danish. Jelly beans donut pastry sugar plum lollipop dragée. Jelly-o lemon drops icing dessert powder chocolate biscuit. Soufflé jujubes cake powder.","isVerified":true,"isFoundingMember":false,"inviteCount":2,"registeredAtBlockId":"block-2","registeredAtTime":"2021-03-29 18:21:06.000000","invitedById":"0"},{"id":"2","rootAccount":"5HGjWAeFDfFCWPsjFQdVV2Msvz2XtMktvgocEZcCj68kUMaw","controllerAccount":"5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL","name":"Landon Jimenez The Third","handle":"silverswan131","about":"Wafer pudding powder liquorice pastry candy pastry gummi bears lollipop. Powder apple pie pastry. Bear claw candy brownie wafer. Gingerbread chocolate bar caramels. Powder caramels jelly-o chocolate bar tart donut oat cake danish. Halvah halvah cake. Ice cream pastry caramels pudding sugar plum. Oat cake chocolate cake lemon drops toffee gingerbread jelly. Croissant jelly beans sesame snaps powder sugar plum chocolate cake ice cream cupcake tiramisu. Cupcake carrot cake tiramisu soufflé danish cake jelly sweet roll soufflé. Oat cake cheesecake jelly. Tiramisu jelly-o sugar plum sugar plum soufflé candy canes croissant carrot cake. Bear claw oat cake powder cheesecake gingerbread macaroon liquorice liquorice.","isVerified":false,"isFoundingMember":false,"inviteCount":5,"registeredAtBlockId":"block-3","registeredAtTime":"2021-03-29 18:21:06.000000","invitedById":"0"},{"id":"3","rootAccount":"5GETSBUMwbLJgUTWMQgU8B2CP7E8kDHR8NoNNZh5tqums9AF","controllerAccount":"5GETSBUMwbLJgUTWMQgU8B2CP7E8kDHR8NoNNZh5tqums9AF","name":"Some Member 4","handle":"member 4","about":"Wafer pudding powder liquorice pastry candy pastry gummi bears lollipop. Powder apple pie pastry. Bear claw candy brownie wafer. Gingerbread chocolate bar caramels. Powder caramels jelly-o chocolate bar tart donut oat cake danish. Halvah halvah cake. Ice cream pastry caramels pudding sugar plum. Oat cake chocolate cake lemon drops toffee gingerbread jelly. Croissant jelly beans sesame snaps powder sugar plum chocolate cake ice cream cupcake tiramisu. Cupcake carrot cake tiramisu soufflé danish cake jelly sweet roll soufflé. Oat cake cheesecake jelly. Tiramisu jelly-o sugar plum sugar plum soufflé candy canes croissant carrot cake. Bear claw oat cake powder cheesecake gingerbread macaroon liquorice liquorice.","isVerified":false,"isFoundingMember":false,"inviteCount":5,"registeredAtBlockId":"block-3","registeredAtTime":"2021-03-29 18:21:06.000000"},{"id":"4","rootAccount":"5GETSBUMwbLJgUTWMQgU8B2CP7E8kDHR8NoNNZh5tqums9AF","controllerAccount":"5GETSBUMwbLJgUTWMQgU8B2CP7E8kDHR8NoNNZh5tqums9AF","name":"Some Member 5","handle":"some_member_5","about":"Wafer pudding powder liquorice pastry candy pastry gummi bears lollipop. Powder apple pie pastry. Bear claw candy brownie wafer. Gingerbread chocolate bar caramels. Powder caramels jelly-o chocolate bar tart donut oat cake danish. Halvah halvah cake. Ice cream pastry caramels pudding sugar plum. Oat cake chocolate cake lemon drops toffee gingerbread jelly. Croissant jelly beans sesame snaps powder sugar plum chocolate cake ice cream cupcake tiramisu. Cupcake carrot cake tiramisu soufflé danish cake jelly sweet roll soufflé. Oat cake cheesecake jelly. Tiramisu jelly-o sugar plum sugar plum soufflé candy canes croissant carrot cake. Bear claw oat cake powder cheesecake gingerbread macaroon liquorice liquorice.","isVerified":false,"isFoundingMember":false,"inviteCount":5,"registeredAtBlockId":"block-4","registeredAtTime":"2021-03-29 18:21:06.000000"},{"id":"5","rootAccount":"5GETSBUMwbLJgUTWMQgU8B2CP7E8kDHR8NoNNZh5tqums9AF","controllerAccount":"5GETSBUMwbLJgUTWMQgU8B2CP7E8kDHR8NoNNZh5tqums9AF","name":"Some Member 6","handle":"some_member_6","about":"Wafer pudding powder liquorice pastry candy pastry gummi bears lollipop. Powder apple pie pastry. Bear claw candy brownie wafer. Gingerbread chocolate bar caramels. Powder caramels jelly-o chocolate bar tart donut oat cake danish. Halvah halvah cake. Ice cream pastry caramels pudding sugar plum. Oat cake chocolate cake lemon drops toffee gingerbread jelly. Croissant jelly beans sesame snaps powder sugar plum chocolate cake ice cream cupcake tiramisu. Cupcake carrot cake tiramisu soufflé danish cake jelly sweet roll soufflé. Oat cake cheesecake jelly. Tiramisu jelly-o sugar plum sugar plum soufflé candy canes croissant carrot cake. Bear claw oat cake powder cheesecake gingerbread macaroon liquorice liquorice.","isVerified":false,"isFoundingMember":false,"inviteCount":5,"registeredAtBlockId":"block-4","registeredAtTime":"2021-03-29 18:21:06.000000"},{"id":"6","rootAccount":"5GETSBUMwbLJgUTWMQgU8B2CP7E8kDHR8NoNNZh5tqums9AF","controllerAccount":"5GETSBUMwbLJgUTWMQgU8B2CP7E8kDHR8NoNNZh5tqums9AF","name":"Some Member 7","handle":"some_member_7","about":"Wafer pudding powder liquorice pastry candy pastry gummi bears lollipop. Powder apple pie pastry. Bear claw candy brownie wafer. Gingerbread chocolate bar caramels. Powder caramels jelly-o chocolate bar tart donut oat cake danish. Halvah halvah cake. Ice cream pastry caramels pudding sugar plum. Oat cake chocolate cake lemon drops toffee gingerbread jelly. Croissant jelly beans sesame snaps powder sugar plum chocolate cake ice cream cupcake tiramisu. Cupcake carrot cake tiramisu soufflé danish cake jelly sweet roll soufflé. Oat cake cheesecake jelly. Tiramisu jelly-o sugar plum sugar plum soufflé candy canes croissant carrot cake. Bear claw oat cake powder cheesecake gingerbread macaroon liquorice liquorice.","isVerified":false,"isFoundingMember":false,"inviteCount":5,"registeredAtBlockId":"block-4","registeredAtTime":"2021-03-29 18:21:06.000000"},{"id":"7","rootAccount":"5GETSBUMwbLJgUTWMQgU8B2CP7E8kDHR8NoNNZh5tqums9AF","controllerAccount":"5GETSBUMwbLJgUTWMQgU8B2CP7E8kDHR8NoNNZh5tqums9AF","name":"Some Member 8","handle":"some_member_8","about":"Wafer pudding powder liquorice pastry candy pastry gummi bears lollipop. Powder apple pie pastry. Bear claw candy brownie wafer. Gingerbread chocolate bar caramels. Powder caramels jelly-o chocolate bar tart donut oat cake danish. Halvah halvah cake. Ice cream pastry caramels pudding sugar plum. Oat cake chocolate cake lemon drops toffee gingerbread jelly. Croissant jelly beans sesame snaps powder sugar plum chocolate cake ice cream cupcake tiramisu. Cupcake carrot cake tiramisu soufflé danish cake jelly sweet roll soufflé. Oat cake cheesecake jelly. Tiramisu jelly-o sugar plum sugar plum soufflé candy canes croissant carrot cake. Bear claw oat cake powder cheesecake gingerbread macaroon liquorice liquorice.","isVerified":false,"isFoundingMember":false,"inviteCount":5,"registeredAtBlockId":"block-4","registeredAtTime":"2021-03-29 18:21:06.000000"},{"id":"8","rootAccount":"5GETSBUMwbLJgUTWMQgU8B2CP7E8kDHR8NoNNZh5tqums9AF","controllerAccount":"5GETSBUMwbLJgUTWMQgU8B2CP7E8kDHR8NoNNZh5tqums9AF","name":"Some Member 9","handle":"some_member_9","about":"Wafer pudding powder liquorice pastry candy pastry gummi bears lollipop. Powder apple pie pastry. Bear claw candy brownie wafer. Gingerbread chocolate bar caramels. Powder caramels jelly-o chocolate bar tart donut oat cake danish. Halvah halvah cake. Ice cream pastry caramels pudding sugar plum. Oat cake chocolate cake lemon drops toffee gingerbread jelly. Croissant jelly beans sesame snaps powder sugar plum chocolate cake ice cream cupcake tiramisu. Cupcake carrot cake tiramisu soufflé danish cake jelly sweet roll soufflé. Oat cake cheesecake jelly. Tiramisu jelly-o sugar plum sugar plum soufflé candy canes croissant carrot cake. Bear claw oat cake powder cheesecake gingerbread macaroon liquorice liquorice.","isVerified":false,"isFoundingMember":false,"inviteCount":5,"registeredAtBlockId":"block-4","registeredAtTime":"2021-03-29 18:21:06.000000"},{"id":"9","rootAccount":"5GETSBUMwbLJgUTWMQgU8B2CP7E8kDHR8NoNNZh5tqums9AF","controllerAccount":"5GETSBUMwbLJgUTWMQgU8B2CP7E8kDHR8NoNNZh5tqums9AF","name":"Some Member 10","handle":"some_member_10","about":"Wafer pudding powder liquorice pastry candy pastry gummi bears lollipop. Powder apple pie pastry. Bear claw candy brownie wafer. Gingerbread chocolate bar caramels. Powder caramels jelly-o chocolate bar tart donut oat cake danish. Halvah halvah cake. Ice cream pastry caramels pudding sugar plum. Oat cake chocolate cake lemon drops toffee gingerbread jelly. Croissant jelly beans sesame snaps powder sugar plum chocolate cake ice cream cupcake tiramisu. Cupcake carrot cake tiramisu soufflé danish cake jelly sweet roll soufflé. Oat cake cheesecake jelly. Tiramisu jelly-o sugar plum sugar plum soufflé candy canes croissant carrot cake. Bear claw oat cake powder cheesecake gingerbread macaroon liquorice liquorice.","isVerified":false,"isFoundingMember":false,"inviteCount":5,"registeredAtBlockId":"block-4","registeredAtTime":"2021-03-29 18:21:06.000000"}]')},76678:e=>{"use strict";e.exports=JSON.parse('[{"id":"0","groupId":0,"type":"REGULAR","status":"open","stakeAmount":2000,"metadata":{"shortDescription":"Working Group Worker","description":"Content Curators will one day be essential for ensuring that the petabytes of media items uploaded to Joystream are formatted correctly and comprehensively monitored and moderated. Our current testnet allows this content monitoring to take place by giving users who are selected for the role administrative access to the Joystream content directory to make changes where necessary.","hiringLimit":1,"expectedEnding":"2022-03-09T10:18:04.155Z","applicationDetails":"Details... ?","applicationFormQuestions":[]},"unstakingPeriod":5,"rewardPerBlock":200,"createdAtBlock":5,"createdAtTime":"2021-04-09T13:37:42.155Z"},{"id":"1","groupId":0,"type":"LEADER","status":"open","stakeAmount":2000,"metadata":{"shortDescription":"Become A Working Group Leader","description":"Content Curators will one day be essential for ensuring that the petabytes of media items uploaded to Joystream are formatted correctly and comprehensively monitored and moderated. Our current testnet allows this content monitoring to take place by giving users who are selected for the role administrative access to the Joystream content directory to make changes where necessary.","hiringLimit":1,"expectedEnding":"2022-03-09T10:18:04.155Z","applicationDetails":"Details... ?","applicationFormQuestions":[]},"unstakingPeriod":5,"rewardPerBlock":1200,"createdAtBlock":5,"createdAtTime":"2021-04-09T13:37:42.155Z"},{"id":"2","groupId":0,"type":"LEADER","status":"filled","stakeAmount":2000,"metadata":{"shortDescription":"Become A Working Group Leader","description":"Content Curators will one day be essential for ensuring that the petabytes of media items uploaded to Joystream are formatted correctly and comprehensively monitored and moderated. Our current testnet allows this content monitoring to take place by giving users who are selected for the role administrative access to the Joystream content directory to make changes where necessary.","hiringLimit":1,"expectedEnding":"2022-03-09T10:18:04.155Z","applicationDetails":"Details... ?","applicationFormQuestions":[]},"unstakingPeriod":5,"rewardPerBlock":200,"createdAtBlock":5,"createdAtTime":"2021-04-09T13:37:42.155Z"},{"id":"3","groupId":0,"type":"REGULAR","status":"cancelled","stakeAmount":2000,"metadata":{"shortDescription":"Working Group Worker","description":"Content Curators will one day be essential for ensuring that the petabytes of media items uploaded to Joystream are formatted correctly and comprehensively monitored and moderated. Our current testnet allows this content monitoring to take place by giving users who are selected for the role administrative access to the Joystream content directory to make changes where necessary.","hiringLimit":1,"expectedEnding":"2022-03-09T10:18:04.155Z","applicationDetails":"Details... ?","applicationFormQuestions":[]},"unstakingPeriod":5,"rewardPerBlock":200,"createdAtBlock":5,"createdAtTime":"2021-04-09T13:37:42.155Z"}]')},21413:e=>{"use strict";e.exports=JSON.parse('[{"id":"0","name":"Distribution","workers":["0","1","2"],"leaderId":"0","budget":"1000","status":{"name":"Status name","message":"Status message","about":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","setAtBlockId":"block-1","setAtTime":"2021-03-09T10:28:04.155Z"}},{"id":"1","image":"https://s.gitcoin.co/static/v2/card/thumb.0a0be2e5841a.jpg","name":"Storage","workers":["2"],"budget":"2000","status":{"name":"Status name","message":"Status message","about":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","setAtBlockId":"block-1","setAtTime":"2021-03-09T10:28:04.155Z"}},{"id":"2","name":"Forum","workers":["4","5","6","7","8"],"leaderId":"6","budget":"1001","status":{"name":"Status name","message":"Status message","about":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","setAtBlockId":"block-1","setAtTime":"2021-03-09T10:28:04.155Z"}}]')},72002:()=>{},9679:()=>{},38087:()=>{},27464:()=>{},39415:()=>{},87374:()=>{},29285:()=>{},57267:()=>{},59255:()=>{}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var A=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(A.exports,A,A.exports,__webpack_require__),A.loaded=!0,A.exports}__webpack_require__.amdO={},__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var A in t)__webpack_require__.o(t,A)&&!__webpack_require__.o(e,A)&&Object.defineProperty(e,A,{enumerable:!0,get:t[A]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var t=__webpack_require__.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var A=t.getElementsByTagName("script");A.length&&(e=A[A.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})();var __webpack_exports__=__webpack_require__(92629)})();
//# sourceMappingURL=main.5abd7a2d1545ecdf45b0.js.map