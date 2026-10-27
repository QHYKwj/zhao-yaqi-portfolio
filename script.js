'use strict';
const works = {
  guyao: {title:'古妖奇谭',type:'01 / AI SHORT DRAMA',role:'AI 短剧 · 主创剪辑成员',description:'负责全片剪辑、节奏把控与后期包装，涵盖素材整合、画面调色、音效设计、字幕合成等全流程制作；参与人设与场景创意策划，配合团队完成分镜效果落地。',awards:['上线优酷平台，上线当天登顶预约热度 TOP1。','入围北京国际电影节、大学生 AI 艺术季。','获 2026 年青年视听艺术作品推优“优秀作品”。','在大学生 AI 艺术季创投大会微短剧单元获评优胜提案。','获新华日报交汇点专题报道。']},
  metro: {title:'南京地铁 20 周年',type:'02 / AIGC FILM',role:'AIGC 短片 · 主创成员',description:'参与作品核心制作环节，包括拍摄、剪辑与后期包装等，以 AIGC 影像展开城市主题创作。',awards:['获 2025 第六届江苏省大学生视听智能影像大赛金奖。','获 2026 年青年视听艺术作品推优“优秀作品”。']},
  gold: {title:'镀金',type:'03 / AIGC ANIMATION',role:'AIGC 短片 · 主创成员',description:'参与 AIGC 短片创作及核心制作环节，包括拍摄、剪辑、后期包装等。',awards:['获 2026 年“马栏山杯”AIGC 原创动漫创意大赛原创动画单元入围奖。']},
  wind: {title:'去有风的地方',type:'04 / SHORT VIDEO',role:'短视频 · 主创成员',description:'参与短视频核心制作环节，包括拍摄、剪辑与后期包装等。',awards:['获“印象中国”2025 年度短视频征集展示活动“好作品”奖项。']}
};
const dialog=document.querySelector('#work-dialog');
let opener;
function closeDialog(){dialog.close();}
document.querySelectorAll('[data-work]').forEach(card=>card.addEventListener('click',()=>{
  const work=works[card.dataset.work];opener=card;
  document.querySelector('#dialog-type').textContent=work.type;
  document.querySelector('#dialog-title').textContent=work.title;
  document.querySelector('#dialog-role').textContent=work.role;
  document.querySelector('#dialog-description').textContent=work.description;
  document.querySelector('#dialog-awards').replaceChildren(...work.awards.map(award=>{const li=document.createElement('li');li.textContent=award;return li;}));
  dialog.showModal();document.body.style.overflow='hidden';
}));
dialog.querySelector('.dialog-close').addEventListener('click',closeDialog);
dialog.querySelector('.dialog-back').addEventListener('click',closeDialog);
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeDialog();}});
dialog.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus({preventScroll:true});});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;});
}));
let toastTimer;
function toast(message){const el=document.querySelector('#toast');el.textContent=message;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),3000);}
document.querySelector('#copy-email').addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText('3239869882@qq.com');toast('邮箱已复制，期待你的来信。');}
  catch{toast('请长按邮箱地址复制：3239869882@qq.com');}
});
let scheduled=false;
function updateProgress(){const distance=document.documentElement.scrollHeight-innerHeight;document.querySelector('.read-progress').style.width=(distance>0?scrollY/distance*100:0)+'%';scheduled=false;}
addEventListener('scroll',()=>{if(!scheduled){requestAnimationFrame(updateProgress);scheduled=true;}},{passive:true});
addEventListener('resize',updateProgress);updateProgress();
document.querySelector('#year').textContent=new Date().getFullYear();
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}}),{threshold:0.06});
  document.querySelectorAll('.about-grid,.numbers,.section-title,.work-card,.timeline article,.skill-grid article,.campus,.contact-bottom').forEach(el=>{el.classList.add('reveal');observer.observe(el);});
}
