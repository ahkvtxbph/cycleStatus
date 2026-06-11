- name: Fetch data
        run: |
          # יצירת קובץ ה-JS עם משתנה תקין
          echo "const cycleData = " > data.js
          curl -s https://cycle-app-bucket.s3.amazonaws.com/cycledata.js >> data.js
          echo ";" >> data.js
          echo "const lastUpdate = '$(date +'%d/%m/%Y %H:%M:%S')';" >> data.js
