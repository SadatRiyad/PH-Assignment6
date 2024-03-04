let count = 1;
/* id: 101  */



// for load all phones from api
const loadAllPosts = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await response.json();
  const allPosts = data.posts;
  displayAllPosts(allPosts);
};

// display all posts on the page
const displayAllPosts = (allPosts) => {
  const postsContainer = document.getElementById("posts-container");
  allPosts.forEach((post) => {
    // console.log(post)
    const postElement = document.createElement("div");
    postElement.classList = `discuss-post-card all-post bg-[#F3F3F5] hover:bg-[#797DFC1A] border-[1px] border-solid hover:border-[1px] hover:border-solid hover:border-[#797DFC] rounded-2xl p-7 mb-5`;
    postElement.innerHTML = `
    <div class="flex flex-col lg:flex-row discuss-post-card-inner">
    <div class="avatar indicator  discuss-post-card-left mr-4 mb-4 mt-0 ml-2">
        <span class="indicator-item badge ${
          post.isActive ? "bg-green-600" : "bg-red-600"
        }"></span>
        <div class="w-20 h-20 rounded-lg">
            <img alt=""
                src="${post.image}" />
        </div>
    </div>

    <div class="discuss-post-card-right ml-2 w-full">
        <p class="text-xs font-p-color opacity-70 font-bold"># <span
                class="mr-7">${post.category}</span> Author : <span>${
      post.author.name
    }</span></p>
        <h3 class="text-h-color font-bold text-xl mt-1 mb-1">${post.title}</h3>
        <p class="text-xs font-p-color opacity-70 font-medium my-2">${
          post.description
        }</p>
        <hr class="my-3">
        <div class="flex justify-between gap-x-4">
            <div
                class="flex justify-between w-3/4 md:w-[60%] discuss-post-card-right-bottom">
                <div class="discuss-post-card-right-bottom-left">
                    <p class="flex text-p-color text-sm"><svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                            viewBox="0 0 28 28" fill="none">
                            <path
                                d="M9.33333 10.5H18.6667M9.33333 15.1666H16.3333M10.5 21H7C6.07174 21 5.1815 20.6312 4.52513 19.9748C3.86875 19.3185 3.5 18.4282 3.5 17.5V8.16663C3.5 7.23837 3.86875 6.34813 4.52513 5.69175C5.1815 5.03538 6.07174 4.66663 7 4.66663H21C21.9283 4.66663 22.8185 5.03538 23.4749 5.69175C24.1313 6.34813 24.5 7.23837 24.5 8.16663V17.5C24.5 18.4282 24.1313 19.3185 23.4749 19.9748C22.8185 20.6312 21.9283 21 21 21H17.5L14 24.5L10.5 21Z"
                                stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg> <span class="ml-1">${
                          post.comment_count
                        }</span></p>
                </div>
                <div class="discuss-post-card-right-bottom-left">
                    <p class="flex text-p-color text-sm"><svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                            viewBox="0 0 28 28" fill="none">
                            <path
                                d="M11.6667 14C11.6667 14.6188 11.9125 15.2123 12.3501 15.6499C12.7877 16.0875 13.3812 16.3333 14 16.3333C14.6188 16.3333 15.2123 16.0875 15.6499 15.6499C16.0875 15.2123 16.3333 14.6188 16.3333 14C16.3333 13.3812 16.0875 12.7877 15.6499 12.3501C15.2123 11.9125 14.6188 11.6667 14 11.6667C13.3812 11.6667 12.7877 11.9125 12.3501 12.3501C11.9125 12.7877 11.6667 13.3812 11.6667 14Z"
                                stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M24.5 14C21.7 18.6667 18.2 21 14 21C9.8 21 6.3 18.6667 3.5 14C6.3 9.33333 9.8 7 14 7C18.2 7 21.7 9.33333 24.5 14Z"
                                stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg><span class="ml-1">${post.view_count}</span></p>
                </div>
                <div class="discuss-post-card-right-bottom-left">
                    <p class="flex text-p-color text-sm"><svg
                            xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 28 28" fill="none">
                            <path
                                d="M9.91667 14H14V8.16667M3.5 14C3.5 15.3789 3.77159 16.7443 4.29926 18.0182C4.82694 19.2921 5.60036 20.4496 6.57538 21.4246C7.55039 22.3996 8.70791 23.1731 9.98182 23.7007C11.2557 24.2284 12.6211 24.5 14 24.5C15.3789 24.5 16.7443 24.2284 18.0182 23.7007C19.2921 23.1731 20.4496 22.3996 21.4246 21.4246C22.3996 20.4496 23.1731 19.2921 23.7007 18.0182C24.2284 16.7443 24.5 15.3789 24.5 14C24.5 12.6211 24.2284 11.2557 23.7007 9.98182C23.1731 8.70791 22.3996 7.55039 21.4246 6.57538C20.4496 5.60036 19.2921 4.82694 18.0182 4.29927C16.7443 3.77159 15.3789 3.5 14 3.5C12.6211 3.5 11.2557 3.77159 9.98182 4.29927C8.70791 4.82694 7.55039 5.60036 6.57538 6.57538C5.60036 7.55039 4.82694 8.70791 4.29926 9.98182C3.77159 11.2557 3.5 12.6211 3.5 14Z"
                                stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg> <span class="ml-1">${
                          post.posted_time
                        } min</span></p>
                </div>
            </div>
            <div class="discuss-post-card-right-bottom-right flex justify-end" id="all">
                <button onclick="allPosts('${post.title}', ${
      post.view_count
    })" class="all-post"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                        viewBox="0 0 28 28" fill="none">
                        <g clip-path="url(#clip0_57_425)">
                            <path
                                d="M13.9998 0C6.26805 0 9.15527e-05 6.26814 9.15527e-05 13.9999C9.15527e-05 21.7314 6.26805 28 13.9998 28C21.7315 28 27.9999 21.7314 27.9999 13.9999C27.9999 6.26814 21.7315 0 13.9998 0ZM14 4.91741L22.2847 10.0835H5.71542L14 4.91741ZM22.3879 18.333H22.3871C22.3871 19.1616 21.7155 19.8331 20.887 19.8331H7.1131C6.28447 19.8331 5.61303 19.1615 5.61303 18.333V10.4122C5.61303 10.3245 5.62199 10.2393 5.63655 10.1556L13.552 15.0914C13.5617 15.0975 13.5721 15.1016 13.5821 15.1072C13.5925 15.113 13.6032 15.1186 13.6138 15.1239C13.6697 15.1527 13.7273 15.176 13.7862 15.1912C13.7923 15.1929 13.7983 15.1936 13.8044 15.195C13.869 15.2102 13.9344 15.2197 13.9998 15.2197H14.0002C14.0007 15.2197 14.0012 15.2197 14.0012 15.2197C14.0665 15.2197 14.1319 15.2105 14.1965 15.195C14.2026 15.1935 14.2086 15.1929 14.2147 15.1912C14.2735 15.176 14.3309 15.1527 14.3871 15.1239C14.3977 15.1186 14.4084 15.113 14.4188 15.1072C14.4287 15.1016 14.4392 15.0975 14.4489 15.0914L22.3644 10.1556C22.3789 10.2393 22.3879 10.3244 22.3879 10.4122V18.333Z"
                                fill="#10B981" />
                        </g>
                        <defs>
                            <clipPath id="clip0_57_425">
                                <rect width="28" height="28" fill="white" />
                            </clipPath>
                        </defs>
                    </svg></button>
            </div>
        </div>
    </div>
</div>
    `;
    postsContainer.appendChild(postElement);
  });

  //  right side section for count
  const all = document.querySelectorAll("#all");
  for (let i = 0; i < all.length; i++) {
    const postSelect = all[i];

    postSelect.addEventListener("click", function () {
      if (!this.classList.contains("selected")) {
        const mark = (document.getElementById("mark").innerText =
          "(" + count + ")");

        count++;
      }
    });
  }
};
loadAllPosts();

// right side section for show title view when click
const allPosts = (title, view) => {
  //   console.log(title, view);
  const postsContainer2 = document.getElementById("posts-container2");
  const postElement2 = document.createElement("div");
  postElement2.classList = `flex items-center bg-white p-4 mt-4 rounded-2xl justify-between w-full`;
  postElement2.innerHTML = `
        <div>
            <h3 class="text-h-color font-bold text-base mt-1 mb-1">${title}</h3>
        </div>
        <div class="discuss-post-card-right-bottom-left ml-4">
            <p class="flex text-p-color text-sm"><svg
                    xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                    viewBox="0 0 28 28" fill="none">
                    <path
                        d="M11.6667 14C11.6667 14.6188 11.9125 15.2123 12.3501 15.6499C12.7877 16.0875 13.3812 16.3333 14 16.3333C14.6188 16.3333 15.2123 16.0875 15.6499 15.6499C16.0875 15.2123 16.3333 14.6188 16.3333 14C16.3333 13.3812 16.0875 12.7877 15.6499 12.3501C15.2123 11.9125 14.6188 11.6667 14 11.6667C13.3812 11.6667 12.7877 11.9125 12.3501 12.3501C11.9125 12.7877 11.6667 13.3812 11.6667 14Z"
                        stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M24.5 14C21.7 18.6667 18.2 21 14 21C9.8 21 6.3 18.6667 3.5 14C6.3 9.33333 9.8 7 14 7C18.2 7 21.7 9.33333 24.5 14Z"
                        stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg> <span class="ml-1">${view}</span></p>
        </div>
    `;
  postsContainer2.appendChild(postElement2);

  //   hide the first post
  const hide = document.getElementById("demopost");
  hide.classList.add("hidden");
};

// get data from API and render it to the page
const getPosts = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  JSON.stringify(response);
  if (!response.ok) throw new Error("Network response was not ok.");
  const data = await response.json();
  // console.log(data);
  let htmlString = "";

  data.forEach((post) => {
    // console.log(post);
    const postsContainer3 = document.getElementById("posts-container3");
    const postElement3 = document.createElement("div");
    postElement3.classList = `flex`;
    postElement3.innerHTML = `
<div
class="card bg-base-100 shadow-xl mt-4 hover:bg-[#797DFC1A] border-[1px] border-solid hover:border-[1px] hover:border-solid hover:border-[#797DFC] rounded-2xl mb-5">
<figure class="px-9 pt-10">
    <img src="${post.cover_image}"
        alt="Shoes" class="rounded-xl" />
</figure>
<div class="card-body pt-4">
    <p class="flex"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
            viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_29_1881)">
                <path
                    d="M4 7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7Z"
                    stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 3V7" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 3V7" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 11H20" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M11 16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15C11.7348 15 11.4804 15.1054 11.2929 15.2929C11.1054 15.4804 11 15.7348 11 16Z"
                    stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_29_1881">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
        <span class="ml-1 text-xs text-p-color font-medium"> ${post.author?.posted_date || 'No publish date'}</span>
    </p>
    <h2 class="card-title text-sm font-extrabold font-mulish tracking-[.05px]">${post.title}</h2>
    <p class="text-xs opacity-90 text-p-color my-1">${post.description}</p>
    <div class="card-actions mb-0">
        <div class="rounded-full">
            <img src="${post.profile_image}"
                class="w-10 h-10 rounded-full" alt="">
        </div>
        <div class="mt-1">
            <p class="text-xs font-medium text-h-color opacity-90 mb-[2px]"><span
                    class="font-bold">${post.author.name}</span></p>
            <p class="text-xs font-medium text-p-color opacity-90"><span>${post.author?.designation || 'Unknown'}</span></p>
        </div>
    </div>
</div>
</div>
  `;
    postsContainer3.appendChild(postElement3);
  });

  return data;
};
getPosts();

// // for search bar functionality
// const form = document.querySelector(".search-form");
// const inputField = document.querySelector("#input");
// let isSearching = false;

// function onInput() {
//   if (inputField.value.length > 0) {
//     isSearching = true;
//   } else {
//     isSearching = false;
//   }
// }

// async function getResults() {
//   if (isSearching) {
//     const response = await fetch(
//       `https://openapi.programming-hero.com/api/retro-forum/posts?search=${inputField.value}`
//     );
//     const data = await response.json();
//     const allPosts = data.posts;
//     displayAllPosts(allPosts);
//   } else {
//     loadAllPosts();
//   }
// }

// form.addEventListener("submit", getResults);
// inputField.addEventListener("input", onInput);
