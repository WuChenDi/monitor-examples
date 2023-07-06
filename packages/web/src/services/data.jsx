import { get } from "../utils/request";

/**
 * 获取用户行为数据
 * @param {*} page
 */
 export function getUserAction(page = 1) {
  return get("/api/get/userAction", { page });
}

/**
 * 获取错误日志
 * @param {*} page
 */
export function getErrorLog(page) {
  return get("/api/get/errorLog", { page });
}

/**
 * 获取uv
 */
export function getPvUv() {
  return get('/api/get/pvuv');
}

/**
 * 获取页面访问日志
 */
 export function getVisitLog(page) {
  return get('/api/get/visitLog', { page });
}