// handleCategory data load
const handleCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await response.json();
  const categoryContainer = document.getElementById("category-container");
  data.data.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
      <button onclick="handleCardData('${category?.category_id}')" class="btn bg-gray-300 hover:bg-[#FF1F3D] hover:text-white mx-2 md:mx-5 rounded-lg my-1">${category?.category}</button>
      `;
    categoryContainer.appendChild(categoryDiv);
  });
};
let sortId;
const handleCardData = async (categoryId = 1000) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await response.json();
  sortId = categoryId;
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  if (data?.data?.length === 0) {
    cardContainer.classList.remove("grid");
    cardContainer.innerHTML = "";

    const div = document.createElement("div");
    div.innerHTML = `
    <div class="hero mt-28">
    <div class="hero-content text-center">
        <div class="max-w-lg">
        <figure class="flex justify-center"><img src="./images/Icon.png"></figure>
        <h1 class="text-3xl md:text-5xl font-bold mt-4">Oops!! Sorry, There is no content here....</h1>
        
        </div>
    </div>
    </div>
  `;

    cardContainer.appendChild(div);
  } else {
    cardContainer.classList.add("grid");
    cardContainer.innerHTML = "";
    info = data?.data;

    info?.forEach((card) => {
      const sec = parseInt(card?.others?.posted_date);
      let hours = Math.floor(sec / 3600);
      let minutes = Math.floor((sec % 3600) / 60);

      const cardDiv = document.createElement("div");

      if (hours && minutes) {
        cardDiv.innerHTML = `
    <div class="card bg-base-100">
      <div>
        <img class="w-full h-52 rounded-xl" src="${
          card?.thumbnail
        }" alt="Shoes" />

            <div class="relative -mt-[12%] flex justify-end  bg-transparent"><span class="p-1 Auto me-2 rounded-lg bg-black text-white">${
              hours ? `${hours} hour ` : ""
            }${minutes ? `${minutes} min ago` : ""}</span></div>

       </div>
      <div class="card-body px-0">
        <div class="flex space-x-3">

            <img class="rounded-full w-14 h-14" src="${
              card?.authors[0]?.profile_picture
            }" />

          <h2 class="card-title">${card?.title}</h2>
        </div>
        <div class="card-footer ml-16 space-y-2">
          <div class="flex space-x-2 items-center">
            <h6>${card?.authors[0]?.profile_name}</h6>
            <div>
              ${
                card?.authors[0]?.verified
                  ? `<img src="./images/blueTick.png">`
                  : ""
              }
            </div>
          </div>
          <h6>${card?.others?.views} views</h6>
        </div>
      </div>
    </div>
  `;
      } else {
        cardDiv.innerHTML = `
        <div class="card bg-base-100">
            <div>
                <img class="w-full h-52 rounded-xl" src="${
                  card?.thumbnail
                }" alt="Shoes" />
        
            </div>
            <div class="card-body px-0">
                <div class="flex space-x-3">
                    <img class="rounded-full w-14 h-14" src="${
                      card?.authors[0]?.profile_picture
                    }" />
                    <h2 class="card-title">${card?.title}</h2>
                </div>
                <div class="card-footer ml-16 space-y-2">
                    <div class="flex space-x-2 items-center">
                        <h6>${card?.authors[0]?.profile_name}</h6>
                        <div>
                            ${
                              card?.authors[0]?.verified
                                ? `<img src="./images/blueTick.png">`
                                : ""
                            }
                        </div>
                    </div>
                    <h6>${card?.others?.views} views</h6>
                </div>
            </div>
        </div>
        `;
      }

      cardContainer.appendChild(cardDiv);
    });
  }
};

const sortDataLoad = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${sortId}`
  );
  const data = await response.json();
  const getData = data?.data;
  const sortingData = getData.sort(
    (a, b) => parseFloat(b.others?.views) - parseFloat(a.others?.views)
  );
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  if (getData?.length === 0) {
    cardContainer.classList.remove("grid");
    cardContainer.innerHTML = "";

    const div = document.createElement("div");
    div.innerHTML = `
    <div class="hero mt-28">
    <div class="hero-content text-center">
        <div class="max-w-lg">
        <figure class="flex justify-center"><img src="./images/Icon.png"></figure>
        <h1 class="text-3xl md:text-5xl font-bold mt-4">Oops!! Sorry, There is no content here....</h1>
        
        </div>
    </div>
    </div>
  `;

    cardContainer.appendChild(div);
  } else {
    cardContainer.innerHTML = "";

    sortingData?.forEach((card) => {
      const sec = parseInt(card?.others?.posted_date);
      let hours = Math.floor(sec / 3600);
      let minutes = Math.floor((sec % 3600) / 60);

      const cardDiv = document.createElement("div");

      if (hours && minutes) {
        cardDiv.innerHTML = `
    <div class="card bg-base-100">
      <div>
        <img class="w-full h-52 rounded-xl" src="${
          card?.thumbnail
        }" alt="Shoes" />

            <div class="relative -mt-[12%] flex justify-end  bg-transparent"><span class="p-1 Auto me-2 rounded-lg bg-black text-white">${
              hours ? `${hours} hour ` : ""
            }${minutes ? `${minutes} min ago` : ""}</span></div>

       </div>
      <div class="card-body px-0">
        <div class="flex space-x-3">
          <img class="rounded-full w-14 h-14" src="${
            card?.authors[0]?.profile_picture
          }" />
          <h2 class="card-title">${card?.title}</h2>
        </div>
        <div class="card-footer ml-16 space-y-2">
          <div class="flex space-x-2 items-center">
            <h6>${card?.authors[0]?.profile_name}</h6>
            <div>
              ${
                card?.authors[0]?.verified
                  ? `<img src="./images/blueTick.png">`
                  : ""
              }
            </div>
          </div>
          <h6>${card?.others?.views} views</h6>
        </div>
      </div>
    </div>
  `;
      } else {
        cardDiv.innerHTML = `
        <div class="card bg-base-100">
            <div>
                <img class="w-full h-52 rounded-xl" src="${
                  card?.thumbnail
                }" alt="Shoes" />
        
            </div>
            <div class="card-body px-0">
                <div class="flex space-x-3">
                    <img class="rounded-full w-14 h-14" src="${
                      card?.authors[0]?.profile_picture
                    }" />
                    <h2 class="card-title">${card?.title}</h2>
                </div>
                <div class="card-footer ml-16 space-y-2">
                    <div class="flex space-x-2 items-center">
                        <h6>${card?.authors[0]?.profile_name}</h6>
                        <div>
                            ${
                              card?.authors[0]?.verified
                                ? `<img src="./images/blueTick.png">`
                                : ""
                            }
                        </div>
                    </div>
                    <h6>${card?.others?.views} views</h6>
                </div>
            </div>
        </div>
        `;
      }

      cardContainer.appendChild(cardDiv);
    });
  }
};

handleCategory();
handleCardData();
