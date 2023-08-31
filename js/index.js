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
      <button onclick="handleCardData('${category?.category_id}')" class="btn bg-gray-300 hover:bg-[#FF1F3D] hover:text-white mx-5 rounded-lg my-1">${category?.category}</button>
      `;
    categoryContainer.appendChild(categoryDiv);
  });
};

const handleCardData = async (categoryId = 1000) => {
  console.log(categoryId);
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await response.json();

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  data.data.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
        <div class="card bg-base-100">
        <div>
          <img class="w-full h-52 rounded-xl"
            src="${card?.thumbnail}"
            alt="Shoes"
          />
        </div>
        <div class="card-body">

            <div class="flex space-x-3">
            <div class="w-14 rounded-full">
                <img class="rounded-full w-14 h-14" src="${
                  card?.authors[0]?.profile_picture
                }"/>
            </div>
            <h2 class="card-title">
                ${card?.title}
            </h2>

            </div>
                  
          <div class="card-footer ml-16 space-y-2">

                <div class="flex space-x-2 items-center">
                    <h6>${card?.authors[0]?.profile_name}</h6>
                    <div>
                        ${
                          card?.authors[0]?.verified
                            ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clip-path="url(#clip0_11_335)"><path d="M19.375 10C19.375 10.8 18.3922 11.4594 18.1953 12.1969C17.9922 12.9594 18.5063 14.0219 18.1203 14.6891C17.7281 15.3672 16.5484 15.4484 15.9984 15.9984C15.4484 16.5484 15.3672 17.7281 14.6891 18.1203C14.0219 18.5063 12.9594 17.9922 12.1969 18.1953C11.4594 18.3922 10.8 19.375 10 19.375C9.2 19.375 8.54062 18.3922 7.80312 18.1953C7.04062 17.9922 5.97813 18.5063 5.31094 18.1203C4.63281 17.7281 4.55156 16.5484 4.00156 15.9984C3.45156 15.4484 2.27187 15.3672 1.87969 14.6891C1.49375 14.0219 2.00781 12.9594 1.80469 12.1969C1.60781 11.4594 0.625 10.8 0.625 10C0.625 9.2 1.60781 8.54062 1.80469 7.80312C2.00781 7.04062 1.49375 5.97813 1.87969 5.31094C2.27187 4.63281 3.45156 4.55156 4.00156 4.00156C4.55156 3.45156 4.63281 2.27187 5.31094 1.87969C5.97813 1.49375 7.04062 2.00781 7.80312 1.80469C8.54062 1.60781 9.2 0.625 10 0.625C10.8 0.625 11.4594 1.60781 12.1969 1.80469C12.9594 2.00781 14.0219 1.49375 14.6891 1.87969C15.3672 2.27187 15.4484 3.45156 15.9984 4.00156C16.5484 4.55156 17.7281 4.63281 18.1203 5.31094C18.5063 5.97813 17.9922 7.04062 18.1953 7.80312C18.3922 8.54062 19.375 9.2 19.375 10Z" fill="#2568EF"/><path d="M12.7094 7.20626L9.14062 10.775L7.29062 8.92657C6.88906 8.52501 6.23749 8.52501 5.83593 8.92657C5.43437 9.32814 5.43437 9.9797 5.83593 10.3813L8.43124 12.9766C8.82187 13.3672 9.45624 13.3672 9.84687 12.9766L14.1625 8.66095C14.5641 8.25939 14.5641 7.60782 14.1625 7.20626C13.7609 6.8047 13.1109 6.8047 12.7094 7.20626Z" fill="#FFFCEE"/></g><defs><clipPath id="clip0_11_335"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>'
                            : ""
                        }
                    </div>

                </div>

                <h6>${card?.others?.views}</h6>
            </div>
        </div>
      </div>

        `;
    cardContainer.appendChild(cardDiv);
  });
};

handleCardData();
handleCategory();
