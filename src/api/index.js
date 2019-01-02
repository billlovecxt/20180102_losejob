// 包含N个接口函数的请求
// 导入封装好的ajax函数
import ajax from './ajax'

// 1.根据经纬度获取位置
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

//2.获取食物分类列表
export const reqFoodList = () => ajax()
