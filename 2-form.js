import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a=document.querySelector(".feedback-form"),e={email:"",message:""},o="feedback-form-state";r();a.addEventListener("input",l);a.addEventListener("submit",n);function l(t){e[t.target.name]=t.target.value,localStorage.setItem(o,JSON.stringify(e))}function r(){const t=localStorage.getItem(o);if(t){const{email:m,message:s}=JSON.parse(t);a.email.value=m||"",a.message.value=s||"",e.email=m||"",e.message=s||""}}function n(t){if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log("Form submitted:",e),localStorage.removeItem(o),a.reset(),e.email="",e.message=""}
//# sourceMappingURL=2-form.js.map