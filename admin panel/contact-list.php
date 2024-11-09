<?php

include('nav.php');
include('conn.php');
?>
      <div class="menu-backdrop"></div>

      <main class="app-main">
        <header class="main-header d-flex justify-content-between">
          <a href="javascript:;" class="sidebar-menu-trigger"
            ><span>Menu</span></a
          >
        </header>
        <div class="app-content p6 pb2 smp1">
          <div class="container p0">
            <h4>Contact List</h4>
			<br>
            <table class="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Message</th>
                </tr>
              </thead>
              <tbody>
              <?php
								include('conn.php');
								$sql = "SELECT * FROM `user_contact`;";
								$result = mysqli_query($conn, $sql);
								while ($row = mysqli_fetch_array($result)) {
								
								?>
                <tr>
                  <th scope="row"><?php echo $row[0] ?></th>
                  <td><?php echo $row[1] ?></td>
                  <td><?php echo $row[2] ?></td>
                  <td><?php echo $row[3] ?></td>
                  <td><?php echo $row[4] ?></td>
                  <td><?php echo $row[5] ?></td>
            
                </tr>
                <?php
										}
											?>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  </body>
</html>
