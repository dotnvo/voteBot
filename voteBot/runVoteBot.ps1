1..10000 | ForEach-Object {
    if ( $_ % 25 -eq 0) {
        'Sleeping for two minutes to avoid timeout...'
        Start-Sleep -Seconds 120
    }
    node voteBot.js | Out-Null
    "Loop $_ : Vote submitted"
    
    Start-Sleep -Milliseconds (Get-Random -Minimum 100 -Maximum 1000)
}