<template>
  <div>
    <main class="main">
      <nav aria-label="breadcrumb" class="breadcrumb-nav border-0 mb-0">
        <div class="container">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">
                HOME
              </router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              WARRANTY TERMS
            </li>
          </ol>
        </div>
      </nav>

      <div class="page-content pb-0">
        <div class="container terms_page">
          <div class="row">
            <div class="col-lg-12">
              <div ref="markdownContainer">
                <vue-markdown
                  :source="markdownContent"
                  :html="true"
                  :breaks="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useMeta } from '../../admin/composables/use-meta';
import { useMarkdownFormatter } from '@/composables/markdown';
import VueMarkdown from 'vue-markdown-render';
import { ref, onMounted } from 'vue';

useMeta({ title: 'Terms & Conditions' });

const { formatMarkdownContent } = useMarkdownFormatter();
const markdownContainer = ref(null);
const markdownContent = ref('');

onMounted(async () => {
  try {
    const response = await import('@/data/warranty-terms.md?raw');
    markdownContent.value = response.default;
    await formatMarkdownContent(markdownContainer.value);
  } catch (error) {
    console.error('Error loading markdown content:', error);
    markdownContent.value = 'Error loading content. Please try again later.';
  }
});
</script>

<style>
.terms_page h4 {
  margin-top: 20px;
}

.terms_page ul {
  list-style-type: none;
  padding-left: 0;
}

.terms_page ol {
  padding-left: 0;
}

.terms_page li {
  margin-bottom: 10px;
}

.terms_page li > ol {
  margin-top: 10px;
}

.terms_page .headings {
  margin-bottom: 20px;
}

.terms_page .heading {
  font-weight: bold;
}
</style>
