<script setup lang="ts">
import { useTestStore } from '@/stores/test'

const test = useTestStore()

test.fetchText()
test.incrementRemote()
</script>

<template>
  <el-container id="test-view">
    <el-header style="background: #2c3e50">Header</el-header>
    <el-container>
      <el-aside width="200px" style="background: #959595">Aside</el-aside>
      <el-main style="background: #efefef">
        <el-button type="primary" @click="test.increment">{{ test.count }}</el-button>
        <el-button type="primary" @click="test.incrementRemote">{{ test.remoteCount }}</el-button>
        <el-button type="primary" @click="test.triggerError(500)">Trigger error</el-button>
        <p>Count sum = {{test.countSum}}</p>
        <p>Text = {{test.testText}}</p>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
#test-view {
  height: 100%;
  width: 100%;
}
</style>
