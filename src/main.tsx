/** @jsx h */
import { h, Component, render } from 'preact' 
import { useState } from 'preact/hooks';

const Widget = () => {
  const [count, setCount] = useState(0)
  return (
  <div class="p-16">
    <div class="stats bg-primary text-primary-content">
      
      <div class="stat">
        <div class="stat-title">Counter</div>
        <div class="stat-value">{count}</div>
        <div class="stat-desc">Total times button clicked</div>
        <button class="mt-4 btn btn-sm" onClick={() => setCount(count + 1)}>Inc</button>
      </div>
    </div>
  </div>
  )
}


render(<Widget />, document.getElementById('widget-name') as HTMLElement)