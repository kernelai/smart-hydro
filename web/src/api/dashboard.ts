// 模拟后端数据
const mockData = [
  {
    date: '2024-03-20',
    name: '项目 A',
    amount: 12000,
    status: 'success'
  },
  {
    date: '2024-03-19',
    name: '项目 B',
    amount: 8000,
    status: 'pending'
  },
  {
    date: '2024-03-18',
    name: '项目 C',
    amount: 15000,
    status: 'success'
  }
]

// 模拟 API 请求
export const getDashboardData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, 500)
  })
} 