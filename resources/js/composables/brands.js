import { ref, inject } from "vue";
import { useRouter } from "vue-router";

export default function useBrands() {
  const brands = ref([]);
  const brandList = ref([]);
  const brand = ref({
    name: "",
    // main_image: "",
    is_published: "",
    description: "",
  });

  const router = useRouter();
  const validationErrors = ref({});
  const isLoading = ref(false);
  const swal = inject("$swal");

  const getBrands = async (
    page = 1,
    search_id = "",
    search_title = "",
    search_global = "",
    order_column = "created_at",
    order_direction = "desc"
  ) => {
    axios
      .get(
        "/api/brands?page=" +
          page +
          "&search_id=" +
          search_id +
          "&search_title=" +
          search_title +
          "&search_global=" +
          search_global +
          "&order_column=" +
          order_column +
          "&order_direction=" +
          order_direction
      )
      .then((response) => {
        brands.value = response.data;
      });
  };

  const getBrand = async (id) => {
    axios.get("/api/brands/" + id).then((response) => {
      brand.value = response.data.data;
    });
  };

  const storeBrand = async (brand) => {
    console.log(brand)
    if (isLoading.value) return;

    isLoading.value = true;
    validationErrors.value = {};

    let serializedPost = new FormData();

    for (let item in brand) {
      if (brand.hasOwnProperty(item)) {
        serializedPost.append(item, brand[item]);
      }
    }

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    console.log(serializedPost);
    
    axios
      .post("/api/brands", serializedPost, config)
      .then((response) => {
        router.push({ name: "brands.create" });
        // Reset the form values
        brand.name = null;
        brand.description = null;
        brand.main_image = null;
        brand.is_published = null;
        swal({
          icon: "success",
          title: "Brand saved successfully",
        });
      })
      .catch((error) => {
        if (error.response?.data) {
          validationErrors.value = error.response.data.errors;
        }
      })
      .finally(() => (isLoading.value = false));
  };

  const updateBrand = async (brand) => {
    console.log(brand);
    if (isLoading.value) return;

    isLoading.value = true;
    validationErrors.value = {};

    let serializedPost = new FormData();

    for (let item in brand) {
      if (brand.hasOwnProperty(item)) {
        serializedPost.append(item, brand[item]);
      }
    }

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    serializedPost.append("_method", "put");

    console.log(serializedPost);

    axios
      .post("/api/brands/" + brand.id, serializedPost, config)
      .then((response) => {
        router.push({ name: "brands.index" });
        swal({
          icon: "success",
          title: "Brand updated successfully",
        });
      })
      .catch((error) => {
        if (error.response?.data) {
          validationErrors.value = error.response.data.errors;
        }
      })
      .finally(() => (isLoading.value = false));
  };

  const deleteBrand = async (id) => {
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#ef4444",
      timer: 20000,
      timerProgressBar: true,
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete("/api/brands/" + id)
          .then((response) => {
            getBrands();
            router.push({ name: "brands.index" });
            swal({
              icon: "success",
              title: "Brand deleted successfully",
            });
          })
          .catch((error) => {
            swal({
              icon: "error",
              title: "Something went wrong",
            });
          });
      }
    });
  };

  const getBrandList = async () => {
    axios.get("/api/brand-list").then((response) => {
      brandList.value = response.data.data;
    });
  };

  return {
    brandList,
    brands,
    brand,
    getBrands,
    getBrandList,
    getBrand,
    storeBrand,
    updateBrand,
    deleteBrand,
    validationErrors,
    isLoading,
  };
}
