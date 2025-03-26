export const StatsBar = () => {
  return (
    <div className="bg-[#2563eb] py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold">25,000+</p>
            <p className="text-blue-100">Active Students</p>
          </div>
          <div>
            <p className="text-3xl font-bold">500+</p>
            <p className="text-blue-100">AI Exercises</p>
          </div>
          <div>
            <p className="text-3xl font-bold">98%</p>
            <p className="text-blue-100">Satisfaction</p>
          </div>
          <div>
            <p className="text-3xl font-bold">15+</p>
            <p className="text-blue-100">AI Tools</p>
          </div>
        </div>
      </div>
    </div>
  )
}

