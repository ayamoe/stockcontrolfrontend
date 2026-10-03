export default function Dashboard(){
  return(
    <div style={{marginTop : "100px"}}>
        <div class="stats">

            <div class="stat">
                <div>
                    <small>Total Assets</small>
                    <strong>248</strong>
                </div>

                <div class="icon">▦</div>
            </div>

            <div class="stat">
                <div>
                    <small>Available Stock</small>
                    <strong>186</strong>
                </div>

                <div class="icon">✓</div>
            </div>

            <div class="stat">
                <div>
                    <small>Assigned</small>
                    <strong>49</strong>
                </div>

                <div class="icon">↗</div>
            </div>

            <div class="stat">
                <div>
                    <small>Low / Repair</small>
                    <strong>13</strong>
                </div>

                <div class="icon">!</div>
            </div>

        </div>


        <div class="grid-2">

            <div class="card">

                <div class="card-head">
                    <h3>Stock Overview</h3>
                    <span class="muted">Last 6 months</span>
                </div>

               
            </div>


            <div class="card">

                <div class="card-head">
                    <h3>Recent Activity</h3>
                    <a>View all</a>
                </div>

                <div class="activity-list">

                    <div class="activity-row">
                        <i class="dot"></i>
                        <div>
                            <strong>Computer PC-002 assigned</strong>
                            <small>Admin User · 10 minutes ago</small>
                        </div>
                    </div>

                    <div class="activity-row">
                        <i class="dot"></i>
                        <div>
                            <strong>Printer PR-003 moved to Repair</strong>
                            <small>IT Staff · 1 hour ago</small>
                        </div>
                    </div>

                    <div class="activity-row">
                        <i class="dot"></i>
                        <div>
                            <strong>12 CCTV items received</strong>
                            <small>Admin User · 3 hours ago</small>
                        </div>
                    </div>

                    <div class="activity-row">
                        <i class="dot"></i>
                        <div>
                            <strong>New user created</strong>
                            <small>Admin User · Yesterday</small>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}