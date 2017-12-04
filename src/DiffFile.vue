<template>
  <div id="d2h-494549" class="d2h-file-wrapper" data-lang="json">
    <div class="d2h-file-header">
    <span class="d2h-file-name-wrapper">
    <span class="d2h-icon-wrapper">
      <svg aria-hidden="true" class="d2h-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12">
        <path d="M6 5H2v-1h4v1zM2 8h7v-1H2v1z m0 2h7v-1H2v1z m0 2h7v-1H2v1z m10-7.5v9.5c0 0.55-0.45 1-1 1H1c-0.55 0-1-0.45-1-1V2c0-0.55 0.45-1 1-1h7.5l3.5 3.5z m-1 0.5L8 2H1v12h10V5z"></path>
      </svg>
    </span>
    <span class="d2h-file-name">{{fileElement.oldName}}</span>
    <span class="d2h-tag d2h-changed d2h-changed-tag">CHANGED</span></span>
    </div>
    <div class="d2h-file-diff">
      <div class="d2h-code-wrapper">
        <table class="d2h-diff-table">
          <tbody class="d2h-diff-tbody">
            <template v-for="block in fileElement.blocks">
              <tr>
                <td class="d2h-code-linenumber d2h-info"></td>
                <td class="d2h-info">
                  <div class="d2h-code-line d2h-info">{{block.header}}</div>
                </td>
              </tr>
              <template v-for="line in block.lines">
                <tr>
                  <td :class="['d2h-code-linenumber', line.type]">
                    <div class="line-num1">{{line.oldNumber}}</div>
                    <div class="line-num2">{{line.newNumber}}</div>
                  </td>
                  <td :class="line.type">
                    <div :class="['d2h-code-line', line.type]">
                      <span class="d2h-code-line-prefix">{{line.content[0]}}</span>
                      <span class="d2h-code-line-ctn">{{line.content.slice(1)}}</span>
                    </div>
                  </td>
                </tr>
              </template>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import DiffBlock from './DiffBlock.vue';
  export default {
    props: ['fileElement'],
    components: { DiffBlock },
  }
</script>
