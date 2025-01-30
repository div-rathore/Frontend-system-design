- Long lived unidirectional communication
- Single HTTP Connection.
- Examples: Feeds, notifications, monitoring dashboard

- cONNECTION: KEEP LIVE
- event-stream
- event (data) id


- Challanges:
    - Browser Copatibility
    - Connection limit (Always be cautious while using http1, use http2 instead)
    - Background tab behaviour
    - Resource utilization
    - Load Balancer
    - Sticky connection
    - Proxy/ firewall
    - Testing
    - Brodacasting